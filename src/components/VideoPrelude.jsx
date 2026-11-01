import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoPrelude = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#0B0401',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Video Container maintaining 9:16 aspect ratio */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maxHeight: '100vh',
          maxWidth: 'calc(100vh * 9 / 16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <video
          ref={videoRef}
          playsInline
          muted
          onEnded={onComplete}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        >
          <source src="/ganpati template.mp4" type="video/mp4" />
        </video>

        {/* Subtle blur mask overlay over bottom-right area */}
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '9%',
            width: '10%',
            height: '6%',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            background: 'radial-gradient(circle, rgba(160, 110, 60, 0.25) 0%, transparent 80%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Skip button in pure Hindi */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={onComplete}
        style={{
          position: 'absolute',
          bottom: 32,
          right: 28,
          fontFamily: 'var(--font-title)',
          fontSize: '1rem',
          color: '#FFF',
          background: 'rgba(122, 0, 20, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--gold-foil)',
          padding: '12px 26px',
          cursor: 'pointer',
          borderRadius: '2px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
          transition: 'all 0.3s'
        }}
      >
        सीधे निमंत्रण पत्र देखें →
      </motion.button>
    </motion.div>
  );
};

export default VideoPrelude;
