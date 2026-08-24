import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Layers, 
  Cpu, 
  Database, 
  Workflow, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Server, 
  Radio, 
  ArrowRight 
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const TOPOLOGY_NODES = [
  {
    id: "input",
    title: "1. Multimodal Ingestion",
    icon: <Radio size={20} color="var(--accent-color)" />,
    role: "Data Gateway",
    latency: "<5ms",
    throughput: "WebRTC Audio / Clipboard OCR / REST API v2",
    details: "Captures multi-source live payloads including browser audio tabs, screenshot pastes, and document batches with automatic noise normalization."
  },
  {
    id: "embed",
    title: "2. FastEmbed ONNX Engine",
    icon: <Cpu size={20} color="var(--accent-cyan)" />,
    role: "Dense Vectorizer",
    latency: "12ms",
    throughput: "768-D Embeddings (nomic-embed-v1.5)",
    details: "Generates high-dimensional semantic embeddings running natively on ONNX Runtime without external cloud API dependencies."
  },
  {
    id: "chroma",
    title: "3. ChromaDB Vector Store",
    icon: <Database size={20} color="var(--accent-alt)" />,
    role: "Hybrid RRF Retrieval",
    latency: "<45ms",
    throughput: "5,717 Chunks Indexed (SQLite WAL)",
    details: "Executes Reciprocal Rank Fusion (RRF) dense vector similarity combined with exact entity token matching to ensure zero hallucination."
  },
  {
    id: "llm",
    title: "4. Neural Synthesis Core",
    icon: <Sparkles size={20} color="var(--accent-amber)" />,
    role: "Gemini 3.7 & Local Ollama",
    latency: "Real-Time SSE",
    throughput: "128k Token Context Window",
    details: "Orchestrates multi-turn reasoning, structured JSON schema outputs, and executable code snippets anchored strictly to retrieved ground truth."
  },
  {
    id: "stream",
    title: "5. Real-Time Streaming HUD",
    icon: <Server size={20} color="var(--accent-emerald)" />,
    role: "Delivery Gateway",
    latency: "Sub-10ms UI Frame",
    throughput: "WebSockets & SSE Stream",
    details: "Streams live typewriter word tokens and in-ear TTS audio cues directly to user interfaces and floating Zoom meeting overlays."
  }
];

const SECURITY_BADGES = [
  {
    icon: <ShieldCheck size={18} color="var(--accent-emerald)" />,
    title: "Zero-Hallucination Guardrails",
    desc: "Strict ground-truth citation enforcement"
  },
  {
    icon: <Lock size={18} color="var(--accent-cyan)" />,
    title: "Air-Gapped Edge Privacy",
    desc: "100% on-device neural model inference"
  },
  {
    icon: <Database size={18} color="var(--accent-alt)" />,
    title: "SQLite WAL Concurrency",
    desc: "Lock-free multithreaded read/write pipelines"
  },
  {
    icon: <Zap size={18} color="var(--accent-amber)" />,
    title: "10k req/sec High Throughput",
    desc: "Async FastAPI microservice architecture"
  }
];

export default function ArchitectureGraph() {
  const [activeNode, setActiveNode] = useState(TOPOLOGY_NODES[2]); // Default ChromaDB

  return (
    <section id="architecture-graph" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)', color: 'var(--accent-alt)' }}>
          <Network size={14} /> End-to-End System Topology
        </div>
        <h2 className="section-title">
          Distributed <span className="gradient-text">Neural Architecture Graph</span>
        </h2>
        <p className="section-subtitle">
          Interactive data pipeline topology showcasing the seamless orchestration between ingestion, vectorization, vector retrieval, and real-time streaming.
        </p>
      </div>

      {/* Main Interactive Topology Card */}
      <div 
        className="card"
        style={{
          padding: 'clamp(1.4rem, 4vw, 2.6rem)',
          borderRadius: '26px',
          border: '1px solid var(--card-border)',
          maxWidth: '1100px',
          margin: '0 auto 2.5rem auto'
        }}
      >
        {/* Node Selection Track */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px',
          marginBottom: '2rem'
        }}>
          {TOPOLOGY_NODES.map((node) => (
            <button
              key={node.id}
              onClick={() => {
                playSound('click');
                setActiveNode(node);
              }}
              style={{
                background: activeNode.id === node.id ? 'rgba(0, 255, 204, 0.12)' : 'var(--btn-sec-bg)',
                border: activeNode.id === node.id ? '1px solid var(--accent-color)' : '1px solid var(--btn-sec-border)',
                borderRadius: '16px',
                padding: '14px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                transition: 'all 0.25s',
                boxShadow: activeNode.id === node.id ? '0 0 20px rgba(0, 255, 204, 0.2)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {node.icon}
                </div>
                <span className="badge-neon" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                  {node.latency}
                </span>
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.84rem' }}>
                {node.title}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                {node.role}
              </div>
            </button>
          ))}
        </div>

        {/* Active Node Deep-Dive Inspection Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--btn-sec-border)',
              borderRadius: '20px',
              padding: 'clamp(1.2rem, 3vw, 1.8rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '14px',
                  background: 'rgba(0, 255, 204, 0.1)',
                  border: '1px solid rgba(0, 255, 204, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {activeNode.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 800 }}>
                    {activeNode.title} — {activeNode.role}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    Payload Throughput: {activeNode.throughput}
                  </p>
                </div>
              </div>

              <span className="badge-neon" style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                Latency: {activeNode.latency}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginTop: '4px' }}>
              {activeNode.details}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enterprise Security & System Reliability Badges */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '14px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {SECURITY_BADGES.map((badge, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              padding: '16px 18px',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{
              padding: '10px',
              borderRadius: '12px',
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--btn-sec-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {badge.icon}
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.88rem' }}>
                {badge.title}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '2px' }}>
                {badge.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
