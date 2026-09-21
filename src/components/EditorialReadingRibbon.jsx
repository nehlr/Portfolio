import React, { useState, useEffect } from 'react';
import { ArrowUp, BookOpen, ChevronRight, Compass } from 'lucide-react';

const CHAPTERS = [
  { id: 'hero', index: '00', label: 'Overview', title: 'Portfolio & Archive' },
  { id: 'experience', index: '01', label: 'Career', title: 'Career Journey' },
  { id: 'academic', index: '02', label: 'Education', title: 'Academic Roadmap' },
  { id: 'projects', index: '03', label: 'Works', title: 'Projects & Research' },
  { id: 'contact', index: '04', label: 'Connect', title: 'Get in Touch' },
];

/**
 * EditorialReadingRibbon Component
 * 
 * Features:
 * 1. Ultra-slim gradient reading progress ribbon at the top of the viewport.
 * 2. Floating editorial chapter index indicator showing active section & progress %.
 * 3. Minimalist quick-jump chapter navigation dots with hover previews.
 * 4. Ambient "Return to Top" quick action.
 */
export default function EditorialReadingRibbon() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [showFloatingPill, setShowFloatingPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setShowFloatingPill(scrollY > 240);

      // Determine active chapter by intersecting section offsets
      const scrollMid = scrollY + window.innerHeight * 0.35;
      let currentIndex = 0;

      for (let i = 0; i < CHAPTERS.length; i++) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollMid >= top) {
            currentIndex = i;
          }
        }
      }
      setActiveChapterIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <>
      {/* ── 1. Top Reading Ribbon (Fixed at topmost edge) ── */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#801232] via-[#e11d48] to-[#f472b6] transition-all duration-75 ease-out shadow-[0_1px_6px_rgba(225,29,72,0.4)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── 2. Floating Bottom Editorial Chapter Pill (Desktop & Tablet) ── */}
      <aside
        aria-label="Reading Progress Navigation"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out hidden sm:flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md border border-[#fae5eb] rounded-full shadow-[0_12px_32px_rgba(128,18,50,0.1)] select-none ${
          showFloatingPill
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Active Chapter Index & Title */}
        <div className="flex items-center gap-2 pr-3 border-r border-[#fae5eb]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#801232] animate-pulse" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#801232] uppercase">
            {currentChapter.index}
          </span>
          <span className="font-serif text-xs font-normal text-[#1c1917] tracking-tight max-w-[140px] truncate">
            {currentChapter.title}
          </span>
        </div>

        {/* Quick Chapter Navigation Dots */}
        <nav className="flex items-center gap-1.5" aria-label="Chapters">
          {CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              onClick={() => scrollToSection(chap.id)}
              aria-label={`Jump to ${chap.title}`}
              title={`${chap.index} / ${chap.title}`}
              className={`group/btn relative transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center ${
                activeChapterIndex === idx
                  ? 'w-6 h-2.5 bg-[#801232]'
                  : 'w-2.5 h-2.5 bg-[#fae5eb] hover:bg-[#801232]/50'
              }`}
            >
              {/* Tooltip on hover */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1c1917] text-white font-mono text-[9px] rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-sm">
                {chap.index} {chap.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Live Percent & Back-to-Top */}
        <div className="flex items-center gap-2 pl-3 border-l border-[#fae5eb]">
          <span className="font-mono text-[10px] text-[#801232]/70 font-semibold tabular-nums min-w-[28px] text-right">
            {Math.round(scrollProgress)}%
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Return to top"
            className="w-6 h-6 rounded-full bg-[#fdf0f4] hover:bg-[#801232] text-[#801232] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <ArrowUp size={11} />
          </button>
        </div>
      </aside>

      {/* ── 3. Ultra-Minimal Vertical Side Rail on Ultra-Wide Screens ── */}
      <div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden 2xl:flex flex-col items-center gap-4 pointer-events-none select-none opacity-60 hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#801232]/30" />
        <div className="flex flex-col items-center gap-3">
          {CHAPTERS.map((chap, idx) => (
            <div
              key={chap.id}
              className={`font-mono text-[9px] font-semibold tracking-widest transition-all duration-300 ${
                activeChapterIndex === idx
                  ? 'text-[#801232] font-bold scale-110'
                  : 'text-[#a8a29e]'
              }`}
            >
              {chap.index}
            </div>
          ))}
        </div>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#801232]/30" />
      </div>
    </>
  );
}
