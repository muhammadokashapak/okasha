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
        className="card"
        style={{
          borderLeft: `3px solid ${exp.color}`,
          cursor: 'pointer',
          padding: '0'
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Card Header */}
        <div style={{ padding: '2rem 2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', flex: 1 }}>
            {/* Icon Badge */}
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
              background: `${exp.color}18`,
              border: `1px solid ${exp.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: exp.color
            }}>
              {exp.icon}
            </div>

            {/* Title & Company */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                {exp.role}
              </h3>
              <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.95rem' }}>
                {exp.company}
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}> · {exp.location}</span>
              </p>
            </div>
          </div>

          {/* Right: Duration + Type badge + expand arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', flexShrink: 0 }}>
            <span style={{
              background: `${exp.color}18`, color: exp.color,
              border: `1px solid ${exp.color}40`,
              padding: '3px 12px', borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px'
            }}>
              {exp.type}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.duration}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
          </div>
        </div>

        {/* Highlight chips */}
        <div style={{ padding: '0 2rem 1.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {exp.highlights.map((h, i) => (
            <span key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--card-border)',
              padding: '4px 12px', borderRadius: '8px',
              fontSize: '0.8rem', fontWeight: 500
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
              <div style={{
                borderTop: '1px solid var(--card-border)',
                margin: '0 2rem',
                padding: '1.5rem 0 2rem'
              }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: exp.color,
                        marginTop: '7px', flexShrink: 0,
                        boxShadow: `0 0 8px ${exp.color}`
                      }} />
                      <span style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{point}</span>
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

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '-2.5rem', marginBottom: '4rem', fontSize: '0.95rem' }}>
          Click a card to expand details
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '860px', margin: '0 auto' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
