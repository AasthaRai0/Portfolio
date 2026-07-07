import React from 'react';

const CERTIFICATIONS = [
  {
    date: 'Hackathon',
    title: 'Delhi AI Grind — District Level Winner',
    desc: 'Placed first at district level in Delhi AI Grind, building an AI-driven solution under competition constraints.',
    certificateUrl: 'AIGRING.png',
  },
  {
    date: 'Open Source · 2025',
    title: 'Hacktoberfest 2025 — Supercontributor',
    desc: 'Recognized as a Supercontributor for sustained, quality open-source contributions during Hacktoberfest 2025.',
    certificateUrl: 'HACKTOBERFEST.png',
  },
  {
    date: 'Hackathon',
    title: 'Cyphothon — 2nd Place',
    desc: 'Secured 2nd place at Cyphothon, collaborating under time pressure to design and ship a working prototype.',
    certificateUrl: 'CYPHOTHON.png',
  },
  {
    date: 'Program',
    title: 'Dell Technologies',
    desc: 'Completed a Dell Technologies program, adding to hands-on exposure alongside academic ML training.',
    certificateUrl: 'DELLTECHNOLOGIES.png',
  },
];

export default function Certifications() {
  const styles = {
    section: {
      width: '100%',
      overflow: 'hidden',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '22px',
      width: '100%',
    },
    card: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s ease, transform 0.3s ease',
    },
    badgeRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
    },
    badge: {
      flexShrink: 0,
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, var(--purple), var(--purple-deep))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    date: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--purple-bright)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
    title: {
      fontSize: '17.5px',
      lineHeight: 1.3,
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    },
    desc: {
      color: 'var(--text-secondary)',
      fontSize: '14.5px',
      lineHeight: 1.6,
      flexGrow: 1,
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    },
    certificateLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13px',
      fontWeight: '500',
      color: 'var(--purple-bright)',
      textDecoration: 'none',
      transition: 'opacity 0.2s ease',
    },
  };

  return (
    <section className="certifications" id="certifications" style={styles.section}>
      <div className="wrap" style={{ width: '100%', maxWidth: '100%' }}>
        <div className="section-head reveal">
          <div className="eyebrow">Certifications &amp; Achievements</div>
          <h2 style={{ wordBreak: 'break-word' }}>Where the work has been recognized.</h2>
          <p style={{ wordBreak: 'break-word' }}>Hackathons, open-source recognition, and programs completed along the way.</p>
        </div>

        <div className="certifications-grid" style={styles.grid}>
          {CERTIFICATIONS.map((item) => (
            <div className="cert-card reveal" key={item.title} style={styles.card}>
              <div style={styles.badgeRow}>
                <div style={styles.badge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.7 13.7L7 22l5-3 5 3-1.7-8.3" />
                  </svg>
                </div>
                <span style={styles.date}>{item.date}</span>
              </div>

              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>

              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.certificateLink}
                  className="certificate-link"
                >
                  <span>View Certificate</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}