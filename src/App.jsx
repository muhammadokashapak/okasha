import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AiPlayground from './components/AiPlayground';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import TerminalModal from './components/TerminalModal';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Sentinel', href: '#ai-playground' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <CustomCursor />
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      <nav className="glass-nav">
        <div className="nav-content">
          <a href="#home" className="nav-brand">
            MO<span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>

          {/* Desktop Nav Links & Actions */}
          <div className="nav-links nav-links-desktop" style={{ alignItems: 'center' }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={17} color="#fbbf24" />
              ) : (
                <Moon size={17} color="#7c3aed" />
              )}
            </button>

            {/* CLI Terminal Launcher */}
            <button
              onClick={() => setTerminalOpen(true)}
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: 'var(--accent-alt)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Terminal size={14} /> &gt;_ CLI
            </button>

            {/* CV Download */}
            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              style={{
                background: 'var(--accent-gradient)',
                color: '#fff',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(0, 255, 204, 0.25)'
              }}
            >
              <FileText size={14} /> CV
            </a>
          </div>

          {/* Mobile Actions (Theme + Hamburger) */}
          <div style={{ display: 'none' }} className="mobile-actions-wrapper">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ marginRight: '8px' }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#7c3aed" />}
            </button>
            <button
              className="nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} color="var(--accent-color)" /> : <Menu size={26} />}
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
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button
                onClick={() => {
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
        )}
      </nav>

      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} theme={theme} />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <AiPlayground />
        <Skills />
        <Contact />
      </main>

      <style>{`
        @media (max-width: 900px) {
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
