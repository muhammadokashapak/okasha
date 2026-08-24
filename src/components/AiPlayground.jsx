import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, AlertTriangle, Send, Layers, Search, Compass, Activity, Database } from 'lucide-react';
import { playSound } from '../utils/soundFx';

const VECTOR_CLUSTERS = [
  { id: 'rag1', name: 'Enterprise RAG 5.7k Chunks', category: 'rag', x: 22, y: 35, keywords: ['rag', 'vector', 'chromadb', 'embeddings', 'retrieval', 'hybrid', 'rrf'] },
  { id: 'rag2', name: 'Gemini 3.7 Flash Reasoning', category: 'rag', x: 28, y: 25, keywords: ['gemini', 'llm', 'flash', 'reasoning', 'multimodal', 'prompt'] },
  { id: 'rag3', name: 'FastEmbed ONNX Pipeline', category: 'rag', x: 18, y: 48, keywords: ['fastembed', 'onnx', 'dense', 'sparse', 'embeddings', 'indexing'] },

  { id: 'edge1', name: 'Whisper INT8 Offline ASR', category: 'edge', x: 75, y: 28, keywords: ['whisper', 'int8', 'audio', 'offline', 'speech', 'transcription'] },
  { id: 'edge2', name: 'MarianMT Seq2Seq Translation', category: 'edge', x: 82, y: 38, keywords: ['marianmt', 'translation', 'subtitles', 'edge', 'seq2seq'] },
  { id: 'edge3', name: 'CHASHM Assistive YOLOv8 Headset', category: 'edge', x: 68, y: 45, keywords: ['chashm', 'yolo', 'esp32', 'spatial', 'audio', 'vision', 'camera'] },

  { id: 'fs1', name: 'FastAPI High-Throughput Gateway', category: 'fullstack', x: 35, y: 75, keywords: ['fastapi', 'async', 'python', 'api', 'backend', 'gateway'] },
  { id: 'fs2', name: 'React 19 & Vite 3D HUD', category: 'fullstack', x: 48, y: 82, keywords: ['react', 'vite', 'threejs', 'hud', 'frontend', 'ui'] },
  { id: 'fs3', name: 'Android Jetpack Compose Native Player', category: 'fullstack', x: 60, y: 72, keywords: ['android', 'compose', 'kotlin', 'native', 'mobile'] }
];

const CATEGORY_COLORS = {
  rag: '#00ffcc',
  edge: '#8b5cf6',
  fullstack: '#38bdf8'
};

export default function AiPlayground() {
  const [activeTab, setActiveTab] = useState('vector'); // 'vector' | 'nlp'
  
  // Vector Visualizer State
  const [searchQuery, setSearchQuery] = useState('Multimodal RAG');
  const [selectedNode, setSelectedNode] = useState(VECTOR_CLUSTERS[0]);
  const [similarities, setSimilarities] = useState({});

  // NLP Sentinel State
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Compute similarity when query changes
  useEffect(() => {
    if (!searchQuery.trim()) return;
    const qTokens = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const simMap = {};

    VECTOR_CLUSTERS.forEach((node) => {
      let matchCount = 0;
      node.keywords.forEach((kw) => {
        if (qTokens.some((t) => kw.includes(t) || t.includes(kw))) {
          matchCount += 2;
        }
      });
      if (node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        matchCount += 3;
      }
      const baseScore = 0.35 + (matchCount * 0.15) + (Math.random() * 0.05);
      simMap[node.id] = Math.min(0.99, Number(baseScore.toFixed(3)));
    });

    setSimilarities(simMap);
  }, [searchQuery]);

  const sampleInputs = [
    "Machine learning neural networks are transforming regional language processing!",
    "CHASHM AI provides spatial audio awareness for visually impaired users.",
    "This model is terrible and completely useless!",
    "Automated chicken pox skin detection using custom CNN architectures."
  ];

  const analyzeSentiment = (inputStr) => {
    const content = inputStr || text;
    if (!content.trim()) return;

    playSound('click');
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

      playSound('success');
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
            Interactive <span className="gradient-text">AI Architecture Lab</span>
          </h2>
          <p className="section-subtitle">
            Explore live vector embedding clustering, cosine similarity retrieval, and NLP sentiment inference in real-time.
          </p>
        </div>

        {/* Lab Mode Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2rem' }}>
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('vector');
            }}
            style={{
              padding: '10px 22px',
              borderRadius: '30px',
              border: activeTab === 'vector' ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
              background: activeTab === 'vector' ? 'rgba(0, 255, 204, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'vector' ? 'var(--accent-color)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Compass size={16} /> 2D Vector Embedding Space
          </button>

          <button
            onClick={() => {
              playSound('click');
              setActiveTab('nlp');
            }}
            style={{
              padding: '10px 22px',
              borderRadius: '30px',
              border: activeTab === 'nlp' ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
              background: activeTab === 'nlp' ? 'rgba(0, 255, 204, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'nlp' ? 'var(--accent-color)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShieldCheck size={16} /> NLP Sentinel Classifier
          </button>
        </div>

        {/* TAB 1: 2D VECTOR EMBEDDING VISUALIZER */}
        {activeTab === 'vector' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="card spotlight-card"
            style={{ maxWidth: '1000px', margin: '0 auto', padding: 'clamp(20px, 4vw, 36px)', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Database size={20} color="var(--accent-color)" /> Vector Embedding Space &amp; Cosine Retrieval
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginTop: '4px' }}>
                  Simulating high-dimensional vector projection into 2D semantic coordinates.
                </p>
              </div>

              {/* Cluster Category Legend */}
              <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem', fontWeight: 600 }}>
                <span style={{ color: '#00ffcc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ffcc' }} /> RAG &amp; LLMs
                </span>
                <span style={{ color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }} /> Edge Neural AI
                </span>
                <span style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} /> Systems Architecture
                </span>
              </div>
            </div>

            {/* Semantic Query Input */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '14px' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type query (e.g. 'Offline Whisper', 'ChromaDB', 'FastAPI')..."
                  style={{
                    width: '100%',
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '12px',
                    padding: '10px 14px 10px 38px',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['RAG Chunks', 'Whisper INT8', 'Full-Stack'].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      playSound('click');
                      setSearchQuery(preset);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-secondary)',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* 2D Interactive Vector Space Canvas Simulation */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '380px',
                background: 'rgba(5, 7, 18, 0.9)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Background Coordinate Grid Lines */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  pointerEvents: 'none'
                }}
              />

              {/* Synapse Link Lines from Selected Node to Others */}
              {selectedNode && (
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  {VECTOR_CLUSTERS.map((node) => {
                    if (node.id === selectedNode.id) return null;
                    const sim = similarities[node.id] || 0.4;
                    return (
                      <line
                        key={node.id}
                        x1={`${selectedNode.x}%`}
                        y1={`${selectedNode.y}%`}
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke={CATEGORY_COLORS[selectedNode.category]}
                        strokeWidth={sim > 0.6 ? 1.8 : 0.6}
                        strokeOpacity={sim > 0.6 ? 0.6 : 0.15}
                        strokeDasharray={sim > 0.7 ? "none" : "4 4"}
                      />
                    );
                  })}
                </svg>
              )}

              {/* Vector Nodes */}
              {VECTOR_CLUSTERS.map((node) => {
                const sim = similarities[node.id] || 0.45;
                const isSelected = selectedNode?.id === node.id;
                const color = CATEGORY_COLORS[node.category];

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => {
                      playSound('click');
                      setSelectedNode(node);
                    }}
                    whileHover={{ scale: 1.15 }}
                    style={{
                      position: 'absolute',
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      zIndex: isSelected ? 10 : 2
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: isSelected ? '24px' : '16px',
                        height: isSelected ? '24px' : '16px',
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 ${isSelected ? '20px' : '10px'} ${color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            position: 'absolute',
                            inset: '-6px',
                            borderRadius: '50%',
                            border: `2px solid ${color}`,
                            animation: 'pulse 1.5s infinite'
                          }}
                        />
                      )}
                    </div>

                    {/* Node Label Tooltip */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '120%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(10, 12, 26, 0.95)',
                        border: `1px solid ${color}`,
                        borderRadius: '8px',
                        padding: '3px 8px',
                        whiteSpace: 'nowrap',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        pointerEvents: 'none'
                      }}
                    >
                      {node.name}
                      <span style={{ color: color, marginLeft: '6px', fontSize: '0.68rem' }}>
                        {(sim * 100).toFixed(0)}%
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Selected Node Details Card */}
            {selectedNode && (
              <div
                style={{
                  marginTop: '1.2rem',
                  padding: '14px 18px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: CATEGORY_COLORS[selectedNode.category],
                      letterSpacing: '0.5px'
                    }}
                  >
                    Active Cluster: {selectedNode.category.toUpperCase()}
                  </span>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: '2px 0 0 0' }}>
                    {selectedNode.name}
                  </h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cosine Similarity</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-color)' }}>
                      {((similarities[selectedNode.id] || 0.88) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <a
                    href="#projects"
                    className="btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '10px' }}
                  >
                    View Project Case Study
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 2: NLP SENTINEL CLASSIFIER */}
        {activeTab === 'nlp' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="card spotlight-card"
            style={{ maxWidth: '840px', margin: '0 auto', padding: 'clamp(20px, 4vw, 36px)', borderRadius: '24px' }}
          >
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
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'var(--text-primary)',
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
                    Model Confidence: <strong style={{ color: 'var(--text-primary)' }}>{result.confidence}%</strong>
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
          </motion.div>
        )}
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
