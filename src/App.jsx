import React, { useState, useEffect } from 'react';
import ScrapbookHeader from './components/ScrapbookHeader';
import ProfileHero from './components/ProfileHero';
import EditorialCursor from './components/EditorialCursor';
import EditorialReadingRibbon from './components/EditorialReadingRibbon';
import MarqueeRibbon from './components/MarqueeRibbon';
import AcademicTimeline from './components/AcademicTimeline';
import WorkExperienceSection from './components/WorkExperienceSection';
import EventsScrapbookSection from './components/EventsScrapbookSection';
import ScrapbookContact from './components/ScrapbookContact';
import ScrapbookFooter from './components/ScrapbookFooter';
import AskNehirAIModal, { CommandPaletteTrigger } from './components/AskNehirAIModal';
import './styles/theme.css';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsAiModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#801232] selection:text-white">

      {/* Bespoke Editorial Magnetic Cursor with Contextual Badges */}
      <EditorialCursor />

      {/* Editorial Chapter Progress & Reading Ribbon */}
      <EditorialReadingRibbon />

      {/* Interactive "Ask Nehir AI" Command Palette & Trigger Pill */}
      <AskNehirAIModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <CommandPaletteTrigger onClick={() => setIsAiModalOpen(true)} />

      {/* 1. Minimal Sticky Navbar */}
      <ScrapbookHeader onOpenAiModal={() => setIsAiModalOpen(true)} />

      <main>
        {/* 2. Spacious Split-Screen Hero */}
        <ProfileHero />

        {/* 3. Slim Marquee Ribbon */}
        <MarqueeRibbon />

        {/* 4. Career Journey — Clean Cards */}
        <WorkExperienceSection />

        {/* 5. Academic Foundations — Minimalist Timeline */}
        <AcademicTimeline />

        {/* 6. Projects & Publications — Sleek Grid */}
        <EventsScrapbookSection />

        {/* 8. Second Marquee Ribbon */}
        <MarqueeRibbon text="IEEE SIU 2026 CONGRESS ✦ RAG WITH MICROSOFT FOUNDRY LOCAL ✦ REAL-TIME OPENCV VISION ✦ LA SALLE BCN ✦ NEHIR KARAMEŞE ✦ " />

        {/* 9. Minimalist Contact Form */}
        <ScrapbookContact />
      </main>

      {/* 10. Elegant Footer */}
      <ScrapbookFooter />
    </div>
  );
}
