import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: '⚡ OKASHA AI NEURAL TERMINAL v3.2.0 [ONLINE]', type: 'system' },
    { text: 'Type "help" to view all system commands or enter a project code (e.g., "ghl", "sales", "translator").', type: 'info' }
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

    const newHistory = [...history, { text: `okasha@ai-core:~$ ${input}`, type: 'input' }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available System Commands:', type: 'system' },
          { text: '  projects     - List all 10 production AI & systems projects', type: 'output' },
          { text: '  ghl          - GoHighLevel Enterprise RAG (5,717 Chunks, Gemini 3.7)', type: 'output' },
          { text: '  sales        - Real-Time Sales Voice Co-Pilot & Intent Decider', type: 'output' },
          { text: '  translator   - 100% On-Device AI Video & Subtitle Translator (Android)', type: 'output' },
          { text: '  school       - Apex Digital School OS & Socratic AI Tutor', type: 'output' },
          { text: '  hospital     - Clinical Care & Hospital Management ERP', type: 'output' },
          { text: '  medprep      - MedPrep Pro & FCPS Medical Licensure Engine', type: 'output' },
          { text: '  medconnect   - Med Connect Telemedicine Network', type: 'output' },
          { text: '  chashm       - CHASHM AI Assistive Smart Headset (YOLO INT8 + ESP32)', type: 'output' },
          { text: '  shina        - Shina NLP Linguistic Deep Learning Architecture', type: 'output' },
          { text: '  toxicity     - Toxicity Sentinel & Social Media Moderation', type: 'output' },
          { text: '  stats        - Live system metrics & performance indicators', type: 'output' },
          { text: '  skills       - Core technology matrix & competencies', type: 'output' },
          { text: '  whoami       - Engineer bio & architectural philosophy', type: 'output' },
          { text: '  resume       - Trigger official Resume PDF download', type: 'output' },
          { text: '  contact      - Direct communication channels & socials', type: 'output' },
          { text: '  clear        - Reset terminal window', type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push(
          { text: 'ACTIVE ENGINEERING REPOSITORY (10 Systems):', type: 'system' },
          { text: '  1. [GHL RAG] Enterprise Multimodal AI Cockpit (FastAPI + ChromaDB 5.7k Chunks)', type: 'output' },
          { text: '  2. [Sales Co-Pilot] Sub-50ms Real-Time Voice Intelligence (Whisper + Ollama + HUD)', type: 'output' },
          { text: '  3. [Offline Translator] 100% On-Device Whisper INT8 + MarianMT Android Player', type: 'output' },
          { text: '  4. [Apex Digital School] 5-Portal School Management ERP & Socratic AI Engine', type: 'output' },
          { text: '  5. [Hospital ERP] Cross-Platform Clinical Operations & Patient EHR Ledger', type: 'output' },
          { text: '  6. [MedPrep Pro] AI Medical Licensure Exam Platform (10k+ Clinical MCQs)', type: 'output' },
          { text: '  7. [Med Connect] Telehealth Network & Specialist Consultation Hub', type: 'output' },
          { text: '  8. [CHASHM AI] Assistive Smart Headset (Quantized YOLO on ESP32-CAM)', type: 'output' },
          { text: '  9. [Shina NLP] Hybrid LSTM/CNN Deep Learning for Endangered Dialects', type: 'output' },
          { text: ' 10. [Toxicity Sentinel] High-Throughput NLP Content Safety & Hate Speech Detection', type: 'output' }
        );
        break;

      case 'ghl':
        newHistory.push({
          text: '⚡ GHL ENTERPRISE RAG PLATFORM:\n• 5,717 vector chunks indexed in ChromaDB\n• FastEmbed ONNX (nomic-embed-text-v1.5) sub-second latency\n• Gemini 3.7 Flash multimodal vision & voice notes\n• Full REST API v2 & OAuth 2.0 specs\n• 1:1 ChatGPT Dark cockpit with SSE token streaming',
          type: 'output'
        });
        break;

      case 'sales':
      case 'salescopilot':
        newHistory.push({
          text: '🎙️ SALES VOICE CO-PILOT:\n• Captures live audio from Zoom / Google Meet tabs via WebRTC\n• Local Whisper STT + Ollama intent classification (<50ms)\n• Detects client skepticism, objections & subconscious fears\n• Whisper cues into representative\'s earphone feed\n• Floating transparent Zoom HUD overlay',
          type: 'output'
        });
        break;

      case 'translator':
      case 'video':
        newHistory.push({
          text: '🎬 OFFLINE AI VIDEO TRANSLATOR:\n• 100% On-Device Android app running on Jetpack Compose\n• Quantized INT8 OpenAI Whisper speech-to-text with VAD\n• MarianMT seq2seq neural translation (Urdu, Spanish, etc.)\n• Media3 ExoPlayer with binary search subtitle synchronization\n• Zero cloud costs & Zero privacy leakage',
          type: 'output'
        });
        break;

      case 'school':
      case 'digitalschool':
        newHistory.push({
          text: '🎓 APEX DIGITAL SCHOOL OS:\n• 5 Role-Based Portals: Student, Teacher, Parent, Admin, Finance\n• Socratic AI Diagnostic Tutor & auto quiz generator\n• Live Virtual Broadcast Studio with collaborative whiteboard\n• Automated PDF Marks Sheets & Transcript generator',
          type: 'output'
        });
        break;

      case 'hospital':
        newHistory.push({
          text: '🏥 CLINICAL CARE HOSPITAL ERP:\n• Electronic Health Records (EHR) & Sanitized Medical Ledgers\n• OPD / IPD ward admission, bed occupancy & nurse handover logs\n• Pharmacy inventory tracking with batch expiration warnings\n• Native Android and Desktop packaging via Capacitor',
          type: 'output'
        });
        break;

      case 'medprep':
      case 'fcps':
        newHistory.push({
          text: '🩺 MEDPREP PRO & FCPS ENGINE:\n• 10,000+ high-yield MBBS & FCPS clinical MCQs\n• Detailed anatomical & pathophysiological explanations for all options\n• Timed examination simulator with negative marking\n• Compiled as standalone Windows .exe and Android APK',
          type: 'output'
        });
        break;

      case 'medconnect':
        newHistory.push({
          text: '🌐 MED CONNECT TELEMEDICINE:\n• Doctor discovery and calendar slot booking\n• Encrypted patient health vault and consultation records\n• Digital prescription issuance & medicine schedule sync',
          type: 'output'
        });
        break;

      case 'chashm':
        newHistory.push({
          text: '👁️ CHASHM AI SMART HEADSET:\n• Quantized INT8 custom YOLO model deployed on ESP32-CAM\n• Sub-30ms obstacle detection streaming over WebSockets\n• Directional 3D spatial Text-to-Speech audio navigation feedback',
          type: 'output'
        });
        break;

      case 'shina':
        newHistory.push({
          text: '📜 SHINA NLP ENGINE:\n• Custom corpus preprocessing for endangered regional language\n• Hybrid Bidirectional LSTM and 1D-CNN neural architecture\n• 94%+ F1 classification benchmark score',
          type: 'output'
        });
        break;

      case 'toxicity':
        newHistory.push({
          text: '🛡️ TOXICITY SENTINEL:\n• High-throughput TF-IDF + Lemmatization NLP pipeline\n• 10,000 req/sec inference capacity for live social streams\n• 98.2% accuracy in detecting insults, threats & toxic text',
          type: 'output'
        });
        break;

      case 'stats':
        newHistory.push({
          text: '📊 VERIFIED PRODUCTION METRICS:\n• 5,717+ ChromaDB Vector Chunks Shipped\n• <50ms Real-Time RAG Battlecard Latency\n• 100% On-Device Neural Model Execution\n• 250% Search Revenue Surge Driven\n• 10+ Production AI & Full-Stack Systems Built',
          type: 'output'
        });
        break;

      case 'skills':
        newHistory.push({
          text: '⚡ TECH MATRIX:\n• AI/LLMs: Gemini 3.7 Flash, ChromaDB, FastEmbed, LangChain, Ollama\n• Deep Learning: Whisper INT8, YOLOv8, PyTorch, TensorFlow, ONNX\n• Systems: FastAPI, React 18, WebSockets, WebRTC, Jetpack Compose, SQLite WAL',
          type: 'output'
        });
        break;

      case 'whoami':
        newHistory.push({
          text: 'Muhammad Okasha | AI Solutions Architect & Machine Learning Engineer based in Islamabad, Pakistan. B.E. Computer Systems Engineering from UET Peshawar. Specializing in enterprise GenAI, on-device edge neural models, and scalable architectures.',
          type: 'output'
        });
        break;

      case 'resume':
        newHistory.push({
          text: '📄 Downloading Muhammad_Okasha_Resume.pdf...',
          type: 'system'
        });
        window.open('/Muhammad_Okasha_Resume.pdf', '_blank');
        break;

      case 'contact':
        newHistory.push({
          text: '📫 DIRECT CONTACT CHANNELS:\n• Email: muhammadokashaofficial@gmail.com\n• GitHub: https://github.com/muhammadokashapak\n• Location: Islamabad, Pakistan',
          type: 'output'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-dialog crt-scanlines"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'rgba(5, 7, 16, 0.96)',
            border: '1px solid rgba(0, 255, 204, 0.4)',
            maxWidth: '820px',
            boxShadow: '0 0 50px rgba(0, 255, 204, 0.25), 0 0 30px rgba(139, 92, 246, 0.2)'
          }}
        >
          {/* Terminal Window Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(0, 255, 204, 0.2)',
            paddingBottom: '0.8rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginLeft: '8px',
                letterSpacing: '0.5px'
              }}>
                okasha@neural-core:~ (zsh)
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            minHeight: '280px',
            maxHeight: '420px',
            overflowY: 'auto',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {history.map((item, idx) => (
              <div
                key={idx}
                style={{
                  color:
                    item.type === 'system'
                      ? '#00ffcc'
                      : item.type === 'info'
                      ? '#38bdf8'
                      : item.type === 'input'
                      ? '#f8fafc'
                      : item.type === 'error'
                      ? '#f43f5e'
                      : '#94a3b8',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap'
                }}
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Box */}
          <form
            onSubmit={handleCommand}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid rgba(0, 255, 204, 0.15)',
              paddingTop: '0.9rem',
              marginTop: '1rem'
            }}
          >
            <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              &gt;
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command (e.g. 'help', 'ghl', 'sales', 'translator', 'stats')..."
              autoFocus
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'rgba(0, 255, 204, 0.15)',
                border: '1px solid rgba(0, 255, 204, 0.4)',
                color: 'var(--accent-color)',
                borderRadius: '8px',
                padding: '5px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                fontWeight: 600
              }}
            >
              <CornerDownLeft size={14} /> Send
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
