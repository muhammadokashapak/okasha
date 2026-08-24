import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, X, Send, Bot, User, FileText, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const PRESET_QUESTIONS = [
  "⚡ What is Muhammad's experience with RAG & LLMs?",
  "📱 Tell me about his On-Device Edge AI work",
  "💼 What did he build at XORTLOGIX?",
  "🛠️ Which tech stack and frameworks does he use?",
  "📄 How can I download his resume or contact him?"
];

const KNOWLEDGE_BASE = {
  rag: {
    match: ['rag', 'llm', 'vector', 'chromadb', 'embeddings', 'gohighlevel', 'ghl', 'gemini', 'retrieval'],
    title: "Generative AI, Enterprise RAG & LLMs",
    text: "Muhammad specializes in high-throughput Multimodal RAG systems. He engineered the enterprise GoHighLevel AI RAG Engine that indexed **5,717 vector chunks** across multimodal documents using **FastEmbed ONNX** and **ChromaDB**, achieving **<50ms retrieval latency** with Reciprocal Rank Fusion (RRF) and Gemini 3.7 integration.",
    actions: [{ label: "View GHL RAG Project", href: "#projects" }]
  },
  edge: {
    match: ['edge', 'device', 'whisper', 'offline', 'mobile', 'chashm', 'esp32', 'quantiz', 'tflite', 'yolo'],
    title: "100% On-Device & Edge AI Engineering",
    text: "Muhammad has built end-to-end edge AI systems, including an **Offline Video & Subtitle Translator** running **OpenAI Whisper INT8** and **MarianMT Seq2Seq** natively on Android without internet. He also developed **CHASHM AI**, an assistive smart headset with quantized YOLOv8 object detection on ESP32-CAM delivering spatial 3D audio cues for visually impaired individuals.",
    actions: [{ label: "Explore Edge AI Projects", href: "#projects" }]
  },
  xortlogix: {
    match: ['xortlogix', 'experience', 'work', 'sales', 'job', 'role'],
    title: "AI Engineer & Developer at XORTLOGIX",
    text: "At XORTLOGIX (Aug 2024 – Present), Muhammad built the **Real-Time Sales Voice Co-Pilot & Intent Decider**, analyzing sub-50ms live audio streams, objection clustering, and live prompt injection. He also architected the enterprise GHL Knowledge Graph and scaled search revenue surge by **250%**.",
    actions: [{ label: "View Experience Timeline", href: "#experience" }]
  },
  stack: {
    match: ['tech', 'stack', 'skills', 'python', 'react', 'fastapi', 'pytorch', 'tools', 'languages'],
    title: "Technical Stack & Core Arsenal",
    text: "• **AI / Deep Learning**: PyTorch, TensorFlow, ChromaDB, FastEmbed, LangChain, HuggingFace, ONNX Runtime, Whisper INT8, YOLOv8.\n• **Full-Stack & Systems**: FastAPI, React 19/18, Vite, Node.js, Android Jetpack Compose, WebSockets, SQLite WAL, PostgreSQL, Docker.",
    actions: [{ label: "View Skills Matrix", href: "#skills" }]
  },
  contact: {
    match: ['contact', 'resume', 'cv', 'hire', 'email', 'phone', 'location', 'interview'],
    title: "Get in Touch & Credentials",
    text: "Muhammad Okasha is based in Islamabad, Pakistan (UTC+5) and is open for Senior AI Engineering, Full-Stack, and Edge AI roles.\n\n📧 **Email**: muhammad.okasha2146@gmail.com\n📞 **Phone**: +92 3495696659\n📄 **Resume**: Available for direct PDF download.",
    actions: [
      { label: "Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "Go to Contact Section", href: "#contact" }
    ]
  }
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hi! I'm **Okasha AI**, Muhammad's interactive portfolio assistant. Ask me anything about his AI architectures, production projects, edge deep learning, or background!",
      actions: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const findBestAnswer = (query) => {
    const q = query.toLowerCase();
    for (const [key, category] of Object.entries(KNOWLEDGE_BASE)) {
      if (category.match.some((keyword) => q.includes(keyword))) {
        return category;
      }
    }

    return {
      title: "AI Response",
      text: `Muhammad Okasha is an AI & Computer Systems Engineer (UET Peshawar) specializing in Generative AI, Multimodal RAG pipelines, on-device Edge intelligence (Whisper INT8, MarianMT), and full-stack software architecture. He has shipped 10+ production systems. Feel free to ask about his **RAG projects**, **Edge AI systems**, **Tech Stack**, or **Contact details**!`,
      actions: [
        { label: "View All Projects", href: "#projects" },
        { label: "Download CV", href: "/Muhammad_Okasha_Resume.pdf", download: true }
      ]
    };
  };

  const handleSend = (textToSend) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    playSound('click');
    const userMsg = { id: Date.now(), sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const match = findBestAnswer(q);
      playSound('success');
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: match.text,
        actions: match.actions || []
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <motion.button
        onClick={() => {
          playSound(isOpen ? 'close' : 'open');
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9990,
          background: 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 50%, #8b5cf6 100%)',
          color: '#030308',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 20px',
          boxShadow: '0 8px 30px rgba(0, 255, 204, 0.4), 0 0 15px rgba(139, 92, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          fontWeight: 700,
          fontFamily: 'Outfit, sans-serif',
          fontSize: '0.92rem'
        }}
        aria-label="Open Okasha AI Assistant"
      >
        <Sparkles size={18} color="#030308" />
        <span>Ask Okasha AI</span>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981',
            display: 'inline-block'
          }}
        />
      </motion.button>

      {/* Interactive AI Chat Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '24px',
              width: 'min(420px, calc(100vw - 32px))',
              height: 'min(580px, 80vh)',
              zIndex: 9995,
              background: 'var(--card-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 255, 204, 0.35)',
              borderRadius: '20px',
              boxShadow: 'var(--modal-shadow)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid var(--card-border)',
                background: 'rgba(10, 12, 26, 0.65)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#030308'
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    Okasha AI Assistant
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#10b981', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                    Online & Ready
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => {
                    playSound('click');
                    setMessages([
                      {
                        id: 'welcome',
                        sender: 'ai',
                        text: "👋 Chat reset! Ask me anything about Muhammad's projects, RAG architecture, or tech stack.",
                        actions: []
                      }
                    ]);
                  }}
                  title="Reset conversation"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '6px',
                    borderRadius: '8px'
                  }}
                >
                  <RefreshCw size={16} />
                </button>
                <button
                  onClick={() => {
                    playSound('close');
                    setIsOpen(false);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    padding: '6px',
                    borderRadius: '8px'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '100%'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '85%',
                      padding: '12px 16px',
                      borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background:
                        m.sender === 'user'
                          ? 'var(--accent-gradient)'
                          : 'rgba(255, 255, 255, 0.05)',
                      color: m.sender === 'user' ? '#030308' : 'var(--text-primary)',
                      border: m.sender === 'user' ? 'none' : '1px solid var(--card-border)',
                      fontSize: '0.88rem',
                      lineHeight: '1.5',
                      fontWeight: m.sender === 'user' ? 600 : 400,
                      wordBreak: 'break-word',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {m.text}
                  </div>

                  {/* AI Action Chips */}
                  {m.actions && m.actions.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                      {m.actions.map((act, idx) => (
                        <a
                          key={idx}
                          href={act.href}
                          download={act.download ? true : undefined}
                          onClick={() => {
                            playSound('click');
                            if (act.href.startsWith('#')) {
                              setIsOpen(false);
                            }
                          }}
                          style={{
                            background: 'rgba(0, 255, 204, 0.1)',
                            border: '1px solid rgba(0, 255, 204, 0.4)',
                            color: 'var(--accent-color)',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {act.label} <ArrowRight size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)', animation: 'pulse 1s infinite' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'pulse 1s infinite 0.2s' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-alt)', animation: 'pulse 1s infinite 0.4s' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '4px' }}>Thinking...</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div
              style={{
                padding: '8px 12px',
                background: 'rgba(8, 9, 20, 0.4)',
                borderTop: '1px solid var(--card-border)',
                overflowX: 'auto',
                display: 'flex',
                gap: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-secondary)',
                    padding: '4px 10px',
                    borderRadius: '14px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{
                padding: '12px 16px',
                background: 'rgba(10, 12, 26, 0.8)',
                borderTop: '1px solid var(--card-border)',
                display: 'flex',
                gap: '10px'
              }}
            >
              <input
                type="text"
                placeholder="Ask Okasha AI anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--accent-gradient)',
                  border: 'none',
                  color: '#030308',
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
