import express from 'express';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import pool from '../config/database.js';
import { generateAIResponse } from '../services/sarvamAI.js';
import { extractVisitorInfo, generateFollowUpMessage } from '../services/visitorInfoExtractor.js';
import { getGeoLocationFromIP } from '../services/geoipService.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// ── Rate Limiters ──────────────────────────────────────────────────────────────

// Safe key generator — normalises IPv6-mapped IPv4 addresses (e.g. ::ffff:127.0.0.1 → 127.0.0.1)
function safeKeyGen(req) {
  return ipKeyGenerator(req);
}

// General chat limiter: 30 messages per 10 minutes per IP
const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many messages sent. Please wait a few minutes before trying again.',
    retryAfter: 600
  },
  keyGenerator: (req) => {
    // Use IP + sessionToken combo for more precise limiting
    return `${safeKeyGen(req)}-${req.body?.sessionToken || 'unknown'}`;
  }
});

// Strict burst limiter: 5 messages per 15 seconds (anti-spam)
const burstLimiter = rateLimit({
  windowMs: 15 * 1000, // 15 seconds
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: safeKeyGen,
  message: {
    error: 'You\'re sending messages too fast. Please slow down.',
    retryAfter: 15
  }
});

// Session creation limiter: 10 sessions per hour per IP
const sessionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: safeKeyGen,
  message: {
    error: 'Too many sessions created. Please try again later.',
    retryAfter: 3600
  }
});

// ── Routes ─────────────────────────────────────────────────────────────────────

// Create or get chat session
router.post('/session', sessionLimiter, async (req, res) => {
  try {
    const sessionToken = req.body.sessionToken || uuidv4();

    let result = await pool.query(
      'SELECT id FROM chat_sessions WHERE session_token = $1',
      [sessionToken]
    );

    let sessionId;
    if (result.rows.length === 0) {
      result = await pool.query(
        `INSERT INTO chat_sessions (session_token)
         VALUES ($1)
         RETURNING id`,
        [sessionToken]
      );
      sessionId = result.rows[0].id;
    } else {
      sessionId = result.rows[0].id;
    }

    res.json({ sessionId, sessionToken });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// Send message and get AI response
router.post('/', burstLimiter, chatLimiter, async (req, res) => {
  try {
    const { message, sessionToken } = req.body;

    if (!message || !sessionToken) {
      return res.status(400).json({ error: 'Message and sessionToken required' });
    }

    // Sanitise: cap message length
    const trimmedMessage = message.trim().slice(0, 500);
    if (!trimmedMessage) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    // Get or create session
    let result = await pool.query(
      'SELECT id FROM chat_sessions WHERE session_token = $1',
      [sessionToken]
    );

    let sessionId;
    if (result.rows.length === 0) {
      result = await pool.query(
        `INSERT INTO chat_sessions (session_token)
         VALUES ($1)
         RETURNING id`,
        [sessionToken]
      );
      sessionId = result.rows[0].id;
    } else {
      sessionId = result.rows[0].id;
    }

    // Fetch recent conversation history for context (last 6 messages)
    const historyResult = await pool.query(
      `SELECT sender_type, message FROM chat_messages
       WHERE session_id = $1
       ORDER BY created_at DESC
       LIMIT 6`,
      [sessionId]
    );

    const conversationHistory = historyResult.rows
      .reverse()
      .map((row) => ({
        role: row.sender_type === 'user' ? 'user' : 'assistant',
        content: row.message
      }));

    // Save user message
    await pool.query(
      `INSERT INTO chat_messages (session_id, sender_type, message)
       VALUES ($1, 'user', $2)`,
      [sessionId, trimmedMessage]
    );

    // Check if this is a first-time visitor (no visitor info yet)
    const visitorCheck = await pool.query(
      'SELECT name, email, phone, profession FROM chat_visitors WHERE session_token = $1',
      [sessionToken]
    );

    const isFirstTime = visitorCheck.rows.length === 0;
    const collectedInfo = isFirstTime ? {} : visitorCheck.rows[0];

    let aiResponse = '';
    let extractedData = null;

    // If first-time visitor, try to extract info from their message
    if (isFirstTime) {
      extractedData = await extractVisitorInfo(trimmedMessage, collectedInfo);

      // If user provided any personal info, save it
      if (extractedData.isProvidingInfo && (extractedData.name || extractedData.email || extractedData.phone || extractedData.profession)) {
        const clientIP = req.ip || req.socket?.remoteAddress || 'unknown';
        const userAgent = req.get('user-agent') || 'unknown';
        const geoData = await getGeoLocationFromIP(clientIP);

        await pool.query(
          `INSERT INTO chat_visitors 
           (session_token, name, email, phone, profession, ip_address, country, state, city, latitude, longitude, user_agent)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
          [
            sessionToken,
            extractedData.name || null,
            extractedData.email || null,
            extractedData.phone || null,
            extractedData.profession || null,
            clientIP,
            geoData.country,
            geoData.state,
            geoData.city,
            geoData.latitude,
            geoData.longitude,
            userAgent
          ]
        );
      }

      // Always generate AI response first
      aiResponse = await generateAIResponse(trimmedMessage, conversationHistory);

      // Then check if we should append a follow-up for info collection
      const followUp = generateFollowUpMessage(extractedData, collectedInfo);

      // Only append follow-up if:
      // 1. AI gave a real answer (not a fallback)
      // 2. There's a follow-up message to add
      const isFallbackResponse = aiResponse.includes('I\'m not sure about that specific detail') || 
                                 aiResponse.includes('Could you rephrase your question');
      
      // If user provided info, replace AI response with just the follow-up
      if (extractedData.isProvidingInfo && followUp) {
        aiResponse = followUp;
      } else if (followUp && !isFallbackResponse) {
        // If AI gave a real answer and there's a follow-up, append it
        aiResponse += `\n\n${followUp}`;
      }
    } else {
      // Returning visitor, just generate normal response
      aiResponse = await generateAIResponse(trimmedMessage, conversationHistory);
    }

    // Save AI message
    await pool.query(
      `INSERT INTO chat_messages (session_id, sender_type, message)
       VALUES ($1, 'ai', $2)`,
      [sessionId, aiResponse]
    );

    // Update last activity
    await pool.query(
      'UPDATE chat_sessions SET last_activity = NOW() WHERE id = $1',
      [sessionId]
    );

    res.json({ reply: aiResponse });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

// Get chat history
router.get('/history/:sessionToken', async (req, res) => {
  try {
    const { sessionToken } = req.params;

    const result = await pool.query(
      `SELECT m.sender_type, m.message, m.created_at
       FROM chat_messages m
       JOIN chat_sessions s ON m.session_id = s.id
       WHERE s.session_token = $1
       ORDER BY m.created_at ASC`,
      [sessionToken]
    );

    res.json({ messages: result.rows });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

export default router;
