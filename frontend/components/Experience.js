import React from 'react';

const TIMELINE = [
  {
    date: 'Hackathon',
    title: 'Delhi AI Grind — District Level Winner',
    desc: 'Placed first at district level in Delhi AI Grind, building an AI-driven solution under competition constraints.',
    certificateUrl: 'AIGRING.png', // Yahan apna link dalein
  },
  {
    date: 'Open Source · 2025',
    title: 'Hacktoberfest 2025 — Supercontributor',
    desc: 'Recognized as a Supercontributor for sustained, quality open-source contributions during Hacktoberfest 2025.',
    certificateUrl: 'HACKTOBERFEST.png', // Yahan apna link dalein
  },
  {
    date: 'Hackathon',
    title: 'Cyphothon — 2nd Place',
    desc: 'Secured 2nd place at Cyphothon, collaborating under time pressure to design and ship a working prototype.',
    certificateUrl: 'CYPHOTHON.png', // Yahan apna link dalein
  },
  {
    date: 'Program',
    title: 'Dell Technologies',
    desc: 'Completed a Dell Technologies program, adding to hands-on exposure alongside academic ML training.',
    certificateUrl: 'DELLTECHNOLOGIES.png', // Yahan apna link dalein
  },
  {
    date: 'Internship', 
    title: 'Coding Arena — Web Developer Intern',
    desc: 'Worked as a Web Developer, designing responsive interfaces, optimising front-end assets, and structuring features aligned with modern web standards.',
    certificateUrl: 'INTERNSHIP.png', // Yahan apna link dalein
  },
];

export default function Experience() {
  // --- Strictly adding ONLY the required button styles ---
  const certificateStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '12px',
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--purple-bright)',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  };

  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Experience &amp; Achievements</div>
          <h2>Where the work has been recognized.</h2>
          <p>Alongside coursework and independent projects, here&apos;s where that work has been tested and recognized.</p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item reveal" key={item.title}>
              <span className="t-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              
              {/* Added View Certificate Option */}
              {item.certificateUrl && (
                <a 
                  href={item.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={certificateStyle}
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