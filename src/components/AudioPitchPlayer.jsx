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
  Download,
  Mic
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

// Spoken text specifically tuned with phonetic pronunciation "Okaasha"
const SPOKEN_SCRIPT = `Hi there! I am Muhammad Okaasha, an AI Solutions Architect and Machine Learning Engineer. I specialize in building enterprise Multimodal RAG platforms with 5,700+ vector chunks, on-device offline AI systems on Android, and sub-50ms real-time voice intelligence engines. Let's architect something extraordinary together!`;

const DISPLAY_TRANSCRIPT = `Hi there! I am Muhammad Okasha, an AI Solutions Architect and Machine Learning Engineer. I specialize in building enterprise Multimodal RAG platforms with 5,700+ vector chunks, on-device offline AI systems on Android, and sub-50ms real-time voice intelligence engines. Let's architect something extraordinary together!`;

export default function AudioPitchPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [voices, setVoices] = useState([]);
  const intervalRef = useRef(null);

  // Load available system voices cleanly
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        const available = window.speechSynthesis.getVoices() || [];
        setVoices(available);
      }
    };

    loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const getBestMaleVoice = () => {
    if (!voices || voices.length === 0) return null;

    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return voices[0];

    // Prioritize natural, confident Executive Male Neural voices
    const naturalMale = englishVoices.find(v => 
      (v.name.includes('Guy') || v.name.includes('Christopher') || v.name.includes('David') || v.name.includes('Natural') || v.name.includes('Google US') || v.name.includes('Male')) &&
      !v.name.includes('Aria') && !v.name.includes('Jenny') && !v.name.includes('Zira') && !v.name.includes('Female')
    );
    if (naturalMale) return naturalMale;

    return englishVoices[0];
  };

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
        const utterance = new SpeechSynthesisUtterance(SPOKEN_SCRIPT);
        
        // Deep, confident, executive cadence
        utterance.rate = 0.98;
        utterance.pitch = 0.96;
        
        const selectedVoice = getBestMaleVoice();
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

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

      // Smooth progress bar over 15 seconds
      const totalDuration = 14500;
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
        padding: '16px 22px',
        borderRadius: '24px',
        border: '1px solid rgba(0, 255, 204, 0.35)',
        background: 'var(--btn-sec-bg)',
        maxWidth: '740px',
        margin: '1.4rem auto 0',
        boxShadow: isPlaying ? '0 0 35px rgba(0, 255, 204, 0.28)' : 'var(--card-shadow)',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Play Button & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={togglePlay}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              border: 'none',
              color: '#030308',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 255, 204, 0.45)',
              transition: 'transform 0.2s',
              flexShrink: 0
            }}
            whileHover={{ scale: 1.08 }}
            title={isPlaying ? "Pause Briefing" : "Play Executive 15s Pitch"}
          >
            {isPlaying ? <Pause size={22} color="#fff" /> : <Play size={22} color="#fff" style={{ marginLeft: '3px' }} />}
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Headphones size={14} color="var(--accent-color)" />
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Executive Audio Elevator Pitch
              </span>
              <span className="badge-neon" style={{ fontSize: '0.66rem', padding: '1px 6px', borderRadius: '10px' }}>
                Studio Voice
              </span>
            </div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '0.94rem', marginTop: '2px' }}>
              15-Second Candidate Introduction &amp; Systems Brief
            </div>
          </div>
        </div>

        {/* Animated Waveform Bars & Transcript Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Animated Waveform Frequency Bars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3.5px', height: '26px' }}>
            {[14, 24, 18, 28, 14, 26, 20, 12, 28, 16, 22, 14].map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [height * 0.35, height, height * 0.35] : 4,
                  opacity: isPlaying ? 1 : 0.4
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.55,
                  delay: i * 0.045
                }}
                style={{
                  width: '3.5px',
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
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              transition: 'all 0.2s'
            }}
          >
            <FileText size={14} />
            <span>{showTranscript ? 'Hide' : 'Transcript'}</span>
            {showTranscript ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '3.5px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '2px',
        marginTop: '12px',
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
              marginTop: '12px',
              paddingTop: '12px'
            }}
          >
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.65 }}>
              "{DISPLAY_TRANSCRIPT}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
