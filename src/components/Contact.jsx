import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" style={{ position: 'relative', borderTop: '1px solid var(--card-border)', marginTop: 'clamp(3rem, 6vw, 6rem)', padding: 'clamp(3rem, 6vw, 6rem) 0 3rem 0', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(600px, 90vw)', height: 'min(600px, 90vw)', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

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
              <Mail size={14} /> Get In Touch
            </div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Build Together</span>
            </h2>
            <p className="section-subtitle">
              I'm always open to discussing new AI architectures, full-stack systems engineering, and exciting opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="contact-buttons-wrapper">
            {/* Upgraded Buttons */}
            <a href="mailto:muhammad.okasha2146@gmail.com" className="btn-primary contact-btn">
              <Mail size={20} />
              Email Me
            </a>
            
            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              className="card contact-btn"
              style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', borderRadius: '30px', border: '1px solid rgba(0, 255, 204, 0.4)', background: 'rgba(0, 255, 204, 0.08)' }}
            >
              <FileText color="var(--accent-color)" size={20} />
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Download Resume</span>
            </a>

            <a href="tel:+923495696659" className="card contact-btn" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', borderRadius: '30px' }}>
              <Phone color="var(--accent-color)" size={20} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>+92 3495696659</span>
            </a>
            
            <div className="card contact-btn" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', borderRadius: '30px', cursor: 'default' }}>
              <MapPin color="var(--accent-alt)" size={20} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <a href="https://github.com/muhammadokashapak" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/muhammad-okasha23" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Muhammad Okasha. All rights reserved.
          </p>
        </motion.div>
      </div>

      <style>{`
        .contact-buttons-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          width: 100%;
        }
        @media (max-width: 600px) {
          .contact-buttons-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .contact-btn {
            width: 100% !important;
            max-width: 320px;
          }
        }
      `}</style>
    </footer>
  );
}

