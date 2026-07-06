import React, { useState, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    group: 'Languages',
    iconType: 'code',
    tags: ['Python', 'C', 'SQL', 'HTML', 'CSS', 'JavaScript', 'C++'],
  },
  {
    group: 'Libraries & Frameworks',
    iconType: 'box',
    tags: ['React.js', 'Node.js', 'Scikit-learn', 'Model Development'],
  },
  {
    group: 'Tools & Platforms',
    iconType: 'tool',
    tags: [
      'MongoDB', 'Git', 'GitHub', 'Google Colab', 'Power BI', 'Excel', 
      'PowerPoint', 'PyCharm', 'Jupyter Notebook', 'Visual Studio Code'
    ],
  },
];

const SOFT_SKILLS = ['Time Management', 'Problem Solving', 'Adaptability', 'Communication'];

// Minimalist Non-Intrusive Vector Icons Component
function CategoryIcon({ type }) {
  const baseStyle = { width: '20px', height: '20px', stroke: 'var(--purple-bright)', fill: 'none', opacity: 0.9 };
  
  if (type === 'code') {
    return (
      <svg style={baseStyle} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    );
  }
  if (type === 'box') {
    return (
      <svg style={baseStyle} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    );
  }
  return (
    <svg style={baseStyle} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
}

// 3D Perspective Card Component
function SkillCategoryCard({ title, iconType, tags, isSoftSkill = false }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 16; 
    const angleY = (x - xc) / 16;

    setTransformStyle(`perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.015, 1.015, 1.015)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const styles = {
    skillCard: {
      background: 'var(--surface)', // Uses exact same dark surface token as other pages
      border: isSoftSkill ? '1px dashed var(--border)' : '1px solid var(--border-bright)', 
      borderRadius: '16px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)', 
      transform: transformStyle,
      transition: 'transform 0.15s ease-out, box-shadow 0.2s ease',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
      borderBottom: '1px solid var(--border)',
      paddingBottom: '14px',
    },
    cardTitle: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: '18px',
      fontWeight: '600',
      color: 'var(--text-primary)', 
    },
    skillTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    tag: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: '12px',
      padding: '6px 14px',
      background: 'var(--bg)', 
      border: '1px solid var(--border)',
      borderRadius: '6px',
      color: 'var(--text-secondary)',
    }
  };

  return (
    <div 
      ref={cardRef}
      style={styles.skillCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.cardHeader}>
        {iconType ? <CategoryIcon type={iconType} /> : <span style={{ fontSize: '18px' }}>🤝</span>}
        <h3 style={styles.cardTitle}>{title}</h3>
      </div>
      <div style={styles.skillTags}>
        {tags.map((tag) => (
          <span style={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const styles = {
    section: {
      padding: '120px 0',
      position: 'relative',
      // Brightness Problem Fixed: Transformed into a highly dark, consistent adaptive linear gradient
      background: 'linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg) 100%)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    },
    wrap: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 32px',
      position: 'relative',
      zIndex: 2, 
    },
    sectionHead: {
      maxWidth: '640px',
      marginBottom: '64px',
    },
    eyebrow: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: '12px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--purple-bright)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '18px',
    },
    eyebrowLine: {
      width: '22px',
      height: '1px',
      background: 'var(--purple)',
      display: 'inline-block',
    },
    heading: {
      fontFamily: "var(--font-display, sans-serif)",
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: '600',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      marginBottom: '14px',
    },
    subheading: {
      color: 'var(--text-secondary)',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      marginBottom: '24px'
    }
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.wrap}>
        
        {/* Section Header */}
        <div style={styles.sectionHead} className="reveal">
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowLine}></span>
            Skills &amp; Architecture
          </div>
          <h2 style={styles.heading}>The stack behind the models.</h2>
          <p style={styles.subheading}>
            Core tools I reach for daily, plus an evolving machine learning toolkit built through engineering prototypes and pipelines.
          </p>
        </div>

        {/* Hard Skills Matrix */}
        <div style={styles.skillsGrid}>
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard 
              key={category.group} 
              title={category.group} 
              iconType={category.iconType} 
              tags={category.tags} 
            />
          ))}
        </div>

        {/* Soft Skills Section Integrated Smoothly */}
        <div>
          <SkillCategoryCard 
            title="Soft Skills &amp; Dynamics" 
            tags={SOFT_SKILLS} 
            isSoftSkill={true}
          />
        </div>

      </div>
    </section>
  );
}