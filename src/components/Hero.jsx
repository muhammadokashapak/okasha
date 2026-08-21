import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { FileText, Terminal, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

function Starfield({ color = "#00ffcc", ...props }) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 1.6 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.0045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function StarfieldViolet({ color = "#8b5cf6", ...props }) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.3 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 16;
      ref.current.rotation.y += delta / 22;
    }
  });

  return (
    <group rotation={[Math.PI / 3, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

export default function Hero({ onOpenTerminal, theme = 'dark' }) {
  const isLight = theme === 'light';
  const starColor1 = isLight ? "#0284c7" : "#00ffcc";
  const starColor2 = isLight ? "#7c3aed" : "#8b5cf6";

  const heroMetrics = [
    { num: "5,700+", label: "Vector Embeddings Shipped" },
    { num: "<50ms", label: "Real-Time RAG Latency" },
    { num: "100%", label: "On-Device Neural Models" },
    { num: "250%", label: "Search Revenue Surge" }
  ];

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100dvh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* 3D Cosmic Starfield Canvas */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: isLight ? 0.6 : 1 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield color={starColor1} />
          <StarfieldViolet color={starColor2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

      {/* Radiant Background Aura */}
      <div style={{ 
        position: 'absolute', 
        top: '40%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 'min(700px, 90vw)', 
        height: 'min(700px, 90vw)', 
        background: isLight
          ? 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(124,58,237,0.12) 40%, transparent 75%)'
          : 'radial-gradient(circle, rgba(0,255,204,0.18) 0%, rgba(56,189,248,0.12) 30%, rgba(139,92,246,0.1) 60%, transparent 80%)', 
        filter: 'blur(60px)', 
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        width: '100%',
        padding: '130px 20px 70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '960px' }}
        >
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: isLight ? 'rgba(2, 132, 199, 0.08)' : 'rgba(0, 255, 204, 0.08)',
            border: `1px solid ${isLight ? 'rgba(2, 132, 199, 0.3)' : 'rgba(0, 255, 204, 0.3)'}`,
            padding: '6px 18px',
            borderRadius: '30px',
            marginBottom: '1.5rem',
            pointerEvents: 'auto',
            backdropFilter: 'blur(10px)',
            boxShadow: `0 0 20px ${isLight ? 'rgba(2, 132, 199, 0.15)' : 'rgba(0, 255, 204, 0.15)'}`
          }}>
            <span className="pulse-dot" />
            <span style={{ color: 'var(--accent-color)', fontSize: '0.86rem', fontWeight: 700, letterSpacing: '0.4px' }}>
              Available for AI / ML Engineer &amp; Solutions Architect Roles
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 7vw, 4.8rem)', 
            marginBottom: '1.2rem', 
            textShadow: isLight ? '0 4px 20px rgba(0,0,0,0.06)' : '0 10px 40px rgba(0,0,0,0.6)', 
            wordBreak: 'break-word',
            letterSpacing: '-1px'
          }}>
            Hi, I'm <span className="gradient-text">Muhammad Okasha</span>
          </h1>

          {/* Subtitle / Roles */}
          <h2 style={{ 
            fontSize: 'clamp(1.15rem, 3.5vw, 2rem)', 
            color: 'var(--text-secondary)', 
            fontWeight: 400, 
            letterSpacing: '0.4px', 
            lineHeight: 1.4,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AI Solutions Architect</span> &bull;{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Machine Learning Engineer</span> &bull;{' '}
            <span style={{ color: 'var(--accent-alt)', fontWeight: 600 }}>Full-Stack Systems Specialist</span>
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            maxWidth: '680px',
            margin: '1.2rem auto 0',
            lineHeight: 1.6
          }}>
            Architecting enterprise RAG pipelines, on-device neural edge models, and ultra-high performance AI ecosystems that turn complex intelligence into seamless reality.
          </p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              marginTop: 'clamp(2rem, 5vw, 2.8rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.1rem',
              pointerEvents: 'auto'
            }}
          >
            <a href="#projects" className="btn-primary">
              <Zap size={18} /> View Featured Work
            </a>

            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              className="btn-secondary"
            >
              <FileText size={18} color="var(--accent-color)" />
              Download Resume
            </a>

            <button
              onClick={onOpenTerminal}
              className="btn-secondary"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.4)',
                background: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--accent-alt)'
              }}
            >
              <Terminal size={18} color="var(--accent-alt)" />
              &gt;_ Matrix CLI
            </button>
          </motion.div>

          {/* Live Impact Counters Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              marginTop: 'clamp(3rem, 6vw, 4.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '14px',
              maxWidth: '900px',
              width: '100%',
              pointerEvents: 'auto'
            }}
          >
            {heroMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="card"
                style={{ 
                  padding: '16px 14px', 
                  borderRadius: '18px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
                  fontWeight: 900, 
                  color: 'var(--accent-color)', 
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.5px'
                }}>
                  {item.num}
                </div>
                <div style={{ 
                  fontSize: '0.78rem', 
                  color: 'var(--text-secondary)', 
                  fontWeight: 600, 
                  marginTop: '2px' 
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
