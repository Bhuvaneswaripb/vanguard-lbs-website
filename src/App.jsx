import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import ArenaBackground from './components/ArenaBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import AchievementsSection from './components/AchievementsSection';
import ExecomSection from './components/ExecomSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventsSection />
      <AnnouncementsSection />
      <AchievementsSection />
      <ExecomSection />
      <CommunitySection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ArenaBackground />
      <CustomCursor />
      <Navbar />

      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection showFullPage={true} />} />
          <Route path="/events" element={<EventsSection showFullPage={true} />} />
          <Route path="/announcements" element={<AnnouncementsSection showFullPage={true} />} />
          <Route path="/achievements" element={<AchievementsSection showFullPage={true} />} />
          <Route path="/execom" element={<ExecomSection showFullPage={true} />} />
          <Route path="/community" element={<CommunitySection showFullPage={true} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
