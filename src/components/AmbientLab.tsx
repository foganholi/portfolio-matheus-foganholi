import type { CSSProperties } from 'react';

export function AmbientLab() {
  return (
    <div className="ambient-lab" aria-hidden="true">
      <div className="ambient-beam ambient-beam-a" />
      <div className="ambient-beam ambient-beam-b" />
      <div className="energy-grid" />
      <div className="particle-field">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--index': index } as CSSProperties} />
        ))}
      </div>
      <div className="scanline" />
    </div>
  );
}
