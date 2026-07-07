'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const BIO_PARAGRAPHS = [
  `Hi, I'm Aastha Rai — an AI Engineering student passionate about bridging the gap between complex machine learning and beautiful, human-centric software. What started as curiosity in web development evolved into an addiction to solving puzzles and training systems to get smarter with every line of code.`,
  `I love owning products end-to-end: wrangling messy data, building robust ML pipelines, and designing clean interfaces that real people enjoy using. Driven by strong fundamentals in Data Structures, Algorithms, and core research, I engineer clean, high-performance systems designed to solve real-world problems.`
];

const BIO_TEXT_FOR_SPEECH = BIO_PARAGRAPHS.join(' ');

export default function About() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(BIO_TEXT_FOR_SPEECH);
    utterance.rate = 0.98;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <section className="about" id="about" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="about-glow one"></div>
      <div className="about-glow two"></div>

      <div className="wrap" style={{ width: '100%', maxWidth: '100%' }}>
        <motion.div
          className="about-inner"
          style={{ width: '100%', maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>About</div>

          {/* Typewriter text wrapping and breaking setup fixed */}
          <h2 className="about-title" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', width: '100%' }}>
            Building{' '}
            <span className="accent" style={{ display: 'inline', wordBreak: 'break-word' }}>
              <Typewriter
                words={[
                  'AI Products',
                  'Machine Learning Solutions',
                  'Full-Stack Applications',
                  'Intelligent Systems',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </span>
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '0 0 30px' }}>
            <button
              type="button"
              className={`listen-btn ${isSpeaking ? 'is-active' : ''}`}
              onClick={handleToggleSpeech}
              aria-pressed={isSpeaking}
            >
              <span className="mic-icon" aria-hidden="true">
                {isSpeaking ? (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0014 0" />
                    <path d="M12 19v3" />
                  </svg>
                )}
              </span>
              {isSpeaking ? 'Listening… tap to stop' : 'Listen to my story'}
            </button>
          </div>

          <div className="about-copy" style={{ width: '100%', textAlign: 'center' }}>
            {BIO_PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}