'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const closeMenu = () => setOpen(false);

  // Scroll position detector
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key configuration to close popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowPopup(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- Premium Inline Style Objects ---
  const headerStyle = {
    position: 'fixed',
    top: scrolled ? '20px' : '0px',
    left: '0',
    right: '0',
    zIndex: 100,
    maxWidth: scrolled ? '1300px' : '100%',
    margin: '0 auto',
    padding: scrolled ? '0 24px' : '0',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const navContainerStyle = {
    background: scrolled ? 'rgba(11, 13, 25, 0.75)' : 'rgba(11, 13, 25, 0.4)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: scrolled ? '24px' : '0px',
    padding: scrolled ? '14px 40px' : '20px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: scrolled ? '0 20px 40px -15px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)' : 'none',
  };

  const navCollapseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: '40px',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '36px',
    fontSize: '0.9rem',
    fontWeight: 500,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const btnGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: 'auto', 
  };

  const ctaGhostStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    padding: '10px 22px',
    borderRadius: '12px',
    color: '#e2e8f0',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const ctaPrimaryStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    padding: '10px 24px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    boxShadow: '0 8px 20px -6px rgba(139, 92, 246, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const menuToggleStyle = {
    display: 'none', 
    position: 'relative',
    width: '32px',
    height: '24px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 105,
  };

  const lineBaseStyle = {
    position: 'absolute',
    left: '0',
    width: '100%',
    height: '2.5px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <>
      <style jsx global>{`
        /* Link & Hover Animations */
        .nav-link-item {
          color: #94a3b8;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
        }
        .nav-link-item:hover {
          color: #ffffff;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #d946ef);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .nav-link-item:hover::after {
          width: 100%;
        }
        
        .cta-ghost-hover:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #fff !important;
          transform: translateY(-2px);
        }

        .cta-primary-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(139, 92, 246, 0.6) !important;
          filter: brightness(1.1);
        }

        /* --- Premium Popup Overlay Modal Styles --- */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(4, 5, 11, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
          animation: fadeIn 0.3s ease forwards;
        }

        .popup-card {
          background: #0B0D17;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          width: 100%;
          max-width: 440px;
          padding: 32px;
          position: relative;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .popup-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .popup-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .popup-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .popup-subtitle {
          color: #64748b;
          font-size: 0.88rem;
          margin: 0 0 24px 0;
        }

        .connect-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .connect-row-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .connect-row-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transform: translateX(4px);
        }

        .connect-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          color: #94a3b8;
          transition: all 0.2s;
        }

        .connect-row-item:hover .connect-icon-box {
          background: rgba(139, 92, 246, 0.15);
          color: #a5b4fc;
        }

        .connect-icon-box svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.96) translateY(8px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        /* Mobile View Styles */
        @media (max-width: 968px) {
          .nav-collapse-responsive {
            position: fixed !important;
            top: 0;
            right: ${open ? '0' : '-100%'} !important;
            width: 300px;
            height: 100vh;
            background: rgba(11, 13, 25, 0.96) !important;
            backdrop-filter: blur(32px) !important;
            -webkit-backdrop-filter: blur(32px) !important;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            padding: 120px 40px !important;
            gap: 40px !important;
            margin-left: 0 !important;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            box-shadow: ${open ? '-20px 0 60px rgba(0, 0, 0, 0.7)' : 'none'} !important;
          }
          .nav-links-responsive {
            flex-direction: column !important;
            gap: 28px !important;
            width: 100% !important;
          }
          .nav-btn-group-responsive {
            flex-direction: column !important;
            width: 100% !important;
            gap: 16px !important;
            margin-top: 20px;
            margin-left: 0 !important;
          }
          .responsive-cta {
            width: 100% !important;
            text-align: center;
          }
          .menu-toggle-responsive {
            display: block !important;
          }
        }
      `}</style>

      <header style={headerStyle}>
        <nav id="mainNav" style={navContainerStyle}>
          
          {/* Navigation Items Drawer */}
          <div className="nav-collapse-responsive" style={navCollapseStyle}>
            <ul className="nav-links-responsive" style={navLinksStyle}>
              <li><a href="#about" className="nav-link-item" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" className="nav-link-item" onClick={closeMenu}>Skills</a></li>
              <li><a href="#experience" className="nav-link-item" onClick={closeMenu}>Experience</a></li>
              <li><a href="#projects" className="nav-link-item" onClick={closeMenu}>Projects</a></li>
              <li><a href="#education" className="nav-link-item" onClick={closeMenu}>Education</a></li>
            </ul>
            
            <div className="nav-btn-group-responsive" style={btnGroupStyle}>
              <a href="/AASTHARAI_RESUME.pdf" download className="responsive-cta cta-ghost-hover" style={ctaGhostStyle}>
                Resume ↓
              </a>
              <button 
                className="responsive-cta cta-primary-hover" 
                style={ctaPrimaryStyle} 
                onClick={() => { closeMenu(); setShowPopup(true); }}
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="menu-toggle-responsive"
            style={menuToggleStyle}
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span style={{ ...lineBaseStyle, top: open ? '11px' : '0px', transform: open ? 'rotate(45deg)' : 'none' }}></span>
            <span style={{ ...lineBaseStyle, top: '11px', opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}></span>
            <span style={{ ...lineBaseStyle, top: open ? '11px' : '22px', transform: open ? 'rotate(-45deg)' : 'none' }}></span>
          </button>
        </nav>
      </header>

      {/* --- Premium Contact Connections Popup Overlay --- */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)} aria-label="Close popup">
              ✕
            </button>
            <h3 className="popup-title">Let's Connect</h3>
            <p className="popup-subtitle">Choose your preferred medium to reach out.</p>

            <div className="connect-grid">
              {/* Email */}
              <a href="mailto:aastharai4214@gmail.com" className="connect-row-item">
                <div className="connect-icon-box">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span>aastharai4214@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/aastha-rai-0317a6327" target="_blank" rel="noopener noreferrer" className="connect-row-item">
                <div className="connect-icon-box">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <span>LinkedIn Profile</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/AasthaRai0" target="_blank" rel="noopener noreferrer" className="connect-row-item">
                <div className="connect-icon-box">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 020 4.77 5.07 5.07 0 0 019.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 05 4.77a5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <span>GitHub Profile</span>
              </a>

              {/* LeetCode */}
              <a href="https://leetcode.com/u/aastharai2906/" target="_blank" rel="noopener noreferrer" className="connect-row-item">
                <div className="connect-icon-box">
                  {/* Custom representation of Leetcode layout using neat vector structure */}
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <span>LeetCode Profile</span>
              </a>

              {/* Phone Number */}
              <a href="tel:+91XXXXXXXXXX" className="connect-row-item">
                <div className="connect-icon-box">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span>+91 70117 88968</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}