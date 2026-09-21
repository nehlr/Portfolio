import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, X } from 'lucide-react';
import { scrapbookData } from '../data/scrapbookData';
import TextPressure from './TextPressure';
import MagicBento from './MagicBento';

export default function EventsScrapbookSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { eventsAndProjects } = scrapbookData;

  return (
    <section id="projects" className="section-spacious bg-[#faf8f5]">
      <div className="site-container">

        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <p className="label-kicker mb-4">03 / Selected Works</p>
          <h2 className="text-4xl sm:text-5xl md:text-[56px] text-[#801232] tracking-tight leading-tight max-w-xl">
            <TextPressure
              text="Projects & Publications"
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
          <p className="font-sans text-base text-[#57534e] leading-relaxed max-w-lg mt-5">
            Peer-reviewed IEEE research, international hackathons, and modern software applications.
          </p>
        </div>

        {/* Interactive Magic Bento Grid */}
        <MagicBento
          items={eventsAndProjects}
          onItemClick={(item) => setSelectedEvent(item)}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          particleCount={12}
          glowColor="128, 18, 50"
        />

      </div>

      {/* ── Modal ── */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-[#1c1917]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#fdf0f4] hover:bg-[#fae5eb] text-[#801232] transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="aspect-[16/9] w-full bg-[#fae5eb] overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 sm:p-10">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a8a29e] mb-2">
                {selectedEvent.year} — {selectedEvent.location}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] mb-4 leading-snug">
                {selectedEvent.title}
              </h3>
              <p className="font-sans text-sm text-[#57534e] leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="bg-[#fdf0f4] rounded-sm p-5 mb-6">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.18em] font-semibold text-[#801232] mb-3">
                  Key Accomplishments
                </h4>
                <ul className="space-y-2.5">
                  {selectedEvent.highlights.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check size={13} className="text-[#801232] mt-1 shrink-0" />
                      <span className="font-sans text-sm text-[#57534e] leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-3">
                {selectedEvent.paperUrl ? (
                  <a
                    href={selectedEvent.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-1.5"
                  >
                    <ExternalLink size={12} /> Open IEEE Xplore
                  </a>
                ) : <div />}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="btn-outline text-xs py-2.5 px-5 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
