import React, { useEffect, useRef } from 'react';

export default function ArenaBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particles array
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#00f0ff' : '#0088ff'
    }));

    // Grid animation state
    let gridOffset = 0;

    const render = () => {
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep dark atmosphere gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2 + (mouseX - width / 2) * 0.1,
        height * 0.35 + (mouseY - height / 2) * 0.1,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0a1224');
      bgGrad.addColorStop(0.4, '#060a14');
      bgGrad.addColorStop(1, '#030509');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 3D Perspective Digital Floor Grid
      ctx.save();
      const horizonY = height * 0.45;
      const vanishingX = width / 2 + (mouseX - width / 2) * 0.05;

      gridOffset = (gridOffset + 0.4) % 40;

      // Draw perspective perspective grid lines
      ctx.lineWidth = 1;
      const gridLines = 24;

      for (let i = -gridLines; i <= gridLines; i++) {
        const startX = vanishingX + (i * width) / (gridLines * 0.8);
        
        ctx.beginPath();
        ctx.moveTo(vanishingX, horizonY);
        ctx.lineTo(startX, height);
        
        // Radial opacity based on distance from center
        const distFromCenter = Math.abs(i) / gridLines;
        const opacity = Math.max(0, (1 - distFromCenter) * 0.22);
        
        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
        ctx.stroke();
      }

      // Horizontal moving depth lines
      const horizontalLineCount = 14;
      for (let i = 0; i < horizontalLineCount; i++) {
        const progress = ((i * 35 + gridOffset) % (height - horizonY)) / (height - horizonY);
        const y = horizonY + Math.pow(progress, 2.2) * (height - horizonY);

        if (y > horizonY && y < height) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.strokeStyle = `rgba(0, 136, 255, ${progress * 0.25})`;
          ctx.stroke();
        }
      }
      ctx.restore();

      // Ambient Volumetric Glow Core
      ctx.save();
      const glowGrad = ctx.createRadialGradient(
        vanishingX,
        horizonY,
        10,
        vanishingX,
        horizonY,
        width * 0.35
      );
      glowGrad.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
      glowGrad.addColorStop(0.5, 'rgba(0, 136, 255, 0.06)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Render Floating Cyber Particles
      particles.forEach((p) => {
        p.x += p.speedX + (mouseX - width / 2) * 0.0001 * p.z;
        p.y += p.speedY;

        // Wrap particles
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
