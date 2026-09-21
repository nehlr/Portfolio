import React from 'react';
import { Calendar } from 'lucide-react';
import { scrapbookData } from '../data/scrapbookData';
import TextPressure from './TextPressure';

export default function WorkExperienceSection() {
  const { workExperience } = scrapbookData;

  return (
    <section id="experience" className="section-spacious bg-[#faf8f5]">
      <div className="site-container">

        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <p className="label-kicker mb-4">01 / Career Highlights</p>
          <h2 className="text-4xl sm:text-5xl md:text-[56px] text-[#801232] tracking-tight leading-tight max-w-xl">
            <TextPressure
              text="Career Journey"
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

        {/* 2-column card grid — spacious inverted maroon cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {workExperience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-sm p-8 sm:p-10 flex flex-col justify-between cursor-pointer
                         bg-[#7a1b38] text-white
                         shadow-[0_4px_24px_rgba(122,27,56,0.18)]
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_16px_48px_rgba(122,27,56,0.32)]"
            >
              <div>
                {/* Eyebrow: company name */}
                <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-pink-200 mb-3">
                  {exp.company}
                </p>

                {/* Role — focal point */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug mb-3">
                  {exp.role}
                </h3>

                {/* Period */}
                <div className="font-mono text-xs text-pink-200/70 mb-6 flex items-center gap-2">
                  <Calendar size={13} className="text-pink-300/80" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-[15px] text-pink-100/90 leading-relaxed">
                {exp.bullets.join(' ')}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
