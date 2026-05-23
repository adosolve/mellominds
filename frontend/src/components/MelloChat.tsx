import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function getOrCreateSessionToken(): string {
  const key = 'mello_chat_session';
  let token = sessionStorage.getItem(key);
  if (!token) {
    token = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem(key, token);
  }
  return token;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

// ── MelloChat Component ────────────────────────────────────────────────────────
const MelloChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Mello, your MelloMinds assistant. Ask me anything about our features, pricing, or how to get started!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitMsg, setRateLimitMsg] = useState('');
  const [sessionToken] = useState(getOrCreateSessionToken);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading || isRateLimited) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    abortRef.current = new AbortController();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionToken }),
        signal: abortRef.current.signal
      });

      if (res.status === 429) {
        const data = await res.json().catch(() => ({}));
        const msg = data.error || 'Too many messages. Please wait a moment.';
        setIsRateLimited(true);
        setRateLimitMsg(msg);
        setTimeout(() => {
          setIsRateLimited(false);
          setRateLimitMsg('');
        }, 30000);
        setMessages(prev => [
          ...prev,
          {
            id: `rl-${Date.now()}`,
            role: 'assistant',
            content: `Rate limited: ${msg}`,
            timestamp: new Date()
          }
        ]);
        return;
      }

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setMessages(prev => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: data.reply || "I'm not sure how to answer that. Try asking about MelloMinds features or pricing!",
          timestamp: new Date()
        }
      ]);
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: "Sorry, I couldn't connect right now. Please try again or email us at mellomindsventure@gmail.com.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, isRateLimited, sessionToken]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* ── Chat Window ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed z-50 flex flex-col transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          // Mobile: full screen, Desktop: floating window
          ...(isMobile
            ? {
                inset: 0,
                width: '100%',
                height: '100%',
                borderRadius: '0',
                bottom: 0,
                right: 0
              }
            : {
                width: 'min(380px, calc(100vw - 24px))',
                height: 'min(560px, calc(100vh - 120px))',
                borderRadius: '20px',
                bottom: '96px',
                right: '20px'
              }),
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          background: '#ffffff',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        role="dialog"
        aria-label="Mello chat assistant"
        aria-modal="true"
      >
        {/* Header */}
        <div
          style={{ background: '#031c16' }}
          className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            {/* Mello avatar - using favicon */}
            <img
              src="/Images/MelloFevicon.png"
              alt="Mello"
              className="w-9 h-9 rounded-full flex-shrink-0"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Mello</p>
              <p className="text-white/60 text-xs">MelloMinds Assistant</p>
            </div>
          </div>
          <button
            onClick={handleToggle}
            className="text-white/60 hover:text-white transition-colors rounded-full p-1"
            aria-label="Close chat"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          style={{ background: '#f8faf9' }}
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1"
                  style={{ background: '#ffe642' }}
                  aria-hidden="true"
                >
                  <img
                    src="/Images/MelloFevicon.png"
                    alt=""
                    className="w-5 h-5 rounded-full"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="max-w-[78%]">
                <div
                  className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'text-gray-800 rounded-bl-sm'
                  }`}
                  style={{
                    background: msg.role === 'user' ? '#031c16' : '#ffffff',
                    boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  {msg.content}
                </div>
                <p className={`text-xs mt-1 text-gray-400 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1"
                style={{ background: '#ffe642' }}
                aria-hidden="true"
              >
                <img
                  src="/Images/MelloFevicon.png"
                  alt=""
                  className="w-5 h-5 rounded-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-bl-sm"
                style={{ background: '#ffffff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                aria-label="Mello is typing"
              >
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#031c16',
                        opacity: 0.4,
                        animation: `melloBounce 1.2s ease-in-out ${i * 0.2}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Rate limit banner */}
        {isRateLimited && (
          <div
            className="px-4 py-2 text-xs text-center flex-shrink-0"
            style={{ background: '#fff3cd', color: '#856404' }}
            role="alert"
          >
            Rate limited: {rateLimitMsg}
          </div>
        )}

        {/* Input area */}
        <div
          className="flex items-end gap-2 px-3 py-3 flex-shrink-0"
          style={{ background: '#ffffff', borderTop: '1px solid #e8f0ee' }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about MelloMinds…"
            disabled={isLoading || isRateLimited}
            rows={1}
            maxLength={500}
            aria-label="Type your message"
            className="flex-1 resize-none text-sm text-gray-800 placeholder-gray-400 outline-none rounded-xl px-3 py-2 leading-relaxed"
            style={{
              background: '#f0f4f3',
              maxHeight: '100px',
              minHeight: '40px',
              border: 'none'
            }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = 'auto';
              el.style.height = `${Math.min(el.scrollHeight, 100)}px`;
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading || isRateLimited}
            aria-label="Send message"
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: !input.trim() || isLoading || isRateLimited ? '#e0e0e0' : '#031c16',
              cursor: !input.trim() || isLoading || isRateLimited ? 'not-allowed' : 'pointer'
            }}
          >
            <Send size={16} color="white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── FAB Toggle Button ────────────────────────────────────────────────── */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close Mello chat' : 'Open Mello chat'}
        aria-expanded={isOpen}
        className={`fixed z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isMobile && isOpen ? 'hidden' : 'hover:scale-110 active:scale-95'
        }`}
        style={{
          background: '#031c16',
          boxShadow: '0 8px 24px rgba(3,28,22,0.45)',
          bottom: isMobile ? '20px' : '20px',
          right: isMobile ? '20px' : '20px'
        }}
      >
        {isOpen ? (
          <X size={24} color="white" strokeWidth={2.5} />
        ) : (
          <MessageCircle size={24} color="white" strokeWidth={2} />
        )}
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: '#ffe642',
              opacity: 0.25,
              animation: 'melloPulse 2s ease-out infinite'
            }}
            aria-hidden="true"
          />
        )}
      </button>

      {/* ── Keyframe styles ──────────────────────────────────────────────────── */}
      <style>{`
        @keyframes melloBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes melloPulse {
          0% { transform: scale(1); opacity: 0.25; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default MelloChat;
