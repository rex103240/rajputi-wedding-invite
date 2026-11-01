import React from 'react';
import { motion } from 'framer-motion';
import GanpatiJali from './GanpatiJali';

const InvocationHero = () => {
  return (
    <section style={{ padding: '44px 16px 28px', position: 'relative' }}>
      <div
        className="kankotri-paper gold-card-frame"
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 44px)',
          borderRadius: '2px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />

        {/* Ganpati Jali Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '16px', position: 'relative', zIndex: 2 }}
        >
          <GanpatiJali width={120} variant="maroon" />
        </motion.div>

        {/* Sacred Invocations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2, marginBottom: '20px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.45rem',
              color: 'var(--maroon-royal)',
              letterSpacing: '0.06em',
              marginBottom: '6px'
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.05rem',
              color: 'var(--maroon-deep)',
              letterSpacing: '0.05em',
              marginBottom: '10px'
            }}
          >
            ॥ श्री कुलदेवी प्रसन्न ॥ श्री चारभुजाजी री कृपा ॥
          </p>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.08rem',
              color: 'var(--maroon-deep)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            मंगलम् भगवान विष्णुः मंगलम् गरुड़ध्वजः।<br />
            मंगलम् पुण्डरीकाक्षः मंगलाय तनो हरिः॥
          </p>
        </motion.div>

        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>

        {/* Invitation Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.15rem',
            color: 'var(--maroon-royal)',
            margin: '18px 0 10px',
            position: 'relative',
            zIndex: 2
          }}
        >
          परम कृपालु श्री कुलदेवी जी की असीम अनुकम्पा से
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '1.18rem',
            color: 'var(--maroon-deep)',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.8,
            position: 'relative',
            zIndex: 2
          }}
        >
          हमारे परिवार के प्रियवर के मांगलिक पाणिग्रहण संस्कार के शुभ अवसर पर आप सपरिवार सादर आमंत्रित हैं।
        </motion.p>

        {/* ── वर एवं वधू विवरण ── */}
        <div
          style={{
            margin: '0 0 32px',
            padding: '30px 20px',
            background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.6) 0%, rgba(249, 238, 217, 0.5) 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.6)',
            position: 'relative',
            zIndex: 2,
            boxShadow: 'inset 0 0 20px rgba(180, 100, 20, 0.08)'
          }}
        >
          {/* वर */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.95rem',
                color: 'var(--maroon-light)',
                marginBottom: '4px'
              }}
            >
              आयुष्मान
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2rem, 5.5vw, 2.9rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.2
              }}
            >
              कुँवर रणवीर सिंह राठौड़
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              सुपुत्र: ठा. महेंद्र सिंह जी राठौड़ एवं श्रीमती पद्मिनी कँवर
            </p>
          </motion.div>

          {/* संग */}
          <div
            style={{
              margin: '20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to right, transparent, var(--maroon-royal))' }} />
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.8rem',
                color: 'var(--maroon-royal)'
              }}
            >
              संग
            </span>
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to left, transparent, var(--maroon-royal))' }} />
          </div>

          {/* वधू */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.95rem',
                color: 'var(--maroon-light)',
                marginBottom: '4px'
              }}
            >
              आयुष्मती
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2rem, 5.5vw, 2.9rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.2
              }}
            >
              बाईसा देविका कुमारी चौहान
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              सुपुत्री: ठा. गजेंद्र सिंह जी चौहान एवं श्रीमती राजश्री कँवर
            </p>
          </motion.div>
        </div>

        {/* ── लग्न मुहूर्त पट्टिका ── */}
        <div
          style={{
            padding: '20px 24px',
            background: 'linear-gradient(145deg, var(--maroon-royal) 0%, var(--maroon-deep) 100%)',
            border: '1.5px solid var(--gold-foil)',
            color: 'var(--cream-card)',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 6px 20px rgba(62, 0, 10, 0.4), inset 0 1px 0 rgba(240, 228, 184, 0.2)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.05rem',
              color: 'var(--gold-light)',
              marginBottom: '6px'
            }}
          >
            शुभ विवाह लग्न मुहूर्त
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.5rem, 4.5vw, 2.1rem)',
              letterSpacing: '0.04em'
            }}
          >
            बुधवार, 25 नवंबर 2026
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.12rem',
              color: 'var(--gold-light)',
              marginTop: '6px'
            }}
          >
            हस्त नक्षत्र · गोधूलि वेला मुहूर्त: सायं 07:15 बजे
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvocationHero;
