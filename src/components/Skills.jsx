import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Database, Layout, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: <Bot size={22} color="#00ffcc" />,
    title: "Generative AI, RAG & LLMs",
    description: "Enterprise vector pipelines, multimodal agents & semantic retrieval",
    skills: [
      "Gemini 3.7 / 3.6 Flash", "ChromaDB Vector Store", "FastEmbed ONNX",
      "LangChain & LlamaIndex", "Reciprocal Rank Fusion (RRF)", "Multimodal Vision & Audio",
      "Prompt Architecture", "Ollama Local LLMs", "Semantic Hybrid Search"
    ]
  },
  {
    icon: <Cpu size={22} color="#38bdf8" />,
    title: "Edge & On-Device AI / Deep Learning",
    description: "Hardware acceleration, quantized neural weights & real-time inference",
    skills: [
      "OpenAI Whisper INT8", "MarianMT Seq2Seq", "YOLOv8 & .tflite",
      "PyTorch & TensorFlow", "ONNX Runtime", "ESP32-CAM Embedded AI",
      "Voice Activity Detection (VAD)", "OpenCV Computer Vision", "Spatial 3D Audio TTS"
    ]
  },
  {
    icon: <Database size={22} color="#8b5cf6" />,
    title: "Data Science, NLP & ML Engines",
    description: "Predictive analytics, linguistic modeling & high-throughput pipelines",
    skills: [
      "Bidirectional LSTM & 1D-CNN", "TF-IDF & N-Gram Pipelines", "Scikit-Learn",
      "Pandas & NumPy", "Spacy & NLTK", "Custom Corpus Tokenization",
      "Model Quantization & Pruning", "Data Augmentation", "Statistical Analysis"
    ]
  },
  {
    icon: <Layout size={22} color="#10b981" />,
    title: "Full-Stack & Systems Architecture",
    description: "High-concurrency microservices, desktop EXE & native mobile apps",
    skills: [
      "FastAPI (Async Gateway)", "React 18 & Vite", "WebSockets & WebRTC",
      "Server-Sent Events (SSE)", "Android Jetpack Compose", "Capacitor Mobile / Desktop",
      "SQLite WAL & Turso", "PostgreSQL", "REST API v2 & OAuth 2.0"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Core Competencies
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills &amp; Mastery</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of AI engineering, deep learning algorithms, edge inference, and distributed system architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: 'clamp(1.4rem, 3vw, 2rem)' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.8rem' }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)'
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                      {category.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(0,255,204,0.2), transparent)',
                  margin: '0.8rem 0 1.2rem'
                }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 204, 0.15)', borderColor: 'var(--accent-color)' }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '6px 13px',
                        borderRadius: '8px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
