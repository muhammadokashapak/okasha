import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft, Sparkles, Gamepad2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const COMMANDS = [
  'help', 'projects', 'ghl', 'sales', 'translator', 'school',
  'hospital', 'medprep', 'medconnect', 'chashm', 'shina', 'toxicity',
  'stats', 'skills', 'whoami', 'resume', 'contact', 'matrix', 'snake', 'clear'
];

export default function TerminalModal({ isOpen, onClose, onTriggerMatrix }) {
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameState, setGameState] = useState(null); // 'snake' | null
  const [history, setHistory] = useState([
    { text: '⚡ OKASHA AI NEURAL TERMINAL v4.0.0 [ONLINE]', type: 'system' },
    { text: 'Type "help" for commands, "matrix" for cyber rain, or "snake" to play terminal arcade.', type: 'info' }
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

    if (cmd.startsWith('ask ')) {
      const query = rawCmd.substring(4);
      newHistory.push({
        text: `🤖 [AI REASONING]: Analyzing query: "${query}"...\nMuhammad Okasha has engineered production RAG systems with 5,717 vector chunks, Whisper INT8 edge translation, and scalable microservices. For deep details, check the interactive 'Ask Okasha AI' assistant on the bottom-right!`,
        type: 'system'
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
          { text: '  sales        - Real-Time Sales Voice Co-Pilot & Intent Decider', type: 'output' },
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
          { text: '  clear        - Reset terminal window', type: 'output' }
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
        newHistory.push(
          { text: 'ACTIVE ENGINEERING REPOSITORY (10 Production Systems):', type: 'system' },
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
        newHistory.push({
          text: '🎙️ SALES VOICE CO-PILOT:\n• Captures live audio from Zoom / Google Meet tabs via WebRTC\n• Local Whisper STT + Ollama intent classification (<50ms)\n• Detects client skepticism, objections & subconscious fears\n• Whisper cues into representative\'s earphone feed\n• Floating transparent Zoom HUD overlay',
          type: 'output'
        });
        break;

      case 'translator':
        newHistory.push({
          text: '🎬 OFFLINE AI VIDEO TRANSLATOR:\n• 100% On-Device Android app running on Jetpack Compose\n• Quantized INT8 OpenAI Whisper speech-to-text with VAD\n• MarianMT seq2seq neural translation (Urdu, Spanish, etc.)\n• Media3 ExoPlayer with binary search subtitle synchronization\n• Zero cloud costs & Zero privacy leakage',
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
          text: '⚡ TECH MATRIX:\n• AI/LLMs: Gemini 3.7 Flash, ChromaDB, FastEmbed, LangChain, Ollama\n• Deep Learning: Whisper INT8, YOLOv8, PyTorch, TensorFlow, ONNX\n• Systems: FastAPI, React 19, WebSockets, WebRTC, Jetpack Compose, SQLite WAL',
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
          text: '📫 DIRECT CONTACT CHANNELS:\n• Email: muhammad.okasha2146@gmail.com\n• Phone: +92 3495696659\n• Location: Islamabad, Pakistan',
          type: 'output'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${rawCmd}". Type "help" for valid commands or "ask <query>" to query AI.`,
          type: 'error'
        });
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
              <span
                style={{
                  color: 'var(--accent-color)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginLeft: '8px',
                  letterSpacing: '0.5px'
                }}
              >
                okasha@neural-core:~ (zsh v4.0)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => {
                  if (onTriggerMatrix) {
                    onTriggerMatrix();
                  }
                }}
                title="Matrix Mode"
                style={{
                  background: 'rgba(0, 255, 204, 0.1)',
                  border: '1px solid rgba(0, 255, 204, 0.3)',
                  color: 'var(--accent-color)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Matrix
              </button>

              <button
                onClick={() => {
                  playSound('close');
                  onClose();
                }}
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
          </div>

          {/* Terminal Console Output */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              minHeight: '300px',
              maxHeight: '440px',
              overflowY: 'auto',
              paddingRight: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
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
              onKeyDown={handleKeyDown}
              placeholder="Enter command (e.g. 'help', 'matrix', 'snake', 'ghl', 'ask <query>')..."
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
