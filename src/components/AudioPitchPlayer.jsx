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
  User,
  Sliders
} from 'lucide-react';
import { playSound } from '../utils/soundFx';

const PITCH_TRANSCRIPT = `Hi there! I am Muhammad Okasha, an AI Solutions Architect and Machine Learning Engineer. I specialize in building enterprise Multimodal RAG platforms with 5,700+ vector chunks, on-device offline AI systems on Android, and sub-50ms real-time voice intelligence engines. Let's architect something extraordinary together!`;

export default function AudioPitchPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [gender, setGender] = useState('female'); // 'female' | 'male'
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

  const getBestVoice = (chosenGender) => {
    if (!voices || voices.length === 0) return null;

    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return voices[0];

    if (chosenGender === 'female') {
      // Prioritize modern Natural / Neural Female voices
      const naturalFemale = englishVoices.find(v => 
        (v.name.includes('Aria') || v.name.includes('Jenny') || v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Female')) &&
        !v.name.includes('Guy') && !v.name.includes('David') && !v.name.includes('Male')
      );
      if (naturalFemale) return naturalFemale;
      
      const anyFemale = englishVoices.find(v => v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Samantha'));
      if (anyFemale) return anyFemale;
    } else {
      // Prioritize modern Natural / Neural Male voices
      const naturalMale = englishVoices.find(v => 
        (v.name.includes('Guy') || v.name.includes('Christopher') || v.name.includes('Natural') || v.name.includes('David') || v.name.includes('Male')) &&
        !v.name.includes('Aria') && !v.name.includes('Jenny') && !v.name.includes('Zira')
      );
      if (naturalMale) return naturalMale;
    }

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
        const utterance = new SpeechSynthesisUtterance(PITCH_TRANSCRIPT);
        
        // Natural human speech cadence & warm tone
        utterance.rate = gender === 'female' ? 0.96 : 0.98;
        utterance.pitch = gender === 'female' ? 1.05 : 0.95;
        
        const selectedVoice = getBestVoice(gender);
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
        borderRadius: '24px',
        border: '1px solid rgba(0, 255, 204, 0.35)',
        background: 'var(--btn-sec-bg)',
        maxWidth: '740px',
        margin: '1.4rem auto 0',
        boxShadow: isPlaying ? '0 0 35px rgba(0, 255, 204, 0.25)' : 'var(--card-shadow)',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Play Button & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={togglePlay}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              border: 'none',
              color: '#030308',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(0, 255, 204, 0.4)',
              transition: 'transform 0.2s',
              flexShrink: 0
            }}
            whileHover={{ scale: 1.08 }}
            title={isPlaying ? "Pause Briefing" : "Play Studio Executive Audio Brief"}
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

        {/* Voice Gender Switcher & Visual Waveform */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Gender Selector Chips */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '20px',
            padding: '2px',
            gap: '2px'
          }}>
            <button
              onClick={() => {
                playSound('click');
                setGender('female');
                if (isPlaying) {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  setIsPlaying(false);
                }
              }}
              style={{
                background: gender === 'female' ? 'rgba(0, 255, 204, 0.15)' : 'transparent',
                border: gender === 'female' ? '1px solid var(--accent-color)' : '1px solid transparent',
                color: gender === 'female' ? 'var(--accent-color)' : 'var(--text-secondary)',
                borderRadius: '16px',
                padding: '3px 9px',
                fontSize: '0.74rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px'
              }}
              title="Studio Natural Female Voice"
            >
              👩 Female AI
            </button>

            <button
              onClick={() => {
                playSound('click');
                setGender('male');
                if (isPlaying) {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  setIsPlaying(false);
                }
              }}
              style={{
                background: gender === 'male' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                border: gender === 'male' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                color: gender === 'male' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                borderRadius: '16px',
                padding: '3px 9px',
                fontSize: '0.74rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px'
              }}
              title="Studio Natural Male Voice"
            >
              👨 Male AI
            </button>
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
                  background: gender === 'female' ? 'var(--accent-color)' : 'var(--accent-cyan)'
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
              padding: '4px 6px'
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
        height: '3px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '2px',
        marginTop: '12px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: gender === 'female' ? 'var(--accent-gradient)' : 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
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
