/**
 * Use intelligent regex-based extraction to get visitor info from user messages
 * Returns: { name, email, phone, profession, isProvidingInfo, shouldAskMore, response }
 */
export async function extractVisitorInfo(userMessage, collectedInfo = {}) {
  try {
    // Simple regex-based extraction first (more reliable than AI for structured data)
    let extractedName = null;
    let extractedEmail = null;
    let extractedPhone = null;
    let extractedProfession = null;

    // Email regex
    const emailMatch = userMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      extractedEmail = emailMatch[0];
    }

    // Phone regex (various formats)
    const phoneMatch = userMessage.match(/(\+?91[-.\s]?)?[6-9]\d{9}|(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    if (phoneMatch) {
      extractedPhone = phoneMatch[0];
    }

    // Name patterns
    const namePatterns = [
      /(?:i'm|i am|my name is|call me|you can call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
      /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s*$/
    ];
    for (const pattern of namePatterns) {
      const match = userMessage.match(pattern);
      if (match) {
        extractedName = match[1];
        break;
      }
    }

    // Profession patterns
    const professionPatterns = [
      /(?:i'm|i am|i work as|i'm a|i am a)\s+(?:a\s+)?([a-z\s]+?)(?:\s+in|\s+at|$|\.)/i,
      /(?:profession|role|job).*?:\s*([a-z\s]+?)(?:\s+in|$|\.)/i
    ];
    for (const pattern of professionPatterns) {
      const match = userMessage.match(pattern);
      if (match) {
        const profession = match[1].trim();
        // Filter out common non-profession words
        if (!['that', 'this', 'the', 'a', 'an'].includes(profession.toLowerCase())) {
          extractedProfession = profession;
          break;
        }
      }
    }

    // Determine if user is providing personal info
    const isProvidingInfo = !!(extractedName || extractedEmail || extractedPhone || extractedProfession);

    // Determine if asking about MelloMinds
    const mellomindsKeywords = ['feature', 'price', 'cost', 'plan', 'payment', 'calendar', 'google', 'client', 'booking', 'secure', 'mobile', 'app', 'integration', 'how', 'can i', 'does', 'is there'];
    const isAskingAboutMelloMinds = mellomindsKeywords.some(keyword => userMessage.toLowerCase().includes(keyword));

    // Determine if greeting
    const greetingKeywords = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    const isGreeting = greetingKeywords.some(keyword => userMessage.toLowerCase().startsWith(keyword));

    return {
      name: extractedName,
      email: extractedEmail,
      phone: extractedPhone,
      profession: extractedProfession,
      isProvidingInfo,
      isAskingAboutMelloMinds,
      isGreeting,
      shouldContinueAsking: true,
      nextFieldToAsk: 'none',
      sentiment: 'neutral'
    };
  } catch (error) {
    console.error('Visitor info extraction error:', error.message);
    return {
      name: null,
      email: null,
      phone: null,
      profession: null,
      isProvidingInfo: false,
      isAskingAboutMelloMinds: false,
      isGreeting: false,
      shouldContinueAsking: false,
      nextFieldToAsk: 'none',
      sentiment: 'neutral'
    };
  }
}

/**
 * Generate a contextual follow-up message based on extraction results
 */
export function generateFollowUpMessage(extraction, collectedInfo) {
  const missing = [];
  if (!collectedInfo.name && !extraction.name) missing.push('name');
  if (!collectedInfo.email && !collectedInfo.phone && !extraction.email && !extraction.phone) missing.push('contact');
  if (!collectedInfo.profession && !extraction.profession) missing.push('profession');

  // If no missing info, don't ask
  if (missing.length === 0) {
    return null;
  }

  // If user provided info, acknowledge it and ask for next missing field
  if (extraction.isProvidingInfo) {
    if (extraction.name && !collectedInfo.name) {
      if (missing.includes('contact') || missing.includes('profession')) {
        return `Nice to meet you, ${extraction.name}! Could you also share your ${missing.includes('contact') ? 'email or phone' : 'profession'}?`;
      }
      return null;
    }
    if ((extraction.email || extraction.phone) && !collectedInfo.email && !collectedInfo.phone) {
      if (missing.includes('profession')) {
        return "What's your profession or role?";
      }
      return null;
    }
    if (extraction.profession && !collectedInfo.profession) {
      return null; // We have enough info
    }
  }

  // If user is NOT providing info but has missing fields, ask for them
  // But only if they're not asking about MelloMinds features
  if (!extraction.isProvidingInfo && !extraction.isAskingAboutMelloMinds && missing.length > 0) {
    if (missing.includes('name')) {
      return "Before we continue, what's your name?";
    }
    if (missing.includes('contact')) {
      return "Could you share your email or phone number?";
    }
    if (missing.includes('profession')) {
      return "What's your profession or role?";
    }
  }

  return null;
}
