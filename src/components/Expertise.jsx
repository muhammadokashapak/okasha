import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Eye, Network, Sparkles, Zap, Server, ShieldCheck } from 'lucide-react';

const expertiseItems = [
  {
    title: "Enterprise GenAI & Multimodal RAG",
    icon: <Bot size={34} color="var(--accent-color)" />,
    tag: "Vector & LLM Architecture",
    description: "Architecting high-accuracy retrieval-augmented generation pipelines using Gemini 3.7 Flash, ChromaDB, and FastEmbed ONNX with Reciprocal Rank Fusion, document intelligence, and real-time SSE token streaming."
  },
  {
    title: "On-Device Neural AI & Edge Systems",
    icon: <Cpu size={34} color="var(--accent-cyan)" />,
    tag: "100% Offline Edge Inference",
    description: "Quantizing neural models (INT8 Whisper, MarianMT seq2seq, MobileNet) to run completely on-device across Android Jetpack Compose and embedded microcontrollers with zero cloud dependencies and sub-second latency."
  },
  {
    title: "Computer Vision & Assistive IoT",
    icon: <Eye size={34} color="var(--accent-alt)" />,
    tag: "Real-Time Embedded Perception",
    description: "Building end-to-end edge vision systems using custom quantized YOLO on ESP32-CAM and mobile hardware, coupled with OpenCV pipelines and real-time 3D spatial directional audio feedback."
  },
  {
    title: "Full-Stack AI Architecture & ERPs",
    icon: <Network size={34} color="var(--accent-emerald)" />,
    tag: "Mission-Critical Systems",
    description: "Developing scalable full-stack platforms with FastAPI async gateways, WebSockets, React 18, and cross-platform native deployments for education, hospital clinical care, and live meeting co-pilots."
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-container">
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
            Engineering <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Transforming complex mathematical abstractions and neural weights into robust, production-grade applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.4rem, 3vw, 2rem)' }}>
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.04)', 
                  padding: '14px', 
                  borderRadius: '16px', 
                  border: '1px solid var(--card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <span className="badge-neon" style={{ fontSize: '0.72rem' }}>
                  {item.tag}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 700 }}>
                {item.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem', flexGrow: 1 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
