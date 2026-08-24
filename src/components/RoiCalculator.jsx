import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Cpu, 
  Database, 
  Layers, 
  Zap, 
  DollarSign, 
  Clock, 
  Check, 
  Copy, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const BASE_ARCHITECTURES = [
  {
    id: "rag",
    name: "Enterprise Multimodal RAG Platform",
    tagline: "High-accuracy retrieval indexing 5,000+ API & OAuth chunks with zero-hallucination fallback.",
    baseTimeline: "3 Weeks",
    baseSavings: "85%",
    baseLatency: "<150ms",
    stack: ["FastAPI", "ChromaDB", "FastEmbed ONNX", "Gemini 3.7 Flash", "React 19", "SSE Stream"]
  },
  {
    id: "edge",
    name: "100% On-Device Edge AI Application",
    tagline: "Air-gapped offline neural speech-to-text & translation on Android hardware without internet.",
    baseTimeline: "4 Weeks",
    baseSavings: "100%",
    baseLatency: "Local Real-Time",
    stack: ["Android Kotlin", "Jetpack Compose", "Whisper INT8", "MarianMT Seq2Seq", "ONNX Runtime", "ExoPlayer"]
  },
  {
    id: "voice",
    name: "Sub-50ms Real-Time Voice AI Sales Co-Pilot",
    tagline: "Live audio streaming from Zoom/Meet with psychological objection classification in <50ms.",
    baseTimeline: "3.5 Weeks",
    baseSavings: "90%",
    baseLatency: "<50ms",
    stack: ["WebRTC", "WebSockets", "Local Whisper STT", "Ollama LLM", "ChromaDB", "Electron / Native HUD"]
  },
  {
    id: "erp",
    name: "Multi-Role Enterprise Operating System & ERP",
    tagline: "Unified multi-role portal platform with Socratic AI tutors, RBAC, and cryptographic PDF generation.",
    baseTimeline: "4 Weeks",
    baseSavings: "75%",
    baseLatency: "<10ms API",
    stack: ["FastAPI", "React 19", "PostgreSQL", "SQLite WAL", "Docker", "ReportLab PDF Engine"]
  }
];

const MODULE_OPTIONS = [
  { id: "ocr", name: "Multimodal Clipboard OCR & Vision Pipeline", costImpact: "+$0 / 100% Local" },
  { id: "webrtc", name: "Ultra-Low Latency WebRTC Audio Streaming", costImpact: "Sub-50ms" },
  { id: "int8", name: "Post-Training INT8 Model Quantization (4x Memory Reduction)", costImpact: "Zero Cloud Cost" },
  { id: "wal", name: "High-Concurrency SQLite WAL Mode Persistence", costImpact: "Zero Lock Contention" },
  { id: "pdf", name: "Cryptographic Official PDF Document Generator", costImpact: "Instant Vector Output" }
];

export default function RoiCalculator() {
  const [selectedArch, setSelectedArch] = useState(BASE_ARCHITECTURES[0]);
  const [selectedModules, setSelectedModules] = useState(["ocr", "int8", "wal"]);
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);

  const toggleModule = (id) => {
    playSound('click');
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const handleCopyBlueprint = () => {
    playSound('success');
    const blueprint = `SYSTEM ARCHITECTURE BLUEPRINT
Selected Solution: ${selectedArch.name}
Core Rationale: ${selectedArch.tagline}
Estimated Delivery Velocity: ${selectedArch.baseTimeline}
Projected Cloud Cost Reduction: ${selectedArch.baseSavings} (via Local Edge Quantization)
Target Latency Benchmark: ${selectedArch.baseLatency}
Active Modules: ${selectedModules.map(m => MODULE_OPTIONS.find(opt => opt.id === m)?.name).join(', ')}
Recommended Tech Stack: ${selectedArch.stack.join(', ')}
Architect: Muhammad Okasha (muhammad.okasha2146@gmail.com | +92 3495696659)`;

    navigator.clipboard.writeText(blueprint);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2500);
  };

  return (
    <section id="roi-calculator" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: 'var(--accent-amber)' }}>
          <Calculator size={14} /> Founder &amp; Recruiter Architecture Estimator
        </div>
        <h2 className="section-title">
          System Scope &amp; <span className="gradient-text">ROI Architecture Calculator</span>
        </h2>
        <p className="section-subtitle">
          Configure an enterprise AI architecture to calculate development velocity, local quantization cost savings, and the recommended engineering stack.
        </p>
      </div>

      {/* Main Calculator Bento Card */}
      <div 
        className="card"
        style={{
          padding: 'clamp(1.4rem, 4vw, 2.5rem)',
          borderRadius: '26px',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          maxWidth: '1120px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }} className="calculator-grid">
          {/* Left Column: Configuration Controls */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              1. SELECT SYSTEM ARCHITECTURE:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.4rem' }}>
              {BASE_ARCHITECTURES.map((arch) => (
                <button
                  key={arch.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedArch(arch);
                  }}
                  style={{
                    background: selectedArch.id === arch.id ? 'rgba(245, 158, 11, 0.12)' : 'var(--btn-sec-bg)',
                    border: selectedArch.id === arch.id ? '1.5px solid var(--accent-amber)' : '1px solid var(--btn-sec-border)',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px'
                  }}
                >
                  <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{arch.name}</span>
                    {selectedArch.id === arch.id && <CheckCircle2 size={16} color="var(--accent-amber)" />}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: 1.4 }}>
                    {arch.tagline}
                  </div>
                </button>
              ))}
            </div>

            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              2. SELECT ACTIVE SUBSYSTEM MODULES:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {MODULE_OPTIONS.map((mod) => (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  style={{
                    background: selectedModules.includes(mod.id) ? 'rgba(0, 255, 204, 0.08)' : 'var(--btn-sec-bg)',
                    border: selectedModules.includes(mod.id) ? '1px solid var(--accent-color)' : '1px solid var(--btn-sec-border)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '5px',
                      border: selectedModules.includes(mod.id) ? 'none' : '1.5px solid var(--card-border)',
                      background: selectedModules.includes(mod.id) ? 'var(--accent-color)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {selectedModules.includes(mod.id) && <Check size={12} color="#030308" />}
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {mod.name}
                    </span>
                  </div>
                  <span className="badge-neon" style={{ fontSize: '0.68rem', padding: '2px 6px', flexShrink: 0 }}>
                    {mod.costImpact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Output Telemetry Cockpit */}
          <div style={{
            background: 'var(--btn-sec-bg)',
            border: '1px solid var(--btn-sec-border)',
            borderRadius: '22px',
            padding: 'clamp(1.2rem, 3vw, 1.8rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Sparkles size={18} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Architectural Synthesis Blueprint
                </h3>
              </div>

              {/* 3 Metric Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '1.2rem' }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>VELOCITY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-amber)', marginTop: '2px' }}>
                    {selectedArch.baseTimeline}
                  </div>
                </div>

                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>COST SAVING</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-emerald)', marginTop: '2px' }}>
                    {selectedArch.baseSavings}
                  </div>
                </div>

                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>LATENCY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-cyan)', marginTop: '2px' }}>
                    {selectedArch.baseLatency}
                  </div>
                </div>
              </div>

              {/* Stack Matrix */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                  RECOMMENDED ENGINEERING STACK:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {selectedArch.stack.map((item, i) => (
                    <span key={i} className="badge-neon" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security & Reliability Clearance */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '12px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <ShieldCheck size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  Zero-Hallucination Guardrails &amp; Air-Gapped Local Inference Validated.
                </span>
              </div>
            </div>

            {/* Actions Bar */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: '1px solid var(--card-border)', paddingTop: '12px' }}>
              <button
                onClick={handleCopyBlueprint}
                className="btn-primary"
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  fontSize: '0.84rem',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                {copiedBlueprint ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedBlueprint ? 'Blueprint Copied!' : 'Copy Architecture Spec'}</span>
              </button>

              <a
                href="#contact"
                onClick={() => playSound('click')}
                className="btn-secondary"
                style={{
                  padding: '9px 14px',
                  fontSize: '0.84rem',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Book Discovery Call</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .calculator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
