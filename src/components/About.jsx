import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles, Award, Code2, Cpu, Clock, CheckCircle2, Zap, Layers, Globe } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const stats = [
  { value: "5,700+", label: "Vector Chunks Indexed", desc: "FastEmbed ONNX & ChromaDB" },
  { value: "10+", label: "Production AI Systems", desc: "Enterprise RAG & Edge ML" },
  { value: "100%", label: "On-Device Neural Models", desc: "Whisper INT8 + MarianMT" },
  { value: "250%", label: "Search Revenue Surge", desc: "Automated Intent Routing" }
];

const education = [
  {
    degree: "B.E. Computer Systems Engineering",
    school: "UET Peshawar",
    period: "Oct 2022 – Present",
    icon: "🎓",
    badge: "Major in AI & Systems",
    highlights: "Deep Learning, Edge Inference & Distributed Architectures"
  },
  {
    degree: "Intermediate in Pre-Engineering",
    school: "APSACS Secretariat, Attock",
    period: "Aug 2020 – Jun 2022",
    icon: "📚",
    badge: "Top Academic Tier",
    highlights: "Advanced Mathematics & Analytical Physics"
  }
];

export default function About() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
            <Sparkles size={14} /> Background &amp; Vision
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Muhammad Okasha</span>
          </h2>
          <p className="section-subtitle">
            Bridging cutting-edge Generative AI research, on-device edge intelligence, and resilient software systems.
          </p>
        </div>

        {/* ── Top Bio + Profile Row ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}
          className="about-top-row"
        >
          {/* Profile Photo with Radiant Neon Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(190px, 45vw, 240px)', height: 'clamp(190px, 45vw, 240px)' }}>
              {/* Animated Glowing Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00ffcc, #38bdf8, #8b5cf6, #f43f5e, #00ffcc)',
                  animation: 'spin 6s linear infinite',
                  zIndex: 0,
                  filter: 'drop-shadow(0 0 16px rgba(0, 255, 204, 0.45))'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '3px',
                  borderRadius: '50%',
                  background: 'var(--bg-color)',
                  zIndex: 1
                }}
              />
              <img
                src="/profile.png"
                alt="Muhammad Okasha"
                style={{
                  position: 'absolute',
                  inset: '6px',
                  borderRadius: '50%',
                  width: 'calc(100% - 12px)',
                  height: 'calc(100% - 12px)',
                  objectFit: 'cover',
                  zIndex: 2
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, maxWidth: '680px' }}>
              I engineer production AI systems that translate theoretical machine learning into resilient, real-time software. 
              From deploying <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>multimodal RAG platforms with 5,700+ vector chunks</span> to compiling 
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}> INT8 quantized neural models for 100% offline edge devices</span>, my work bridges raw technical depth with pristine user experience.
            </p>

            <div className="about-badges" style={{ display: 'flex', gap: '1.4rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent-color)" />
                Islamabad, Pakistan
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Globe size={16} color="var(--accent-cyan)" />
                UTC+5 (Asia/Karachi)
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bento Grid Section ── */}
        <div className="bento-grid" style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          
          {/* Card 1: Core Architecture Pillars (Span 8) */}
          <div
            className="bento-card bento-col-8 spotlight-card"
            onMouseEnter={() => playSound('hover')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <Zap size={20} color="var(--accent-color)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Architectural DNA &amp; Core Focus
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Specialized in high-throughput enterprise pipelines and on-device neural acceleration. Designed for mission-critical reliability across healthcare, conversational voice, and automated intelligence.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '12px' }}>
                <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Layers size={14} /> Multimodal RAG
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                  Hybrid dense/sparse embeddings, ChromaDB, FastEmbed &amp; RRF ranking.
                </div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '12px' }}>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Cpu size={14} /> Edge Neural ML
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                  Quantized INT8 weights, offline Whisper &amp; MarianMT on Android/ESP32.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Live Time & Availability (Span 4) */}
          <div
            className="bento-card bento-col-4 spotlight-card"
            onMouseEnter={() => playSound('hover')}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Local Time
                </span>
                <Clock size={16} color="var(--accent-color)" />
              </div>
              <div style={{ fontSize: '1.9rem', fontWeight: 900, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-color)' }}>
                {currentTime || '09:00:00 AM'}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '4px' }}>
                Islamabad, Pakistan (UTC+5)
              </div>
            </div>

            <div style={{ marginTop: '1.4rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <span style={{ color: '#10b981', fontSize: '0.86rem', fontWeight: 700 }}>
                  Ready for Global Hire
                </span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '4px' }}>
                Open to Full-Time AI &amp; Software Roles
              </div>
            </div>
          </div>

          {/* Card 3: Four Metrics Strip (Span 12) */}
          <div className="bento-col-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="card spotlight-card"
                onMouseEnter={() => playSound('hover')}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1.6rem 1rem', borderRadius: '18px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.3rem',
                    letterSpacing: '-1px'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700 }}>
                  {stat.label}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '4px' }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Card 4: Academic Foundations (Span 12) */}
          <div className="bento-card bento-col-12 spotlight-card" onMouseEnter={() => playSound('hover')}>
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-primary)'
              }}
            >
              <GraduationCap color="var(--accent-color)" size={24} />
              Academic Foundations &amp; Degrees
            </h3>

            <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ fontSize: '2rem', lineHeight: 1 }}>{edu.icon}</div>
                  <div>
                    <span className="badge-neon" style={{ fontSize: '0.7rem', display: 'inline-block', marginBottom: '4px' }}>
                      {edu.badge}
                    </span>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem', marginTop: '4px' }}>{edu.highlights}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '2px' }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
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
