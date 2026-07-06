'use client';

import { useState } from 'react';

// ==========================================
// SOCIAL LINKS CONFIG — leave a value empty ('') to auto-hide that pill
// ==========================================
const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/AasthaRai0',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aastha-rai-0317a6327',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/aastharai2906/',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M13 4l-8.5 8.5a1.5 1.5 0 000 2.12L9.5 20M20 20h-6.5M8.5 14h7" />
      </svg>
    ),
  },
];

// ==========================================
// 1. REALISTIC VECTOR AVATAR CHARACTER COMPONENT
// ==========================================
function AvatarCharacter({ talking = false }) {
  const containerStyle = {
    position: 'relative',
    width: '320px',
    height: '360px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const headStyle = {
    width: '135px',
    height: '165px',
    background: 'linear-gradient(145deg, #ffeedd 0%, #f3c1a0 100%)',
    borderRadius: '50% 50% 45% 45% / 40% 40% 60% 60%',
    position: 'relative',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2), inset -4px -6px 12px rgba(0,0,0,0.08)',
    zIndex: 4,
    transform: 'translateY(15px)'
  };

  const hairBackStyle = {
    position: 'absolute',
    top: '-15px',
    width: '160px',
    height: '190px',
    background: 'linear-gradient(135deg, #2d1a10 0%, #150b06 100%)',
    borderRadius: '45% 45% 30% 30%',
    zIndex: 2,
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
  };

  const hairFrontStyle = {
    position: 'absolute',
    top: '-12px',
    left: '-5px',
    width: '145px',
    height: '75px',
    background: 'linear-gradient(145deg, #3a2214 0%, #1a0d07 100%)',
    borderRadius: '50% 50% 10% 80% / 80% 80% 20% 20%',
    zIndex: 5,
  };

  const eyeStyle = {
    width: '16px',
    height: '16px',
    background: '#1a1008',
    borderRadius: '50%',
    position: 'absolute',
    top: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const eyeShineStyle = {
    width: '5px',
    height: '5px',
    background: '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    left: '2px'
  };

  const eyebrowStyle = {
    width: '32px',
    height: '5px',
    background: '#2d1a10',
    position: 'absolute',
    top: '62px',
    borderRadius: '3px'
  };

  const glassesFrameStyle = {
    position: 'absolute',
    top: '64px',
    width: '46px',
    height: '38px',
    border: '3px solid #222531',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(1px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 0 4px rgba(255,255,255,0.2)',
    zIndex: 6
  };

  const bodyStyle = {
    width: '210px',
    height: '130px',
    background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    borderRadius: '55px 55px 0 0',
    position: 'relative',
    zIndex: 3,
    boxShadow: '0 12px 35px rgba(99, 102, 241, 0.25), inset 0 2px 2px rgba(255,255,255,0.2)',
    overflow: 'hidden'
  };

  const laptopStyle = {
    width: '220px',
    height: '14px',
    background: 'linear-gradient(to bottom, #f1f5f9 0%, #cbd5e1 100%)',
    borderRadius: '5px 5px 2px 2px',
    position: 'relative',
    zIndex: 7,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    transform: 'translateY(-5px)'
  };

  return (
    <div style={containerStyle} aria-hidden="true">
      {/* Hair Backing */}
      <div style={hairBackStyle}></div>

      {/* Realistic Head Layer */}
      <div style={headStyle}>
        {/* Hair Front Bangs */}
        <div style={hairFrontStyle}></div>
        <div style={{ ...hairFrontStyle, width: '40px', height: '90px', left: '100px', top: '-5px', borderRadius: '50%', transform: 'rotate(-20deg)' }}></div>

        {/* Eyebrows with realistic slant */}
        <div style={{ ...eyebrowStyle, left: '22px', transform: 'rotate(4deg)' }}></div>
        <div style={{ ...eyebrowStyle, right: '22px', transform: 'rotate(-4deg)' }}></div>

        {/* Eyes & Shines */}
        <div style={{ ...eyeStyle, left: '30px' }}><div style={eyeShineStyle}></div></div>
        <div style={{ ...eyeStyle, right: '30px' }}><div style={eyeShineStyle}></div></div>

        {/* Modern Matte Glasses */}
        <div style={{ ...glassesFrameStyle, left: '14px' }}></div>
        <div style={{ ...glassesFrameStyle, right: '14px' }}></div>
        <div style={{ position: 'absolute', top: '76px', left: '60px', width: '16px', height: '4px', background: '#222531', zIndex: 6 }}></div>

        {/* Defined Nose Center */}
        <div style={{ position: 'absolute', top: '92px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '18px', background: '#e6ad86', borderRadius: '6px' }}></div>

        {/* Gentle Realistic Smile */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '32px',
          height: '14px',
          borderBottom: '3.5px solid #7c4a34',
          borderRadius: '0 0 16px 16px',
          opacity: talking ? 0.7 : 1
        }}></div>

        {/* Subtle Blush */}
        <div style={{ position: 'absolute', top: '98px', left: '15px', width: '22px', height: '12px', background: '#ffb3a7', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', top: '98px', right: '15px', width: '22px', height: '12px', background: '#ffb3a7', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.5 }}></div>
      </div>

      {/* Neck Structure */}
      <div style={{ width: '38px', height: '45px', background: '#e0ab85', position: 'absolute', bottom: '110px', zIndex: 3, boxShadow: 'inset 0 10px 10px rgba(0,0,0,0.1)' }}></div>

      {/* Smart Fit Clothing Body */}
      <div style={bodyStyle}>
        {/* Collar Detail */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '56px', height: '24px', background: '#4338ca', borderRadius: '0 0 28px 28px' }}></div>
        {/* White Inner Tee Glimpse */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '34px', height: '10px', background: '#ffffff', borderRadius: '0 0 12px 12px' }}></div>
      </div>

      {/* Laptop Tech Gear */}
      <div style={laptopStyle}>
        {/* Branding Emblem Light */}
        <div style={{ position: 'absolute', top: '4px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '5px', background: '#ffffff', borderRadius: '10px', opacity: 0.6 }}></div>
      </div>
      {/* Laptop Screen Subtle Ambient Glow Panel */}
      <div style={{ position: 'absolute', bottom: '12px', width: '190px', height: '105px', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.12), transparent)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px 12px 0 0', backdropFilter: 'blur(6px)', zIndex: 2 }}></div>

      {/* Decorative Vector Doodles */}
      <svg style={{ position: 'absolute', bottom: '10px', left: '-30px', width: '85px', opacity: 0.75, zIndex: 8 }} viewBox="0 0 100 90">
        <path d="M6 8 C 34 4, 56 18, 58 34 C 60 48, 46 46, 48 34 C 50 24, 66 22, 70 34" fill="none" stroke="#a78bfa" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M60 46 L58 34 L72 38" fill="none" stroke="#a78bfa" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ==========================================
// 2. MAIN HERO COMPONENT (With Animated Background Mesh)
// ==========================================
export default function Hero() {
  const activeSocials = SOCIAL_LINKS.filter((s) => s.url && s.url.trim() !== '');

  return (
    <>
      <style jsx global>{`
        .hero {
          position: relative;
          background: #06070d; /* Slightly deeper space hue for glowing layers */
          color: #ffffff;
          padding: 140px 24px 80px 24px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Ambient Fluid Glow Elements */
        .bg-glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, transparent 70%);
          filter: blur(60px);
          top: -10%;
          right: -5%;
          animation: floatingGlow 12s ease-in-out infinite alternate;
          z-index: 1;
          pointer-events: none;
        }
        .bg-glow-orb.two {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 65%);
          top: 40%;
          left: -10%;
          animation: floatingGlow 18s ease-in-out infinite alternate-reverse;
        }

        /* Subtle Animated Moving Lines Grid Matrix */
        .hero-bg-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center center;
          mask-image: radial-gradient(circle at 70% 40%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 70% 40%, black 30%, transparent 80%);
          animation: gridMove 24s linear infinite;
          z-index: 2;
          pointer-events: none;
        }

        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        .hero-role {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 16px;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 24px;
          width: fit-content;
          border-radius: 50px;
        }
        .hero-role .dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGreen 2s infinite;
        }
        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero-title .accent {
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: textGradientFlow 4s linear infinite;
        }
        .hero-tagline {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 36px;
          max-width: 500px;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .btn {
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: white;
          box-shadow: 0 8px 20px -6px rgba(139, 92, 246, 0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(139, 92, 246, 0.6);
        }

        /* Social Pills Row */
        .social-pill-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .social-pill svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
        }
        .social-pill:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          transform: translateY(-2px);
        }

        .avatar-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Interactive dynamic stage rings with smooth spin */
        .avatar-ring {
          position: absolute;
          width: 380px;
          height: 380px;
          border: 1px dashed rgba(139, 92, 246, 0.25);
          border-radius: 50%;
          animation: spin 35s linear infinite;
        }
        .avatar-ring.two {
          width: 440px;
          height: 440px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          animation: spin 50s linear infinite reverse;
        }

        /* Keyframes Logic for Smooth Rendering */
        @keyframes floatingGlow {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.1); }
          100% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
        @keyframes textGradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .hero-role { margin: 0 auto 24px auto; }
          .hero-title { font-size: 2.5rem; }
          .hero-actions, .social-pill-row { justify-content: center; }
          .bg-glow-orb { width: 300px; height: 300px; }
        }
      `}</style>

      <section className="hero">
        {/* Animated Background Layers */}
        <div className="bg-glow-orb"></div>
        <div className="bg-glow-orb two"></div>
        <div className="hero-bg-lines"></div>

        <div className="hero-grid">
          {/* Main info text container */}
          <div>
            <div className="hero-role">
              <span className="dot"></span>Open to ML Engineering roles &middot; Delhi, India
            </div>
            <h1 className="hero-title">
              Aastha Rai —<br />building <span className="accent">ML systems</span><br />that hold up.
            </h1>
            <p className="hero-tagline">Teaching machines to think, so humans can do the dreaming.</p>


            {activeSocials.length > 0 && (
  <div className="social-pill-row">
    {activeSocials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-pill"
      >
        {social.icon}
        {social.name}
      </a>
    ))}
  </div>
)}
          </div>

          {/* Upgraded Stage with Character & Custom Ring Spin */}
          <div className="avatar-stage">
            <div className="avatar-ring"></div>
            <div className="avatar-ring two"></div>
            
            <AvatarCharacter talking={false} />
          </div>
        </div>
      </section>
    </>
  );
}