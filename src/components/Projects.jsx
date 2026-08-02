import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, AppWindow, Cpu, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "CHASHM AI",
    subtitle: "Hybrid Assistive Smart Headset Machine",
    icon: <Cpu size={28} color="var(--accent-color)" />,
    github: "https://github.com/muhammadokashapak/okasha",
    link: "#home",
    tags: ["FastAPI", "OpenCV", "YOLO .tflite", "ESP32-CAM", "WebSockets"],
    description: "Conceived and developed a full-stack object detection ecosystem for the visually impaired. It leverages a custom YOLO model quantized to INT8 for ultra-low latency, running on an ESP32-CAM. The backend streams to a dynamic JavaScript UI that annotates objects in real-time and provides audible Text-to-Speech spatial awareness."
  },
  {
    title: "Shina NLP Engine",
    subtitle: "Deep Learning Language Detection",
    icon: <AppWindow size={28} color="var(--accent-alt)" />,
    github: "https://github.com/muhammadokashapak",
    link: "#home",
    tags: ["Python", "LSTM", "CNN", "TensorFlow", "Word Embeddings"],
    description: "Pioneered a specialized deep learning architecture to preserve and classify the regional Shina language. By meticulously preprocessing a custom dataset and designing hybrid LSTM/CNN models, the engine captures complex linguistic patterns, achieving exceptional F1-scores and reliability."
  },
  {
    title: "Toxicity Sentinel",
    subtitle: "Hate Speech Detection on Twitter",
    icon: <Code size={28} color="#3b82f6" />,
    github: "https://github.com/muhammadokashapak",
    link: "#ai-playground",
    tags: ["NLP", "TF-IDF", "Lemmatization", "Scikit-learn"],
    description: "Built a robust text-classification pipeline that acts as a sentinel against digital toxicity. The model ingests raw social media data, applies rigorous NLP preprocessing (tokenization, TF-IDF), and accurately identifies harmful content, proving highly effective against real-world, noisy data."
  },
  {
    title: "MediScan AI",
    subtitle: "Automated Chicken Pox Detection",
    icon: <Server size={28} color="var(--accent-color)" />,
    github: "https://github.com/muhammadokashapak",
    link: "#home",
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
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '14px', border: '1px solid var(--card-border)', flexShrink: 0 }}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{project.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{project.subtitle}</p>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', padding: '6px', borderRadius: '8px', border: '1px solid var(--card-border)', display: 'inline-flex' }}
                    title="View GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(0, 255, 204, 0.08)', 
                      color: 'var(--accent-color)', 
                      border: '1px solid rgba(0, 255, 204, 0.2)',
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
