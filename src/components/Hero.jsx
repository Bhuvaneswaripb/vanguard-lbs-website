import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clubConfig } from '../data/siteData';

export default function Hero() {
  const [loadStep, setLoadStep] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 11-step Load Experience Sequence
  useEffect(() => {
    const sequenceTimers = [
      setTimeout(() => setLoadStep(2), 300),   // 2. Subtle particles
      setTimeout(() => setLoadStep(3), 700),   // 3. Distant blue glow
      setTimeout(() => setLoadStep(4), 1200),  // 4. Digital geometry visible
      setTimeout(() => setLoadStep(5), 1700),  // 5. Energy lines moving
      setTimeout(() => setLoadStep(6), 2200),  // 6. Arena gains depth
      setTimeout(() => setLoadStep(7), 2700),  // 7. Logo starts revealing
      setTimeout(() => setLoadStep(8), 3300),  // 8. Logo fully visible
      setTimeout(() => setLoadStep(9), 3900),  // 9. VANGUARD typography reveals
      setTimeout(() => setLoadStep(10), 4500), // 10. LBSITW appears
      setTimeout(() => setLoadStep(11), 5100)  // 11. Settles into continuous ambient motion
    ];

    return () => sequenceTimers.forEach(clearTimeout);
  }, []);

  // Subtle Mouse Parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const x = (clientX - windowWidth / 2) / (windowWidth / 2);
    const y = (clientY - windowHeight / 2) / (windowHeight / 2);

    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px 24px',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Black Out Curtain for initial reveal (Step 1 -> Fade out) */}
      <AnimatePresence>
        {loadStep === 1 && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#04060a',
              zIndex: 9998,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {/* Layered Interactive Arena Spotlight Glow (Step 3+) */}
      <motion.div
        animate={{
          opacity: loadStep >= 3 ? 1 : 0,
          x: mousePos.x * 30,
          y: mousePos.y * 30,
          scale: loadStep >= 6 ? 1.05 : 0.8
        }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 162, 255, 0.28) 0%, rgba(0, 240, 255, 0.12) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Hero Content Container with Mouse Parallax Depth */}
      <motion.div
        animate={{
          x: mousePos.x * -18,
          y: mousePos.y * -18,
          rotateX: mousePos.y * -4,
          rotateY: mousePos.x * 4
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1000px',
          position: 'relative',
          zIndex: 2,
          perspective: 1000
        }}
      >
        {/* Step 4-5: Holographic Top Status Badge */}
        {loadStep >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              marginBottom: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 18px',
              borderRadius: '20px',
              backgroundColor: 'rgba(0, 240, 255, 0.06)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)'
            }}
          >
            <span className="status-dot" />
            <span
              className="font-header"
              style={{
                fontSize: '0.72rem',
                color: '#00f0ff',
                letterSpacing: '0.18em',
                fontWeight: 700
              }}
            >
              DIGITAL ARENA NEXUS // ONLINE
            </span>
          </motion.div>
        )}

        {/* Step 7-8: Official Vanguard Logo Focal Point */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}
        >
          {/* Surrounding Ambient Energy Ring */}
          {loadStep >= 5 && (
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.8, 0.4],
                rotate: 360
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' }
              }}
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                border: '1px dashed rgba(0, 240, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 162, 255, 0.2)',
                pointerEvents: 'none'
              }}
            />
          )}

          {/* Logo Animation Reveal */}
          {loadStep >= 7 && (
            <motion.img
              src={clubConfig.logoFull}
              alt="Vanguard Official Esports Logo"
              initial={{ scale: 0.6, opacity: 0, filter: 'brightness(0) blur(20px)' }}
              animate={{
                scale: loadStep >= 8 ? 1 : 0.85,
                opacity: 1,
                filter: 'brightness(1) blur(0px)'
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.35)) drop-shadow(0 10px 40px rgba(0, 0, 0, 0.8))'
              }}
            />
          )}
        </div>

        {/* Step 9: VANGUARD Main Typography Reveal */}
        {loadStep >= 9 && (
          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.14em' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-header text-gradient-blue text-glow-blue"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 10px 0'
            }}
          >
            VANGUARD
          </motion.h1>
        )}

        {/* Step 10: LBSITW & ESPORTS CLUB Hierarchy */}
        {loadStep >= 10 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <h2
              className="font-sub"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}
            >
              LBSITW ESPORTS CLUB
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.88rem, 1.4vw, 1.1rem)',
                color: '#8a9bb8',
                maxWidth: '640px',
                marginTop: '12px',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              {clubConfig.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '28px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <a
                href="#events-battlefield"
                className="font-header"
                style={{
                  padding: '12px 28px',
                  borderRadius: '10px',
                  backgroundColor: '#00f0ff',
                  color: '#06090f',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                ENTER BATTLEFIELD
              </a>
              <a
                href="#announcements-intel"
                className="font-header"
                style={{
                  padding: '12px 28px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  color: '#00f0ff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                COMMAND INTEL
              </a>
            </div>
          </motion.div>
        )}

        {/* Step 11: Valkyrie Champion Character & Energy Beam */}
        {loadStep >= 11 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: '45px',
              width: '100%',
              maxWidth: '920px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Valkyrie Female Warrior Character Showcase Card */}
            <div
              className="arena-card tactical-clip"
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 240, 255, 0.35)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.25)',
                background: 'linear-gradient(160deg, rgba(12, 17, 26, 0.95), rgba(6, 9, 15, 0.98))'
              }}
            >
              {/* Character Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxHeight: '440px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={clubConfig.femaleWarriorImg}
                  alt="Vanguard Valkyrie Esports Warrior with Electric Blue Sword"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.15) brightness(1.05)'
                  }}
                />

                {/* Cyber Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 9, 15, 1) 0%, rgba(6, 9, 15, 0.4) 40%, transparent 100%)'
                  }}
                />

                {/* Holographic Tactical Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(6, 9, 15, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 240, 255, 0.4)',
                    color: '#00f0ff',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-header)',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span className="status-dot" />
                  <span>VANGUARD VALKYRIE // APEX ROSTER</span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div>
                    <span
                      className="font-header"
                      style={{
                        fontSize: '0.72rem',
                        color: '#00f0ff',
                        letterSpacing: '0.18em',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      CHAMPIONSHIP AVATAR // DIVISION LEADER
                    </span>
                    <h3
                      className="font-header text-gradient-blue"
                      style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        fontWeight: 900,
                        margin: 0
                      }}
                    >
                      FORGING THE FUTURE OF COMPETITIVE ESPORTS
                    </h3>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      backgroundColor: 'rgba(6, 9, 15, 0.9)',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 240, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#8a9bb8', display: 'block' }}>VALORANT RANK</span>
                      <span className="font-header" style={{ fontSize: '0.85rem', color: '#00f0ff', fontWeight: 800 }}>RADIANT / S-TIER</span>
                    </div>
                    <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#8a9bb8', display: 'block' }}>CAMPUS TITLES</span>
                      <span className="font-header" style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800 }}>STATE GOLD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="energy-beam" style={{ marginTop: '30px', width: '260px' }} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
