import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, AlertTriangle, Send } from 'lucide-react';

export default function AiPlayground() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleInputs = [
    "Machine learning neural networks are transforming regional language processing!",
    "CHASHM AI provides spatial audio awareness for visually impaired users.",
    "This model is terrible and completely useless!",
    "Automated chicken pox skin detection using custom CNN architectures."
  ];

  const analyzeSentiment = (inputStr) => {
    const content = inputStr || text;
    if (!content.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = content.toLowerCase();
      const toxicWords = ['terrible', 'useless', 'stupid', 'hate', 'bad', 'garbage', 'idiot', 'worst'];
      const positiveWords = ['transforming', 'great', 'awesome', 'excellent', 'amazing', 'best', 'innovative', 'useful', 'smart'];

      let isToxic = false;
      let toxicScore = 0.05;
      let sentiment = 'Neutral';

      toxicWords.forEach((word) => {
        if (lower.includes(word)) {
          isToxic = true;
          toxicScore += 0.45;
        }
      });

      let posCount = 0;
      positiveWords.forEach((word) => {
        if (lower.includes(word)) {
          posCount++;
        }
      });

      if (isToxic) {
        sentiment = 'Toxic / Negative';
        toxicScore = Math.min(0.98, toxicScore);
      } else if (posCount > 0) {
        sentiment = 'Positive / Constructive';
        toxicScore = 0.02;
      } else {
        sentiment = 'Neutral / Informational';
        toxicScore = 0.08;
      }

      setResult({
        text: content,
        sentiment,
        toxicScore: Math.round(toxicScore * 100),
        isToxic,
        confidence: Math.round(88 + Math.random() * 10)
      });

      setIsAnalyzing(false);
    }, 400);
  };

  return (
    <section id="ai-playground" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Live Neural Lab
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-text">AI Sentinel Demo</span>
          </h2>
          <p className="section-subtitle">
            Test the NLP Sentinel pipeline logic and real-time sentiment & toxicity classification live in your browser.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '840px', margin: '0 auto', padding: 'clamp(20px, 4vw, 36px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <Sparkles color="var(--accent-color)" size={24} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Real-time NLP Sentiment &amp; Toxicity Classifier
            </h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Type any sentence or click a sample prompt below to simulate real-time NLP tokenization and sentiment inference:
          </p>

          {/* Sample Prompts */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {sampleInputs.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setText(sample);
                  analyzeSentiment(sample);
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
                className="sample-prompt-btn"
              >
                "{sample.length > 38 ? sample.substring(0, 38) + '...' : sample}"
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem' }} className="playground-input-group">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to analyze sentiment & toxicity..."
              style={{
                flex: 1,
                background: 'rgba(10, 10, 20, 0.8)',
                border: '1px solid var(--card-border)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
            <button
              onClick={() => analyzeSentiment(text)}
              disabled={isAnalyzing || !text.trim()}
              className="btn-primary"
              style={{ padding: '12px 24px', borderRadius: '12px', fontSize: '0.9rem' }}
            >
              {isAnalyzing ? 'Analyzing...' : 'Classify'} <Send size={16} />
            </button>
          </div>

          {/* Analysis Results Display */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: result.isToxic ? 'rgba(239, 68, 68, 0.08)' : 'rgba(0, 255, 204, 0.08)',
                border: `1px solid ${result.isToxic ? 'rgba(239, 68, 68, 0.3)' : 'rgba(0, 255, 204, 0.3)'}`,
                borderRadius: '14px',
                padding: '1.2rem',
                marginTop: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {result.isToxic ? (
                    <AlertTriangle color="#ef4444" size={20} />
                  ) : (
                    <ShieldCheck color="var(--accent-color)" size={20} />
                  )}
                  <span style={{ fontWeight: 700, color: result.isToxic ? '#ef4444' : 'var(--accent-color)', fontSize: '1rem' }}>
                    {result.sentiment}
                  </span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Model Confidence: <strong style={{ color: '#fff' }}>{result.confidence}%</strong>
                </span>
              </div>

              <div style={{ marginBottom: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  <span>Toxicity Index</span>
                  <span>{result.toxicScore}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${result.toxicScore}%`,
                      height: '100%',
                      background: result.isToxic
                        ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                        : 'linear-gradient(90deg, #00ffcc, #3b82f6)',
                      borderRadius: '4px',
                      transition: 'width 0.5s ease'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <style>{`
        .sample-prompt-btn:hover {
          background: rgba(0, 255, 204, 0.1) !important;
          border-color: var(--accent-color) !important;
          color: #fff !important;
        }
        @media (max-width: 600px) {
          .playground-input-group {
            flex-direction: column;
          }
          .playground-input-group button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
