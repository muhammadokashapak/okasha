import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft, Sparkles, Gamepad2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { queryKnowledgeBase } from '../data/okashaKnowledge';

const COMMANDS = [
  'help', 'projects', 'ghl', 'sales', 'translator', 'school',
  'hospital', 'medprep', 'medconnect', 'chashm', 'shina', 'toxicity',
  'stats', 'skills', 'whoami', 'resume', 'contact', 'matrix', 'snake', 'clear', 'exit'
];

export default function TerminalModal({ isOpen, onClose, onTriggerMatrix }) {
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [history, setHistory] = useState([
    { text: '⚡ OKASHA AI NEURAL TERMINAL v4.2.0 [ONLINE]', type: 'system' },
    { text: 'Type "help" for commands, "matrix" for cyber rain, or ask any natural question directly.', type: 'info' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleKeyDown = (e) => {
    // Arrow Up / Down for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      playSound('hover');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
      playSound('hover');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = COMMANDS.find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
        playSound('hover');
      }
    }
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = input.trim();
    if (!rawCmd) return;

    playSound('click');
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { text: `okasha@ai-core:~$ ${rawCmd}`, type: 'input' }];

    // Direct 'ask <query>' command or questions
    if (cmd.startsWith('ask ')) {
      const query = rawCmd.substring(4);
      const result = queryKnowledgeBase(query);
      newHistory.push({
        text: `🤖 [NEURAL KNOWLEDGE ENGINE]:\n${result.answer}`,
        type: 'output'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: '═══════════════ AVAILABLE COMMANDS ═══════════════', type: 'system' },
          { text: '  projects     - List all 10 production AI & systems projects', type: 'output' },
          { text: '  ghl          - GoHighLevel Enterprise RAG (5,717 Chunks, Gemini 3.7)', type: 'output' },
          { text: '  sales        - Real-Time Sales Voice Co-Pilot & Intent Decider (<50ms)', type: 'output' },
          { text: '  translator   - 100% On-Device AI Video & Subtitle Translator (Android)', type: 'output' },
          { text: '  school       - Apex Digital School OS & Socratic AI Tutor', type: 'output' },
          { text: '  hospital     - Clinical Care & Hospital Management ERP', type: 'output' },
          { text: '  medprep      - MedPrep Pro & FCPS Medical Licensure Engine', type: 'output' },
          { text: '  medconnect   - Med Connect Telemedicine Network', type: 'output' },
          { text: '  chashm       - CHASHM AI Assistive Smart Headset (YOLO INT8 + ESP32)', type: 'output' },
          { text: '  shina        - Shina NLP Linguistic Deep Learning Architecture', type: 'output' },
          { text: '  toxicity     - Toxicity Sentinel & Social Media Moderation', type: 'output' },
          { text: '  matrix       - 🟢 Trigger Fullscreen Digital Matrix Rain Mode', type: 'system' },
          { text: '  snake        - 🐍 Launch Terminal Arcade Snake Game', type: 'system' },
          { text: '  ask <query>  - Ask the neural knowledge engine directly', type: 'output' },
          { text: '  stats        - Live system metrics & performance indicators', type: 'output' },
          { text: '  skills       - Core technology matrix & competencies', type: 'output' },
          { text: '  whoami       - Engineer bio & architectural philosophy', type: 'output' },
          { text: '  resume       - Trigger official Resume PDF download', type: 'output' },
          { text: '  contact      - Direct communication channels & socials', type: 'output' },
          { text: '  clear / cls  - Reset terminal window', type: 'output' },
          { text: '  exit / quit  - Close terminal window', type: 'output' }
        );
        break;

      case 'matrix':
        newHistory.push({ text: '🟢 INITIALIZING CYBER MATRIX PROTOCOL...', type: 'system' });
        if (onTriggerMatrix) {
          onTriggerMatrix();
        }
        break;

      case 'snake':
        newHistory.push({ text: '🐍 [SNAKE ARCADE ACTIVE]: Use arrow keys in your browser or commands to navigate. Score: 120 pts [SIMULATED]. Type "help" to resume console.', type: 'system' });
        break;

      case 'projects':
      case 'ls':
      case 'dir':
        newHistory.push(
          { text: 'ACTIVE ENGINEERING REPOSITORY (10 Production Systems):', type: 'system' },
          { text: '  1. [ghl]        - GoHighLevel Enterprise RAG (FastAPI + ChromaDB 5.7k Chunks)', type: 'output' },
          { text: '  2. [sales]      - Sub-50ms Real-Time Voice Intelligence (Whisper + Ollama + HUD)', type: 'output' },
          { text: '  3. [translator] - 100% On-Device Whisper INT8 + MarianMT Android Player', type: 'output' },
          { text: '  4. [school]     - Apex Digital School OS & Socratic AI Engine (5 Portals)', type: 'output' },
          { text: '  5. [hospital]   - Cross-Platform Clinical Operations & Patient EHR Ledger', type: 'output' },
          { text: '  6. [medprep]    - AI Medical Licensure Exam Platform (10k+ Clinical MCQs)', type: 'output' },
          { text: '  7. [medconnect] - Telehealth Network & Specialist Consultation Hub', type: 'output' },
          { text: '  8. [chashm]     - CHASHM AI Assistive Smart Headset (Quantized YOLO on ESP32-CAM)', type: 'output' },
          { text: '  9. [shina]      - Shina NLP Hybrid LSTM/CNN Deep Learning for Endangered Dialects', type: 'output' },
          { text: ' 10. [toxicity]   - Toxicity Sentinel NLP Content Safety & Moderation (10k req/sec)', type: 'output' }
        );
        break;

      case 'ghl':
        newHistory.push({
          text: '⚡ GHL ENTERPRISE RAG PLATFORM:\n• 5,717 vector chunks indexed in ChromaDB (nomic-embed-text-v1.5)\n• FastEmbed ONNX sub-150ms vectorization latency\n• Gemini 3.7 Flash multimodal vision (clipboard paste OCR) & voice notes\n• Official REST API v2 & OAuth 2.0 specs\n• 1:1 ChatGPT Dark cockpit with SSE token typewriter streaming',
          type: 'output'
        });
        break;

      case 'sales':
        newHistory.push({
          text: '🎙️ SALES VOICE CO-PILOT:\n• Captures live audio from Zoom / Google Meet tabs via WebRTC\n• Local Whisper STT + Ollama intent classification (<50ms)\n• Detects client skepticism, objections & subconscious hesitation\n• Secret whisper TTS cues fed directly into rep\'s earphone\n• Floating transparent Zoom HUD overlay for stealth execution',
          type: 'output'
        });
        break;

      case 'translator':
        newHistory.push({
          text: '🎬 OFFLINE AI VIDEO TRANSLATOR:\n• 100% On-Device Android app running on Jetpack Compose Material 3\n• Quantized INT8 OpenAI Whisper speech-to-text with VAD\n• MarianMT seq2seq neural translation (Urdu, Spanish, etc.)\n• Media3 ExoPlayer with binary search subtitle synchronization\n• Zero cloud costs & 0 KB data leakage with Room SQLite cache',
          type: 'output'
        });
        break;

      case 'school':
      case 'apex':
        newHistory.push({
          text: '🎓 APEX DIGITAL SCHOOL OPERATING SYSTEM:\n• 5 Role-based portals (Student, Teacher, Parent, Admin, Finance) with RBAC\n• Interactive Socratic AI diagnostic tutor & automated quiz engine\n• Virtual broadcast studio with real-time collaborative whiteboard\n• Cryptographic PDF marksheet & transcript generation\n• 360 Parent fee ledger & GPS bus route tracking',
          type: 'output'
        });
        break;

      case 'hospital':
      case 'erp':
        newHistory.push({
          text: '🏥 CLINICAL CARE & HOSPITAL MANAGEMENT ERP:\n• Centralized Patient EHR ledger for sanitized medical histories & labs\n• OPD/IPD ward management, bed allocation, and nurse handover logs\n• Pharmacy POS inventory tracking with batch expiration warnings\n• Cross-platform compilation for Android tablets and Windows desktop via Capacitor\n• Strict role-based clinical security protocols',
          type: 'output'
        });
        break;

      case 'medprep':
      case 'fcps':
        newHistory.push({
          text: '🩺 MEDPREP PRO & FCPS EXAMINATION ENGINE:\n• 10,000+ high-yield clinical MCQs covering Anatomy, Physiology, Pathology, Surgery\n• In-depth pathophysiological explanations & medical references for all options\n• Timed examination simulator with official negative marking rules\n• Spaced-repetition learning matrix tracking mistake patterns\n• Standalone Windows .exe installer & Android APK',
          type: 'output'
        });
        break;

      case 'medconnect':
      case 'telehealth':
        newHistory.push({
          text: '🌐 MED CONNECT TELEMEDICINE NETWORK:\n• Specialist discovery directory with verified doctor credentials\n• Real-time calendar appointment scheduling & slot reservation\n• Automated digital prescription issuance & medicine schedule sync\n• Encrypted patient diagnostic health vault with permissioned doctor access',
          type: 'output'
        });
        break;

      case 'chashm':
      case 'chashm-ai':
      case 'glasses':
        newHistory.push({
          text: '👁️ CHASHM AI ASSISTIVE SMART HEADSET:\n• Wireless ESP32-CAM module streaming ultra-low latency MJPEG video\n• Custom INT8 quantized YOLO model (.tflite) with sub-30ms detection\n• Real-time spatial depth estimation for obstacle trajectory tracking\n• 3D directional Text-to-Speech audio navigation guidance\n• Live browser telemetry dashboard for caretakers',
          type: 'output'
        });
        break;

      case 'shina':
      case 'nlp':
        newHistory.push({
          text: '📜 SHINA NLP LINGUISTIC DEEP LEARNING ENGINE:\n• First standardized digital linguistic corpus for endangered Shina language\n• Custom N-gram tokenizers & phonetic word embeddings\n• Hybrid Bidirectional LSTM + 1D-CNN contextual neural architecture\n• 94%+ F1 classification benchmark score across regional dialects',
          type: 'output'
        });
        break;

      case 'toxicity':
      case 'sentinel':
        newHistory.push({
          text: '🛡️ TOXICITY SENTINEL & MODERATION ENGINE:\n• 10,000 req/sec async inference throughput on FastAPI microservice\n• Advanced NLP cleaning with regex slang expansion & lemmatization\n• N-gram TF-IDF vectorization & multi-label classifier\n• 98.2% detection precision across toxic content, threats & hate speech',
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
          text: '⚡ TECH MATRIX & ARSENAL:\n• AI/LLMs: Gemini 3.7 Flash, ChromaDB, FastEmbed ONNX, LangChain, Ollama\n• Deep Learning: PyTorch, TensorFlow, Whisper INT8, MarianMT, YOLOv8, OpenCV\n• Full-Stack: FastAPI (Async), React 19/18, WebSockets, WebRTC, Jetpack Compose, SQLite WAL, Docker',
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
      case 'cv':
        newHistory.push({
          text: '📄 Downloading Muhammad_Okasha_Resume.pdf...',
          type: 'system'
        });
        window.open('/Muhammad_Okasha_Resume.pdf', '_blank');
        break;

      case 'contact':
        newHistory.push({
          text: '📫 DIRECT CONTACT CHANNELS:\n• Email: muhammad.okasha2146@gmail.com\n• Phone: +92 3495696659\n• Location: Islamabad, Pakistan (PKT UTC+5)',
          type: 'output'
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        // Automatically query the Neural Knowledge Base for natural language questions
        const fallbackResult = queryKnowledgeBase(rawCmd);
        newHistory.push({
          text: `🤖 [NEURAL KNOWLEDGE RESPONSE]:\n${fallbackResult.answer}`,
          type: 'output'
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        onClick={() => {
          playSound('close');
          onClose();
        }}
      >
        <motion.div
          className="modal-dialog crt-scanlines"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'rgba(5, 7, 16, 0.97)',
            border: '1px solid rgba(0, 255, 204, 0.4)',
            maxWidth: '840px',
            boxShadow: '0 0 60px rgba(0, 255, 204, 0.3), 0 0 35px rgba(139, 92, 246, 0.25)'
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(0, 255, 204, 0.2)',
              paddingBottom: '0.8rem',
              marginBottom: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-color)', marginLeft: '8px' }}>
                okasha@neural-terminal: ~ (bash v4.2)
              </span>
            </div>

            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Close Terminal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              maxHeight: '440px',
              overflowY: 'auto',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.86rem',
              lineHeight: 1.6,
              color: '#d1d5db',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            {history.map((item, idx) => {
              if (item.type === 'input') {
                return (
                  <div key={idx} style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'system') {
                return (
                  <div key={idx} style={{ color: 'var(--accent-cyan)', fontWeight: 600, whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'error') {
                return (
                  <div key={idx} style={{ color: 'var(--accent-rose)', whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'info') {
                return (
                  <div key={idx} style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              return (
                <div key={idx} style={{ color: '#f8fafc', whiteSpace: 'pre-line' }}>
                  {item.text}
                </div>
              );
            })}

            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleCommand}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid rgba(0, 255, 204, 0.15)',
              paddingTop: '0.8rem',
              marginTop: '1rem',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', flexShrink: 0 }}>
              okasha@ai-core:~$
            </span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. chashm, ghl, projects, help)..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'rgba(0, 255, 204, 0.15)',
                border: '1px solid var(--accent-color)',
                color: 'var(--accent-color)',
                borderRadius: '8px',
                padding: '4px 8px',
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
    </AnimatePresence>
  );
}
