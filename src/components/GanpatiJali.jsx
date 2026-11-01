import React from 'react';

/**
 * GanpatiJali — Displays the exact cropped Lord Ganesha silhouette
 * provided by the user, rendered with transparent background and crisp kumkum maroon or gold tint.
 */
const GanpatiJali = ({
  width = 160,
  variant = 'maroon', // 'maroon' or 'gold'
  style = {}
}) => {
  const imgSrc = variant === 'gold' ? '/ganesh_gold.png' : '/ganesh_maroon.png';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        ...style
      }}
    >
      <img
        src={imgSrc}
        alt="श्री गणेश"
        style={{
          width: width,
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
          filter: variant === 'maroon' 
            ? 'drop-shadow(0 2px 8px rgba(122, 0, 20, 0.25))' 
            : 'drop-shadow(0 2px 8px rgba(201, 168, 76, 0.35))'
        }}
      />
    </div>
  );
};

export default GanpatiJali;
