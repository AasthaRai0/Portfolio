'use client';

import { useState } from 'react';

export default function Footer() {
  const [message, setMessage] = useState('');
  const emailAddress = "aastharai4214@gmail.com";

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent("Portfolio Feedback");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setMessage('');
  };

  return (
    <>
      <style jsx global>{`
        .modern-footer {
          background: #0B0D17;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 40px 24px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Flex Wrapper for Left-Right alignment */
        .message-strip-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .footer-section-title {
          color: #f1f5f9;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          position: relative;
        }

        /* The form with continuous soft breathe/glow pulse on focus */
        .message-inline-form {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 6px 6px 6px 16px;
          flex: 1;
          max-width: 500px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Animated Focus-Within Effect */
        .message-inline-form:focus-within {
          border-color: rgba(165, 180, 252, 0.4); /* Soft indigo glow edge */
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 0 20px rgba(165, 180, 252, 0.08);
          transform: translateY(-1px);
        }

        .message-inline-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #f1f5f9;
          font-size: 0.9rem;
          transition: padding 0.2s ease;
        }

        .message-inline-input::placeholder {
          color: #475569;
        }

        /* Micro-interaction: input expands slightly on focus */
        .message-inline-input:focus {
          padding-left: 4px;
        }

        /* Sleek Button with Spring Hover Animation */
        .message-inline-submit {
          font-weight: 600;
          font-size: 0.85rem;
          padding: 8px 18px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Snappy bounce effect */
        }

        .message-inline-submit:hover {
          background: #ffffff;
          color: #0b0d17;
          transform: scale(1.04);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
        }

        .message-inline-submit:active {
          transform: scale(0.96);
        }

        /* Responsive Media Query for Mobile */
        @media (max-width: 640px) {
          .modern-footer { padding: 32px 20px; }
          .message-strip-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .message-inline-form {
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>

      <footer className="modern-footer">
        <div className="footer-container">
          
          {/* Main Left-Right Messaging Strip */}
          <div className="message-strip-flex">
            <div className="footer-section-title">
              Drop a quick line
            </div>
            
            <form className="message-inline-form" onSubmit={handleSend}>
              <input
                className="message-inline-input"
                type="text"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button className="message-inline-submit" type="submit">
                Send
              </button>
            </form>
          </div>

        </div>
      </footer>
    </>
  );
}