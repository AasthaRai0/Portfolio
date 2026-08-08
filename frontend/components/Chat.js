"use client";

import React, { useState } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';

export default function ResumeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]); // Multiple messages ke liye history array
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim() || loading) return;

    const userQuery = question.trim();
    
    // 1. User message ko immediate chat UI me add karein
    setMessages((prev) => [...prev, { sender: 'user', text: userQuery }]);
    setQuestion('');
    setLoading(true);

    try {
      // 2. FastAPI Backend ko hit karein
     const response = await fetch('https://hiremeai-backend-4fy2.onrender.com/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ question: userQuery }),
});

      const data = await response.json();

      // 3. AI response ko history me append karein
      setMessages((prev) => [...prev, { sender: 'bot', text: data.answer }]);
    } catch (error) {
      console.error('API Error:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error: Backend se connect nahi ho paya. Make sure uvicorn running hai.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. Floating Action Button with Real Robot Icon */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.chatButton}
        title="Chat with Resume"
      >
        {isOpen ? <X size={26} /> : <Bot size={30} />}
      </button>

      {/* 2. Popup Chat Modal */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.botAvatarHeader}>
                <Bot size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={styles.headerTitle}>AI Portfolio Assistant</h3>
                <span style={styles.onlineStatus}>● Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              <X size={18} />
            </button>
          </div>

          {/* Body / Messages */}
          <div style={styles.body}>
            {messages.length === 0 ? (
              <div style={styles.placeholderText}>
                <div style={styles.welcomeBotIcon}>
                  <Bot size={38} color="#2563eb" />
                </div>
                <h4 style={{ margin: '8px 0 4px', color: '#1e293b' }}>Hello 👋</h4>
                <p style={{ margin: 0 }}>
                  I&apos;m Aastha&apos;s AI Assistant. Ask me anything about her resume, projects, skills, or experience!
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.messageBubble,
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      backgroundColor: msg.sender === 'user' ? '#2563eb' : '#ffffff',
                      color: msg.sender === 'user' ? '#ffffff' : '#1e293b',
                      borderRadius:
                        msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                      border: msg.sender === 'bot' ? '1px solid #e2e8f0' : 'none',
                    }}
                  >
                    {msg.sender === 'bot' && (
                      <div style={styles.msgBotIcon}>
                        <Bot size={14} color="#2563eb" />
                      </div>
                    )}
                    <span style={{ flex: 1, fontSize: '13.5px', lineHeight: '1.5' }}>{msg.text}</span>
                  </div>
                ))}

                {/* Loading Indicator */}
                {loading && (
                  <div style={{ ...styles.messageBubble, alignSelf: 'flex-start', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <Loader2 size={16} className="animate-spin" color="#2563eb" />
                    <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '6px' }}>Thinking...</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleAskQuestion} style={styles.footer}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about skills, experience..."
              style={styles.input}
            />
            <button 
              type="submit" 
              disabled={loading || !question.trim()} 
              style={{
                ...styles.sendButton,
                opacity: loading || !question.trim() ? 0.6 : 1,
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// Modern Inline Styles
const styles = {
  container: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 1000,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  chatButton: {
    width: '62px',
    height: '62px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  chatWindow: {
    position: 'absolute',
    bottom: '75px',
    right: '0',
    width: '360px',
    height: '480px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
  },
  header: {
    background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
    padding: '14px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  botAvatarHeader: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
  },
  onlineStatus: {
    fontSize: '11px',
    color: '#bbf7d0',
    display: 'block',
    marginTop: '2px',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    opacity: 0.85,
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    backgroundColor: '#f8fafc',
  },
  placeholderText: {
    color: '#64748b',
    fontSize: '13px',
    textAlign: 'center',
    marginTop: '40px',
    lineHeight: '1.6',
    padding: '0 12px',
  },
  welcomeBotIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px',
  },
  messageBubble: {
    maxWidth: '82%',
    padding: '10px 14px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
  },
  msgBotIcon: {
    marginTop: '2px',
  },
  footer: {
    padding: '12px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #f1f5f9',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '10px 16px',
    borderRadius: '24px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    fontSize: '13px',
  },
  sendButton: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
    color: '#ffffff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};