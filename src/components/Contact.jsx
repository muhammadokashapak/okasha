import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  Clock,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Download
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = (text, type) => {
    playSound('success');
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    playSound('success');
    setSentStatus(true);

    // Formulate mailto link
    const mailtoUrl = `mailto:muhammad.okasha2146@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Project Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <footer id="contact" style={{ position: 'relative', borderTop: '1px solid var(--card-border)', marginTop: 'clamp(4rem, 7vw, 7rem)', padding: 'clamp(3.5rem, 6vw, 6.5rem) 0 3rem 0', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(800px, 95vw)',
        height: 'min(700px, 95vw)',
        background: 'radial-gradient(circle, var(--accent-gradient-color-2, rgba(139,92,246,0.12)) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '1240px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="section-header" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div className="section-tag">
              <Sparkles size={14} /> Get In Touch
            </div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Build Together</span>
            </h2>
            <p className="section-subtitle">
              Have an ambitious AI project, enterprise RAG pipeline, or systems architecture requirement? Let's connect and make it reality.
            </p>
          </div>

          {/* ── 2-Column Executive Contact Bento Grid ── */}
          <div className="contact-bento-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'stretch',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)'
          }}>

            {/* ── Left Column: Direct Info & Quick Action Cards ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              
              {/* Primary Direct Card: Email */}
              <div 
                className="card" 
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  borderRadius: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                  <div style={{
                    background: 'rgba(0, 255, 204, 0.1)',
                    border: '1px solid rgba(0, 255, 204, 0.25)',
                    padding: '12px',
                    borderRadius: '14px',
                    color: 'var(--accent-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Primary Email
                    </div>
                    <a 
                      href="mailto:muhammad.okasha2146@gmail.com" 
                      style={{ 
                        color: 'var(--text-primary)', 
                        fontWeight: 700, 
                        fontSize: 'clamp(0.88rem, 2vw, 1.02rem)',
                        display: 'block',
                        wordBreak: 'break-word',
                        marginTop: '2px'
                      }}
                    >
                      muhammad.okasha2146@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('muhammad.okasha2146@gmail.com', 'email')}
                  style={{
                    background: copiedEmail ? 'rgba(16, 185, 129, 0.18)' : 'var(--btn-sec-bg)',
                    border: `1px solid ${copiedEmail ? 'rgba(16, 185, 129, 0.4)' : 'var(--btn-sec-border)'}`,
                    color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-primary)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div 
                className="card" 
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  borderRadius: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                  <div style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '12px',
                    borderRadius: '14px',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Phone / WhatsApp
                    </div>
                    <a 
                      href="tel:+923495696659" 
                      style={{ 
                        color: 'var(--text-primary)', 
                        fontWeight: 700, 
                        fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                        display: 'block',
                        marginTop: '2px'
                      }}
                    >
                      +92 3495696659
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+923495696659', 'phone')}
                  style={{
                    background: copiedPhone ? 'rgba(16, 185, 129, 0.18)' : 'var(--btn-sec-bg)',
                    border: `1px solid ${copiedPhone ? 'rgba(16, 185, 129, 0.4)' : 'var(--btn-sec-border)'}`,
                    color: copiedPhone ? 'var(--accent-emerald)' : 'var(--text-primary)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Resume Card (High-Impact VIP Glow) */}
              <div 
                className="card" 
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 255, 204, 0.35)',
                  background: 'rgba(0, 255, 204, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    background: 'var(--accent-gradient)',
                    padding: '12px',
                    borderRadius: '14px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 15px rgba(0, 255, 204, 0.3)'
                  }}>
                    <FileText size={22} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Official Curriculum Vitae
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '1rem', marginTop: '1px' }}>
                      Muhammad Okasha Resume
                    </div>
                  </div>
                </div>

                <a
                  href="/Muhammad_Okasha_Resume.pdf"
                  download="Muhammad_Okasha_Resume.pdf"
                  onClick={() => playSound('click')}
                  className="btn-primary"
                  style={{
                    padding: '9px 18px',
                    fontSize: '0.85rem',
                    borderRadius: '12px',
                    flexShrink: 0
                  }}
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>

              {/* Location & Timezone Pill */}
              <div 
                className="card" 
                style={{
                  padding: '1.2rem 1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  marginTop: 'auto'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <MapPin size={20} color="var(--accent-alt)" />
                  <div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.92rem' }}>
                      Islamabad, Pakistan
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      PKT (UTC+5) • Open for Global Remote &amp; On-Site Roles
                    </div>
                  </div>
                </div>
                <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} /> Active
                </span>
              </div>
            </div>

            {/* ── Right Column: Direct Message Dispatch Cockpit ── */}
            <div
              className="card"
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.4rem' }}>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  padding: '8px',
                  borderRadius: '10px',
                  color: 'var(--accent-alt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MessageSquare size={18} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '-0.3px' }}>
                  Send a Direct Message
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '1.4rem', lineHeight: 1.5 }}>
                Fill out the brief scope below to immediately transmit your project specs to my primary inbox.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="contact-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '5px' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '12px',
                        padding: '11px 14px',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '5px' }}>
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '12px',
                        padding: '11px 14px',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '5px' }}>
                    PROJECT SCOPE / TOPIC
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise RAG Assistant / Machine Learning Model"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--btn-sec-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '5px' }}>
                    MESSAGE DETAILS *
                  </label>
                  <textarea
                    placeholder="Describe your vision, timeline, or technical requirements..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--btn-sec-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '13px',
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginTop: '4px'
                  }}
                >
                  {sentStatus ? (
                    <>
                      <Check size={18} /> Opening Mail Client...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Inquiry via Mail
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ── Social Hub Icons & Footer Tag ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2.5rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href="https://github.com/muhammadokashapak"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  color: 'var(--text-primary)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.25s'
                }}
                className="social-hover-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/muhammad-okasha23"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  color: 'var(--text-primary)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.25s'
                }}
                className="social-hover-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', textAlign: 'center' }}>
              © {new Date().getFullYear()} Muhammad Okasha. Built with React 19, Three.js &amp; Advanced Multimodal AI Systems.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .social-hover-btn:hover {
          border-color: var(--accent-color) !important;
          background: rgba(0, 255, 204, 0.08) !important;
          transform: translateY(-2px);
          color: var(--accent-color) !important;
        }
        @media (max-width: 960px) {
          .contact-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
