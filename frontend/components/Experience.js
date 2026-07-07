import React from 'react';

const TIMELINE = [
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
  {
    date: 'Internship', 
    title: 'Coding Arena — Web Developer Intern',
    desc: 'Worked as a Web Developer, designing responsive interfaces, optimising front-end assets, and structuring features aligned with modern web standards.',
    certificateUrl: 'INTERNSHIP.png',
  },
];

export default function Experience() {
  const styles = {
    section: {
      width: '100%',
      overflow: 'hidden',
      background: 'var(--bg-elevated)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    },
    timeline: {
      position: 'relative',
      paddingLeft: '28px',
      borderLeft: '1px solid var(--border-bright)',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
    },
    item: {
      position: 'relative',
      paddingBottom: '40px',
      width: '100%',
    },
    dot: {
      content: '""',
      position: 'absolute',
      left: '-34px', // Aligns perfectly on the left border line
      top: '6px',
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      backgroundColor: 'var(--bg-elevated)',
      border: '2px solid var(--purple-bright)',
    },
    date: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--purple-bright)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '6px',
      display: 'block',
    },
    title: {
      fontSize: '19px',
      marginBottom: '6px',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    },
    desc: {
      color: 'var(--text-secondary)',
      fontSize: '15px',
      maxWidth: '600px',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    },
    certificateLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '12px',
      fontSize: '13px',
      fontWeight: '500',
      color: 'var(--purple-bright)',
      textDecoration: 'none',
      transition: 'opacity 0.2s ease',
    }
  };

  return (
    <section className="experience" id="experience" style={styles.section}>
      <div className="wrap" style={{ width: '100%', maxWidth: '100%' }}>
        <div className="section-head reveal">
          <div className="eyebrow">Experience &amp; Achievements</div>
          <h2 style={{ wordBreak: 'break-word' }}>Where the work has been recognized.</h2>
          <p style={{ wordBreak: 'break-word' }}>Alongside coursework and independent projects, here&apos;s where that work has been tested and recognized.</p>
        </div>

        <div style={styles.timeline}>
          {TIMELINE.map((item) => (
            <div className="timeline-item reveal" key={item.title} style={styles.item}>
              {/* Custom responsive dot indicator */}
              <div style={styles.dot} />
              
              <span style={styles.date}>{item.date}</span>
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