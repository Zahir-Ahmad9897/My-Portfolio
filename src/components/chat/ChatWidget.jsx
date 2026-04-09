import { useState, useRef, useEffect, useCallback } from 'react';
import { retrieve } from '../../utils/retrieve';
import Icon from '../../utils/icons';
import TypingIndicator from './TypingIndicator';

const SUGGESTIONS = [
  'Tell me about Zahir',
  'What are his top skills?',
  'Show me his projects',
  'Is he available to hire?',
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Zahir's local AI assistant.\nAsk me about his projects, skills, or how to work with him." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const endRef = useRef(null);

  // Scroll to bottom when messages change or typing status changes
  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = useCallback((text) => {
    const query = typeof text === 'string' ? text : input.trim();
    if (!query || isTyping) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsTyping(true);

    // Simulate network delay for a more natural feel (since it's all local now)
    setTimeout(() => {
      const reply = retrieve(query);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  }, [input, isTyping]);

  return (
    <>
      {/* Floating Action Button */}
      <button 
        className="fab" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle chat"
      >
        {isOpen ? <Icon name="close" size={24} /> : <Icon name="chat" size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          
          {/* Header */}
          <div className="chat-header">
            <div className="chat-avatar">Z</div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F1F5F9' }}>
                Zahir's AI Assistant
              </div>
              <div style={{ fontSize: '0.75rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }} /> 
                Local Mode
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#64748B', cursor: 'pointer' }}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Message Area */}
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className="animate-fade-in"
                style={{ 
                  display: 'flex', 
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' 
                }}
              >
                <div 
                  style={{
                    maxWidth: '85%', 
                    padding: '10px 14px', 
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? 'linear-gradient(135deg, #6366F1, #818CF8)' : 'rgba(255,255,255,0.06)',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.85rem', 
                    lineHeight: 1.6, 
                    color: '#F1F5F9', 
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <TypingIndicator />
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions Layer */}
          {messages.length <= 2 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map(sugg => (
                <button 
                  key={sugg} 
                  className="sugg-btn" 
                  onClick={() => handleSend(sugg)}
                >
                  {sugg}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Ask me anything..."
              disabled={isTyping}
            />
            <button 
              className="chat-send" 
              onClick={() => handleSend()} 
              disabled={!input.trim() || isTyping}
            >
              <Icon name="send" size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Scoped Styles for Chat */}
      <style>{`
        .fab {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366F1, #818CF8);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          alignItems: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(99,102,241,0.4);
          z-index: 999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .fab:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(99,102,241,0.5);
        }

        .chat-window {
          position: fixed;
          bottom: 5.5rem;
          right: 1.5rem;
          width: calc(100vw - 3rem);
          max-width: 380px;
          height: 550px;
          max-height: calc(100vh - 7rem);
          background: #0E1420;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
          z-index: 998;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%);
        }

        .chat-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366F1, #818CF8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          box-shadow: 0 4px 12px rgba(99,102,241,0.3);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .chat-suggestions {
          padding: 8px 16px 12px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .chat-suggestions::-webkit-scrollbar {
          display: none;
        }

        .sugg-btn {
          background: rgba(129,140,248,0.1);
          border: 1px solid rgba(129,140,248,0.25);
          color: #818CF8;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: inherit;
        }
        .sugg-btn:hover {
          background: rgba(129,140,248,0.2);
          transform: translateY(-1px);
        }

        .chat-input-area {
          padding: 12px 16px 16px;
          display: flex;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #0B0F19;
        }

        .chat-input {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: #F1F5F9;
          padding: 12px 16px;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: all 0.2s;
        }
        .chat-input:focus {
          border-color: #818CF8;
          background: rgba(255,255,255,0.06);
        }
        .chat-input::placeholder {
          color: #475569;
        }

        .chat-send {
          background: #6366F1;
          border: none;
          border-radius: 12px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .chat-send:hover:not(:disabled) {
          background: #4F46E5;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99,102,241,0.3);
        }
        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: rgba(255,255,255,0.1);
          color: #64748B;
        }

        @media (min-width: 768px) {
          .fab { right: 2rem; bottom: 2rem; }
          .chat-window { right: 2rem; bottom: 6.5rem; }
        }
      `}</style>
    </>
  );
}
