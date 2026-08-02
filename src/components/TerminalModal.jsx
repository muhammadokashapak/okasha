import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: '🚀 Welcome to Okasha AI CLI v1.0.0', type: 'system' },
    { text: 'Type "help" to view all available commands.', type: 'info' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `okasha@portfolio:~$ ${input}`, type: 'input' }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available Commands:', type: 'system' },
          { text: '  whoami    - Displays bio & background', type: 'output' },
          { text: '  skills    - Lists core machine learning & data skills', type: 'output' },
          { text: '  projects  - Shows featured AI & ML projects', type: 'output' },
          { text: '  chashm    - Deep dive into CHASHM AI smart headset project', type: 'output' },
          { text: '  resume    - Downloads Muhammad Okasha\'s official resume PDF', type: 'output' },
          { text: '  contact   - Displays email, phone, & social links', type: 'output' },
          { text: '  clear     - Clears the terminal screen', type: 'output' }
        );
        break;
      case 'whoami':
        newHistory.push({
          text: 'Muhammad Okasha | Machine Learning Engineer & Data Scientist based in Islamabad, Pakistan. Passionate about Deep Learning, Computer Vision, and NLP.',
          type: 'output'
        });
        break;
      case 'skills':
        newHistory.push({
          text: '⚡ Python | C++ | TensorFlow | PyTorch | OpenCV | YOLO | FastAPI | Scikit-learn | NLP | Deep Learning',
          type: 'output'
        });
        break;
      case 'projects':
        newHistory.push({
          text: '🔥 1. CHASHM AI (FastAPI, YOLO, ESP32-CAM)\n🔥 2. Shina NLP Engine (LSTM, TensorFlow)\n🔥 3. Toxicity Sentinel (NLP, Scikit-learn)\n🔥 4. MediScan AI (CNN Skin Diagnosis)',
          type: 'output'
        });
        break;
      case 'chashm':
        newHistory.push({
          text: '👁️ CHASHM AI: Assistive headset for visually impaired. Quantized YOLO INT8 model on ESP32-CAM streaming real-time object spatial audio over WebSockets.',
          type: 'output'
        });
        break;
      case 'resume':
        newHistory.push({ text: '📄 Downloading Muhammad_Okasha_Resume.pdf...', type: 'system' });
        const link = document.createElement('a');
        link.href = '/Muhammad_Okasha_Resume.pdf';
        link.download = 'Muhammad_Okasha_Resume.pdf';
        link.click();
        break;
      case 'contact':
        newHistory.push({
          text: '📧 Email: muhammad.okasha2146@gmail.com\n📞 Phone: +92 3495696659\n🐙 GitHub: github.com/muhammadokashapak\n💼 LinkedIn: linkedin.com/in/muhammad-okasha23',
          type: 'output'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(3, 3, 5, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              width: '100%',
              maxWidth: '680px',
              height: '460px',
              background: '#090a10',
              border: '1px solid rgba(0, 255, 204, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 204, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              fontFamily: 'Consolas, Monaco, "Andale Mono", monospace'
            }}
          >
            {/* Terminal Window Header */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginLeft: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Terminal size={14} color="var(--accent-color)" /> okasha@portfolio:~
                </span>
              </div>

              <button
                onClick={onClose}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                aria-label="Close terminal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Terminal Log Output */}
            <div style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.9rem',
              lineHeight: 1.5
            }}>
              {history.map((item, index) => (
                <div
                  key={index}
                  style={{
                    color:
                      item.type === 'system'
                        ? 'var(--accent-color)'
                        : item.type === 'info'
                        ? '#3b82f6'
                        : item.type === 'input'
                        ? '#fff'
                        : item.type === 'error'
                        ? '#ef4444'
                        : 'var(--text-secondary)',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {item.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleCommand}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                background: 'rgba(0, 0, 0, 0.4)',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command ('help', 'projects', 'resume')..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
                autoFocus
              />
              <button
                type="submit"
                style={{
                  background: 'rgba(0, 255, 204, 0.15)',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <CornerDownLeft size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
