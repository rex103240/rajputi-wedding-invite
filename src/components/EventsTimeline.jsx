import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const HINDI_EVENTS = [
  {
    id: 'vinayak',
    kram: 'रस्म 1',
    title: 'श्री विनायक स्थापना',
    date: '23 नवंबर 2026 · सोमवार',
    time: 'प्रातः 09:15 बजे',
    venue: 'पैतृक हवेली, जयपुर',
    desc: 'विघ्नहर्ता भगवान श्री गणेश जी का पावन आह्वान, पूजा-अर्चना एवं निर्विघ्न कार्य सम्पन्नता हेतु मंडप स्तंभ रोपण।'
  },
  {
    id: 'tel-baan',
    kram: 'रस्म 2',
    title: 'तेल बाण एवं पीठी रस्म',
    date: '23 नवंबर 2026 · सोमवार',
    time: 'दोपहर 03:00 बजे',
    venue: 'जनाना प्रांगण, जयपुर',
    desc: 'पारम्परिक मंगल गीतों के साथ सुगंधित हल्दी, उबटन एवं तेल बाण का पवित्र संस्कार।'
  },
  {
    id: 'mayra',
    kram: 'रस्म 3',
    title: 'मायरा (भात) रस्म',
    date: '24 नवंबर 2026 · मंगलवार',
    time: 'प्रातः 11:00 बजे',
    venue: 'दरबार हॉल, हेरिटेज पैलेस, जयपुर',
    desc: 'ननिहाल पक्ष का भव्य पारम्परिक स्वागत, मंगल कलश एवं मामाजी द्वारा पावन भात पहरावनी।'
  },
  {
    id: 'bandoli',
    kram: 'रस्म 4',
    title: 'बंदोली एवं महिला संगीत',
    date: '24 नवंबर 2026 · मंगलवार',
    time: 'सायं 07:00 बजे',
    venue: 'पैलेस प्रांगण, जयपुर',
    desc: 'पारम्परिक राजपूती बंदोली, घूमर नृत्य, लोक वाद्य एवं उल्लासपूर्ण संगीत संध्या।'
  },
  {
    id: 'nikasi-vivah',
    kram: 'रस्म 5',
    title: 'निकासी, तोरण एवं शुभ पाणिग्रहण',
    date: '25 नवंबर 2026 · बुधवार',
    time: 'निकासी सायं 05:30 बजे · पाणिग्रहण सायं 07:15 बजे',
    venue: 'मुख्य विवाह मंडप, हेरिटेज पैलेस, जयपुर',
    desc: 'कुँवर सा की भव्य अश्व निकासी, द्वार पर तोरण वरण, वरमाला एवं अग्नि के समक्ष सात पावन फेरे।'
  },
  {
    id: 'reception',
    kram: 'रस्म 6',
    title: 'आशीर्वाद समारोह एवं प्रीतिभोज',
    date: '26 नवंबर 2026 · गुरुवार',
    time: 'सायं 07:30 बजे',
    venue: 'इम्पीरियल मंडपम, जयपुर',
    desc: 'नवदम्पति को अग्रजों एवं प्रियजनों का शुभाशीर्वाद तथा पारम्परिक स्वादिष्ट प्रीतिभोज।'
  }
];

const EventsTimeline = () => (
  <section id="karyakram" style={{ padding: '40px 16px 60px' }}>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.15rem',
            color: 'var(--maroon-royal)',
            marginBottom: '6px'
          }}
        >
          शुभ वैवाहिक रस्में
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
            color: 'var(--maroon-deep)'
          }}
        >
          मांगलिक कार्यक्रम
        </h2>
        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>
      </motion.div>

      {/* Event Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {HINDI_EVENTS.map((ev, idx) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: idx * 0.06, duration: 0.7 }}
            className="kankotri-paper gold-card-frame"
            style={{
              borderRadius: '2px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative'
            }}
          >
            <div className="corner-art tl" />
            <div className="corner-art tr" />
            <div className="corner-art bl" />
            <div className="corner-art br" />

            {/* Top Bar: Kram & Date */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid rgba(122, 0, 20, 0.25)',
                paddingBottom: '12px',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '8px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.05rem',
                  color: 'var(--maroon-royal)'
                }}
              >
                ॥ {ev.kram} ॥
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--maroon-deep)'
                }}
              >
                <Calendar size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                {ev.date}
              </span>
            </div>

            {/* Title & Desc */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
                  color: 'var(--maroon-deep)',
                  lineHeight: 1.25,
                  marginBottom: '10px'
                }}
              >
                {ev.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '1.1rem',
                  color: 'var(--maroon-deep)',
                  lineHeight: 1.75,
                  marginBottom: '20px'
                }}
              >
                {ev.desc}
              </p>
            </div>

            {/* Time, Venue & Map Link */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.8) 0%, rgba(249, 238, 217, 0.7) 100%)',
                border: '1px solid rgba(201, 168, 76, 0.5)',
                padding: '16px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--maroon-royal)',
                    marginBottom: 6
                  }}
                >
                  <Clock size={16} /> {ev.time}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.05rem',
                    color: 'var(--maroon-deep)'
                  }}
                >
                  <MapPin size={16} /> {ev.venue}
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.venue)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hindi-secondary"
              >
                <MapPin size={15} />
                <span>स्थान देखें ↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsTimeline;
