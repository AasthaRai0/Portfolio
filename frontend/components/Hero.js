'use client';

import AvatarCharacter from './AvatarCharacter'; // Sahi file location path check kar lena

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

export default function Hero() {
  const activeSocials = SOCIAL_LINKS.filter((s) => s.url && s.url.trim() !== '');

  return (
    <>
      <style jsx global>{`
        .hero {
          position: relative;
          background: #06070d;
          color: #ffffff;
          padding: 140px 24px 80px 24px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

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
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 100%;
        }

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
            gap: 24px;
            overflow-x: hidden;
          }
          .hero-role { margin: 0 auto 24px auto; }
          .hero-title { font-size: 2.5rem; }
          .hero-actions, .social-pill-row { justify-content: center; }
          .bg-glow-orb { width: 300px; height: 300px; }
        }

        @media (max-width: 768px) {
          .avatar-ring {
            width: 260px;
            height: 260px;
          }
          .avatar-ring.two {
            width: 300px;
            height: 300px;
          }
          .bg-glow-orb {
            width: 260px;
            height: 260px;
            right: -80px;
          }
          .bg-glow-orb.two {
            width: 220px;
            height: 220px;
            left: -80px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="bg-glow-orb"></div>
        <div className="bg-glow-orb two"></div>
        <div className="hero-bg-lines"></div>

        <div className="hero-grid">
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