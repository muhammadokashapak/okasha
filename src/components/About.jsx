import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles, Award, Code2, Cpu } from 'lucide-react';

const stats = [
  { value: "5,700+", label: "Vector Chunks Indexed" },
  { value: "10+", label: "Production AI & Full-Stack Systems" },
  { value: "100%", label: "On-Device Neural Models" },
  { value: "250%", label: "Search Revenue Surge" }
];

const education = [
  {
    degree: "B.E. Computer Systems Engineering",
    school: "UET Peshawar",
    period: "Oct 2022 – Present",
    icon: "🎓",
    badge: "Major in AI & Systems"
  },
  {
    degree: "Intermediate in Pre-Engineering",
    school: "APSACS Secretariat, Attock",
    period: "Aug 2020 – Jun 2022",
    icon: "📚",
    badge: "Top Academic Tier"
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
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Background & Vision
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Muhammad Okasha</span>
          </h2>
          <p className="section-subtitle">
            Bridging cutting-edge Generative AI research, on-device edge intelligence, and scalable software architecture.
          </p>
        </div>

        {/* ── Top Row: Image + Bio ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
        }} className="about-top-row">

          {/* Profile Photo with Radiant Neon Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(190px, 45vw, 260px)', height: 'clamp(190px, 45vw, 260px)' }}>
              {/* Animated Glowing Ring */}
              <div style={{
                position: 'absolute', inset: '-6px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #00ffcc, #38bdf8, #8b5cf6, #f43f5e, #00ffcc)',
                animation: 'spin 5s linear infinite',
                zIndex: 0,
                filter: 'drop-shadow(0 0 15px rgba(0, 255, 204, 0.4))'
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
            <h3 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: '0.3rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              Muhammad Okasha
            </h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              AI Solutions Architect &amp; Machine Learning Engineer
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, maxWidth: '650px' }}>
              I engineer high-impact AI systems that translate theoretical machine learning into resilient, real-time products. 
              From architecting <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>multimodal RAG platforms with 5,700+ vector chunks</span> to compiling 
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}> INT8 quantized neural models for 100% offline edge devices</span>, my work bridges raw technical depth with pristine user experience.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, maxWidth: '650px', marginTop: '1rem' }}>
              Whether developing assistive computer vision headsets, real-time voice sales intelligence, or mission-critical hospital ERP engines, I focus on delivering scalable, battle-tested solutions with zero compromises.
            </p>

            <div className="about-badges" style={{ display: 'flex', gap: '1.4rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent-color)" />
                Islamabad, Pakistan
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Calendar size={16} color="var(--accent-color)" />
                Open for Global Roles &amp; High-Impact Projects
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.2rem',
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
              style={{ textAlign: 'center', padding: '1.8rem 1rem' }}
            >
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.7rem)', fontWeight: 900,
                fontFamily: 'var(--font-display)',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.4rem',
                letterSpacing: '-1px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 600 }}>
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
            Academic Foundations
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
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
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>{edu.icon}</div>
                <div>
                  <div style={{ display: 'inline-block', marginBottom: '4px' }}>
                    <span className="badge-neon" style={{ fontSize: '0.7rem' }}>{edu.badge}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{edu.degree}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{edu.school}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.3rem' }}>{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .about-top-row {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-badges {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
