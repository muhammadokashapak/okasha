import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Check, 
  X, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Server, 
  Sparkles,
  Layers
} from 'lucide-react';

const BENCHMARKS = [
  {
    parameter: "Vector Retrieval Latency",
    standard: "1,200ms – 3,500ms (Cloud API)",
    okasha: "<50ms – 150ms (FastEmbed ONNX)",
    benefit: "Sub-second real-time responsiveness for voice & search",
    winner: true
  },
  {
    parameter: "Cloud Data Transfer & Privacy",
    standard: "100% Cloud Dependent (Continuous Data Leak Risk)",
    okasha: "0 KB Cloud Data (100% On-Device Whisper & MarianMT)",
    benefit: "Air-gapped enterprise confidentiality & zero bandwidth costs",
    winner: true
  },
  {
    parameter: "API Hallucination Resistance",
    standard: "High Hallucination Rate on Multi-Step Specs",
    okasha: "Reciprocal Rank Fusion (RRF) + Exact Token Match",
    benefit: "Zero-hallucination code generation & OAuth execution",
    winner: true
  },
  {
    parameter: "Live Voice Meeting Intelligence",
    standard: "Post-Call Summary Only (800ms+ Webhook Lag)",
    okasha: "Sub-50ms Live Objection Battlecard HUD Overlay",
    benefit: "In-ear psychological guidance during live negotiations",
    winner: true
  },
  {
    parameter: "Async Microservice Throughput",
    standard: "150 – 500 req/sec (Blocking Architecture)",
    okasha: "10,000 req/sec (Async FastAPI + SQLite WAL)",
    benefit: "Scalable high-throughput content moderation gateway",
    winner: true
  },
  {
    parameter: "Cross-Platform Deployment",
    standard: "Web Browser Only",
    okasha: "Android Kotlin, Windows Desktop Native & ESP32-CAM",
    benefit: "Native multi-platform binaries from single architecture",
    winner: true
  }
];

export default function BenchmarkMatrix() {
  return (
    <section id="benchmarks" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.3)', color: 'var(--accent-cyan)' }}>
          <BarChart3 size={14} /> Production Performance Metrics
        </div>
        <h2 className="section-title">
          Architectural <span className="gradient-text">Performance Benchmarks</span>
        </h2>
        <p className="section-subtitle">
          How Muhammad Okasha's production-grade AI systems compare against standard off-the-shelf cloud implementations.
        </p>
      </div>

      {/* Benchmark Matrix Table / Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card"
        style={{
          padding: 'clamp(1.2rem, 3.5vw, 2.2rem)',
          borderRadius: '26px',
          overflowX: 'auto',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '650px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <th style={{ padding: '14px 16px', fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ARCHITECTURAL PARAMETER
              </th>
              <th style={{ padding: '14px 16px', fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                STANDARD CLOUD APIS
              </th>
              <th style={{ padding: '14px 16px', fontSize: '0.82rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(0, 255, 204, 0.05)', borderRadius: '12px 12px 0 0' }}>
                ⚡ MUHAMMAD'S ARCHITECTURES
              </th>
            </tr>
          </thead>
          <tbody>
            {BENCHMARKS.map((row, idx) => (
              <tr 
                key={idx}
                style={{ 
                  borderBottom: idx < BENCHMARKS.length - 1 ? '1px solid var(--card-border)' : 'none',
                  transition: 'background 0.2s'
                }}
                className="benchmark-row"
              >
                {/* Parameter */}
                <td style={{ padding: '16px', verticalAlign: 'top' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    {row.parameter}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
                    {row.benefit}
                  </div>
                </td>

                {/* Standard Implementation */}
                <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#f43f5e', fontWeight: 800, flexShrink: 0 }}>✕</span>
                    <span>{row.standard}</span>
                  </div>
                </td>

                {/* Okasha Implementation */}
                <td style={{ 
                  padding: '16px', 
                  verticalAlign: 'top', 
                  background: 'rgba(0, 255, 204, 0.04)', 
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{row.okasha}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
