import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, AppWindow, Cpu } from 'lucide-react';

const projects = [
  {
    title: "CHASHM AI",
    subtitle: "Hybrid Assistive Smart Headset Machine",
    icon: <Cpu size={28} color="var(--accent-color)" />,
    tags: ["FastAPI", "OpenCV", "YOLO .tflite", "ESP32-CAM", "WebSockets"],
    description: "Conceived and developed a full-stack object detection ecosystem for the visually impaired. It leverages a custom YOLO model quantized to INT8 for ultra-low latency, running on an ESP32-CAM. The backend streams to a dynamic JavaScript UI that annotates objects in real-time and provides audible Text-to-Speech spatial awareness."
  },
  {
    title: "Shina NLP Engine",
    subtitle: "Deep Learning Language Detection",
    icon: <AppWindow size={28} color="var(--accent-alt)" />,
    tags: ["Python", "LSTM", "CNN", "TensorFlow", "Word Embeddings"],
    description: "Pioneered a specialized deep learning architecture to preserve and classify the regional Shina language. By meticulously preprocessing a custom dataset and designing hybrid LSTM/CNN models, the engine captures complex linguistic patterns, achieving exceptional F1-scores and reliability."
  },
  {
    title: "Toxicity Sentinel",
    subtitle: "Hate Speech Detection on Twitter",
    icon: <Code size={28} color="#3b82f6" />,
    tags: ["NLP", "TF-IDF", "Lemmatization", "Scikit-learn"],
    description: "Built a robust text-classification pipeline that acts as a sentinel against digital toxicity. The model ingests raw social media data, applies rigorous NLP preprocessing (tokenization, TF-IDF), and accurately identifies harmful content, proving highly effective against real-world, noisy data."
  },
  {
    title: "MediScan AI",
    subtitle: "Automated Chicken Pox Detection",
    icon: <Server size={28} color="var(--accent-color)" />,
    tags: ["Deep Learning", "CNN", "Data Augmentation", "Medical Imaging"],
    description: "Developed an automated diagnostic tool that analyzes skin images to detect Chicken Pox with high precision. Overcame medical dataset scarcity by employing advanced data augmentation techniques and tuning a Convolutional Neural Network (CNN) to prevent overfitting."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'clamp(1.2rem, 3vw, 2rem)' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '14px', border: '1px solid var(--card-border)', flexShrink: 0 }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{project.subtitle}</p>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(0, 255, 204, 0.1)', 
                      color: 'var(--accent-color)', 
                      padding: '4px 9px', 
                      borderRadius: '6px', 
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.3px'
                    }}>
                      {tag}
                    </span>
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
