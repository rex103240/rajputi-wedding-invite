import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MuhuratCountdown = ({ targetDate = new Date('2026-11-25T19:15:00') }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: 'दिन', val: timeLeft.days },
    { label: 'घंटे', val: timeLeft.hours },
    { label: 'मिनट', val: timeLeft.minutes },
    { label: 'सेकंड', val: timeLeft.seconds }
  ];

  return (
    <section style={{ padding: '16px 16px 36px' }}>
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.75) 0%, rgba(249, 238, 217, 0.65) 100%)',
          border: '1.5px solid var(--gold-foil)',
          padding: '24px 20px 20px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(62, 0, 10, 0.15)'
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            color: 'var(--maroon-royal)',
            marginBottom: '16px'
          }}
        >
          शुभ लग्न की प्रतीक्षा
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(10px, 3vw, 20px)',
            flexWrap: 'wrap'
          }}
        >
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{
                flex: '1 1 70px',
                maxWidth: '110px',
                minWidth: '68px',
                padding: '14px 6px 10px',
                background: 'linear-gradient(145deg, var(--maroon-royal) 0%, var(--maroon-deep) 100%)',
                border: '1px solid var(--gold-foil)',
                borderRadius: '2px',
                boxShadow: '0 4px 12px rgba(62, 0, 10, 0.35)'
              }}
            >
              <motion.span
                key={u.val}
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.8rem, 4.5vw, 2.4rem)',
                  color: 'var(--gold-light)',
                  lineHeight: 1
                }}
              >
                {String(u.val).padStart(2, '0')}
              </motion.span>
              <p
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.05rem',
                  color: 'var(--gold-light)',
                  marginTop: '8px'
                }}
              >
                {u.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuhuratCountdown;
