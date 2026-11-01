import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GanpatiJali from './GanpatiJali';

const KankotriCover = ({ onOpen, audioRef }) => {
  const [isFading, setIsFading] = useState(false);

  const handleOpenClick = () => {
    if (audioRef?.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    setIsFading(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <motion.div
      animate={{
        opacity: isFading ? 0 : 1,
        scale: isFading ? 1.03 : 1
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'radial-gradient(ellipse at 50% 30%, #A65A10 0%, #7E3E05 50%, #381A02 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(240, 228, 184, 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none'
        }}
      />

      {/* The Physical Card Envelope */}
      <div
        className="kankotri-paper gold-card-frame"
        style={{
          width: '100%',
          maxWidth: '520px',
          minHeight: '620px',
          padding: '48px 28px 40px',
          borderRadius: '2px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        {/* Corner Ornaments */}
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />

        {/* ── Top: Sacred Ganesh Shloka ── */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.4rem',
              color: 'var(--maroon-royal)',
              letterSpacing: '0.06em',
              marginBottom: '6px'
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1rem',
              color: 'var(--maroon-deep)',
              lineHeight: 1.6,
              maxWidth: '420px',
              margin: '0 auto'
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>
        </div>

        {/* ── Center: The cropped Ganpati silhouette ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            margin: '12px 0'
          }}
        >
          {/* Subtle gold halo behind */}
          <div
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201, 168, 76, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
          <GanpatiJali width={165} variant="maroon" />
        </div>

        {/* ── Title & Greeting ── */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(2rem, 6vw, 2.7rem)',
              color: 'var(--maroon-deep)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              marginBottom: '4px'
            }}
          >
            मांगलिक विवाह निमंत्रण
          </h1>

          <div className="mangal-divider">
            <span className="symbol">卐</span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.45rem',
              color: 'var(--maroon-royal)',
              margin: '6px 0 2px'
            }}
          >
            ॥ खम्मा घणी सा ॥
          </p>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.05rem',
              color: 'var(--maroon-light)',
              fontStyle: 'italic'
            }}
          >
            सस्नेह निमंत्रण पत्र
          </p>
        </div>

        {/* ── Open Button ── */}
        <div style={{ position: 'relative', zIndex: 2, marginTop: '16px' }}>
          <button
            onClick={handleOpenClick}
            className="btn-open-kankotri"
          >
            <span>कन्कोत्री खोलिए</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default KankotriCover;
