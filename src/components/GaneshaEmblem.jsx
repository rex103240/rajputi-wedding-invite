import React from 'react';

/**
 * Premium corner ornament SVG used across all card panels.
 * Renders a refined L-shaped flourish with a small diamond accent.
 */
export const CornerOrnament = ({ color = '#C9A84C' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 30 L2 12 Q2 6 8 4 L16 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M2 30 L2 18 Q2 10 10 8 L18 6" stroke={color} strokeWidth="0.6" fill="none" opacity="0.5" strokeLinecap="round" />
    <rect x="1" y="1" width="4" height="4" rx="0.5" transform="rotate(45 3 3)" fill={color} opacity="0.7" />
  </svg>
);

/**
 * Premium Corners wrapper — places 4 mirrored corner ornaments around a container
 */
export const PremiumCorners = ({ color = '#C9A84C' }) => (
  <>
    <div className="premium-corner tl"><CornerOrnament color={color} /></div>
    <div className="premium-corner tr"><CornerOrnament color={color} /></div>
    <div className="premium-corner bl"><CornerOrnament color={color} /></div>
    <div className="premium-corner br"><CornerOrnament color={color} /></div>
  </>
);

/**
 * Refined Ganesha Silhouette — elegant minimal icon, not a crude drawing.
 * Uses clean geometric shapes that evoke Lord Ganesha without looking amateur.
 */
export const GaneshaMotif = ({ size = 80, color = '#6B0E1A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    {/* Crown / Mukut */}
    <path
      d="M60 12 L55 24 L65 24 Z"
      fill={color}
      opacity="0.9"
    />
    <path
      d="M52 22 L60 14 L68 22"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="60" cy="10" r="2" fill={color} opacity="0.8" />

    {/* Head circle — clean geometric */}
    <circle
      cx="60"
      cy="42"
      r="18"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
    />

    {/* Inner head detail arc */}
    <path
      d="M48 36 Q54 28 66 30 Q72 32 72 38"
      stroke={color}
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />

    {/* Eyes */}
    <ellipse cx="54" cy="40" rx="2.5" ry="1.8" fill={color} opacity="0.8" />
    <ellipse cx="66" cy="40" rx="2.5" ry="1.8" fill={color} opacity="0.8" />

    {/* Tilak */}
    <circle cx="60" cy="34" r="1.5" fill={color} opacity="0.7" />

    {/* Left Ear — graceful curve */}
    <path
      d="M42 38 Q30 30 28 44 Q26 54 36 56"
      stroke={color}
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Right Ear — graceful curve */}
    <path
      d="M78 38 Q90 30 92 44 Q94 54 84 56"
      stroke={color}
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Trunk — elegant S-curve flowing left */}
    <path
      d="M60 60 Q58 68 52 74 Q46 80 42 82 Q38 84 40 78"
      stroke={color}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />

    {/* Trunk tip curl */}
    <path
      d="M40 78 Q38 74 42 72"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Tusk — single elegant line */}
    <path
      d="M56 54 L52 62"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Body — rounded belly */}
    <ellipse
      cx="60"
      cy="82"
      rx="22"
      ry="16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />

    {/* Navel dot (modak suggestion) */}
    <circle cx="60" cy="82" r="2" fill={color} opacity="0.5" />

    {/* Arms */}
    <path
      d="M38 76 Q28 72 26 68"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M82 76 Q92 72 94 68"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Lotus seat base */}
    <path
      d="M34 98 Q42 92 50 96 Q55 98 60 96 Q65 94 70 96 Q78 100 86 96"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
      strokeLinecap="round"
    />

    {/* Base line */}
    <path
      d="M30 102 Q60 108 90 102"
      stroke={color}
      strokeWidth="1.2"
      fill="none"
      opacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);


/**
 * Gold Foil Badge — the central emblem panel.
 * Multi-layer gold gradient with inner border and the Ganesha motif.
 */
export const GaneshaBadge = ({ size = 130 }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* Outer gold halo / glow */}
    <div
      style={{
        position: 'absolute',
        inset: '-12px',
        borderRadius: '4px',
        background: 'radial-gradient(ellipse at center, rgba(201, 168, 76, 0.25) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}
    />

    {/* Gold plate */}
    <div
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg,
          #F0E4B8 0%,
          #D4B95A 15%,
          #C9A84C 30%,
          #B89530 50%,
          #C9A84C 65%,
          #D4B95A 80%,
          #E8D48B 95%,
          #F0E4B8 100%
        )`,
        padding: '6px',
        boxShadow: `
          0 2px 0 rgba(255, 255, 255, 0.3),
          0 -1px 0 rgba(0, 0, 0, 0.15),
          0 8px 24px rgba(82, 10, 20, 0.4),
          inset 0 1px 2px rgba(255, 255, 255, 0.5),
          inset 0 -1px 2px rgba(120, 70, 10, 0.3)
        `,
        position: 'relative',
        zIndex: 1,
        borderRadius: '2px'
      }}
    >
      {/* Inner raised panel */}
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1.5px solid rgba(107, 14, 26, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: `linear-gradient(180deg,
            rgba(240, 228, 184, 0.35) 0%,
            rgba(201, 168, 76, 0.15) 50%,
            rgba(184, 149, 48, 0.25) 100%
          )`,
          boxShadow: `inset 0 1px 3px rgba(255, 255, 255, 0.3), inset 0 -1px 3px rgba(100, 60, 10, 0.2)`,
          borderRadius: '1px'
        }}
      >
        {/* Corner accent dots */}
        {[
          { top: 4, left: 4 },
          { top: 4, right: 4 },
          { bottom: 4, left: 4 },
          { bottom: 4, right: 4 }
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--maroon-1) 40%, transparent 70%)',
              opacity: 0.55
            }}
          />
        ))}

        <GaneshaMotif size={size * 0.7} color="#6B0E1A" />
      </div>
    </div>
  </div>
);

/**
 * Small Om symbol for inline decorative use
 */
export const OmSymbol = ({ size = 20, color = '#C9A84C' }) => (
  <span
    style={{
      fontFamily: 'serif',
      fontSize: size,
      color: color,
      lineHeight: 1,
      userSelect: 'none'
    }}
  >
    ॐ
  </span>
);
