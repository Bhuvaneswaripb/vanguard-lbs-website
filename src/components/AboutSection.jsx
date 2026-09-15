import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { clubConfig, statisticsData } from '../data/siteData';
import { ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

function StatCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection({ showFullPage = false }) {
  return (
    <section
      id="about-arena"
      style={{
        position: 'relative',
        width: '100%',
        padding: showFullPage ? '140px 24px 80px 24px' : '90px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        zIndex: 2
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '50px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
        >
          <Cpu size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            ORGANIZATION PROFILE // 01
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-header text-gradient-blue"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, textTransform: 'uppercase' }}
        >
          THE ARENA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          Forging competitive dominance and technological mastery at LBSITW Trivandrum.
        </motion.p>
      </div>

      {/* Split Composition */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '60px'
        }}
      >
        {/* Left: Interactive Visual Architecture Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="arena-card tactical-clip"
          style={{
            padding: '40px',
            background: 'linear-gradient(145deg, rgba(12, 17, 26, 0.9), rgba(6, 9, 15, 0.95))',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f0ff'
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-header" style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>
                LBSITW ESPORTS NEXUS
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#00f0ff', letterSpacing: '0.1em' }}>EST. {clubConfig.foundedYear}</span>
            </div>
          </div>

          <p style={{ color: '#a0b2cf', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
            {clubConfig.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#c0d4f0' }}>
              <ChevronRight size={14} style={{ color: '#00f0ff' }} />
              <span>Official Institutional Esports Organization of LBSITW</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#c0d4f0' }}>
              <ChevronRight size={14} style={{ color: '#00f0ff' }} />
              <span>State & National Inter-Collegiate Championship Rosters</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#c0d4f0' }}>
              <ChevronRight size={14} style={{ color: '#00f0ff' }} />
              <span>Broadcast Studio, Shoutcasting & Digital Media Ops</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Animated Statistics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {statisticsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="arena-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <span
                className="font-header"
                style={{ fontSize: '0.7rem', color: '#00f0ff', letterSpacing: '0.14em', opacity: 0.9 }}
              >
                {stat.label}
              </span>

              <div
                className="font-header text-gradient-blue text-glow-blue"
                style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 900, margin: '12px 0 6px 0' }}
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <p style={{ fontSize: '0.78rem', color: '#7a8ca8', lineHeight: 1.4 }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
