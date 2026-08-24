import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

export default function RecruiterModal({ isOpen, onClose }) {
  const [copiedDossier, setCopiedDossier] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSound('close');
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyDossier = () => {
    playSound('success');
    const dossierText = `Candidate: Muhammad Okasha
Title: AI Solutions Architect & Machine Learning Engineer
Education: B.E. Computer Systems Engineering, UET Peshawar
Location: Islamabad, Pakistan (PKT / UTC+5) - Open for Global Remote & Relocation
Key Wins:
• 5,717 vector chunks indexed in production GHL Multimodal RAG (<150ms FastEmbed ONNX)
• 250% Search Revenue Surge driven at Bit Build via AI analytics pipelines
• Sub-50ms Real-Time Voice Intelligence Co-Pilot for Zoom & Meet
• 100% On-Device AI Android app (INT8 Whisper + MarianMT seq2seq, 0 KB cloud data)
Tech Stack: PyTorch, LangChain, ChromaDB, FastEmbed ONNX, FastAPI, React 19, Kotlin, Jetpack Compose, Docker
Email: muhammad.okasha2146@gmail.com | Phone: +92 3495696659
Portfolio: https://github.com/muhammadokashapak/okasha`;

    navigator.clipboard.writeText(dossierText);
    setCopiedDossier(true);
    setTimeout(() => setCopiedDossier(false), 2500);
  };

  const handleSendEmail = () => {
    playSound('click');
    const email = "muhammad.okasha2146@gmail.com";
    const subject = encodeURIComponent("Interview Invitation for Muhammad Okasha (AI Architect / Engineer)");
    const body = encodeURIComponent("Hi Muhammad Okasha,\n\nWe reviewed your portfolio and production AI systems and would love to schedule a preliminary technical interview / discussion.\n\nBest regards,");
    
    // Copy email to clipboard as guarantee
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);

    // Open Web Gmail in new tab (best for 95% of recruiters)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    // Also trigger default mail client fallback
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 200);
  };

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div 
        className="modal-backdrop" 
        onClick={() => {
          playSound('close');
          onClose();
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(12px, 3vw, 24px)',
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
            maxWidth: '920px',
            maxHeight: '88vh',
            overflowY: 'auto',
            borderRadius: '26px',
            border: '1px solid var(--accent-color)',
            background: 'var(--modal-bg)',
            boxShadow: '0 0 50px rgba(0, 255, 204, 0.25), var(--modal-shadow)',
            padding: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            zIndex: 100000
          }}
        >
          {/* Header Strip */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            borderBottom: '1px solid var(--card-border)',
            paddingBottom: '1.2rem',
            marginBottom: '1.4rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <span className="section-tag" style={{ margin: 0, padding: '3px 12px', fontSize: '0.74rem', background: 'rgba(0, 255, 204, 0.12)' }}>
                  <Zap size={13} /> Recruiter Executive Fast-Track
                </span>
                <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  Available for Immediate Hire
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                Muhammad Okasha — <span className="gradient-text">Candidate 30s Brief</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '2px' }}>
                AI Solutions Architect &amp; Machine Learning Engineer • B.E. Computer Systems (UET Peshawar)
              </p>
            </div>

            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                color: 'var(--text-primary)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              title="Close Fast-Track"
            >
              <X size={18} />
            </button>
          </div>

          {/* Target Role & Clearance Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
            marginBottom: '1.4rem'
          }}>
            <div style={{ background: 'var(--btn-sec-bg)', border: '1px solid var(--btn-sec-border)', padding: '12px 14px', borderRadius: '14px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>TARGET ROLES</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem', marginTop: '2px' }}>
                AI Architect • GenAI &amp; RAG Lead • Edge AI Engineer
              </div>
            </div>

            <div style={{ background: 'var(--btn-sec-bg)', border: '1px solid var(--btn-sec-border)', padding: '12px 14px', borderRadius: '14px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>LOCATION &amp; WORK MODE</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem', marginTop: '2px' }}>
                Islamabad, PK (UTC+5) • Open for Global Remote &amp; On-Site
              </div>
            </div>

            <div style={{ background: 'var(--btn-sec-bg)', border: '1px solid var(--btn-sec-border)', padding: '12px 14px', borderRadius: '14px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>AVAILABILITY &amp; TIMEZONE</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem', marginTop: '2px' }}>
                Immediate • Flexible with US/EU Timezone Overlap
              </div>
            </div>
          </div>

          {/* 3 Quantifiable Power Wins */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="var(--accent-amber)" /> Top 3 Quantifiable Production Wins
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
              <div style={{
                background: 'rgba(0, 255, 204, 0.04)',
                border: '1px solid rgba(0, 255, 204, 0.25)',
                borderRadius: '16px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent-color)' }}>
                  5,717 Vector Chunks
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Enterprise Multimodal GHL RAG
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Built ChatGPT-grade cockpit with FastEmbed ONNX (&lt;150ms), Reciprocal Rank Fusion, and Gemini 3.7 vision OCR.
                </div>
              </div>

              <div style={{
                background: 'rgba(139, 92, 246, 0.04)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '16px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent-alt)' }}>
                  250% Revenue Surge
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Bit Build AI Analytics Engine
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Engineered automated reporting pipelines across 20+ global campaigns, delivering actionable C-suite growth insights.
                </div>
              </div>

              <div style={{
                background: 'rgba(56, 189, 248, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '16px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>
                  &lt;50ms Real-Time Voice RAG
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Sales Voice Co-Pilot for Zoom/Meet
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Live WebRTC audio capture, local Whisper STT, Ollama intent decider, and battlecard retrieval into earphone HUD.
                </div>
              </div>
            </div>
          </div>

          {/* Verified Technical Stack Matrix */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code2 size={18} color="var(--accent-color)" /> Verified Technical Competencies
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                "Generative AI & LLMs", "Multimodal RAG", "ChromaDB (5,717 Chunks)", "FastEmbed ONNX", "Gemini 3.7 Flash",
                "OpenAI Whisper INT8", "MarianMT Seq2Seq", "YOLOv8 .tflite", "PyTorch", "FastAPI (Async)", "React 19 / Vite",
                "Android Kotlin / Compose", "WebSockets / WebRTC", "SQLite WAL Mode", "Docker", "Capacitor Native"
              ].map((tech, i) => (
                <span key={i} className="badge-neon" style={{ padding: '5px 12px', fontSize: '0.78rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Executive 1-Click Action Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--card-border)',
            paddingTop: '1.4rem'
          }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href="/Muhammad_Okasha_Resume.pdf"
                download="Muhammad_Okasha_Resume.pdf"
                onClick={() => playSound('click')}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
              >
                <Download size={16} /> Download Official Resume PDF
              </a>

              <button
                onClick={handleCopyDossier}
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
              >
                {copiedDossier ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                <span>{copiedDossier ? 'Dossier Copied!' : 'Copy Candidate Dossier'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923495696659"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="btn-secondary"
                style={{ padding: '10px 16px', fontSize: '0.88rem' }}
              >
                <Phone size={15} color="var(--accent-emerald)" /> WhatsApp Call
              </a>

              <button
                onClick={handleSendEmail}
                className="btn-secondary"
                style={{
                  padding: '10px 16px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  border: copiedEmail ? '1px solid var(--accent-emerald)' : '1px solid var(--btn-sec-border)',
                  color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-primary)'
                }}
              >
                {copiedEmail ? <Check size={15} color="var(--accent-emerald)" /> : <Mail size={15} color="var(--accent-cyan)" />}
                <span>{copiedEmail ? 'Email Copied & Gmail Opened!' : 'Email Interview Invitation'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
