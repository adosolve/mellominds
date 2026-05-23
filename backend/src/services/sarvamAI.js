import axios from 'axios';
import sarvamConfig from '../config/sarvam.js';

// Rich website context — Mello only answers based on this knowledge base
const MELLO_SYSTEM_PROMPT = `You are Mello, a friendly and professional AI support agent for MelloMinds therapy practice management platform. Your role is to help therapists and mental health professionals understand and use MelloMinds.

IMPORTANT: Always provide helpful, detailed answers. Never respond with generic phrases like "I'm here to help with any questions about MelloMinds. What would you like to know?" - this is a fallback only if you truly cannot answer.

--- ABOUT MELLOMINDS ---
MelloMinds is a comprehensive therapy practice management platform built for therapists and mental health professionals in India. Early access available at https://app.mellominds.co.in. Website: https://mellominds.co.in.

--- FEATURES & CAPABILITIES ---

BOOKING & CALENDAR MANAGEMENT:
- Create multiple booking calendars (one-on-one, group, couples sessions)
- Public booking page with shareable link
- Set session duration, description, and session type
- Custom intake form questions on booking page
- Automatic Google Meet link generation for virtual sessions
- Set weekly availability by day and time slots
- Automated reminders to reduce no-shows

CLIENT MANAGEMENT:
- Full CRM-style client profiles with complete session history
- Client database with name, email, phone, demographics
- Secure client transfer system between practitioners with full history
- Session history and notes per client
- Emergency contacts and activities/homework assignments

SESSION NOTES:
- Session notes tied to client profiles
- Fully customizable note templates
- Clinical profile per client
- Reduces paperwork, more time with clients

PAYMENTS & BILLING:
- Integrated payment collection and invoicing
- Offline payment options (Cash, UPI, manual)
- Payment status tracking and dashboard
- Receipt generation
- Require upfront payment at booking
- Enterprise: Cashfree/Razorpay integration with automated refunds

INTEGRATIONS:
- Google Calendar sync
- Google Meet auto-generated links
- Enterprise: API access and webhook integrations

SECURITY:
- Data encryption for session notes and chat
- Secure authentication (email/password and Google OAuth)
- Rate limiting and DDoS protection
- Client confidentiality is top priority

--- PRICING ---

FREE TIER (₹0 forever, Early Access):
- All booking & calendar features
- Full client management
- Session notes with templates
- Offline payments, tracking, invoicing, receipts
- Google Calendar & Meet integration
- No credit card required
- Sign up: https://app.mellominds.co.in

ENTERPRISE (Custom pricing):
- Everything in Free Tier, plus:
- Custom domain & white-label branding
- Custom platform appearance
- Dedicated branded booking experience
- Cashfree/Razorpay payment gateway
- Automated refund management
- Unlimited calendars & bookings
- Multi-therapist team management
- Advanced analytics & reporting
- API access & webhooks
- Priority support & dedicated account manager
- Contact: mellomindsventure@gmail.com

--- COMMON QUESTIONS & ANSWERS ---

Q: What is MelloMinds?
A: MelloMinds is a therapy practice management platform for Indian therapists. It handles appointments, client management, payments, and session notes all in one place.

Q: How do I sign up?
A: Visit https://app.mellominds.co.in and sign up with email/password or Google OAuth. It's free to start.

Q: Is MelloMinds mobile-friendly?
A: Yes, MelloMinds is fully responsive and works great on mobile browsers. A native app may come later.

Q: Does it work with Google Calendar?
A: Yes! MelloMinds syncs with Google Calendar and automatically generates Google Meet links for virtual sessions.

Q: Can clients book appointments?
A: Yes, you create a public booking page that clients can access via a shareable link. They can book directly.

Q: How do I collect payments?
A: You can collect payments offline (cash, UPI) or use Cashfree/Razorpay on the Enterprise plan. Payments are tracked in the dashboard.

Q: Is my data secure?
A: Yes, MelloMinds encrypts sensitive data, uses secure authentication, and prioritizes client confidentiality.

Q: Can I transfer clients to another therapist?
A: Yes, MelloMinds has a secure client transfer system that keeps full history intact.

Q: Does it support multiple therapists?
A: Yes, Enterprise accounts support team management with multiple therapists.

Q: Is there a mobile app?
A: Currently MelloMinds is a responsive web app optimized for mobile. A native app is planned for the future.

Q: What if I have questions not answered here?
A: Email mellomindsventure@gmail.com for support or enterprise inquiries.

--- TONE & BEHAVIOR ---
- Be warm, professional, and conversational
- Answer questions directly and thoroughly (2-4 sentences typically)
- Use simple language, avoid jargon
- If asked about something not in knowledge base, say: "I'm not sure about that specific detail. You can email mellomindsventure@gmail.com for more information."
- NEVER use generic fallback phrases
- Be helpful and encouraging
- Show enthusiasm about MelloMinds features`;

export async function generateAIResponse(message, conversationHistory = []) {
  try {
    // Build messages array with conversation history for context
    const messages = [
      { role: 'system', content: MELLO_SYSTEM_PROMPT },
      ...conversationHistory.slice(-4), // keep last 4 turns for context
      { role: 'user', content: message }
    ];

    const response = await axios.post(
      `${sarvamConfig.baseUrl}/chat/completions`,
      {
        model: sarvamConfig.model,
        messages,
        temperature: 0.7,
        max_tokens: 800,
        top_p: 0.95
      },
      {
        headers: {
          'Authorization': `Bearer ${sarvamConfig.apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    let aiResponse;
    if (response.data.choices && response.data.choices[0]) {
      aiResponse = response.data.choices[0].message?.content || response.data.choices[0].text;
    } else if (response.data.message) {
      aiResponse = response.data.message;
    }

    // Ensure we have a valid response
    const trimmedResponse = aiResponse?.trim();
    
    // Only use fallback if response is completely empty or just whitespace
    if (!trimmedResponse) {
      console.warn('Empty AI response, using contextual fallback');
      
      // Smart fallback based on message content
      const lowerMsg = message.toLowerCase();
      
      // Check if message is just an email
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(message.trim())) {
        return 'Thanks for sharing your email! What\'s your profession or role?';
      }
      
      // Check if message is just a phone number
      if (/^(\+?91[-.\s]?)?[6-9]\d{9}|(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(message.trim())) {
        return 'Thanks for your contact number! What\'s your profession or role?';
      }
      
      // Check if message is about profession
      if (lowerMsg.includes('i\'m a') || lowerMsg.includes('i am a') || lowerMsg.includes('i work as') || lowerMsg.includes('profession')) {
        return 'Great! Thanks for sharing. I\'ve got all the information I need. How can I help you with MelloMinds today?';
      }
      
      if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('plan') || lowerMsg.includes('pricing')) {
        return 'MelloMinds offers a free tier with all essential features including booking, client management, and session notes. For advanced features like custom branding and payment gateways, we have an Enterprise plan with custom pricing. Visit https://app.mellominds.co.in to get started free!';
      }
      if (lowerMsg.includes('mobile') || lowerMsg.includes('app')) {
        return 'MelloMinds is a responsive web application that works perfectly on mobile devices. You can access it through your phone\'s browser. A native mobile app is planned for the future.';
      }
      if (lowerMsg.includes('payment') || lowerMsg.includes('collect') || lowerMsg.includes('money')) {
        return 'You can collect payments from clients through multiple methods. MelloMinds supports offline payments (cash, UPI) and integrates with Cashfree/Razorpay on the Enterprise plan. All payments are tracked in your dashboard.';
      }
      if (lowerMsg.includes('client') || lowerMsg.includes('manage')) {
        return 'Yes! MelloMinds has a full CRM-style client management system. You can store client profiles, session history, notes, and even transfer clients securely to other therapists while keeping all history intact.';
      }
      if (lowerMsg.includes('google') || lowerMsg.includes('calendar') || lowerMsg.includes('meet')) {
        return 'Yes, MelloMinds integrates seamlessly with Google Calendar. It syncs your availability and automatically generates Google Meet links for virtual sessions.';
      }
      if (lowerMsg.includes('secure') || lowerMsg.includes('safe') || lowerMsg.includes('privacy') || lowerMsg.includes('data')) {
        return 'Yes, security is a top priority. MelloMinds encrypts sensitive data including session notes and chat messages, uses secure authentication (email/password and Google OAuth), and implements rate limiting to protect against DDoS attacks.';
      }
      if (lowerMsg.includes('feature') || lowerMsg.includes('what can')) {
        return 'MelloMinds includes booking & calendar management, client management with CRM, customizable session notes, payment collection, Google Calendar integration, and enterprise features like white-label branding and team management.';
      }
      if (lowerMsg.includes('sign up') || lowerMsg.includes('register') || lowerMsg.includes('start')) {
        return 'Getting started is easy! Visit https://app.mellominds.co.in and sign up with your email and password or use Google OAuth. The free tier includes all essential features with no credit card required.';
      }
      
      return 'I\'m not sure about that specific detail. Could you rephrase your question? Or email mellomindsventure@gmail.com for detailed support.';
    }

    return trimmedResponse;
  } catch (error) {
    console.error('Sarvam AI Error:', error.response?.data || error.message);
    return 'Sorry, I\'m having trouble connecting right now. Please try again in a moment, or email us at mellomindsventure@gmail.com.';
  }
}
