import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { announcementsData } from '../data/siteData';
import { Radio, ChevronDown, ChevronUp, Terminal, ArrowRight } from 'lucide-react';

export default function AnnouncementsSection({ showFullPage = false }) {
  const [expandedId, setExpandedId] = useState(announcementsData[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="announcements-intel"
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
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
        >
          <Radio size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            COMMAND CENTER BROADCASTS // 03
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
          LIVE INTEL
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          Real-time tactical dispatches, facility updates, and organizational operational notices.
        </motion.p>
      </div>

      {/* Intel Feeds Transmission Container */}
      <div
        className="scanline-overlay"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {announcementsData.map((item, idx) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="arena-card tactical-clip"
              style={{
                background: isExpanded
                  ? 'linear-gradient(135deg, rgba(16, 24, 38, 0.95), rgba(6, 9, 15, 0.98))'
                  : 'linear-gradient(135deg, rgba(10, 15, 24, 0.7), rgba(6, 9, 15, 0.85))',
                border: isExpanded ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '20px 24px'
              }}
            >
              {/* Transmission Header Bar */}
              <div
                onClick={() => toggleExpand(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  userSelect: 'none',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      color: '#00f0ff',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-header)',
                      fontWeight: 700
                    }}
                  >
                    <Terminal size={12} />
                    <span>{item.codeName}</span>
                  </div>

                  <span style={{ color: '#8a9bb8', fontSize: '0.75rem', fontFamily: 'var(--font-sub)' }}>
                    [{item.date}]
                  </span>

                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: item.status === 'ACTIVE BROADCAST' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: item.status === 'ACTIVE BROADCAST' ? '#00f0ff' : '#6a7b98',
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-header)',
                      fontWeight: 700
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div style={{ color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="font-header" style={{ fontSize: '0.72rem', letterSpacing: '0.1em' }}>
                    {isExpanded ? 'COLLAPSE INTEL' : 'EXPAND DISPATCH'}
                  </span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Title & Summary */}
              <div style={{ marginTop: '14px' }}>
                <h3
                  className="font-header"
                  style={{
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: '8px'
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#a0b2cf', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.summary}
                </p>
              </div>

              {/* Expandable Detail Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        marginTop: '20px',
                        paddingTop: '18px',
                        borderTop: '1px dashed rgba(0, 240, 255, 0.2)',
                        color: '#c0d4f0',
                        fontSize: '0.88rem',
                        lineHeight: 1.7
                      }}
                    >
                      <p style={{ marginBottom: '16px' }}>{item.fullDetails}</p>

                      {item.actionUrl && (
                        <a
                          href={item.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-header"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 18px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(0, 240, 255, 0.15)',
                            border: '1px solid rgba(0, 240, 255, 0.35)',
                            color: '#00f0ff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textDecoration: 'none'
                          }}
                        >
                          <span>{item.actionText}</span>
                          <ArrowRight size={14} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
