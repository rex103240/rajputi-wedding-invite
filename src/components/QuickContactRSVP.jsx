import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User } from 'lucide-react';

const HINDI_CONTACTS = [
  {
    name: 'कुँवर जयवीर सिंह राठौड़',
    role: 'व्यवस्थापक / स्वागतकर्ता',
    phone: '+91 98290 12345',
    cleanNumber: '919829012345'
  },
  {
    name: 'ठा. भंवर सिंह जी राठौड़',
    role: 'वरिष्ठ परिवारजन',
    phone: '+91 94140 54321',
    cleanNumber: '919414054321'
  }
];

const QuickContactRSVP = () => (
  <section id="rsvp" style={{ padding: '20px 16px 60px' }}>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="kankotri-paper gold-card-frame"
        style={{
          borderRadius: '2px',
          padding: 'clamp(32px, 5vw, 48px) clamp(20px, 4vw, 40px)',
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />


        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.15rem',
            color: 'var(--maroon-royal)',
            marginBottom: '4px',
            position: 'relative',
            zIndex: 2
          }}
        >
          सस्नेह उपस्थिति की अभिलाषा
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(1.9rem, 5vw, 2.7rem)',
            color: 'var(--maroon-deep)',
            position: 'relative',
            zIndex: 2
          }}
        >
          दर्शनाभिलाषी एवं विनीत
        </h2>

        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.3rem',
            color: 'var(--maroon-royal)',
            marginBottom: '6px',
            position: 'relative',
            zIndex: 2
          }}
        >
          ठाकुर महेंद्र सिंह जी राठौड़ एवं समस्त राठौड़ परिवार
        </p>

        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '1.1rem',
            color: 'var(--maroon-deep)',
            maxWidth: '520px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
            position: 'relative',
            zIndex: 2
          }}
        >
          आवास, समय अथवा किसी भी व्यवस्था संबंधी जानकारी अथवा अपनी पावन उपस्थिति सुनिश्चित करने हेतु कृपया सीधे सम्पर्क करें।
        </p>

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            textAlign: 'left',
            position: 'relative',
            zIndex: 2
          }}
        >
          {HINDI_CONTACTS.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.85) 0%, rgba(249, 238, 217, 0.75) 100%)',
                border: '1.5px solid rgba(201, 168, 76, 0.6)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px',
                boxShadow: '0 4px 14px rgba(60, 0, 10, 0.1)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <User size={15} color="var(--maroon-royal)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.95rem',
                      color: 'var(--maroon-light)'
                    }}
                  >
                    {c.role}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.35rem',
                    color: 'var(--maroon-deep)',
                    lineHeight: 1.3,
                    marginBottom: '8px'
                  }}
                >
                  {c.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--maroon-royal)',
                    letterSpacing: '0.04em'
                  }}
                >
                  {c.phone}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${c.phone.replace(/\s+/g, '')}`}
                  className="btn-call-action"
                  title={`${c.name} को कॉल करें`}
                >
                  <Phone size={15} />
                  <span>कॉल करें</span>
                </a>
                <a
                  href={`https://wa.me/${c.cleanNumber}?text=%E0%A4%96%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%20%E0%A4%98%E0%A4%A3%E0%A5%80%20%E0%A4%B8%E0%A4%BE!%20%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B9%20%E0%A4%A8%E0%A4%BF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A5%8D%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AA%E0%A5%8D%E0%A4%A4%20%E0%A4%B9%E0%A5%81%E0%A4%86%E0%A5%A4%20%E0%A4%B9%E0%A4%AE%20%E0%A4%B8%E0%A4%AD%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B9%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B8%E0%A4%B9%E0%A4%B0%E0%A5%8D%E0%A4%B7%E0%A5%8D%20%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%A4%20%E0%A4%B9%E0%A5%8B%E0%A4%82%E0%A4%97%E0%A5%87%E0%A5%A4`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-action"
                  title={`${c.name} को व्हाट्सएप संदेश भेजें`}
                >
                  <MessageCircle size={15} />
                  <span>व्हाट्सएप</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default QuickContactRSVP;
