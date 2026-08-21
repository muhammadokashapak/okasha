import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layers, Zap, CheckCircle2, Server, ArrowRight, ShieldCheck } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ProjectModal({ project, onClose }) {
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

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                background: 'rgba(0, 255, 204, 0.1)',
                border: '1px solid rgba(0, 255, 204, 0.3)',
                padding: '14px',
                borderRadius: '16px',
                color: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {project.icon || <Cpu size={32} />}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span className="section-tag" style={{ margin: 0, padding: '2px 10px', fontSize: '0.72rem' }}>
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                      {project.status}
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', color: '#fff', fontWeight: 800 }}>
                  {project.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2px' }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(244, 63, 94, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Key Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '12px',
              marginBottom: '1.8rem'
            }}>
              {project.metrics.map((m, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '12px 16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-color)', fontFamily: 'var(--font-display)' }}>
                    {m.val}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 500 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Overview */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} color="var(--accent-color)" /> System Architecture & Overview
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
              {project.deepOverview || project.description}
            </p>
          </div>

          {/* Architecture Highlights / Key Features */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '1.8rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} color="var(--accent-amber)" /> Key Engineering Highlights
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {project.features.map((feat, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>
                    <CheckCircle2 size={16} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Matrix */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} color="var(--accent-alt)" /> Technologies & Core Libraries
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="badge-neon" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.2rem' }}>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              Close
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
}
