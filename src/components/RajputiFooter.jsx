import React from 'react';

const RajputiFooter = () => (
  <footer
    style={{
      background: 'linear-gradient(180deg, var(--maroon-royal) 0%, var(--maroon-deep) 60%, #1E0005 100%)',
      borderTop: '2px solid var(--gold-foil)',
      padding: '44px 20px 40px',
      textAlign: 'center',
      color: 'var(--cream-card)'
    }}
  >
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <p
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '1.5rem',
          color: 'var(--gold-light)',
          letterSpacing: '0.08em',
          marginBottom: '8px'
        }}
      >
        ॥ शुभम् भवतु ॥
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
          color: '#FFF',
          letterSpacing: '0.02em',
          lineHeight: 1.3,
          margin: '8px 0'
        }}
      >
        कुँवर रणवीर सिंह संग बाईसा देविका कुमारी
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '1.15rem',
          color: 'var(--gold-light)',
          marginBottom: '24px'
        }}
      >
        25 नवंबर 2026 · हेरिटेज पैलेस, जयपुर
      </p>

      <div
        style={{
          height: 1,
          background: 'linear-gradient(to right, transparent, var(--gold-foil), transparent)',
          maxWidth: '300px',
          margin: '0 auto 20px'
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-title)',
          fontSize: '1.2rem',
          color: 'var(--gold-light)'
        }}
      >
        ॥ खम्मा घणी सा ॥
      </p>
    </div>
  </footer>
);

export default RajputiFooter;
