import React from 'react';
import { clubConfig, communityNetwork } from '../data/siteData';
import { FileText, Shield } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, DiscordIcon } from './Icons';

const iconMap = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Youtube: YoutubeIcon,
  MessageSquare: DiscordIcon,
  FileText: FileText
};

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'rgba(4, 6, 10, 0.95)',
        borderTop: '1px solid rgba(0, 240, 255, 0.15)',
        padding: '50px 24px 30px 24px',
        zIndex: 2,
        overflow: 'hidden'
      }}
    >
      {/* Top Animated Energy Line Beam */}
      <div
        className="energy-beam"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        }}
      />

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px'
        }}
      >
        {/* Vanguard Brand Core */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={clubConfig.logoEmblem}
            alt="Vanguard Emblem"
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
          <span
            className="font-header"
            style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.14em'
            }}
          >
            VANGUARD
          </span>
        </div>

        <div style={{ color: '#8a9bb8', fontSize: '0.85rem', fontFamily: 'var(--font-sub)', letterSpacing: '0.1em' }}>
          {clubConfig.fullName} — {clubConfig.location}
        </div>

        {/* Social Link Nodes */}
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {communityNetwork.nodes.map((node) => {
            const IconComp = iconMap[node.icon] || Shield;
            return (
              <a
                key={node.id}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={node.platform}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 240, 255, 0.06)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  color: '#00f0ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <IconComp size={18} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.75rem',
            color: '#4c5d78',
            marginTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '20px',
            width: '100%'
          }}
        >
          © {new Date().getFullYear()} VANGUARD ESPORTS CLUB LBSITW. ALL RIGHTS RESERVED. ARCHITECTED FOR COMPETITION.
        </div>
      </div>
    </footer>
  );
}
