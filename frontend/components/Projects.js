import { useState, useRef } from 'react';

const PROJECTS = [
  {
    title: 'AI-Powered Debt Optimizer',
    desc: 'An intelligent financial management system that analyzes multiple debts and recommends optimized repayment strategies, with Gemini-based AI insights, EMI tracking, and a financial analytics dashboard.',
    stack: ['Python', 'Gemini API', 'Analytics'],
    link: 'https://github.com/AasthaRai0',
  },
  {
    title: 'Smart Clause Classifier & Risk Detector',
    desc: 'An ML-powered legal-tech tool that automatically classifies contract clauses using NLP — text preprocessing, TF-IDF vectorization, and classification models for accurate risk detection.',
    stack: ['Python', 'Scikit-learn', 'NLP', 'Pandas'],
    link: 'https://github.com/AasthaRai0',
  },
  {
    title: 'Student Performance Predictor',
    desc: 'A prediction system built with Linear Regression, covering data analysis, preprocessing, and evaluation with MAE and R² — deployed as an interactive real-time Streamlit app.',
    stack: ['Python', 'Linear Regression', 'Streamlit'],
    link: 'https://github.com/AasthaRai0',
  },
  {
    title: 'FreshHire AI — Job Search App',
    desc: 'An AI-powered job search platform for freshers in India. Owned the full PRD, MVP scope, and an interactive prototype with resume optimization, personalized job matching, and application tracking.',
    stack: ['Product Design', 'Figma', 'AI Tools'],
    link: 'https://github.com/AasthaRai0',
  },
  {
    title: 'E-Library Management System',
    desc: 'A file-handling system to manage book records, enabling efficient storage, retrieval, and update operations for an e-library — built from the ground up in C.',
    stack: ['C', 'File Handling'],
    link: 'https://github.com/AasthaRai0',
  },
  {
    title: 'Geetaverse',
    desc: 'A web application showcasing Bhagavad Gita quotes, with smooth CSS transitions, responsive layout, and a genuinely interactive user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/AasthaRai0',
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

// Innovative Interactive Card Component (3D Card Effect)
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation angles based on mouse position (Max tilt: 10 degrees)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 15; 
    const angleY = (x - xc) / 15;

    setTransformStyle(`perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      className="project-card innovative-card"
      style={{ 
        transform: transformStyle,
        animationDelay: `${index * 100}ms` // Staggered loading entry effect
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Glow Overlay that follows mouse could be handled here without changing background */}
      <div className="p-top">
        <h3>{project.title}</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-link animated-icon-link"
          aria-label="View on GitHub"
        >
          <GithubIcon />
        </a>
      </div>
      <p>{project.desc}</p>
      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="animated-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Projects</div>
          <h2>Things I&apos;ve built.</h2>
          <p>A mix of ML systems, NLP tools, and full-stack applications — each one a rep toward better products.</p>
        </div>

        <div className="project-grid standard-perspective-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}