export default function Education() {
  const styles = {
    section: {
      width: '100%',
      overflow: 'hidden',
    },
    card: {
      display: 'flex',
      flexDirection: 'column', // Stacked: icon on top, then text, then score
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '18px',
      padding: '40px 36px',
      transition: 'border-color 0.3s ease, transform 0.3s ease',
      width: '100%',
      boxSizing: 'border-box',
    },
    iconWrap: {
      flexShrink: 0,
      width: '58px',
      height: '58px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, var(--purple), var(--purple-deep))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: '26px',
      height: '26px',
      stroke: '#ffffff',
      fill: 'none',
    },
    info: {
      width: '100%',
      maxWidth: '480px',
      wordBreak: 'break-word',
    },
    degree: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: '1.2rem',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 6px 0',
    },
    meta: {
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 1.6,
      wordBreak: 'break-word',
    },
    scoreBox: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    score: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: '2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1,
      marginBottom: '6px',
    },
    scoreLabel: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
    },
  };

  return (
    <section className="education" id="education" style={styles.section}>
      <div className="wrap" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <div className="section-head reveal">
          <div className="eyebrow">Education</div>
          <h2 style={{ wordBreak: 'break-word' }}>Where the fundamentals were built.</h2>
        </div>

        <div className="edu-card reveal" style={styles.card}>
          <div style={styles.iconWrap}>
            <svg style={styles.icon} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10L12 5 2 10l10 5 10-5z" />
              <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
            </svg>
          </div>

          <div style={styles.info}>
            <h3 style={styles.degree}>B.Tech in Artificial Intelligence</h3>
            <p style={styles.meta}>
              Bhai Parmanand Delhi Skill &amp; Entrepreneurship University &middot; 2024 – 2028
            </p>
          </div>

          {/* Horizontal divider now that the card stacks vertically */}
          <div style={{ width: '60px', height: '1px', background: 'var(--border)' }}></div>

          <div style={styles.scoreBox}>
            <div style={styles.score}>8.86</div>
            <div style={styles.scoreLabel}>CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}