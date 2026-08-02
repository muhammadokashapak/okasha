import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { FileText, Terminal, ArrowDownCircle } from 'lucide-react';

function Starfield(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffcc"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100dvh', width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div style={{
        position: 'relative',
        minHeight: '100dvh',
        width: '100%',
        padding: '120px 20px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <div style={{ position: 'absolute', width: 'min(650px, 90vw)', height: 'min(650px, 90vw)', background: 'radial-gradient(circle, rgba(0,255,204,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)', filter: 'blur(50px)', zIndex: -1 }} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '900px' }}
        >
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 255, 204, 0.08)',
            border: '1px solid rgba(0, 255, 204, 0.25)',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            pointerEvents: 'auto'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ffcc', boxShadow: '0 0 8px #00ffcc', animation: 'pulse 2s infinite' }} />
            <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>
              Available for ML &amp; Data Science Opportunities
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', marginBottom: '1.2rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)', wordBreak: 'break-word' }}>
            Hi, I'm <span className="gradient-text">Muhammad Okasha</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2.2rem)', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: 1.4 }}>
            Machine Learning Engineer | Data Scientist
          </h2>
          
          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              marginTop: 'clamp(2rem, 5vw, 3rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.2rem',
              pointerEvents: 'auto'
            }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>

            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              className="card"
              style={{
                padding: '14px 28px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                color: '#fff',
                fontSize: '1rem',
                border: '1px solid rgba(0, 255, 204, 0.4)',
                background: 'rgba(0, 255, 204, 0.06)'
              }}
            >
              <FileText size={18} color="var(--accent-color)" />
              Download Resume
            </a>

            <button
              onClick={onOpenTerminal}
              className="card"
              style={{
                padding: '14px 22px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                color: 'var(--accent-color)',
                fontSize: '0.95rem',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                background: 'rgba(139, 92, 246, 0.08)',
                cursor: 'pointer'
              }}
            >
              <Terminal size={18} />
              &gt;_ CLI Mode
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}


