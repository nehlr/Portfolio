import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Sparkles, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

/**
 * MagicBentoCard Component
 * Individual card with Border Glow, Spotlight, 3D Tilt, Magnetism, Particle Stars, and Click Ripple.
 */
function BentoCard({
  item,
  index,
  colSpan = 'col-span-1',
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 12,
  glowColor = '128, 18, 50',
  disableAnimations = false,
  onClick,
}) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [ripples, setRipples] = useState([]);

  // Mouse move handler for Spotlight, Border Glow, Tilt, and Magnetism
  const handleMouseMove = useCallback((e) => {
    if (disableAnimations || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y, isHovered: true });

    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // 3D Tilt & Magnetism via GSAP
    if (enableTilt || enableMagnetism) {
      gsap.to(cardRef.current, {
        rotateY: enableTilt ? normalizedX * 10 : 0,
        rotateX: enableTilt ? -normalizedY * 10 : 0,
        x: enableMagnetism ? normalizedX * 8 : 0,
        y: enableMagnetism ? normalizedY * 8 : 0,
        transformPerspective: 1000,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }, [disableAnimations, enableTilt, enableMagnetism]);

  // Mouse leave handler: smooth reset
  const handleMouseLeave = useCallback(() => {
    setMousePos(prev => ({ ...prev, isHovered: false }));
    if (disableAnimations || !cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [disableAnimations]);

  // Particle Stars Generation on Hover
  useEffect(() => {
    if (disableAnimations || !enableStars || !mousePos.isHovered || !particlesContainerRef.current) return;

    const container = particlesContainerRef.current;
    container.innerHTML = '';

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute pointer-events-none rounded-full';

      const size = Math.random() * 4 + 2;
      const startX = mousePos.x + (Math.random() - 0.5) * 60;
      const startY = mousePos.y + (Math.random() - 0.5) * 60;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.backgroundColor = `rgba(${glowColor}, ${Math.random() * 0.7 + 0.3})`;
      particle.style.boxShadow = `0 0 8px rgba(${glowColor}, 0.8)`;
      particle.style.zIndex = '30';

      container.appendChild(particle);
      particles.push(particle);

      // Animate with GSAP
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 80,
        y: -Math.random() * 70 - 20,
        opacity: 0,
        scale: 0.2,
        duration: Math.random() * 1.2 + 0.8,
        ease: 'power2.out',
        onComplete: () => {
          if (particle.parentNode === container) {
            container.removeChild(particle);
          }
        },
      });
    }
  }, [mousePos.isHovered, disableAnimations, enableStars, particleCount, glowColor, mousePos.x, mousePos.y]);

  // Click Ripple Effect
  const handleClick = (e) => {
    if (clickEffect && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const rippleId = Date.now() + Math.random();

      setRipples(prev => [...prev, { id: rippleId, x: clickX, y: clickY }]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== rippleId));
      }, 700);
    }

    if (onClick) {
      onClick(item);
    }
  };

  const isWide = colSpan.includes('col-span-2');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative rounded-2xl cursor-pointer p-[1px] transition-shadow duration-300 h-full flex flex-col',
        'shadow-[0_4px_20px_rgba(128,18,50,0.06)] hover:shadow-[0_20px_45px_rgba(128,18,50,0.14)]',
        colSpan
      )}
    >
      {/* ── 1. Reactive Border Glow ── */}
      {enableBorderGlow && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: mousePos.isHovered ? 1 : 0.25,
            background: mousePos.isHovered
              ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.85) 0%, rgba(${glowColor}, 0.2) 40%, transparent 70%)`
              : `linear-gradient(135deg, rgba(${glowColor}, 0.25) 0%, rgba(250, 229, 235, 0.4) 100%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* ── 2. Card Content Body (Always Vertical Layout: Photo on Top, Content Below) ── */}
      <div
        ref={contentRef}
        className="relative w-full h-full bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col border border-[#fae5eb]/80 group-hover:border-transparent transition-colors"
      >
        {/* Spotlight Overlay */}
        {enableSpotlight && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{
              opacity: mousePos.isHovered ? 1 : 0,
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.12) 0%, transparent 60%)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Particle Stars Container */}
        <div ref={particlesContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-20" />

        {/* Click Ripples */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute pointer-events-none rounded-full animate-ping z-30"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '120px',
              height: '120px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: `rgba(${glowColor}, 0.25)`,
              boxShadow: `0 0 24px rgba(${glowColor}, 0.4)`,
            }}
          />
        ))}

        {/* ── Card Image Header (Always on Top, Horizontal) ── */}
        <div
          className={cn(
            'w-full overflow-hidden relative bg-[#fae5eb] flex-shrink-0',
            isWide
              ? 'aspect-[16/9] sm:aspect-[21/9]'
              : 'aspect-[16/10]'
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Badges on Image */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            <span className="font-mono text-[10px] bg-white/95 backdrop-blur-md text-[#801232] px-2.5 py-0.5 rounded-full font-bold tracking-wider shadow-xs border border-[#fae5eb]">
              {item.year}
            </span>
          </div>

          {item.paperUrl && (
            <div className="absolute top-3 right-3 z-10">
              <span className="font-sans text-[10px] bg-[#801232] text-white px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                <Sparkles size={10} /> IEEE Paper
              </span>
            </div>
          )}

          {/* Bottom subtle gradient over image */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        </div>

        {/* ── Card Text Body ── */}
        <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow z-10">
          <div>
            {/* Eyebrow / Location */}
            <div className="flex items-center gap-1.5 text-[#a8a29e] mb-2 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
              <MapPin size={11} className="text-[#801232]/70 shrink-0" />
              <span>{item.location}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1c1917] group-hover:text-[#801232] transition-colors leading-snug mb-3">
              {item.title}
            </h3>

            {/* Description with optional textAutoHide (line-clamp-2) */}
            <p
              className={cn(
                'font-sans text-[13px] text-[#57534e] leading-relaxed mb-4',
                textAutoHide && 'line-clamp-2'
              )}
            >
              {item.description}
            </p>
          </div>

          {/* Footer: Tags & CTA */}
          <div className="pt-4 border-t border-[rgba(128,18,50,0.08)] flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 max-w-[70%]">
              {item.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] font-medium bg-[#fdf0f4] text-[#801232] px-2 py-0.5 rounded-full border border-[#fae5eb]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#801232] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
              Details <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * MagicBento Grid Component
 * Renders an interactive bento grid of project items with reactive border glow,
 * particle stars, spotlight, 3D tilt, and ripple click effects.
 */
export default function MagicBento({
  items = [],
  onItemClick,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 12,
  glowColor = '128, 18, 50', // Maroon / Burgundy matching Nehir's editorial theme
  disableAnimations = false,
  uniformColumns = false,
  className = '',
}) {
  // Bento Layout Pattern:
  // Item 0: wide (2 cols), Item 1: normal (1 col), Item 2: normal (1 col)
  // Item 3: normal (1 col), Item 4: normal (1 col), Item 5: wide (2 cols)
  // Item 6: normal or wide, Item 7: normal or wide
  const getColSpan = (idx) => {
    if (uniformColumns) return 'col-span-1';
    if (idx === 0) return 'col-span-1 sm:col-span-2 lg:col-span-2';
    if (idx === 5) return 'col-span-1 sm:col-span-2 lg:col-span-2';
    if (idx === 6) return 'col-span-1 sm:col-span-2 lg:col-span-2';
    return 'col-span-1';
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch',
        className
      )}
    >
      {items.map((item, idx) => (
        <BentoCard
          key={item.id || idx}
          item={item}
          index={idx}
          colSpan={getColSpan(idx)}
          textAutoHide={textAutoHide}
          enableStars={enableStars}
          enableSpotlight={enableSpotlight}
          enableBorderGlow={enableBorderGlow}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
          particleCount={particleCount}
          glowColor={glowColor}
          disableAnimations={disableAnimations}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}
