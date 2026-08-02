import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Binary } from 'lucide-react';

const expertiseItems = [
  {
    title: "Computer Vision",
    icon: <Cpu size={40} color="var(--accent-color)" />,
    description: "Designing real-time object detection systems and automated diagnostic tools using deep learning architectures like CNNs and YOLO. I focus on optimizing model inference for edge devices and low-latency environments."
  },
  {
    title: "Natural Language Processing",
    icon: <Binary size={40} color="var(--accent-alt)" />,
    description: "Building intelligent language models capable of classifying text, detecting nuances like hate speech, and processing regional languages through tokenization and advanced embeddings."
  },
  {
    title: "Predictive Analytics & AI Strategy",
    icon: <BrainCircuit size={40} color="#3b82f6" />,
    description: "Transforming raw data into actionable business intelligence. I have a proven track record of boosting digital marketing revenues by 250% through data-driven insights and rigorous A/B testing strategies."
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
        <h2 className="section-title">
          <span className="gradient-text">What I Do</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'clamp(1.2rem, 3vw, 2rem)' }}>
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '16px', 
                borderRadius: '50%', 
                marginBottom: '1.2rem',
                border: '1px solid var(--card-border)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
