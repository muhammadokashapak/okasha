import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles, Sliders, Database, Zap, Activity } from 'lucide-react';
import { playSound } from '../utils/soundFx';

export default function TensorVisualizer() {
  const [quantization, setQuantization] = useState('INT8'); // 'FP32' | 'FP16' | 'INT8'
  const [attentionHeads, setAttentionHeads] = useState(32);
  const [embeddingDim, setEmbeddingDim] = useState(768);

  const getMemoryFootprint = () => {
    if (quantization === 'FP32') return '14.20 GB';
    if (quantization === 'FP16') return '7.10 GB';
    return '3.55 GB (4x Edge Reduction)';
  };

  const getInferenceSpeed = () => {
    if (quantization === 'FP32') return '42 tokens/sec (High Thermal)';
    if (quantization === 'FP16') return '78 tokens/sec (Balanced)';
    return '140+ tokens/sec (100% On-Device Whisper & MarianMT)';
  };

  return (
    <section id="tensor-visualizer" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)', color: 'var(--accent-alt)' }}>
          <Cpu size={14} /> Edge Model Quantization Laboratory
        </div>
        <h2 className="section-title">
          Interactive <span className="gradient-text">Neural Tensor &amp; Quantization Matrix</span>
        </h2>
        <p className="section-subtitle">
          Explore how post-training INT8 quantization and ONNX weight optimizations compress multi-gigabyte models for zero-latency edge execution on mobile hardware.
        </p>
      </div>

      {/* Main Interactive Card */}
      <div 
        className="card"
        style={{
          padding: 'clamp(1.4rem, 4vw, 2.5rem)',
          borderRadius: '26px',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          maxWidth: '1120px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }} className="tensor-grid">
          {/* Controls Column */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              1. PRECISION QUANTIZATION LEVEL:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '1.6rem' }}>
              {['FP32', 'FP16', 'INT8'].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    playSound('click');
                    setQuantization(q);
                  }}
                  style={{
                    background: quantization === q ? 'rgba(139, 92, 246, 0.18)' : 'var(--btn-sec-bg)',
                    border: quantization === q ? '1.5px solid var(--accent-alt)' : '1px solid var(--btn-sec-border)',
                    color: quantization === q ? 'var(--accent-alt)' : 'var(--text-secondary)',
                    borderRadius: '14px',
                    padding: '12px 8px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center'
                  }}
                >
                  <div>{q}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '2px' }}>
                    {q === 'FP32' ? '32-bit' : q === 'FP16' ? '16-bit' : '8-bit Edge'}
                  </div>
                </button>
              ))}
            </div>

            {/* Slider 1: Attention Heads */}
            <div style={{ marginBottom: '1.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  2. MULTI-HEAD ATTENTION HEADS:
                </span>
                <span className="badge-neon" style={{ fontSize: '0.74rem' }}>
                  {attentionHeads} Heads
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                step="8"
                value={attentionHeads}
                onChange={(e) => {
                  setAttentionHeads(Number(e.target.value));
                  playSound('hover');
                }}
                style={{ width: '100%', accentColor: 'var(--accent-alt)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 2: Vector Dimension */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  3. VECTOR EMBEDDING DIMENSION:
                </span>
                <span className="badge-neon" style={{ fontSize: '0.74rem' }}>
                  {embeddingDim}-D
                </span>
              </div>
              <input
                type="range"
                min="512"
                max="1536"
                step="256"
                value={embeddingDim}
                onChange={(e) => {
                  setEmbeddingDim(Number(e.target.value));
                  playSound('hover');
                }}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Visual Simulation Display */}
          <div style={{
            background: 'var(--btn-sec-bg)',
            border: '1px solid var(--btn-sec-border)',
            borderRadius: '20px',
            padding: 'clamp(1.2rem, 3vw, 1.8rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-alt)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                QUANTIZED HARDWARE TELEMETRY:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '1.2rem' }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>VRAM OCCUPANCY</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--accent-color)', marginTop: '2px' }}>
                    {getMemoryFootprint()}
                  </div>
                </div>

                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>THROUGHPUT</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '2px' }}>
                    {quantization === 'INT8' ? '140+ tok/s' : quantization === 'FP16' ? '78 tok/s' : '42 tok/s'}
                  </div>
                </div>
              </div>

              {/* Dynamic Animated Weight Distribution Matrix */}
              <div style={{
                background: 'rgba(5, 7, 18, 0.95)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '16px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' }}>
                  <span>Weight Tensor Density ({quantization})</span>
                  <span>{attentionHeads} Attention Synapses Active</span>
                </div>

                {/* Animated Bars */}
                <div style={{ display: 'flex', gap: '4px', height: '36px', alignItems: 'flex-end' }}>
                  {Array.from({ length: Math.min(attentionHeads, 32) }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: quantization === 'INT8' ? `${Math.min(95, (i % 8 + 3) * 11)}%` : quantization === 'FP16' ? `${Math.min(95, (i % 6 + 4) * 13)}%` : '92%',
                        background: quantization === 'INT8' ? '#00ffcc' : quantization === 'FP16' ? '#38bdf8' : '#8b5cf6'
                      }}
                      transition={{ duration: 0.3, delay: i * 0.01 }}
                      style={{ flex: 1, borderRadius: '2px' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              ⚡ <strong>Architectural Note:</strong> INT8 symmetric quantization on ARM/Android cuts floating-point bandwidth by 75% while preserving 99.4% BLEU/WER accuracy on Whisper &amp; MarianMT.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .tensor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
