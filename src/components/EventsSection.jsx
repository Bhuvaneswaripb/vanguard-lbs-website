import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData } from '../data/siteData';
import { Calendar, MapPin, Trophy, ExternalLink, Award } from 'lucide-react';

export default function EventsSection({ showFullPage = false }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentEvents = activeTab === 'upcoming' ? eventsData.upcoming : eventsData.past;

  return (
    <section
      id="events-battlefield"
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
          <Trophy size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            COMPETITIVE CALENDAR // 02
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
          BATTLEFIELD
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          Tournament fixtures, arena face-offs, and inter-collegiate scrims.
        </motion.p>
      </div>

      {/* Tabs Switcher */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '50px'
        }}
      >
        <button
          onClick={() => setActiveTab('upcoming')}
          className="font-header"
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: activeTab === 'upcoming' ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
            color: activeTab === 'upcoming' ? '#00f0ff' : '#8a9bb8',
            border: activeTab === 'upcoming' ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: activeTab === 'upcoming' ? '0 0 20px rgba(0, 240, 255, 0.2)' : 'none'
          }}
        >
          UPCOMING EVENTS ({eventsData.upcoming.length})
        </button>

        <button
          onClick={() => setActiveTab('past')}
          className="font-header"
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: activeTab === 'past' ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
            color: activeTab === 'past' ? '#00f0ff' : '#8a9bb8',
            border: activeTab === 'past' ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: activeTab === 'past' ? '0 0 20px rgba(0, 240, 255, 0.2)' : 'none'
          }}
        >
          PAST FIXTURES ({eventsData.past.length})
        </button>
      </div>

      {/* Asymmetric Events Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {currentEvents.map((evt, idx) => (
            <motion.div
              key={evt.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="arena-card tactical-clip"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'linear-gradient(160deg, rgba(14, 20, 32, 0.85), rgba(6, 9, 15, 0.95))'
              }}
            >
              {/* Event Cover Image Banner */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '190px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={evt.image}
                  alt={evt.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7) contrast(1.1)',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 9, 15, 1) 0%, transparent 60%)'
                  }}
                />

                {/* Badge Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(6, 9, 15, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: '#00f0ff',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-header)',
                    fontWeight: 700,
                    letterSpacing: '0.12em'
                  }}
                >
                  {evt.badge}
                </div>

                {/* Status Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: evt.status === 'COMPLETED' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 240, 255, 0.15)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-header)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                  {evt.status}
                </div>
              </div>

              {/* Event Body Content */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    className="font-header"
                    style={{
                      fontSize: '1.15rem',
                      color: '#ffffff',
                      fontWeight: 700,
                      marginBottom: '12px',
                      lineHeight: 1.3
                    }}
                  >
                    {evt.title}
                  </h3>

                  <p style={{ color: '#8a9bb8', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {evt.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '20px',
                      fontSize: '0.8rem',
                      color: '#a0b2cf'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={14} style={{ color: '#00f0ff' }} />
                      <span>{evt.date}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={14} style={{ color: '#00f0ff' }} />
                      <span>{evt.location}</span>
                    </div>

                    {evt.prizePool && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontWeight: 600 }}>
                        <Award size={14} />
                        <span>PRIZE POOL: {evt.prizePool}</span>
                      </div>
                    )}

                    {evt.winner && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: 600 }}>
                        <Trophy size={14} />
                        <span>CHAMPION: {evt.winner}</span>
                      </div>
                    )}
                  </div>

                  {/* Trigger Action */}
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="font-header"
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      color: '#00f0ff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>VIEW INTEL & DETAILS</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(4, 6, 10, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="arena-card tactical-clip"
              style={{
                width: '100%',
                maxWidth: '650px',
                padding: '36px',
                background: 'linear-gradient(160deg, #0e1420, #06090f)',
                border: '1px solid rgba(0, 240, 255, 0.4)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <span className="font-header" style={{ fontSize: '0.7rem', color: '#00f0ff', letterSpacing: '0.15em' }}>
                    {selectedEvent.badge} // {selectedEvent.type}
                  </span>
                  <h3 className="font-header" style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '6px' }}>
                    {selectedEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#8a9bb8',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              <p style={{ color: '#a0b2cf', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {selectedEvent.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', background: 'rgba(0, 240, 255, 0.04)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(0, 240, 255, 0.15)' }}>
                <div style={{ fontSize: '0.85rem', color: '#c0d4f0' }}>📅 Date: {selectedEvent.date}</div>
                <div style={{ fontSize: '0.85rem', color: '#c0d4f0' }}>📍 Location: {selectedEvent.location}</div>
                {selectedEvent.prizePool && <div style={{ fontSize: '0.85rem', color: '#00f0ff', fontWeight: 600 }}>🏆 Prize Pool: {selectedEvent.prizePool}</div>}
              </div>

              {selectedEvent.registrationUrl && (
                <a
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-header"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    backgroundColor: '#00f0ff',
                    color: '#06090f',
                    fontWeight: 800,
                    textDecoration: 'none',
                    letterSpacing: '0.1em'
                  }}
                >
                  PROCEED TO TOURNAMENT REGISTRATION
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
