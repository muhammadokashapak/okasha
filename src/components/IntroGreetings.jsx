import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const greetings = [
  { 
    text: "Hello", 
    subtext: "Welcome to my portfolio", 
    lang: "English", 
    flag: "🇬🇧",
    color: "#00ffcc"
  },
  { 
    text: "السلام علیکم", 
    subtext: "میری پورٹ فولیو میں خوش آمدید", 
    lang: "Urdu", 
    flag: "🇵🇰",
    color: "#10b981"
  },
  { 
    text: "مرحباً", 
    subtext: "أهلاً بكم في ملفي التعريفي", 
    lang: "Arabic", 
    flag: "🇸🇦",
    color: "#38bdf8"
  },
  { 
    text: "Bonjour", 
    subtext: "Bienvenue sur mon portfolio", 
    lang: "French", 
    flag: "🇫🇷",
    color: "#8b5cf6"
  },
  { 
    text: "Hola", 
    subtext: "Bienvenido a mi portafolio", 
    lang: "Spanish", 
    flag: "🇪🇸",
    color: "#f59e0b"
  },
  { 
    text: "Hallo", 
    subtext: "Willkommen in meinem Portfolio", 
    lang: "German", 
    flag: "🇩🇪",
    color: "#06b6d4"
  },
  { 
    text: "你好", 
    subtext: "欢迎访问我的个人作品集", 
    lang: "Chinese", 
    flag: "🇨🇳",
    color: "#f43f5e"
  },
  { 
    text: "こんにちは", 
    subtext: "ポートフォリオへようこそ", 
    lang: "Japanese", 
    flag: "🇯🇵",
    color: "#ec4899"
  },
  { 
    text: "Muhammad Okasha", 
    subtext: "AI Solutions Architect & Systems Engineer", 
    lang: "Engineering", 
    flag: "⚡",
    color: "#00ffcc"
  }
];

export default function IntroGreetings({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const STEP_DURATION = 1650; // ~1.65 seconds per language for clear readability

  useEffect(() => {
    // Sound effect on start
    playSound('hover');

    const timer = setTimeout(() => {
      if (index < greetings.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIsVisible(false);
        if (onComplete) onComplete();
      }
    }, STEP_DURATION);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const handleSkip = () => {
    playSound('click');
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  const current = greetings[index];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#030308',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            userSelect: 'none',
            padding: '20px'
          }}
        >
          {/* Ambient Lighting Spheres */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(650px, 90vw)',
              height: 'min(650px, 90vw)',
              background: `radial-gradient(circle, ${current.color}1c 0%, rgba(139, 92, 246, 0.08) 45%, transparent 75%)`,
              filter: 'blur(70px)',
              transition: 'background 0.6s ease',
              pointerEvents: 'none'
            }}
          />

          {/* Top Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleSkip}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              color: 'var(--text-secondary, #94a3b8)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-color, #00ffcc)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = 'var(--text-secondary, #94a3b8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>Skip Intro</span>
            <ArrowRight size={14} />
          </motion.button>

          {/* Center Card Content */}
          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2, maxWidth: '800px', width: '100%' }}>
            
            {/* Language & Flag Pill */}
            <motion.div
              key={`pill-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${current.color}50`,
                boxShadow: `0 0 20px ${current.color}25`,
                color: current.color,
                fontSize: '0.84rem',
                fontWeight: 700,
                letterSpacing: '0.6px',
                marginBottom: '1.8rem',
                backdropFilter: 'blur(12px)'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{current.flag}</span>
              <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{current.lang}</span>
            </motion.div>

            {/* Big Greeting Word */}
            <div style={{ minHeight: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`text-${index}`}
                  initial={{ opacity: 0, y: 25, filter: 'blur(10px)', scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -25, filter: 'blur(10px)', scale: 1.04 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  style={{
                    fontSize: 'clamp(2.6rem, 8vw, 5.2rem)',
                    fontWeight: 900,
                    margin: 0,
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    color: index === greetings.length - 1 ? 'transparent' : '#ffffff',
                    background: index === greetings.length - 1 
                      ? 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 50%, #8b5cf6 100%)' 
                      : 'none',
                    WebkitBackgroundClip: index === greetings.length - 1 ? 'text' : 'none',
                    WebkitTextFillColor: index === greetings.length - 1 ? 'transparent' : '#ffffff',
                    textShadow: index === greetings.length - 1 ? 'none' : `0 0 35px ${current.color}60`,
                    letterSpacing: index === greetings.length - 1 ? '-0.5px' : '0.5px',
                    lineHeight: 1.2
                  }}
                >
                  {current.text}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle / Meaning */}
            <div style={{ minHeight: '36px', marginTop: '12px' }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  style={{
                    color: 'var(--text-secondary, #94a3b8)',
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: '0.3px'
                  }}
                >
                  {current.subtext}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Language Step Dots Navigation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '2.5rem'
              }}
            >
              {greetings.map((item, idx) => {
                const isActive = idx === index;
                const isPast = idx < index;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setIndex(idx)}
                    style={{
                      height: '6px',
                      width: isActive ? '32px' : '10px',
                      borderRadius: '10px',
                      background: isActive 
                        ? current.color 
                        : isPast 
                        ? 'rgba(255, 255, 255, 0.35)' 
                        : 'rgba(255, 255, 255, 0.12)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive ? `0 0 12px ${current.color}` : 'none'
                    }}
                    title={item.lang}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom Click to Enter Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            style={{
              position: 'absolute',
              bottom: '28px',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Click anywhere to enter portfolio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
