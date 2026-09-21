import React from 'react';
import { GraduationCap, MapPin, Sparkles, Activity } from 'lucide-react';
import { scrapbookData } from '../data/scrapbookData';
import TextPressure from './TextPressure';
import SynapticSignalCanvas from './SynapticSignalCanvas';

export default function AcademicTimeline() {
  const { academicHighlights } = scrapbookData;

  return (
    <section id="academic" className="section-spacious bg-[#fdf0f4] relative overflow-hidden">
      {/* Interactive Synaptic Neural Graph & Harmonic Signal Processing Canvas */}
      <SynapticSignalCanvas
        nodeCount={50}
        connectionDistance={135}
        glowColor="128, 18, 50"
        accentColor="244, 63, 94"
        showWaveform={true}
        opacity={0.7}
        className="pointer-events-none z-0"
      />

      <div className="site-container relative z-10">

        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <p className="label-kicker">02 / Academic Foundations</p>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-[#801232]/70 bg-white/80 px-2.5 py-0.5 rounded-full border border-[#fae5eb] shadow-xs">
              <Activity size={10} className="text-[#801232] animate-pulse" />
              <span>Synaptic Neural Graph · Signal Harmonics</span>
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[56px] text-[#801232] tracking-tight leading-tight max-w-xl">
            <TextPressure
              text="Academic Roadmap"
              minWeight={250}
              maxWeight={850}
              minWidth={75}
              maxWidth={135}
              minItalic={0}
              maxItalic={0.8}
              maxDistance={190}
              textColor="#801232"
            />
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical timeline spine (desktop) */}
          <div
            className="absolute left-[1.5rem] top-0 bottom-0 w-px bg-[rgba(128,18,50,0.12)] hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {academicHighlights.map((edu, idx) => (
              <div
                key={idx}
                className="group relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[0.875rem] top-2 w-2.5 h-2.5 rounded-full bg-[#801232] border-2 border-[#fdf0f4] hidden md:block group-hover:scale-125 transition-transform duration-200"
                  aria-hidden="true"
                />

                {/* Entry */}
                <div className={`py-12 md:py-14 ${idx < academicHighlights.length - 1 ? 'border-b border-[rgba(128,18,50,0.08)]' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

                    {/* Left meta */}
                    <div className="lg:col-span-4 space-y-2">
                      <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-white bg-[#801232] px-2.5 py-1 rounded-sm">
                        <GraduationCap size={11} />
                        {idx === 0 ? "Master's Degree" : "Bachelor's Degree"}
                      </span>
                      <p className="font-mono text-xs text-[#801232]/60 pt-1">{edu.period}</p>
                      <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#a8a29e] flex items-center gap-1">
                        <MapPin size={10} /> {edu.location}
                      </p>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-8 space-y-3">
                      <p className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-[#801232]/60">
                        {edu.institution}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1c1917] tracking-tight leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="font-sans text-sm text-[#57534e] leading-relaxed max-w-lg">
                        {edu.note}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
