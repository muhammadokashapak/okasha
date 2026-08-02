import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, BookMarked } from 'lucide-react';

const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "BIT BUILD",
    location: "Peshawar, Pakistan",
    duration: "Oct 2025 – Feb 2026",
    type: "Work",
    color: "#00ffcc",
    icon: <TrendingUp size={22} />,
    highlights: ["250% Revenue Surge", "20+ Campaigns", "C-Suite Reporting"],
    points: [
      "Acted as a strategic partner to senior leadership, leveraging AI and data analytics to radically transform digital marketing campaigns.",
      "Engineered automated reporting pipelines that visualized performance across 20+ global campaigns, enabling rapid A/B testing and precision targeting.",
      "Delivered high-level, actionable insights directly to the C-suite, which streamlined operations and fueled a remarkable 250% surge in search revenue."
    ]
  },
  {
    role: "Deep Learning BootCamp",
    company: "NAVTTC",
    location: "Peshawar, Pakistan",
    duration: "Mar 2025 – Jun 2025",
    type: "Training",
    color: "#8b5cf6",
    icon: <BookMarked size={22} />,
    highlights: ["CNNs & LSTM", "End-to-End Projects", "Model Deployment"],
    points: [
      "Immersed in an intensive, hands-on environment focused on modern deep learning techniques, including Convolutional Neural Networks (CNNs).",
      "Architected and deployed end-to-end real-world projects, bridging the gap between theoretical algorithms and practical software engineering.",
      "Honed expertise in full-cycle model development: from data preprocessing and training to rigorous evaluation and deployment."
    ]
  }
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className="card exp-card"
        style={{
          borderLeft: `3px solid ${exp.color}`,
          cursor: 'pointer',
          padding: '0'
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Card Header */}
        <div className="exp-header">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flex: 1 }}>
            {/* Icon Badge */}
            <div className="exp-icon-badge" style={{
              width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
              background: `${exp.color}18`,
              border: `1px solid ${exp.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: exp.color
            }}>
              {exp.icon}
            </div>

            {/* Title & Company */}
            <div>
              <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                {exp.role}
              </h3>
              <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>
                {exp.company}
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}> · {exp.location}</span>
              </p>
            </div>
          </div>

          {/* Right: Duration + Type badge + expand arrow */}
          <div className="exp-right-meta">
            <span style={{
              background: `${exp.color}18`, color: exp.color,
              border: `1px solid ${exp.color}40`,
              padding: '3px 10px', borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px'
            }}>
              {exp.type}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{exp.duration}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
          </div>
        </div>

        {/* Highlight chips */}
        <div className="exp-highlights">
          {exp.highlights.map((h, i) => (
            <span key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--card-border)',
              padding: '3px 10px', borderRadius: '8px',
              fontSize: '0.78rem', fontWeight: 500
            }}>
              ✦ {h}
            </span>
          ))}
        </div>

        {/* Expandable Points */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="exp-points-container">
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{
                        width: '7px', height: '7px', borderRadius: '50%',
                        background: exp.color,
                        marginTop: '7px', flexShrink: 0,
                        boxShadow: `0 0 8px ${exp.color}`
                      }} />
                      <span style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.92rem' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: 'clamp(-2.5rem, -3vw, -1.5rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', fontSize: '0.9rem' }}>
          Click a card to expand details
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '860px', margin: '0 auto' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </motion.div>

      <style>{`
        .exp-header {
          padding: 1.8rem 1.8rem 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .exp-right-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.4rem;
          flex-shrink: 0;
        }
        .exp-highlights {
          padding: 0 1.8rem 1.5rem;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .exp-points-container {
          border-top: 1px solid var(--card-border);
          margin: 0 1.8rem;
          padding: 1.2rem 0 1.8rem;
        }
        @media (max-width: 640px) {
          .exp-header {
            padding: 1.25rem 1rem 1rem;
            flex-direction: column;
            align-items: stretch;
            gap: 0.8rem;
          }
          .exp-right-meta {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-top: 1px solid rgba(255,255,255,0.04);
            padding-top: 0.6rem;
          }
          .exp-highlights {
            padding: 0 1rem 1.25rem;
          }
          .exp-points-container {
            margin: 0 1rem;
            padding: 1rem 0 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

