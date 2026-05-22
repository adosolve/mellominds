import axios from 'axios';
import sarvamConfig from '../config/sarvam.js';

export async function generateAIResponse(message) {
  try {
    const response = await axios.post(
      `${sarvamConfig.baseUrl}/chat/completions`,
      {
        model: sarvamConfig.model,
        messages: [
          {
            role: 'system',
            content: 'You are MelloMinds, a helpful AI assistant for therapy practice management. You provide supportive, professional responses about mental health practice management, therapy tools, and wellness. Always be empathetic and professional.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.9
      },
      {
        headers: {
          'Authorization': `Bearer ${sarvamConfig.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Handle different response formats
    let aiResponse;
    if (response.data.choices && response.data.choices[0]) {
      aiResponse = response.data.choices[0].message?.content || response.data.choices[0].text;
    } else if (response.data.message) {
      aiResponse = response.data.message;
    } else {
      aiResponse = 'I received your message. How can I help you with MelloMinds today?';
    }

    return aiResponse || 'I received your message. How can I help you with MelloMinds today?';
  } catch (error) {
    console.error('Sarvam AI Error:', error.response?.data || error.message);
    // Return a fallback response instead of throwing
    return 'Thank you for your message. I\'m here to help with any questions about MelloMinds therapy practice management platform.';
  }
}
