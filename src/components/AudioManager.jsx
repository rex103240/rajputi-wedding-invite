import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const AudioManager = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={toggleAudio}
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 250,
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--maroon-royal) 0%, var(--maroon-dark) 100%)',
        border: '1.5px solid var(--gold-foil)',
        boxShadow: '0 4px 18px rgba(101, 0, 15, 0.4), 0 0 10px rgba(212, 175, 55, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--gold-light)'
      }}
      title={isPlaying ? 'Mute Shehnai' : 'Play Shehnai'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      {isPlaying ? (
        <Volume2 size={20} strokeWidth={2} />
      ) : (
        <VolumeX size={20} strokeWidth={2} />
      )}
    </motion.button>
  );
};

export default AudioManager;
