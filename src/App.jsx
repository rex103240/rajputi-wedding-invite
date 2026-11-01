import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import KankotriCover from './components/KankotriCover';
import VideoPrelude from './components/VideoPrelude';
import MainInvitationCard from './components/MainInvitationCard';

const WeddingInvite = () => {
  const [stage, setStage] = useState('cover'); // 'cover' | 'video' | 'main'
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio.mp3');
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <AnimatePresence mode="wait">
        {stage === 'cover' && (
          <KankotriCover
            key="cover"
            audioRef={audioRef}
            onOpen={() => setStage('video')}
          />
        )}

        {stage === 'video' && (
          <VideoPrelude
            key="video"
            onComplete={() => setStage('main')}
          />
        )}

        {stage === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <MainInvitationCard audioRef={audioRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeddingInvite />} />
        <Route path="/invite" element={<WeddingInvite />} />
        <Route path="/invite/:slug" element={<WeddingInvite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
