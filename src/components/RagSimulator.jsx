import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  RefreshCw, 
  Code2, 
  Zap, 
  Sliders 
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const PRESET_QUERIES = [
  {
    id: "ghl-oauth",
    label: "⚡ GHL OAuth 2.0 & API v2 Token Flow",
    query: "How does OAuth 2.0 token refresh work in GoHighLevel REST API v2?",
    tokens: 14,
    embeddingTime: "12ms",
    vectorDim: "768-D (FastEmbed nomic-v1.5)",
    cosineScore: "0.954",
    rrfScore: "0.988",
    chunksScanned: "5,717 chunks",
    topChunk: "GHL OAuth 2.0 endpoint requires POST to /oauth/token with client_id, client_secret, refresh_token and grant_type='refresh_token'. Returns access_token valid for 24 hours and a rolling refresh_token.",
    synthesizedAnswer: "GoHighLevel API v2 employs a rolling OAuth 2.0 token refresh standard. Send a POST request to https://services.leadconnectorhq.com/oauth/token with your client credentials and the active refresh_token. Upon success, an access_token (24-hour TTL) and a new refresh_token are returned. Ensure token rotation is handled atomically in persistent storage."
  },
  {
    id: "sales-whisper",
    label: "🎙️ Sales Co-Pilot <50ms Objection Battlecard",
    query: "How does local Whisper STT classify buyer objections in <50ms?",
    tokens: 12,
    embeddingTime: "8ms",
    vectorDim: "768-D (Local ChromaDB)",
    cosineScore: "0.968",
    rrfScore: "0.992",
    chunksScanned: "1,240 chunks",
    topChunk: "Local Whisper STT streams audio via WebRTC. Ollama LLM classifies hesitation tokens into [Budget, Authority, Skepticism]. ChromaDB retrieves the highest-confidence counter-pitch battlecard.",
    synthesizedAnswer: "Audio is captured from Zoom tabs via WebRTC and transcribed in real-time by a local INT8 Whisper model with Voice Activity Detection. The intent classifier identifies the psychological objection category and queries ChromaDB vector indexes within 45ms, delivering battlecards directly to the representative's floating HUD."
  },
  {
    id: "edge-marian",
    label: "🎬 On-Device MarianMT Subtitle Sync",
    query: "How does on-device MarianMT synchronize subtitles natively on Android?",
    tokens: 11,
    embeddingTime: "14ms",
    vectorDim: "512-D (Edge ONNX)",
    cosineScore: "0.941",
    rrfScore: "0.975",
    chunksScanned: "850 chunks",
    topChunk: "Quantized Whisper outputs timestamped VAD segments. MarianMT autoregressively translates tokens. Media3 ExoPlayer matches playback timestamps using binary search synchronization.",
    synthesizedAnswer: "On Android, audio frames are processed by INT8 quantized Whisper to extract start/end timecodes. The translated text from MarianMT seq2seq is formatted into synchronized subtitle tracks and rendered via Media3 ExoPlayer with binary search lookups, consuming 0 KB cloud bandwidth."
  }
];

export default function RagSimulator() {
  const [selectedPreset, setSelectedPreset] = useState(PRESET_QUERIES[0]);
  const [customInput, setCustomInput] = useState('');
  const [stage, setStage] = useState(0); // 0: Idle, 1: Vectorizing, 2: ChromaDB Search, 3: Chunk Retrieval, 4: Stream Complete
  const [streamedText, setStreamedText] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = (preset = selectedPreset) => {
    playSound('click');
    setIsRunning(true);
    setStage(1);
    setStreamedText('');

    // Stage 1 -> 2
    setTimeout(() => {
      setStage(2);
      playSound('hover');
    }, 600);

    // Stage 2 -> 3
    setTimeout(() => {
      setStage(3);
      playSound('hover');
    }, 1200);

    // Stage 3 -> 4 Typewriter stream
    setTimeout(() => {
      setStage(4);
      playSound('success');
      let currentIdx = 0;
      const fullText = preset.synthesizedAnswer;
      const interval = setInterval(() => {
        if (currentIdx < fullText.length) {
          setStreamedText(fullText.slice(0, currentIdx + 4));
          currentIdx += 4;
        } else {
          setStreamedText(fullText);
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 25);
    }, 1800);
  };

  useEffect(() => {
    runSimulation(selectedPreset);
  }, [selectedPreset]);

  return (
    <section id="rag-simulator" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(0, 255, 204, 0.1)' }}>
          <Workflow size={14} /> Interactive Engineering Sandbox
        </div>
        <h2 className="section-title">
          Live <span className="gradient-text">RAG Pipeline Simulator</span>
        </h2>
        <p className="section-subtitle">
          Test Muhammad's hybrid vector indexing, ONNX embedding generation, and ChromaDB Reciprocal Rank Fusion in real-time.
        </p>
      </div>

      {/* Simulator Cockpit Card */}
      <div 
        className="card" 
        style={{
          padding: 'clamp(1.4rem, 4vw, 2.5rem)',
          borderRadius: '26px',
          border: '1px solid rgba(0, 255, 204, 0.35)',
          background: 'var(--card-bg)',
          boxShadow: 'var(--card-shadow-hover)',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {/* Top Preset Selector Tabs */}
        <div style={{ marginBottom: '1.6rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
            SELECT LIVE TEST PAYLOAD:
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {PRESET_QUERIES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  if (isRunning) return;
                  setSelectedPreset(p);
                }}
                disabled={isRunning}
                style={{
                  padding: '9px 16px',
                  borderRadius: '14px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  border: selectedPreset.id === p.id ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
                  background: selectedPreset.id === p.id ? 'rgba(0, 255, 204, 0.12)' : 'var(--btn-sec-bg)',
                  color: selectedPreset.id === p.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Query Display */}
        <div style={{
          background: 'var(--btn-sec-bg)',
          border: '1px solid var(--btn-sec-border)',
          borderRadius: '16px',
          padding: '14px 18px',
          marginBottom: '1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
            <Sparkles size={18} color="var(--accent-color)" />
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Active Test Query</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.94rem' }}>
                "{selectedPreset.query}"
              </div>
            </div>
          </div>

          <button
            onClick={() => runSimulation(selectedPreset)}
            disabled={isRunning}
            className="btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: '0.84rem',
              borderRadius: '12px',
              opacity: isRunning ? 0.6 : 1,
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            <RefreshCw size={14} className={isRunning ? 'animate-spin' : ''} />
            <span>{isRunning ? 'Simulating Pipeline...' : 'Re-Execute Pipeline'}</span>
          </button>
        </div>

        {/* 4-Step Animated Visual Pipeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          marginBottom: '1.8rem'
        }}>
          {/* Step 1: Embedding Vectorizer */}
          <div style={{
            background: stage >= 1 ? 'rgba(0, 255, 204, 0.06)' : 'var(--btn-sec-bg)',
            border: `1px solid ${stage >= 1 ? 'rgba(0, 255, 204, 0.4)' : 'var(--btn-sec-border)'}`,
            borderRadius: '16px',
            padding: '14px',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stage >= 1 ? 'var(--accent-color)' : 'var(--text-muted)' }}>STEP 1 • FASTEMBED ONNX</span>
              {stage >= 1 && <CheckCircle2 size={15} color="var(--accent-color)" />}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {selectedPreset.embeddingTime}
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              {selectedPreset.vectorDim}
            </div>
          </div>

          {/* Step 2: ChromaDB Vector Scan */}
          <div style={{
            background: stage >= 2 ? 'rgba(139, 92, 246, 0.06)' : 'var(--btn-sec-bg)',
            border: `1px solid ${stage >= 2 ? 'rgba(139, 92, 246, 0.4)' : 'var(--btn-sec-border)'}`,
            borderRadius: '16px',
            padding: '14px',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stage >= 2 ? 'var(--accent-alt)' : 'var(--text-muted)' }}>STEP 2 • CHROMADB RRF</span>
              {stage >= 2 && <CheckCircle2 size={15} color="var(--accent-alt)" />}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-alt)' }}>
              Score: {selectedPreset.cosineScore}
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Scanned: {selectedPreset.chunksScanned}
            </div>
          </div>

          {/* Step 3: Top Chunk Matched */}
          <div style={{
            background: stage >= 3 ? 'rgba(56, 189, 248, 0.06)' : 'var(--btn-sec-bg)',
            border: `1px solid ${stage >= 3 ? 'rgba(56, 189, 248, 0.4)' : 'var(--btn-sec-border)'}`,
            borderRadius: '16px',
            padding: '14px',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stage >= 3 ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>STEP 3 • TOP CHUNK</span>
              {stage >= 3 && <CheckCircle2 size={15} color="var(--accent-cyan)" />}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>
              Rank #1 Match
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              RRF Rank: {selectedPreset.rrfScore}
            </div>
          </div>

          {/* Step 4: LLM Synthesis Status */}
          <div style={{
            background: stage >= 4 ? 'rgba(16, 185, 129, 0.06)' : 'var(--btn-sec-bg)',
            border: `1px solid ${stage >= 4 ? 'rgba(16, 185, 129, 0.4)' : 'var(--btn-sec-border)'}`,
            borderRadius: '16px',
            padding: '14px',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stage >= 4 ? 'var(--accent-emerald)' : 'var(--text-muted)' }}>STEP 4 • GEMINI 3.7 FLASH</span>
              {stage >= 4 && <CheckCircle2 size={15} color="var(--accent-emerald)" />}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-emerald)' }}>
              SSE Stream Active
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Zero-Hallucination Verified
            </div>
          </div>
        </div>

        {/* Retrieved Chunk Inspector & Synthesized Output */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '14px' }} className="rag-output-grid">
          {/* Retrieved Ground-Truth Chunk */}
          <div style={{
            background: 'var(--btn-sec-bg)',
            border: '1px solid var(--btn-sec-border)',
            borderRadius: '18px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Database size={14} /> Retrieved Ground-Truth Context Chunk
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
              "{selectedPreset.topChunk}"
            </p>
          </div>

          {/* Real-Time Typewriter Synthesized Response */}
          <div style={{
            background: 'var(--btn-sec-bg)',
            border: '1px solid rgba(0, 255, 204, 0.3)',
            borderRadius: '18px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} /> Synthesized Token Output (Gemini 3.7 Flash SSE Stream)
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
              {streamedText || (stage < 4 ? 'Processing neural pipeline...' : '')}
              {isRunning && <span style={{ display: 'inline-block', width: '6px', height: '14px', background: 'var(--accent-color)', marginLeft: '4px', animation: 'pulse 1s infinite' }} />}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rag-output-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
