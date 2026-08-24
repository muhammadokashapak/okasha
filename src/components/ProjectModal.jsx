import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Server, 
  ArrowRight, 
  ShieldCheck,
  Workflow,
  Sparkles,
  Database,
  Code2,
  Lock,
  Boxes
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'features' | 'stack'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const modalContent = (
    <AnimatePresence>
      <div 
        className="modal-backdrop" 
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(12px, 3vw, 28px)',
          background: 'rgba(3, 3, 10, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)'
        }}
      >
        <motion.div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            maxHeight: '88vh',
            overflowY: 'auto',
            borderRadius: '26px',
            border: '1px solid var(--modal-border)',
            background: 'var(--modal-bg)',
            boxShadow: 'var(--modal-shadow)',
            padding: 'clamp(1.4rem, 4vw, 2.5rem)',
            zIndex: 100000
          }}
        >
          {/* Top Ambient Glow Orb */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '320px',
            height: '140px',
            background: 'radial-gradient(ellipse, var(--accent-color) 0%, transparent 70%)',
            opacity: 0.2,
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }} />

          {/* Modal Header */}
          <div className="modal-header-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.4rem',
            marginBottom: '1.5rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: 0 }}>
              <div style={{
                background: 'rgba(0, 255, 204, 0.08)',
                border: '1px solid rgba(0, 255, 204, 0.3)',
                padding: '14px',
                borderRadius: '18px',
                color: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(0, 255, 204, 0.15)'
              }}>
                {project.icon || <Cpu size={30} />}
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span className="section-tag" style={{ margin: 0, padding: '3px 12px', fontSize: '0.72rem' }}>
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px' }}>
                      <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                      {project.status}
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.85rem)', color: 'var(--text-primary)', fontWeight: 800, wordBreak: 'break-word', letterSpacing: '-0.4px' }}>
                  {project.title}
                </h2>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', marginTop: '2px', fontWeight: 500, wordBreak: 'break-word' }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                color: 'var(--text-primary)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(244, 63, 94, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.6)';
                e.currentTarget.style.transform = 'scale(1.08) rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--btn-sec-bg)';
                e.currentTarget.style.borderColor = 'var(--btn-sec-border)';
                e.currentTarget.style.transform = 'none';
              }}
              title="Close Modal (Esc)"
            >
              <X size={18} />
            </button>
          </div>

          {/* Key Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-metrics-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginBottom: '1.8rem'
            }}>
              {project.metrics.map((m, idx) => (
                <div key={idx} style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  borderRadius: '16px',
                  padding: '14px 16px',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-color)', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
                    {m.val}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 600 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIP Navigation Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '0.8rem',
            marginBottom: '1.6rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActiveTab('architecture')}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                fontSize: '0.86rem',
                fontWeight: 600,
                border: activeTab === 'architecture' ? '1px solid var(--accent-color)' : '1px solid transparent',
                background: activeTab === 'architecture' ? 'rgba(0, 255, 204, 0.12)' : 'transparent',
                color: activeTab === 'architecture' ? 'var(--accent-color)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <Workflow size={15} /> System Architecture &amp; Flow
            </button>

            <button
              onClick={() => setActiveTab('features')}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                fontSize: '0.86rem',
                fontWeight: 600,
                border: activeTab === 'features' ? '1px solid var(--accent-alt)' : '1px solid transparent',
                background: activeTab === 'features' ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                color: activeTab === 'features' ? 'var(--accent-alt)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <Zap size={15} /> Key Engineering Highlights
            </button>

            <button
              onClick={() => setActiveTab('stack')}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                fontSize: '0.86rem',
                fontWeight: 600,
                border: activeTab === 'stack' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                background: activeTab === 'stack' ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                color: activeTab === 'stack' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <Boxes size={15} /> Technology Matrix
            </button>
          </div>

          {/* Tab 1: Architecture & Flow */}
          {activeTab === 'architecture' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {/* Architecture Pipeline Flowchart */}
              {project.pipeline && project.pipeline.length > 0 && (
                <div style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  borderRadius: '18px',
                  padding: '16px',
                  marginBottom: '1.6rem'
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={14} /> End-to-End Data Pipeline Flow
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {project.pipeline.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div style={{
                          background: 'var(--card-bg)',
                          border: '1px solid var(--card-border)',
                          padding: '7px 13px',
                          borderRadius: '10px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span style={{ color: 'var(--accent-color)', fontWeight: 800 }}>{sIdx + 1}.</span> {step}
                        </div>
                        {sIdx < project.pipeline.length - 1 && (
                          <ArrowRight size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Deep Technical Overview */}
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={18} color="var(--accent-color)" /> Architectural Deep-Dive
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75 }}>
                  {project.deepOverview || project.description}
                </p>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Key Features & Engineering Highlights */}
          {activeTab === 'features' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '1.2rem' }}>
                {project.features && project.features.map((feat, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--btn-sec-border)',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    <CheckCircle2 size={18} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 3: Technology Matrix */}
          {activeTab === 'stack' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                borderRadius: '18px',
                padding: '18px',
                marginBottom: '1.4rem'
              }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Server size={18} color="var(--accent-alt)" /> Core Frameworks, Libraries &amp; Engines
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge-neon" style={{ padding: '7px 15px', fontSize: '0.82rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer Actions */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'flex-end',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.4rem',
            marginTop: '2rem'
          }}>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              Close Window
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.9rem' }}
              >
                <GithubIcon size={16} /> Explore Repository
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
