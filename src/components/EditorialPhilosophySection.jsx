import React from 'react';
import { scrapbookData } from '../data/scrapbookData';

export default function EditorialPhilosophySection() {
  const { profile } = scrapbookData;

  return (
    <section
      id="philosophy"
      className="section-spacious bg-[#fdf0f4] text-center"
    >
      <div className="site-container-narrow">

        {/* Decorative divider */}
        <div className="divider-star mb-14 max-w-[10rem] mx-auto" aria-hidden="true">
          ✦
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-[#801232] tracking-tight mb-8 leading-[1.18]">
          An Engineering Philosophy
          <br />
          <em className="font-light text-[#660d26]">Rooted in Precision &amp; Craft</em>
        </h2>

        {/* Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl text-[#660d26] italic max-w-xl mx-auto mb-8 leading-relaxed">
          {profile.journalQuote}
        </blockquote>

        <div className="rule-thin max-w-[6rem] mx-auto mb-8" />

        {/* Body */}
        <p className="font-sans text-sm text-[#57534e] max-w-lg mx-auto leading-relaxed mb-12">
          At La Salle Campus Barcelona and through scientific congresses like IEEE SIU 2026,
          I build AI systems that elevate workflows — because true computational power
          begins with elegant architecture.
        </p>

        <a href="#projects" className="btn-primary">
          Explore Selected Projects
        </a>

      </div>
    </section>
  );
}
