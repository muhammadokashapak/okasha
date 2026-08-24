import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundFx';

export default function MatrixRain({ isActive, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    playSound('matrix');
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const characters = '0123456789ABCDEFΣΨΩλπθΔ01010101RAGLLMTRANSFORMERNEURALQUANTIZE0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 3, 8, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffcc';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomly highlight leading character in white/cyan
        if (Math.random() > 0.92) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = '#00ffcc';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(3, 3, 8, 0.92)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      {/* Top HUD Banner */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          background: 'rgba(10, 12, 26, 0.75)',
          borderBottom: '1px solid rgba(0, 255, 204, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={18} color="#00ffcc" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00ffcc', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px' }}>
            CYBER MATRIX OVERRIDE [ACTIVE]
          </span>
        </div>

        <button
          onClick={() => {
            playSound('close');
            onClose();
          }}
          style={{
            background: 'rgba(244, 63, 94, 0.15)',
            border: '1px solid #f43f5e',
            color: '#f43f5e',
            padding: '6px 14px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <X size={16} /> Exit Matrix
        </button>
      </div>
    </div>
  );
}
