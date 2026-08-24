import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  Headphones,
  CheckCircle2,
  Download
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const PITCH_TRANSCRIPT = `Hi there! I am Muhammad Okasha, an AI Solutions Architect and Machine Learning Engineer. I specialize in building enterprise Multimodal RAG platforms with 5,700+ vector chunks, on-device offline AI systems on Android, and sub-50ms real-time voice intelligence engines. Let's architect something extraordinary together!`;

export default function AudioPitchPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const intervalRef = useRef(null);
  const speechRef = useRef(null);

  const togglePlay = () => {
    playSound('click');
    if (isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearInterval(intervalRef.current);
      setIsPlaying(false);
      setProgress(0);
    } else {
      setIsPlaying(true);
      setProgress(0);

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(PITCH_TRANSCRIPT);
        utterance.rate = 1.05;
        utterance.pitch = 1.0;
        
        // Find English voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Male')));
        if (englishVoice) utterance.voice = englishVoice;

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
          clearInterval(intervalRef.current);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
          clearInterval(intervalRef.current);
        };

        window.speechSynthesis.speak(utterance);
      }

      // Simulate progress bar over 15 seconds
      const totalDuration = 15000;
      const step = 100;
      let elapsed = 0;
      intervalRef.current = setInterval(() => {
        elapsed += step;
        const currentProgress = Math.min((elapsed / totalDuration) * 100, 100);
        setProgress(currentProgress);
        if (elapsed >= totalDuration) {
          clearInterval(intervalRef.current);
          setIsPlaying(false);
        }
      }, step);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div 
      className="card"
      style={{
        padding: '16px 20px',
        borderRadius: '22px',
        border: '1px solid rgba(0, 255, 204, 0.3)',
        background: 'var(--btn-sec-bg)',
        maxWidth: '720px',
        margin: '1.5rem auto 0',
        boxShadow: isPlaying ? '0 0 30px rgba(0, 255, 204, 0.25)' : 'none',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Play Button & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={togglePlay}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              border: 'none',
              color: '#030308',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 255, 204, 0.4)',
              transition: 'transform 0.2s',
              flexShrink: 0
            }}
            whileHover={{ scale: 1.08 }}
            title={isPlaying ? "Pause Briefing" : "Play Executive 15s Pitch"}
          >
            {isPlaying ? <Pause size={20} color="#fff" /> : <Play size={20} color="#fff" style={{ marginLeft: '2px' }} />}
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Headphones size={14} color="var(--accent-color)" />
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Executive Audio Elevator Pitch
              </span>
            </div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '0.92rem' }}>
              15-Second Candidate Introduction &amp; Systems Brief
            </div>
          </div>
        </div>

        {/* Animated Waveform Bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '24px' }}>
          {[12, 22, 16, 28, 14, 24, 18, 10, 26, 15, 20, 12].map((height, i) => (
            <motion.div
              key={i}
              animate={{
                height: isPlaying ? [height * 0.4, height, height * 0.4] : 4,
                opacity: isPlaying ? 1 : 0.4
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.05
              }}
              style={{
                width: '3px',
                borderRadius: '3px',
                background: 'var(--accent-color)'
              }}
            />
          ))}
        </div>

        {/* Transcript Toggle Button */}
        <button
          onClick={() => {
            playSound('click');
            setShowTranscript(!showTranscript);
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px'
          }}
        >
          <FileText size={14} />
          <span>{showTranscript ? 'Hide' : 'Transcript'}</span>
          {showTranscript ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '3px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '2px',
        marginTop: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'var(--accent-gradient)',
          transition: 'width 0.1s linear'
        }} />
      </div>

      {/* Expandable Transcript */}
      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--card-border)',
              marginTop: '10px',
              paddingTop: '10px'
            }}
          >
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>
              "{PITCH_TRANSCRIPT}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
