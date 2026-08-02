import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Sphere } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

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

export default function Hero() {
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
        padding: '100px 20px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <div style={{ position: 'absolute', width: 'min(600px, 90vw)', height: 'min(600px, 90vw)', background: 'radial-gradient(circle, rgba(0,255,204,0.15) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: -1 }} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '900px' }}
        >
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', marginBottom: '1.2rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)', wordBreak: 'break-word' }}>
            Hi, I'm <span className="gradient-text">Muhammad Okasha</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2.2rem)', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: 1.4 }}>
            Data Scientist | Machine Learning Engineer
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

