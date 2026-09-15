import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { communityNetwork } from '../data/siteData';
import { Share2, FileText, ExternalLink } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, DiscordIcon } from './Icons';

const iconMap = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Youtube: YoutubeIcon,
  MessageSquare: DiscordIcon,
  FileText: FileText
};

export default function CommunitySection({ showFullPage = false }) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  return (
    <section
      id="community-network"
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
          <Share2 size={18} style={{ color: '#00f0ff' }} />
          <span className="font-header" style={{ color: '#00f0ff', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            DIGITAL SPECTRUM // 06
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
          THE NETWORK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#8a9bb8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}
        >
          Interactive digital hub connecting Vanguard channels across platforms.
        </motion.p>
      </div>

      {/* Central Command Core + Floating Satellite Nodes Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        {/* Central Core Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="arena-card tactical-clip"
          style={{
            padding: '28px 48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.95), rgba(6, 9, 15, 0.98))',
            border: '2px solid #00f0ff',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.35)',
            zIndex: 10
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 14px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 10px #00f0ff)'
            }}
          >
            <img src={communityNetwork.centerNode.logoUrl} alt="Vanguard Emblem" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>

          <h3 className="font-header" style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 900, letterSpacing: '0.14em' }}>
            {communityNetwork.centerNode.label}
          </h3>
          <span style={{ fontSize: '0.75rem', color: '#00f0ff', fontFamily: 'var(--font-header)', letterSpacing: '0.15em' }}>
            {communityNetwork.centerNode.sublabel}
          </span>
        </motion.div>

        {/* Network Satellite Nodes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            width: '100%'
          }}
        >
          {communityNetwork.nodes.map((node, idx) => {
            const IconComponent = iconMap[node.icon] || Share2;
            const isHovered = hoveredNodeId === node.id;

            return (
              <motion.a
                key={node.id}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="arena-card interactive-node"
                style={{
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '180px',
                  border: isHovered ? `1px solid ${node.color}` : '1px solid rgba(0, 240, 255, 0.18)',
                  boxShadow: isHovered ? `0 0 30px ${node.glowColor}` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 240, 255, 0.08)',
                      border: `1px solid ${node.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: node.color
                    }}
                  >
                    <IconComponent size={20} />
                  </div>

                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#00f0ff',
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-header)',
                      fontWeight: 700
                    }}
                  >
                    {node.status}
                  </span>
                </div>

                <div>
                  <h4
                    className="font-header"
                    style={{
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      fontWeight: 800,
                      marginBottom: '2px'
                    }}
                  >
                    {node.platform}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#8a9bb8', fontWeight: 500 }}>
                    {node.handle}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    color: node.color,
                    fontWeight: 600,
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '10px'
                  }}
                >
                  <span>{node.metrics}</span>
                  <ExternalLink size={12} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
