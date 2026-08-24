import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { FileText, Terminal, Zap, Sparkles, MessageSquare, Code2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import AudioPitchPlayer from './AudioPitchPlayer';

function Starfield({ color = "#00ffcc", ...props }) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.8 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 22;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
}

function StarfieldViolet({ color = "#8b5cf6", ...props }) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.4 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 18;
      ref.current.rotation.y += delta / 25;
    }
  });

  return (
    <group rotation={[Math.PI / 3, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.0045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

function NeuralFloatingCore({ color1 = "#00ffcc", color2 = "#8b5cf6" }) {
  const meshRef = useRef();
  const outerRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x -= delta * 0.15;
      outerRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={[0, 0, -0.2]}>
        {/* Inner Glowing Wireframe Core */}
        <mesh ref={meshRef} scale={0.48}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color={color1}
            wireframe
            transparent
            opacity={0.35}
            emissive={color1}
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Outer Orbit Synapse Ring */}
        <mesh ref={outerRef} scale={0.7}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshBasicMaterial color={color2} transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero({ onOpenTerminal, onOpenChat, onOpenRecruiter, theme = 'dark' }) {
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
      {/* 3D Cosmic Neural Canvas */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: isLight ? 0.65 : 1 }}>
        <Canvas camera={{ position: [0, 0, 1.2] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Starfield color={starColor1} />
          <StarfieldViolet color={starColor2} />
          <NeuralFloatingCore color1={starColor1} color2={starColor2} />
        </Canvas>
      </div>

      {/* Radiant Background Aura */}
      <div style={{ 
        position: 'absolute', 
        top: '40%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 'min(750px, 92vw)', 
        height: 'min(750px, 92vw)', 
        background: isLight
          ? 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(124,58,237,0.12) 40%, transparent 75%)'
          : 'radial-gradient(circle, rgba(0,255,204,0.18) 0%, rgba(56,189,248,0.12) 30%, rgba(139,92,246,0.1) 60%, transparent 80%)', 
        filter: 'blur(65px)', 
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
          <div 
            className="hero-status-badge"
            style={{
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
            }}
          >
            <span className="pulse-dot" />
            <span style={{ color: 'var(--accent-color)', fontSize: '0.86rem', fontWeight: 700, letterSpacing: '0.4px' }}>
              Available for AI / ML Engineer &amp; Solutions Architect Roles
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.1rem, 7vw, 4.8rem)', 
            marginBottom: '1.2rem', 
            textShadow: isLight ? '0 4px 20px rgba(0,0,0,0.06)' : '0 10px 40px rgba(0,0,0,0.6)', 
            wordBreak: 'break-word',
            letterSpacing: '-1px'
          }}>
            Hi, I'm <span className="gradient-text">Muhammad Okasha</span>
          </h1>

          {/* Subtitle / Roles */}
          <h2 style={{ 
            fontSize: 'clamp(1.05rem, 3.5vw, 2rem)', 
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
            fontSize: 'clamp(0.88rem, 2vw, 1.05rem)',
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
            className="hero-cta-group"
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
            {/* VIP Recruiter Fast-Track Button */}
            <button
              onClick={() => {
                playSound('open');
                if (onOpenRecruiter) onOpenRecruiter();
              }}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 50%, #8b5cf6 100%)',
                color: '#030308',
                fontWeight: 800,
                boxShadow: '0 0 25px rgba(0, 255, 204, 0.45)',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Zap size={18} /> Recruiter 30s Brief
            </button>

            <a 
              href="#projects" 
              className="btn-secondary"
              onClick={() => playSound('click')}
            >
              <Code2 size={18} color="var(--accent-color)" /> View Systems (10)
            </a>

            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              className="btn-secondary"
              onClick={() => playSound('click')}
            >
              <FileText size={18} color="var(--accent-cyan)" />
              Resume PDF
            </a>

            <button
              onClick={() => {
                playSound('open');
                onOpenTerminal();
              }}
              className="btn-secondary"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.4)',
                background: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--accent-alt)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Terminal size={18} color="var(--accent-alt)" />
              Matrix CLI
            </button>
          </motion.div>

          {/* Interactive 15-Second Executive Audio Pitch */}
          <div style={{ pointerEvents: 'auto', width: '100%' }}>
            <AudioPitchPlayer />
          </div>

          {/* Live Impact Counters Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hero-metrics-grid"
            style={{
              marginTop: 'clamp(2.5rem, 6vw, 4.5rem)',
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
                className="card hero-metric-card spotlight-card"
                onMouseEnter={() => playSound('hover')}
                style={{ 
                  padding: '16px 14px', 
                  borderRadius: '18px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
                  fontWeight: 900, 
                  color: 'var(--accent-color)', 
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.5px'
                }}>
                  {item.num}
                </div>
                <div style={{ 
                  fontSize: '0.76rem', 
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
