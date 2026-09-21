import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Move } from 'lucide-react';

/**
 * EditorialCursor Component
 * 
 * A bespoke magnetic cursor with contextual glassmorphic badges,
 * smooth lerp physics, and interactive hover states tailored
 * for Nehir's editorial aesthetic.
 */
export default function EditorialCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const magneticPos = useRef({ active: false, x: 0, y: 0 });
  const isClicking = useRef(false);
  const isVisible = useRef(false);
  const [badgeState, setBadgeState] = useState({
    active: false,
    text: '',
    icon: null,
    variant: 'default', // 'default' | 'badge' | 'button' | 'text' | 'hidden'
  });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to avoid showing custom cursor on mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check contextual hover target
      const target = e.target;
      if (!target) return;

      // 1. Explicit data-cursor attribute
      const customCursorEl = target.closest('[data-cursor]');
      if (customCursorEl) {
        const cursorText = customCursorEl.getAttribute('data-cursor');
        setBadgeState({
          active: true,
          text: cursorText,
          icon: 'arrow',
          variant: 'badge',
        });
        return;
      }

      // 2. Project card / MagicBento
      const projectCard = target.closest('.card-minimal, .group[class*="rounded-2xl"]');
      if (projectCard && target.closest('#projects')) {
        setBadgeState({
          active: true,
          text: 'EXPLORE',
          icon: 'arrow',
          variant: 'badge',
        });
        return;
      }

      // 3. Hero cutout image
      if (target.closest('img[alt*="Nehir"]')) {
        setBadgeState({
          active: true,
          text: '3D TILT',
          icon: 'sparkle',
          variant: 'badge',
        });
        return;
      }

      // 4. Ribbon Lab
      if (target.closest('#ribbon-lab')) {
        const isInteractiveControl = target.closest('button');
        if (!isInteractiveControl) {
          setBadgeState({
            active: true,
            text: 'WEAVE',
            icon: 'sparkle',
            variant: 'badge',
          });
          return;
        }
      }

      // 5. Academic Timeline Synaptic Area
      if (target.closest('#academic canvas')) {
        setBadgeState({
          active: true,
          text: 'STIMULATE',
          icon: 'sparkle',
          variant: 'badge',
        });
        return;
      }

      // 6. IEEE Paper links
      const ieeeLink = target.closest('a[href*="ieeexplore"]');
      if (ieeeLink) {
        setBadgeState({
          active: true,
          text: 'IEEE XPLORE',
          icon: 'external',
          variant: 'badge',
        });
        return;
      }

      // 7. Buttons, Links, Clickable elements
      const interactiveEl = target.closest('a, button, [role="button"], input[type="submit"]');
      if (interactiveEl) {
        // Optional magnetic snapping to center
        const rect = interactiveEl.getBoundingClientRect();
        if (rect.width < 180 && rect.height < 90) {
          magneticPos.current = {
            active: true,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };
        } else {
          magneticPos.current.active = false;
        }

        setBadgeState({
          active: false,
          text: '',
          icon: null,
          variant: 'button',
        });
        return;
      }

      // 8. Text inputs
      if (target.closest('input, textarea')) {
        magneticPos.current.active = false;
        setBadgeState({
          active: false,
          text: '',
          icon: null,
          variant: 'text',
        });
        return;
      }

      // Reset to default
      magneticPos.current.active = false;
      setBadgeState({
        active: false,
        text: '',
        icon: null,
        variant: 'default',
      });
    };

    const onMouseDown = () => {
      isClicking.current = true;
    };

    const onMouseUp = () => {
      isClicking.current = false;
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // 60 FPS RAF loop for smooth lerp lag
    let frameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      frameId = requestAnimationFrame(render);

      const targetX = magneticPos.current.active ? magneticPos.current.x : mousePos.current.x;
      const targetY = magneticPos.current.active ? magneticPos.current.y : mousePos.current.y;

      // Inner dot follows mouse immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Outer ring follows with fluid lerp physics
      ringPos.current.x = lerp(ringPos.current.x, targetX, 0.22);
      ringPos.current.y = lerp(ringPos.current.y, targetY, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
    };

    render();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* ── 1. Sharp Inner Micro-Dot ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[999999] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            badgeState.variant === 'text'
              ? 'w-1 h-5 bg-[#801232] rounded-sm shadow-[0_0_6px_rgba(128,18,50,0.5)]'
              : badgeState.variant === 'badge'
              ? 'w-0 h-0 opacity-0'
              : 'w-2.5 h-2.5 bg-[#801232] shadow-[0_0_8px_rgba(128,18,50,0.6)]'
          }`}
        />
      </div>

      {/* ── 2. Fluid Outer Ring / Morphing Badge Pill ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[999998] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      >
        {badgeState.variant === 'badge' ? (
          // Contextual Glass Badge Pill
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#801232]/90 backdrop-blur-md text-white border border-[#f472b6]/40 rounded-full shadow-[0_8px_24px_rgba(128,18,50,0.35)] animate-in fade-in zoom-in-90 duration-200"
            style={{
              transform: isClicking.current ? 'scale(0.92)' : 'scale(1)',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {badgeState.icon === 'sparkle' && <Sparkles size={11} className="text-[#fce7ef] animate-pulse" />}
            {badgeState.icon === 'external' && <ExternalLink size={10} className="text-[#fce7ef]" />}
            <span className="font-mono text-[10px] uppercase font-bold tracking-[0.16em] text-white">
              {badgeState.text}
            </span>
            {badgeState.icon === 'arrow' && <ArrowUpRight size={12} className="text-[#fce7ef]" />}
          </div>
        ) : badgeState.variant === 'button' ? (
          // Scaled Magnetic Ring on interactive elements
          <div
            className="w-12 h-12 rounded-full border-2 border-[#801232]/70 bg-[#801232]/5 transition-all duration-200 backdrop-blur-[1px]"
            style={{
              transform: isClicking.current ? 'scale(0.85)' : 'scale(1)',
            }}
          />
        ) : badgeState.variant === 'text' ? (
          // Hidden outer ring when typing
          <div className="w-0 h-0 opacity-0" />
        ) : (
          // Default Ethereal Ring
          <div
            className="w-8 h-8 rounded-full border border-[#801232]/35 bg-[#801232]/[0.03] transition-all duration-200"
            style={{
              transform: isClicking.current ? 'scale(0.75)' : 'scale(1)',
            }}
          />
        )}
      </div>
    </>
  );
}
