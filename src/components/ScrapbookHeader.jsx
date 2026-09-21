import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sparkles } from 'lucide-react';

export default function ScrapbookHeader({ onOpenAiModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#academic' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[rgba(128,18,50,0.1)] shadow-sm'
          : 'bg-[#faf8f5]/90 backdrop-blur-sm border-b border-transparent'
        }`}
    >
      <div className="site-container flex items-center justify-between h-16">

        {/* Brand */}
        <a href="#hero" className="flex flex-col leading-none group">
          <span
            className="font-serif text-base sm:text-lg font-semibold tracking-[0.12em] uppercase text-[#801232] group-hover:text-[#660d26] transition-colors"
          >
            Nehir Karameşe
          </span>
          <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#801232]/50 mt-0.5">
            AI · Software Engineer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#57534e] hover:text-[#801232] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + Ask AI + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {onOpenAiModal && (
            <button
              onClick={onOpenAiModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf0f4] border border-[#fae5eb] text-[#801232] text-[10px] font-sans font-semibold hover:bg-[#fae5eb] hover:shadow-xs transition-all cursor-pointer"
            >
              <Sparkles size={11} />
              <span>Ask AI</span>
              <kbd className="hidden lg:inline-block font-mono text-[8px] bg-white text-[#801232]/80 px-1 rounded border border-[#fae5eb]">⌘K</kbd>
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary py-2 px-5 text-[10px]"
          >
            <Mail size={11} />
            Connect
          </a>

          <button
            className="md:hidden p-2 text-[#801232]"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 border-t border-[rgba(128,18,50,0.08)] px-6 py-6 space-y-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-sm uppercase tracking-[0.16em] font-medium text-[#57534e] hover:text-[#801232] transition-colors py-1"
            >
              {label}
            </a>
          ))}

          {onOpenAiModal && (
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenAiModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#fdf0f4] border border-[#fae5eb] text-[#801232] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Ask Nehir AI (⌘K)</span>
            </button>
          )}

          <a href="#contact" className="btn-primary w-full text-center text-[11px] mt-2">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
