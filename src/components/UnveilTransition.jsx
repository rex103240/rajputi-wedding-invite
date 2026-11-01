import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const UnveilTransition = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 1200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.2, times: [0, 0.35, 0.7, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'radial-gradient(ellipse at center, #FFF8E7 0%, #F5A623 45%, #8B0000 100%)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default UnveilTransition;
