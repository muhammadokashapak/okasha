import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const greetings = [
  { text: "Hello", lang: "English", flag: "🇬🇧" },
  { text: "السلام علیکم", lang: "Urdu", flag: "🇵🇰" },
  { text: "مرحباً", lang: "Arabic", flag: "🇸🇦" },
  { text: "Bonjour", lang: "French", flag: "🇫🇷" },
  { text: "Hola", lang: "Spanish", flag: "🇪🇸" },
  { text: "Hallo", lang: "German", flag: "🇩🇪" },
  { text: "你好", lang: "Chinese", flag: "🇨🇳" },
  { text: "こんにちは", lang: "Japanese", flag: "🇯🇵" },
  { text: "Muhammad Okasha", lang: "AI Architect", flag: "⚡" }
];

export default function IntroGreetings({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Play initial subtle activation sound
    playSound('hover');

    // Step through each greeting quickly and smoothly
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < greetings.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 350);
          return prevIndex;
        }
      });
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          onClick={handleSkip}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#030308',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            userSelect: 'none'
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(600px, 90vw)',
              height: 'min(600px, 90vw)',
              background: 'radial-gradient(circle, rgba(0, 255, 204, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }}
          />

          {/* Center Morphing Greetings Text */}
          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2, padding: '0 20px' }}>
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 14px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(0, 255, 204, 0.3)',
                color: 'var(--accent-color, #00ffcc)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '1.8rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px', background: '#00ffcc' }} />
              <span>{greetings[index].flag} {greetings[index].lang}</span>
            </motion.div>

            {/* Word Animation */}
            <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 15, filter: 'blur(8px)', scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(8px)', scale: 1.05 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  style={{
                    fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
                    fontWeight: 900,
                    margin: 0,
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    color: index === greetings.length - 1 ? 'transparent' : '#ffffff',
                    background: index === greetings.length - 1 ? 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 50%, #8b5cf6 100%)' : 'none',
                    WebkitBackgroundClip: index === greetings.length - 1 ? 'text' : 'none',
                    WebkitTextFillColor: index === greetings.length - 1 ? 'transparent' : '#ffffff',
                    letterSpacing: index === greetings.length - 1 ? '-0.5px' : '0.5px',
                    textShadow: index === greetings.length - 1 ? 'none' : '0 0 35px rgba(0, 255, 204, 0.4)'
                  }}
                >
                  {greetings[index].text}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Progress Bar Line */}
            <div
              style={{
                width: '180px',
                height: '3px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                margin: '2rem auto 0',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                animate={{
                  width: `${((index + 1) / greetings.length) * 100}%`
                }}
                transition={{ duration: 0.2, ease: 'linear' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00ffcc, #38bdf8, #8b5cf6)',
                  borderRadius: '10px',
                  boxShadow: '0 0 10px rgba(0, 255, 204, 0.8)'
                }}
              />
            </div>
          </div>

          {/* Bottom Tap to Skip Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            style={{
              position: 'absolute',
              bottom: '30px',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Click anywhere to skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
