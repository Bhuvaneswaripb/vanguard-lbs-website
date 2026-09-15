import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { clubConfig } from '../data/siteData';
import { Menu, X, Shield, Activity, Calendar, Radio, Trophy, Users, Share2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: Shield },
    { path: '/about', label: 'About', icon: Activity },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/announcements', label: 'Intel', icon: Radio },
    { path: '/achievements', label: 'Victory', icon: Trophy },
    { path: '/execom', label: 'Control Room', icon: Users },
    { path: '/community', label: 'Network', icon: Share2 }
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1240px',
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(6, 9, 15, 0.92)' : 'rgba(8, 12, 20, 0.75)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
          border: scrolled ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 136, 255, 0.15)' : 'none'
        }}
      >
        {/* Brand Logo & Title */}
        <NavLink
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#ffffff'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))'
            }}
          >
            <img
              src={clubConfig.logoEmblem}
              alt="Vanguard Official Emblem"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-header"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                background: 'linear-gradient(135deg, #ffffff 40%, #a5ebff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1
              }}
            >
              VANGUARD
            </span>
            <span
              className="font-sub"
              style={{
                fontSize: '0.62rem',
                color: '#8a9bb8',
                letterSpacing: '0.15em',
                fontWeight: 600
              }}
            >
              LBSITW ESPORTS
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav Items */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          className="desktop-nav-links"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-header)',
                  letterSpacing: '0.08em',
                  color: isActive ? '#00f0ff' : '#a0b2cf',
                  borderRadius: '8px',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: isActive ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid transparent'
                }}
              >
                <Icon size={14} style={{ opacity: isActive ? 1 : 0.7 }} />
                <span>{item.label}</span>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '20%',
                      right: '20%',
                      height: '2px',
                      background: '#00f0ff',
                      boxShadow: '0 0 10px #00f0ff',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            color: '#00f0ff',
            padding: '8px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: '16px',
            right: '16px',
            zIndex: 999,
            backgroundColor: 'rgba(6, 9, 15, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 136, 255, 0.2)'
          }}
          className="mobile-drawer"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-header)',
                  color: isActive ? '#00f0ff' : '#a0b2cf',
                  backgroundColor: isActive ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Icon size={18} style={{ color: isActive ? '#00f0ff' : '#8a9bb8' }} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}

      {/* Media Queries for Navbar in CSS */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
