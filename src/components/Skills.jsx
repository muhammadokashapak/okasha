import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Python", "C++", "Data Analysis", "Data Visualization", "Deep Learning", "Scikit-learn", "Flask", "NLP", "Computer Vision", "Neural Networks"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Presentation", "Time Management", "Problem-Solving", "Critical Thinking"]
  },
  {
    title: "Certifications",
    skills: ["AI for Everyone", "Machine Learning with Python", "Supervised/Unsupervised ML", "Intro to TensorFlow"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Skills & Certifications</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 204, 0.15)' }}
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                      cursor: 'default',
                      transition: 'border-color 0.3s'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
