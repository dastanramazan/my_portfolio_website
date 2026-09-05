import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './chatWidget.css';

const GREETING = "👋 Hi! I'm Dastan's assistant. How can I help you today?";

// Placeholder reply logic — swap this out for a real API call once the AI
// backend is wired up. Keep the async signature so the rest of the widget
// (typing indicator, message list) doesn't need to change when you do.
async function getBotReply(userText) {
  await new Promise((resolve) => setTimeout(resolve, 700 + Math.random() * 500));
  return "Thanks for the message! Real AI answers are coming soon here — for now, the fastest way to reach Dastan directly is the Contact form below.";
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  // Proactively invite engagement a few seconds after the page loads,
  // instead of only waiting for the visitor to notice the button.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen((open) => {
        if (!open) setShowTeaser(true);
        return open;
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const openChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { from: 'user', text }]);
    setInput('');
    setIsTyping(true);

    const reply = await getBotReply(text);
    setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
    setIsTyping(false);
  };

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.button
            type="button"
            className="chat-widget__teaser"
            onClick={openChat}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <span
              className="chat-widget__teaser-close"
              role="button"
              tabIndex={0}
              aria-label="Dismiss"
              onClick={(e) => { e.stopPropagation(); setShowTeaser(false); }}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); setShowTeaser(false); } }}
            >
              ×
            </span>
            {GREETING}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget__panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="chat-widget__header">
              <div>
                <p className="chat-widget__header-title">Dastan's Assistant</p>
                <p className="chat-widget__header-status">
                  <span className="chat-widget__status-dot" /> Usually replies right away
                </p>
              </div>
              <button
                type="button"
                className="chat-widget__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            <div className="chat-widget__body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chat-widget__bubble chat-widget__bubble--${m.from}`}>
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-widget__bubble chat-widget__bubble--bot chat-widget__bubble--typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <form className="chat-widget__form" onSubmit={handleSend}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="chat-widget__input"
                aria-label="Message"
              />
              <button type="submit" className="chat-widget__send" aria-label="Send message">
                <i className="icon-arrow-right"></i>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="chat-widget__button"
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
};

export default ChatWidget;
