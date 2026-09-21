import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { scrapbookData } from '../data/scrapbookData';

export default function ScrapbookFooter() {
  const { profile } = scrapbookData;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { label: 'About',      href: '#hero'       },
    { label: 'Experience', href: '#experience' },
    { label: 'Education',  href: '#academic'   },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Contact',    href: '#contact'    },
  ];

  return (
    <footer className="bg-[#660d26] text-pink-100 py-20">
      <div className="site-container">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-14 border-b border-white/10">

          {/* Brand */}
          <div className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.18em] font-normal text-white block">
              Nehir Karameşe
            </span>
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-pink-300/70 block">
              AI Master's Student · Software Engineer
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 font-sans text-[10px] uppercase tracking-[0.2em] text-pink-200/70">
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/20 rounded-sm text-pink-200/70 hover:text-white hover:border-white/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/20 rounded-sm text-pink-200/70 hover:text-white hover:border-white/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-4 py-2 border border-white/20 rounded-sm text-[10px] font-sans uppercase tracking-[0.16em] text-pink-200/70 hover:text-white hover:border-white/50 transition-all cursor-pointer"
            >
              Top <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-[10px] text-pink-300/50">
          <p>© {new Date().getFullYear()} Nehir Karameşe. All rights reserved.</p>
          <p>La Salle Campus Barcelona · Universitat Ramon Llull</p>
        </div>

      </div>
    </footer>
  );
}
