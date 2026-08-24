import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Sparkles, CheckCircle2, Layers, Cpu, Database, Server, Code2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const COMPETENCY_DOMAINS = [
  {
    id: "rag",
    label: "Enterprise Multimodal RAG",
    score: 98,
    angle: 0,
    highlights: ["5,717 Vector Chunks Indexed", "FastEmbed ONNX sub-150ms", "Reciprocal Rank Fusion", "Gemini 3.7 Vision & Audio"]
  },
  {
    id: "edge",
    label: "Edge AI & Quantization",
    score: 96,
    angle: 60,
    highlights: ["100% On-Device Whisper INT8", "MarianMT Seq2Seq Translation", "ONNX Mobile Runtime", "0 KB Cloud Data Leakage"]
  },
  {
    id: "deep",
    label: "Deep Learning & Vision",
    score: 95,
    angle: 120,
    highlights: ["PyTorch & TensorFlow Pipelines", "YOLOv8 .tflite Real-Time", "Bidirectional LSTM & CNNs", "Custom Shina NLP Embeddings"]
  },
  {
    id: "async",
    label: "Async Streaming & Microservices",
    score: 96,
    angle: 180,
    highlights: ["10,000 req/sec FastAPI Gateway", "WebSockets & WebRTC Streams", "Server-Sent Events (SSE)", "Sub-50ms Battlecard Retrieval"]
  },
  {
    id: "fullstack",
    label: "Full-Stack Enterprise Systems",
    score: 97,
    angle: 240,
    highlights: ["5-Portal Role-Based ERPs", "React 19 / Vite Ecosystems", "Android Kotlin Compose", "Capacitor Multi-Platform Native"]
  },
  {
    id: "systems",
    label: "Data Architecture & DevOps",
    score: 93,
    angle: 300,
    highlights: ["SQLite WAL Concurrency", "PostgreSQL & Redis Caching", "Docker Containerization", "PyInstaller Desktop Binaries"]
  }
];

export default function CompetencyRadar() {
  const [selectedDomain, setSelectedDomain] = useState(COMPETENCY_DOMAINS[0]);

  // Generate SVG polygon points for radar
  const size = 300;
  const center = size / 2;
  const radius = 110;

  const getCoordinates = (angleDeg, scorePercent) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const r = (scorePercent / 100) * radius;
    const x = center + r * Math.cos(angleRad);
    const y = center + r * Math.sin(angleRad);
    return { x, y };
  };

  const polygonPoints = COMPETENCY_DOMAINS.map(d => {
    const { x, y } = getCoordinates(d.angle, d.score);
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id="competency-radar" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(0, 255, 204, 0.1)' }}>
          <Award size={14} /> Comprehensive Skill Topology
        </div>
        <h2 className="section-title">
          Architectural <span className="gradient-text">Competency Radar</span>
        </h2>
        <p className="section-subtitle">
          Multidimensional evaluation of Muhammad Okasha's core technical proficiencies and engineering maturity across 6 primary disciplines.
        </p>
      </div>

      {/* Radar Matrix Card */}
      <div 
        className="card"
        style={{
          padding: 'clamp(1.4rem, 4vw, 2.5rem)',
          borderRadius: '26px',
          maxWidth: '1120px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'center' }} className="radar-grid">
          {/* Left: SVG Hexagonal Radar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
              {/* Concentric Grid Hexagons */}
              {[0.25, 0.5, 0.75, 1.0].map((scale, i) => (
                <polygon
                  key={i}
                  points={COMPETENCY_DOMAINS.map(d => {
                    const { x, y } = getCoordinates(d.angle, scale * 100);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="var(--card-border)"
                  strokeDasharray={i < 3 ? "3 3" : "none"}
                  strokeWidth="1"
                />
              ))}

              {/* Axis Spoke Lines */}
              {COMPETENCY_DOMAINS.map((d, i) => {
                const { x, y } = getCoordinates(d.angle, 100);
                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="var(--card-border)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Filled Competency Polygon */}
              <polygon
                points={polygonPoints}
                fill="rgba(0, 255, 204, 0.2)"
                stroke="var(--accent-color)"
                strokeWidth="2.5"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.4))' }}
              />

              {/* Interactive Node Vertex Dots */}
              {COMPETENCY_DOMAINS.map((d, i) => {
                const { x, y } = getCoordinates(d.angle, d.score);
                const isSelected = selectedDomain.id === d.id;
                return (
                  <g key={i} onClick={() => { playSound('click'); setSelectedDomain(d); }} style={{ cursor: 'pointer' }}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 7 : 5}
                      fill={isSelected ? '#00ffcc' : 'var(--accent-cyan)'}
                      stroke="#030308"
                      strokeWidth="2"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: Selected Domain Deep-Dive Inspector */}
          <div style={{
            background: 'var(--btn-sec-bg)',
            border: '1px solid var(--btn-sec-border)',
            borderRadius: '22px',
            padding: 'clamp(1.2rem, 3vw, 1.8rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {selectedDomain.label}
              </h3>
              <span className="badge-neon" style={{ fontSize: '0.85rem', padding: '4px 10px', fontWeight: 800 }}>
                Score: {selectedDomain.score}%
              </span>
            </div>

            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              KEY ARCHITECTURAL HIGHLIGHTS:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedDomain.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Domain Selection Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', borderTop: '1px solid var(--card-border)', paddingTop: '12px', marginTop: '6px' }}>
              {COMPETENCY_DOMAINS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedDomain(d);
                  }}
                  style={{
                    background: selectedDomain.id === d.id ? 'rgba(0, 255, 204, 0.15)' : 'var(--card-bg)',
                    border: selectedDomain.id === d.id ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
                    color: selectedDomain.id === d.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                    borderRadius: '12px',
                    padding: '5px 10px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {d.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .radar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
