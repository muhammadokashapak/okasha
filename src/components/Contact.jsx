import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileText, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
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
    const mailtoUrl = `mailto:muhammad.okasha2146@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <footer id="contact" style={{ position: 'relative', borderTop: '1px solid var(--card-border)', marginTop: 'clamp(3rem, 6vw, 6rem)', padding: 'clamp(3rem, 6vw, 6rem) 0 3rem 0', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(700px, 90vw)', height: 'min(700px, 90vw)', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <div className="section-header" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="section-tag">
              <Mail size={14} /> Direct Portal
            </div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Build Together</span>
            </h2>
            <p className="section-subtitle">
              Ready to architect state-of-the-art AI systems, high-throughput RAG engines, or resilient applications? Drop a line!
            </p>
          </div>

          {/* Quick Connect Badges Grid */}
          <div className="contact-buttons-wrapper">
            {/* Direct Email Card with Copy button */}
            <div
              className="card spotlight-card contact-btn"
              style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '30px' }}
            >
              <Mail color="var(--accent-color)" size={18} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                muhammad.okasha2146@gmail.com
              </span>
              <button
                onClick={() => handleCopy('muhammad.okasha2146@gmail.com', 'email')}
                title="Copy Email to Clipboard"
                style={{
                  background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: copiedEmail ? '#10b981' : 'var(--text-secondary)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Resume Button */}
            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              onClick={() => playSound('click')}
              className="card contact-btn spotlight-card"
              style={{
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '30px',
                border: '1px solid rgba(0, 255, 204, 0.4)',
                background: 'rgba(0, 255, 204, 0.08)'
              }}
            >
              <FileText color="var(--accent-color)" size={18} />
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>Download Resume PDF</span>
            </a>

            {/* Phone Card with Copy button */}
            <div
              className="card spotlight-card contact-btn"
              style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '30px' }}
            >
              <Phone color="var(--accent-color)" size={18} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>+92 3495696659</span>
              <button
                onClick={() => handleCopy('+923495696659', 'phone')}
                title="Copy Phone to Clipboard"
                style={{
                  background: copiedPhone ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: copiedPhone ? '#10b981' : 'var(--text-secondary)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>
            
            {/* Location */}
            <div className="card contact-btn" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '30px', cursor: 'default' }}>
              <MapPin color="var(--accent-alt)" size={18} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Interactive Direct Message Form */}
          <div
            className="card spotlight-card"
            style={{
              width: '100%',
              maxWidth: '640px',
              padding: 'clamp(20px, 4vw, 32px)',
              borderRadius: '20px',
              marginBottom: '2.5rem',
              textAlign: 'left'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} color="var(--accent-color)" /> Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '1.2rem' }}>
              Submits directly to Muhammad's primary email inbox.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="contact-inputs-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <input
                type="text"
                placeholder="Subject / Project Scope"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />

              <textarea
                placeholder="Tell me about your project, timeline, or architecture needs..."
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.92rem'
                }}
              >
                {sentStatus ? (
                  <>
                    <Check size={18} /> Opening Mail Client...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Launch Message in Mail
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem' }}>
            <a
              href="https://github.com/muhammadokashapak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub"
              onClick={() => playSound('click')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/muhammad-okasha23"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
              onClick={() => playSound('click')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
            © {new Date().getFullYear()} Muhammad Okasha. Built with React 19, Three.js &amp; Cutting-Edge AI Systems.
          </p>
        </motion.div>
      </div>

      <style>{`
        .contact-buttons-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          width: 100%;
        }
        @media (max-width: 600px) {
          .contact-buttons-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .contact-btn {
            width: 100% !important;
            max-width: 360px;
          }
          .contact-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
