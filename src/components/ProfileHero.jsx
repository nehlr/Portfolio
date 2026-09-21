import React, { useState, useRef } from 'react';
import { ArrowRight, Brain, Cpu, Layers, Sparkles, GraduationCap, Award, MapPin, ExternalLink } from 'lucide-react';
import { scrapbookData } from '../data/scrapbookData';
import TextPressure from './TextPressure';

export default function ProfileHero() {
  const { profile } = scrapbookData;
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Normalize coordinates between -1 and 1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Subtle 3D tilt calculation
  const tiltY = mousePos.x * 10; // degrees horizontal rotation
  const tiltX = mousePos.y * -8; // degrees vertical rotation
  const shiftX = mousePos.x * 12; // px translation
  const shiftY = mousePos.y * 8; // px translation

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#faf8f5] min-h-[94vh] flex items-center justify-center overflow-hidden py-14 lg:py-0 select-none"
    >
      {/* ── Dynamic Ambient Background ── */}

      {/* 2. Delicate Editorial Accent Rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] hidden lg:block transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(calc(-50% + ${shiftX * 0.4}px), calc(-50% + ${shiftY * 0.4}px))`,
        }}
        aria-hidden="true"
      >
        <svg width="680" height="680" viewBox="0 0 680 680" fill="none">
          <circle cx="340" cy="340" r="300" stroke="#801232" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="340" cy="340" r="230" stroke="#801232" strokeWidth="0.8" />
          <circle cx="340" cy="340" r="160" stroke="#801232" strokeWidth="0.6" strokeDasharray="4 8" />
          <line x1="340" y1="20" x2="340" y2="660" stroke="#801232" strokeWidth="0.5" strokeDasharray="6 6" />
          <line x1="20" y1="340" x2="660" y2="340" stroke="#801232" strokeWidth="0.5" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* ── Main 3-Column Layout ── */}
      <div className="site-container relative z-10 w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ═════════ LEFT COLUMN: Huge Typography "Nehir Karameşe" ═════════ */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left order-1">
            {/* Kicker */}


            {/* Giant Name: Nehir (line 1), Karameşe (line 2) */}
            <div className="space-y-0.5 lg:space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-[76px] xl:text-[96px] text-[#801232] tracking-tight leading-[0.88]">
                <TextPressure
                  text="Nehir"
                  minWeight={200}
                  maxWeight={900}
                  minWidth={75}
                  maxWidth={140}
                  minItalic={0}
                  maxItalic={1}
                  maxDistance={220}
                  textColor="#801232"
                />
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] xl:text-[86px] text-[#660d26] tracking-tight leading-[0.92]">
                <TextPressure
                  text="Karameşe"
                  minWeight={200}
                  maxWeight={900}
                  minWidth={75}
                  maxWidth={140}
                  minItalic={0.2}
                  maxItalic={1}
                  maxDistance={220}
                  textColor="#660d26"
                />
              </h1>
            </div>

            {/* Sub-label & Location */}
            <div className="mt-5 lg:mt-6 space-y-2">
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#801232]/75 flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin size={13} className="text-[#801232]" />
                Barcelona, Spain
              </p>
              <p className="font-sans text-[13px] text-[#57534e] leading-relaxed max-w-xs mx-auto lg:mx-0">
                AI Master's Student at La Salle BCN with a strong background in Computer Engineering.
              </p>
            </div>

            {/* Left Column CTA */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-4">
              <a href="#experience" className="btn-primary">
                Explore <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* ═════════ CENTER COLUMN: Large Interactive Standing Photo ═════════ */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-2 py-4 lg:py-0">
            <div
              className="relative flex items-center justify-center"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Floating Badge 1: Top-Left (M.S. Artificial Intelligence) */}
              <div
                className="absolute -top-6 sm:-top-8 -left-2 sm:-left-10 lg:-left-14 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#fae5eb] rounded-full shadow-[0_8px_24px_rgba(128,18,50,0.12)] transition-transform duration-300 ease-out animate-badge-1 hover:scale-105"
                style={{
                  transform: `translate(${shiftX * 0.8}px, ${shiftY * 0.8}px)`,
                }}
              >
                <div className="w-6 h-6 rounded-full bg-[#fdf0f4] flex items-center justify-center text-[#801232]">
                  <GraduationCap size={13} />
                </div>
                <div className="text-left">
                  <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#801232]">M.S. in AI</p>
                  <p className="font-sans text-[9px] text-[#57534e]">La Salle BCN · URL</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Right (IEEE SIU 2026 Co-Author) */}
              <div
                className="absolute bottom-8 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#fae5eb] rounded-full shadow-[0_8px_24px_rgba(128,18,50,0.12)] transition-transform duration-300 ease-out animate-badge-2 hover:scale-105"
                style={{
                  transform: `translate(${shiftX * -0.8}px, ${shiftY * -0.8}px)`,
                }}
              >
                <div className="w-6 h-6 rounded-full bg-[#801232] flex items-center justify-center text-white">
                  <Award size={12} />
                </div>
                <div className="text-left">
                  <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#801232]">IEEE SIU 2026</p>
                  <p className="font-sans text-[9px] text-[#57534e]">Co-Authored Research</p>
                </div>
              </div>

              {/* The Hero Cutout Image */}
              <div
                className="relative transition-transform duration-300 ease-out animate-hero-float"
                style={{
                  transform: `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) translate3d(${shiftX}px, ${shiftY}px, 20px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* ── High-Opacity Vibrant Pink Glow Centered on Image ── */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full blur-3xl"
                  style={{
                    width: '580px',
                    height: '590px',
                    background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 0%, rgba(231, 186, 186, 0.85) 30%, rgba(238, 205, 216, 0.65) 55%, transparent 75%)',
                    zIndex: -1,
                  }}
                  aria-hidden="true"
                />

                {/* Additional intense center core radiance */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full blur-xl"
                  style={{
                    width: '280px',
                    height: '380px',
                    background: 'radial-gradient(ellipse at center, rgba(205, 111, 119, 0.9) 0%, rgba(208, 91, 110, 0.7) 45%, transparent 75%)',
                    zIndex: -1,
                  }}
                  aria-hidden="true"
                />

                <img
                  src="/assets/nehirlanding.png"
                  alt="Nehir Karameşe"
                  className="h-[460px] sm:h-[540px] md:h-[600px] lg:h-[640px] xl:h-[700px] w-auto max-w-full object-contain pointer-events-none relative z-10 drop-shadow-[0_24px_48px_rgba(122,27,56,0.22)]"
                />
              </div>

            </div>
          </div>

          {/* ═════════ RIGHT COLUMN: "AI Master's Candidate & Computer Engineer" ═════════ */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left order-3">
            {/* Top kicker */}
            <div className="label-kicker mb-3 flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles size={11} className="text-[#801232]" />
              <span>Specialization &amp; Engineering</span>
            </div>

            {/* Requested Headline: AI Master's Candidate & Computer Engineer */}
            <h2 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[40px] text-[#801232] tracking-tight leading-[1.12]">
              <TextPressure
                text="AI Master's Candidate"
                minWeight={250}
                maxWeight={850}
                minWidth={75}
                maxWidth={135}
                minItalic={0}
                maxItalic={0.8}
                maxDistance={180}
                textColor="#801232"
              />
              <br />
              <TextPressure
                text="& Computer Engineer"
                minWeight={200}
                maxWeight={800}
                minWidth={75}
                maxWidth={135}
                minItalic={0.3}
                maxItalic={1}
                maxDistance={180}
                textColor="#660d26"
              />
            </h2>

            {/* Thin dividing line */}
            <div className="rule-thin my-4 max-w-[280px] mx-auto lg:mx-0" />

            {/* Body Copy */}
            <p className="font-sans text-[14px] text-[#57534e] leading-relaxed max-w-sm mx-auto lg:mx-0">
              Specializing in Retrieval-Augmented Generation (RAG) architectures
              leveraging Microsoft Foundry Local, real-time OpenCV computer vision, and
              signal processing analytics presented at IEEE SIU 2026.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mt-5">
              {[
                { icon: <Brain size={11} />, label: 'Local RAG & LLMs' },
                { icon: <Cpu size={11} />, label: 'Computer Vision' },
                { icon: <Layers size={11} />, label: 'Full-Stack React' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#fae5eb] rounded-full font-sans text-[10px] font-semibold tracking-wider text-[#801232] uppercase shadow-sm"
                >
                  {icon} {label}
                </span>
              ))}
            </div>

            {/* Right Column CTAs */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3">
              <a href="#contact" className="btn-outline text-[11px] py-2.5 px-5">
                Connect &amp; Collaborate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
