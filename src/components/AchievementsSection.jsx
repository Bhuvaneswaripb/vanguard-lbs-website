import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/siteData';
import { Award, Trophy } from 'lucide-react';

export default function AchievementsSection({ showFullPage = false }) {
  return (
    <section
      id="achievements-victory"
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
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
        >
          <Award size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            LEGACY & HONORS // 04
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
          HALL OF VICTORY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          A chronicle of podium finishes, state titles, and institutional honors.
        </motion.p>
      </div>

      {/* Glowing Timeline Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          paddingLeft: '20px'
        }}
      >
        {/* Central Vertical Energy Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '30px',
            width: '2px',
            background: 'linear-gradient(to bottom, rgba(0, 240, 255, 0.6), rgba(0, 136, 255, 0.2), transparent)',
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.4)'
          }}
        />

        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            style={{
              position: 'relative',
              paddingLeft: '50px',
              marginBottom: '40px'
            }}
          >
            {/* Timeline Node Point */}
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: '12px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#06090f',
                border: '2px solid #00f0ff',
                boxShadow: '0 0 15px #00f0ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00f0ff'
                }}
              />
            </div>

            {/* Achievement Card */}
            <div
              className="arena-card tactical-clip"
              style={{
                padding: '28px',
                background: 'linear-gradient(145deg, rgba(14, 20, 32, 0.9), rgba(6, 9, 15, 0.95))'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    className="font-header"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      color: '#00f0ff'
                    }}
                  >
                    [{item.year}]
                  </span>

                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      color: '#ffd700',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-header)',
                      fontWeight: 700,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {item.highlightBadge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#8a9bb8',
                    fontFamily: 'var(--font-sub)',
                    fontWeight: 600
                  }}
                >
                  {item.competition}
                </div>
              </div>

              <h3
                className="font-header"
                style={{
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  fontWeight: 700,
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#00f0ff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                <Trophy size={16} />
                <span>{item.result}</span>
              </div>

              <p style={{ color: '#a0b2cf', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
