import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canUseFinePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches;
    if (!canUseFinePointer) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target;
      setActive(
        target instanceof Element &&
          Boolean(target.closest('a, button, input, textarea, [role="button"], .project-module, .skill-orbit-item')),
      );
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <div
      className={`custom-cursor${active ? ' is-active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}
