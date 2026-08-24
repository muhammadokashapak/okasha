import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, Sun, Moon, Volume2, VolumeX, Sparkles, Zap, Award, Mic } from 'lucide-react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import ArchitectureGraph from './components/ArchitectureGraph';
import Experience from './components/Experience';
import Projects from './components/Projects';
import RagSimulator from './components/RagSimulator';
import BenchmarkMatrix from './components/BenchmarkMatrix';
import AiPlayground from './components/AiPlayground';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import TerminalModal from './components/TerminalModal';
import RecruiterModal from './components/RecruiterModal';
import VoiceCommandOverlay from './components/VoiceCommandOverlay';
import RoiCalculator from './components/RoiCalculator';
import TelemetryRadar from './components/TelemetryRadar';
import TensorVisualizer from './components/TensorVisualizer';
import CompetencyRadar from './components/CompetencyRadar';
import AiChatbot from './components/AiChatbot';
import MatrixRain from './components/MatrixRain';
import { playSound, isSoundMuted, setSoundMuted } from './utils/soundFx';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [soundMuted, setSoundMutedState] = useState(() => isSoundMuted());
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Global Dynamic Spotlight Cursor Tracker for .spotlight-card
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    playSound('click');
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    const nextState = !soundMuted;
    setSoundMutedState(nextState);
    setSoundMuted(nextState);
    if (!nextState) {
      playSound('success');
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Topology', href: '#architecture-graph' },
    { label: 'Systems', href: '#projects' },
    { label: 'RAG Lab', href: '#rag-simulator' },
    { label: 'Quantization', href: '#tensor-visualizer' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <CustomCursor />
      <MatrixRain isActive={matrixActive} onClose={() => setMatrixActive(false)} />
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onTriggerMatrix={() => {
          setTerminalOpen(false);
          setMatrixActive(true);
        }}
      />
      <RecruiterModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
      <VoiceCommandOverlay
        isOpen={voiceOpen}
        onClose={() => setVoiceOpen(false)}
        onOpenRecruiter={() => setRecruiterOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <AiChatbot />

      <nav className="glass-nav">
        <div className="nav-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '10px' }}>
          {/* Left/Center Group: Primary Section Links */}
          <div className="nav-links nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => playSound('hover')}
                style={{
                  padding: '7px 12px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Group: Action Suite */}
          <div className="nav-links nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Voice Command Button */}
            <button
              onClick={() => {
                playSound('open');
                setVoiceOpen(true);
              }}
              className="sound-toggle-btn"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 204, 0.12)',
                border: '1px solid var(--accent-color)',
                color: 'var(--accent-color)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Voice Control Mode"
              aria-label="Voice Command Mode"
            >
              <Mic size={15} />
            </button>

            {/* Recruiter Fast-Track Header Pill */}
            <button
              onClick={() => {
                playSound('open');
                setRecruiterOpen(true);
              }}
              style={{
                height: '34px',
                background: 'linear-gradient(135deg, rgba(0,255,204,0.14) 0%, rgba(56,189,248,0.14) 100%)',
                border: '1px solid var(--accent-color)',
                color: 'var(--accent-color)',
                padding: '0 14px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 0 15px rgba(0,255,204,0.22)'
              }}
              title="Open Recruiter 30-Second Executive Fast-Track"
            >
              <Zap size={14} /> <span>Recruiter Brief</span>
            </button>

            {/* Audio Sound Effects Toggle */}
            <button
              onClick={toggleSound}
              className="sound-toggle-btn"
              style={{ width: '34px', height: '34px', borderRadius: '50%' }}
              title={soundMuted ? "Unmute Sci-Fi UI Sounds" : "Mute Sci-Fi UI Sounds"}
              aria-label="Toggle Sound Effects"
            >
              {soundMuted ? <VolumeX size={15} color="var(--text-muted)" /> : <Volume2 size={15} color="var(--accent-color)" />}
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ width: '34px', height: '34px', borderRadius: '50%' }}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={15} color="#fbbf24" />
              ) : (
                <Moon size={15} color="#7c3aed" />
              )}
            </button>

            {/* CLI Terminal Launcher */}
            <button
              onClick={() => {
                playSound('open');
                setTerminalOpen(true);
              }}
              style={{
                height: '34px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: 'var(--accent-alt)',
                padding: '0 12px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              <Terminal size={14} /> <span>CLI</span>
            </button>

            {/* Resume Download */}
            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              onClick={() => playSound('click')}
              style={{
                height: '34px',
                background: 'var(--accent-gradient)',
                color: '#fff',
                padding: '0 16px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(0, 255, 204, 0.25)',
                textDecoration: 'none'
              }}
            >
              <FileText size={14} /> <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions (Theme + Audio + Hamburger) */}
          <div style={{ display: 'none' }} className="mobile-actions-wrapper">
            <button
              onClick={() => {
                playSound('open');
                setVoiceOpen(true);
              }}
              className="sound-toggle-btn mobile-hide-small"
              style={{ marginRight: '6px', color: 'var(--accent-color)', width: '32px', height: '32px' }}
              title="Voice Control Mode"
              aria-label="Voice Control Mode"
            >
              <Mic size={14} />
            </button>
            <button
              onClick={() => {
                playSound('open');
                setRecruiterOpen(true);
              }}
              className="mobile-hide-small"
              style={{
                background: 'rgba(0,255,204,0.15)',
                border: '1px solid var(--accent-color)',
                color: 'var(--accent-color)',
                padding: '4px 8px',
                borderRadius: '14px',
                fontSize: '0.72rem',
                fontWeight: 800,
                marginRight: '6px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
              title="Recruiter Fast-Track"
            >
              ⚡ Brief
            </button>
            <button
              onClick={toggleSound}
              className="sound-toggle-btn"
              style={{ marginRight: '6px', width: '32px', height: '32px' }}
              aria-label="Toggle Sound Effects"
            >
              {soundMuted ? <VolumeX size={14} color="var(--text-muted)" /> : <Volume2 size={14} color="var(--accent-color)" />}
            </button>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ marginRight: '6px', width: '32px', height: '32px' }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} color="#fbbf24" /> : <Moon size={15} color="#7c3aed" />}
            </button>
            <button
              className="nav-toggle"
              onClick={() => {
                playSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {mobileMenuOpen ? <X size={22} color="var(--accent-color)" /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  playSound('hover');
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <button
                onClick={() => {
                  playSound('open');
                  setMobileMenuOpen(false);
                  setVoiceOpen(true);
                }}
                style={{
                  background: 'rgba(0, 255, 204, 0.15)',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)',
                  padding: '10px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Mic size={16} /> 🎙️ Voice Control Mode
              </button>

              <button
                onClick={() => {
                  playSound('open');
                  setMobileMenuOpen(false);
                  setRecruiterOpen(true);
                }}
                style={{
                  background: 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 100%)',
                  color: '#030308',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Zap size={16} /> ⚡ Recruiter 30s Fast-Track Brief
              </button>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    playSound('open');
                    setMobileMenuOpen(false);
                    setTerminalOpen(true);
                  }}
                  style={{
                    flex: 1,
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid var(--accent-alt)',
                    color: 'var(--accent-alt)',
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Terminal size={16} /> &gt;_ CLI
                </button>

                <a
                  href="/Muhammad_Okasha_Resume.pdf"
                  download="Muhammad_Okasha_Resume.pdf"
                  onClick={() => playSound('click')}
                  style={{
                    flex: 1,
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <FileText size={16} /> Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenRecruiter={() => setRecruiterOpen(true)}
          theme={theme}
        />
        <TelemetryRadar />
        <About />
        <ArchitectureGraph />
        <CompetencyRadar />
        <Expertise />
        <Projects />
        <RagSimulator />
        <TensorVisualizer />
        <BenchmarkMatrix />
        <RoiCalculator />
        <Experience />
        <AiPlayground />
        <Skills />
        <Contact />
      </main>

      {/* ── Ultra-Luxury Executive Footer ── */}
      <footer style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--card-border)',
        background: 'var(--bg-color)',
        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(12px, 3vw, 24px) 2rem',
        marginTop: '2rem',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.8rem', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', width: '100%' }}>
            <div style={{ maxWidth: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="nav-brand" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', fontWeight: 800 }}>
                  Muhammad Okasha<span style={{ color: 'var(--accent-color)' }}>.</span>
                </span>
                <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', fontSize: '0.72rem' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} /> Available for Hire
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginTop: '6px', maxWidth: '460px', lineHeight: 1.5 }}>
                Muhammad Okasha — AI Solutions Architect &amp; Machine Learning Engineer (B.E. Computer Systems, UET Peshawar).
              </p>
            </div>

            {/* Footer Navigation Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 2vw, 14px)', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => playSound('hover')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', fontWeight: 600, transition: 'color 0.2s', padding: '3px 0' }}
                >
                  {item.label}
                </a>
              ))}
              
              <button
                onClick={() => {
                  playSound('click');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  color: 'var(--accent-color)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                ↑ Top
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.25rem', width: '100%' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: '100%' }}>
              © 2026 Muhammad Okasha. Engineered with Neural Precision &amp; Distributed Architecture.
            </div>

            <div style={{ display: 'flex', gap: 'clamp(10px, 2.5vw, 16px)', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/muhammadokashapak" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600 }}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/muhammad-okasha23" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600 }}>
                LinkedIn
              </a>
              <a href="https://wa.me/923495696659" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 600 }}>
                WhatsApp
              </a>
              <a href="mailto:muhammad.okasha2146@gmail.com" style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 600 }}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1100px) {
          .mobile-actions-wrapper {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;
