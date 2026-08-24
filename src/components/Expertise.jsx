import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Eye, 
  Network, 
  Sparkles, 
  Zap, 
  Server, 
  ShieldCheck, 
  ArrowUpRight, 
  Activity, 
  Layers, 
  Lock, 
  Gauge 
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const expertiseItems = [
  {
    title: "Enterprise GenAI & Multimodal RAG",
    icon: <Bot size={32} color="var(--accent-color)" />,
    tag: "Vector & LLM Architecture",
    tagColor: "var(--accent-color)",
    description: "Architecting high-accuracy retrieval-augmented generation pipelines using Gemini 3.7 Flash, ChromaDB, and FastEmbed ONNX with Reciprocal Rank Fusion, document intelligence, and real-time SSE token streaming.",
    stack: ["Gemini 3.7 Flash", "ChromaDB", "FastEmbed ONNX", "RRF Scoring", "SSE Stream"],
    metric: {
      label: "BENCHMARK",
      value: "<150ms Retrieval",
      sub: "5,717 Chunks Indexed",
      icon: <Zap size={14} color="var(--accent-color)" />
    },
    targetLink: "#rag-simulator"
  },
  {
    title: "On-Device Neural AI & Edge Systems",
    icon: <Cpu size={32} color="var(--accent-cyan)" />,
    tag: "100% Offline Edge Inference",
    tagColor: "var(--accent-cyan)",
    description: "Quantizing neural models (INT8 Whisper, MarianMT seq2seq, MobileNet) to run completely on-device across Android Jetpack Compose and embedded microcontrollers with zero cloud dependencies and sub-second latency.",
    stack: ["Whisper INT8", "MarianMT Seq2Seq", "ONNX Mobile", "Android Compose", "Media3"],
    metric: {
      label: "PRIVACY CLEARANCE",
      value: "0 KB Cloud Leakage",
      sub: "Air-Gapped Local Inference",
      icon: <Lock size={14} color="var(--accent-cyan)" />
    },
    targetLink: "#tensor-visualizer"
  },
  {
    title: "Computer Vision & Assistive IoT",
    icon: <Eye size={32} color="var(--accent-alt)" />,
    tag: "Real-Time Embedded Perception",
    tagColor: "var(--accent-alt)",
    description: "Building end-to-end edge vision systems using custom quantized YOLO on ESP32-CAM and mobile hardware, coupled with OpenCV pipelines and real-time 3D spatial directional audio feedback.",
    stack: ["YOLOv8 .tflite", "ESP32-CAM", "OpenCV", "Spatial 3D Audio", "FreeRTOS"],
    metric: {
      label: "HARDWARE LATENCY",
      value: "30 FPS Edge Vision",
      sub: "Microcontroller Quantized",
      icon: <Activity size={14} color="var(--accent-alt)" />
    },
    targetLink: "#projects"
  },
  {
    title: "Full-Stack AI Architecture & ERPs",
    icon: <Network size={32} color="var(--accent-emerald)" />,
    tag: "Mission-Critical Systems",
    tagColor: "var(--accent-emerald)",
    description: "Developing scalable full-stack platforms with FastAPI async gateways, WebSockets, React 19, SQLite WAL concurrency, and cross-platform native deployments for hospital care and real-time meeting co-pilots.",
    stack: ["FastAPI Async", "WebSockets / WebRTC", "SQLite WAL", "React 19 / Vite", "Docker"],
    metric: {
      label: "THROUGHPUT",
      value: "10,000 req/sec",
      sub: "Zero Lock Contention",
      icon: <Gauge size={14} color="var(--accent-emerald)" />
    },
    targetLink: "#projects"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-container" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Core Architectural Pillars
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Expertise &amp; Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Transforming complex mathematical abstractions, neural weights, and vector pipelines into robust, enterprise-grade production architectures.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              className="card spotlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '24px',
                padding: 'clamp(1.4rem, 3vw, 1.8rem)',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Strip */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ 
                    background: 'rgba(255,255,255,0.04)', 
                    padding: '12px', 
                    borderRadius: '16px', 
                    border: '1px solid var(--card-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}>
                    {item.icon}
                  </div>
                  <span className="badge-neon" style={{ fontSize: '0.72rem', borderColor: item.tagColor, color: item.tagColor }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.3rem)', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 800, letterSpacing: '-0.3px' }}>
                  {item.title}
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1.4rem' }}>
                  {item.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--btn-sec-border)',
                        color: 'var(--text-secondary)',
                        padding: '3px 8px',
                        borderRadius: '8px',
                        fontSize: '0.72rem',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Telemetry & Navigation Strip */}
              <div style={{
                borderTop: '1px solid var(--card-border)',
                paddingTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                marginTop: 'auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    padding: '6px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.metric.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {item.metric.value}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {item.metric.sub}
                    </div>
                  </div>
                </div>

                <a
                  href={item.targetLink}
                  onClick={() => playSound('click')}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--btn-sec-border)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    flexShrink: 0
                  }}
                  title="Explore Architecture"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
