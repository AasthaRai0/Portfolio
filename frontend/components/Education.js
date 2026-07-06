export default function Education() {
  const styles = {
    section: {
      padding: '100px 0',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '18px',
      padding: '32px 36px',
      transition: 'border-color 0.3s ease, transform 0.3s ease',
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
      flex: 1,
      minWidth: 0,
    },
    degree: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: '1.15rem',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 6px 0',
    },
    meta: {
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 1.6,
    },
    divider: {
      width: '1px',
      height: '48px',
      background: 'var(--border)',
      flexShrink: 0,
    },
    scoreBox: {
      textAlign: 'center',
      flexShrink: 0,
    },
    score: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: '1.8rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1,
      marginBottom: '4px',
    },
    scoreLabel: {
      fontSize: '0.7rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
    },
  };

  return (
    <section className="education" id="education" style={styles.section}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Education</div>
          <h2>Where the fundamentals were built.</h2>
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

          <div style={styles.divider}></div>

          <div style={styles.scoreBox}>
            <div style={styles.score}>8.86</div>
            <div style={styles.scoreLabel}>CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}