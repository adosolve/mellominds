import express from 'express';
import pool from '../config/database.js';
import { generateAIResponse } from '../services/sarvamAI.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Create or get chat session
router.post('/session', async (req, res) => {
  try {
    const sessionToken = req.body.sessionToken || uuidv4();
    
    // Check if session exists
    let result = await pool.query(
      'SELECT id FROM chat_sessions WHERE session_token = $1',
      [sessionToken]
    );

    let sessionId;
    if (result.rows.length === 0) {
      // Create new session
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
router.post('/', async (req, res) => {
  try {
    const { message, sessionToken } = req.body;

    if (!message || !sessionToken) {
      return res.status(400).json({ error: 'Message and sessionToken required' });
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

    // Save user message
    await pool.query(
      `INSERT INTO chat_messages (session_id, sender_type, message)
       VALUES ($1, 'user', $2)`,
      [sessionId, message]
    );

    // Generate AI response
    const aiResponse = await generateAIResponse(message);

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
      `SELECT m.* FROM chat_messages m
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
