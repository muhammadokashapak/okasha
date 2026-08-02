import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const stats = [
  { value: "250%", label: "Revenue Growth" },
  { value: "20+", label: "Campaigns Managed" },
  { value: "4+", label: "AI Projects Built" },
  { value: "2026", label: "Engineer by Year" }
];

const education = [
  {
    degree: "B.E. Computer Systems Engineering",
    school: "UET Peshawar",
    period: "Oct 2022 – Present",
    icon: "🎓"
  },
  {
    degree: "Intermediate in Pre-Engineering",
    school: "APSACS Secretariat, Attock",
    period: "Aug 2020 – Jun 2022",
    icon: "📚"
  }
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>

        {/* ── Top Row: Image + Bio ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
        }} className="about-top-row">

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(170px, 45vw, 240px)', height: 'clamp(170px, 45vw, 240px)' }}>
              {/* Animated ring */}
              <div style={{
                position: 'absolute', inset: '-6px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #00ffcc, #3b82f6, #8b5cf6, #00ffcc)',
                animation: 'spin 4s linear infinite',
                zIndex: 0
              }} />
              <div style={{
                position: 'absolute', inset: '3px', borderRadius: '50%',
                background: 'var(--bg-color)', zIndex: 1
              }} />
              <img
                src="/profile.png"
                alt="Muhammad Okasha"
                style={{
                  position: 'absolute', inset: '6px', borderRadius: '50%',
                  width: 'calc(100% - 12px)', height: 'calc(100% - 12px)',
                  objectFit: 'cover', zIndex: 2
                }}
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-bio-container"
          >
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.3rem', fontFamily: 'var(--font-display)' }}>
              Muhammad Okasha
            </h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              Machine Learning Engineer &amp; Data Scientist
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '600px' }}>
              I am driven by a relentless curiosity to understand how machines can learn and reason. 
              From training neural networks on regional languages to deploying real-time vision systems 
              for the visually impaired, my work lives at the intersection of{' '}
              <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>deep technology</span> and{' '}
              <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>human impact</span>.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '600px', marginTop: '1rem' }}>
              I don't just build models — I architect intelligent ecosystems that{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>solve real problems</span>, drive measurable business outcomes, and scale with confidence.
            </p>

            <div className="about-badges" style={{ display: 'flex', gap: '1.2rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <MapPin size={16} color="var(--accent-color)" />
                Islamabad, Pakistan
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <Calendar size={16} color="var(--accent-color)" />
                Available for Opportunities
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
        }} className="stats-row">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '1.5rem 0.8rem' }}
            >
              <div style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900,
                fontFamily: 'var(--font-display)',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.3rem'
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Education Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{
            fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', marginBottom: '1.5rem',
            fontFamily: 'var(--font-display)',
            display: 'flex', alignItems: 'center', gap: '0.75rem'
          }}>
            <GraduationCap color="var(--accent-color)" size={26} />
            Education
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.2rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
              >
                <div style={{
                  fontSize: '1.8rem', lineHeight: 1,
                  flexShrink: 0,
                  width: '48px', height: '48px',
                  background: 'rgba(0,255,204,0.08)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(0,255,204,0.15)'
                }}>
                  {edu.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                    {edu.degree}
                  </h4>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                    {edu.school}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.07)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .about-top-row {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-bio-container p {
            margin-left: auto;
            margin-right: auto;
          }
          .about-badges {
            justify-content: center;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
