import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.card');

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '44px' : '30px',
          height: isPointer ? '44px' : '30px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 255, 204, 0.6)',
          backgroundColor: isPointer ? 'rgba(0, 255, 204, 0.15)' : 'transparent',
          transform: `translate3d(${position.x - (isPointer ? 22 : 15)}px, ${position.y - (isPointer ? 22 : 15)}px, 0)`,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: isPointer ? '0 0 20px rgba(0,255,204,0.4)' : 'none'
        }}
      />
      {/* Center Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 10px #00ffcc'
        }}
      />
    </>
  );
}
