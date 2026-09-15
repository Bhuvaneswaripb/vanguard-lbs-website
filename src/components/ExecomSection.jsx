import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { execomDepartments, execomMembers } from '../data/siteData';
import { Users, Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

export default function ExecomSection({ showFullPage = false }) {
  const [activeDept, setActiveDept] = useState('ALL');

  const filteredMembers = activeDept === 'ALL'
    ? execomMembers
    : execomMembers.filter((m) => m.department.toUpperCase() === activeDept.toUpperCase() || (activeDept === 'LEADERSHIP' && m.department === 'LEADERSHIP'));

  return (
    <section
      id="execom-control-room"
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
          <Users size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            OPERATIONS & GOVERNANCE // 05
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
          CONTROL ROOM
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          The executive committee and technical department leads driving Vanguard operations.
        </motion.p>
      </div>

      {/* Department Filter Switcher */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '50px'
        }}
      >
        {execomDepartments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className="font-header"
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeDept === dept ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeDept === dept ? '#00f0ff' : '#8a9bb8',
              border: activeDept === dept ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Execom Cards Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="arena-card tactical-clip"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '30px 24px',
                background: 'linear-gradient(150deg, rgba(12, 17, 26, 0.85), rgba(6, 9, 15, 0.95))'
              }}
            >
              {/* Profile Image with Blue Rim Light */}
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(135deg, #00f0ff, #0070ff)',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: 'grayscale(0.2) contrast(1.1)'
                  }}
                />
              </div>

              {/* Department Badge */}
              <span
                className="font-header"
                style={{
                  fontSize: '0.65rem',
                  color: '#00f0ff',
                  letterSpacing: '0.14em',
                  marginBottom: '6px'
                }}
              >
                {member.department}
              </span>

              {/* Role Title */}
              <h3
                className="font-header"
                style={{
                  fontSize: '1.05rem',
                  color: '#ffffff',
                  fontWeight: 800,
                  marginBottom: '4px'
                }}
              >
                {member.role}
              </h3>

              {/* Name (Placeholder) */}
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#a0b2cf',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}
              >
                {member.name}
              </div>

              {/* Academic Year */}
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#7a8ca8',
                  marginBottom: '14px'
                }}
              >
                {member.year}
              </div>

              {/* Bio / Tagline */}
              <p style={{ color: '#8a9bb8', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '20px' }}>
                {member.tagline}
              </p>

              {/* Social Channels */}
              <div style={{ display: 'flex', gap: '14px', marginTop: 'auto' }}>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    color: '#8a9bb8',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8a9bb8')}
                >
                  <LinkedinIcon size={16} />
                </a>

                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    color: '#8a9bb8',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8a9bb8')}
                >
                  <InstagramIcon size={16} />
                </a>

                <a
                  href={`mailto:${member.socials.email}`}
                  aria-label="Email"
                  style={{
                    color: '#8a9bb8',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8a9bb8')}
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
