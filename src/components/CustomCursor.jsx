import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-node') ||
        target.classList.contains('arena-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.05s ease-out'
      }}
    >
      {/* Central Blue Dot */}
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#00f0ff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #00f0ff'
        }}
      />
      {/* Soft Outer Halo Aura */}
      <div
        style={{
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          border: isHovered ? '1.5px solid #00f0ff' : '1px solid rgba(0, 162, 255, 0.4)',
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
          borderRadius: '50%',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s ease, background-color 0.2s ease',
          boxShadow: isHovered ? '0 0 20px rgba(0, 240, 255, 0.35)' : 'none'
        }}
      />
    </div>
  );
}
