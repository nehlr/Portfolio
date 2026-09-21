import React, { useEffect, useRef, useState, useMemo } from 'react';

/**
 * TextPressure
 * 
 * A pressure-sensitive typography component using Variable Fonts (wght, wdth, ital).
 * As the cursor approaches each character, its weight, width, and italic angle
 * dynamically react based on Euclidean proximity, animated at 60fps via requestAnimationFrame.
 *
 * @param {string} text - Text to display
 * @param {string} fontFamily - Variable font family name (default: 'Roboto Flex')
 * @param {string} fontUrl - Web font URL to inject dynamically
 * @param {number} minWeight - Base weight when cursor is far (default: 100)
 * @param {number} maxWeight - Peak weight when cursor is directly over (default: 900)
 * @param {number} minWidth - Base width percentage/value (default: 50)
 * @param {number} maxWidth - Peak width percentage/value (default: 125)
 * @param {number} minItalic - Base italic axis value (default: 0)
 * @param {number} maxItalic - Peak italic axis value (default: 1)
 * @param {number} maxDistance - Influence radius in pixels (default: 200)
 * @param {boolean} trackGlobal - Track mouse globally over window (default: true)
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles for the container
 * @param {string} textColor - Color of the text
 * @param {boolean} stroke - Render text with outline/stroke
 * @param {string} strokeColor - Outline color if stroke is true
 */
export default function TextPressure({
  text = 'Text Pressure',
  fontFamily = 'Roboto Flex',
  fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,wdth,wght@0,25..151,100..1000;1,25..151,100..1000&display=swap',
  minWeight = 100,
  maxWeight = 900,
  minWidth = 50,
  maxWidth = 125,
  minItalic = 0,
  maxItalic = 1,
  maxDistance = 200,
  trackGlobal = true,
  className = '',
  style = {},
  textColor = 'currentColor',
  stroke = false,
  strokeColor = '#801232',
  as: Tag = 'span',
}) {
  const containerRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafIdRef = useRef(null);
  const isUpdatingRef = useRef(false);

  // Inject Google Variable Font dynamically via a dedicated style tag
  useEffect(() => {
    if (!fontUrl) return;
    const styleId = `text-pressure-font-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;
    
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = `@import url('${fontUrl}');`;
      document.head.appendChild(styleEl);
    }
  }, [fontUrl, fontFamily]);

  // Split text into words and chars so whitespace & word-wrapping work properly
  const words = useMemo(() => {
    return text.split(' ').map((word) => word.split(''));
  }, [text]);

  // Re-index character span references
  spansRef.current = [];
  const setSpanRef = (el) => {
    if (el && !spansRef.current.includes(el)) {
      spansRef.current.push(el);
    }
  };

  // Reset all characters to base values
  const resetChars = () => {
    spansRef.current.forEach((span) => {
      if (span) {
        span.style.fontVariationSettings = `'wght' ${minWeight}, 'wdth' ${minWidth}, 'ital' ${minItalic}`;
      }
    });
  };

  useEffect(() => {
    // Set initial font variation state on all characters
    resetChars();

    const updatePressure = () => {
      if (!mouseRef.current.active) {
        resetChars();
        isUpdatingRef.current = false;
        return;
      }

      const { x: mouseX, y: mouseY } = mouseRef.current;

      spansRef.current.forEach((span) => {
        if (!span) return;

        const rect = span.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        // Euclidean distance between cursor and character center
        const dx = mouseX - charCenterX;
        const dy = mouseY - charCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          // Normalized proximity: 1 at center, 0 at outer boundary
          const proximity = 1 - distance / maxDistance;
          // Smooth power curve for a satisfying tactile sensation
          const pressure = Math.pow(proximity, 1.25);

          const wght = minWeight + (maxWeight - minWeight) * pressure;
          const wdth = minWidth + (maxWidth - minWidth) * pressure;
          const ital = minItalic + (maxItalic - minItalic) * pressure;

          span.style.fontVariationSettings = `'wght' ${Math.round(wght)}, 'wdth' ${Math.round(wdth)}, 'ital' ${ital.toFixed(2)}`;
        } else {
          span.style.fontVariationSettings = `'wght' ${minWeight}, 'wdth' ${minWidth}, 'ital' ${minItalic}`;
        }
      });

      isUpdatingRef.current = false;
    };

    const requestUpdate = () => {
      if (!isUpdatingRef.current) {
        isUpdatingRef.current = true;
        rafIdRef.current = requestAnimationFrame(updatePressure);
      }
    };

    // Mouse handlers
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
      requestUpdate();
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      requestUpdate();
    };

    if (trackGlobal) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    } else {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousemove', handleMouseMove, { passive: true });
        container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      }
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (trackGlobal) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseLeave);
      } else {
        const container = containerRef.current;
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        }
      }
    };
  }, [
    minWeight,
    maxWeight,
    minWidth,
    maxWidth,
    minItalic,
    maxItalic,
    maxDistance,
    trackGlobal,
    words,
  ]);

  return (
    <Tag
      ref={containerRef}
      className={`text-pressure-container select-none ${className}`}
      style={{
        fontFamily: `"${fontFamily}", sans-serif`,
        color: textColor,
        display: 'inline-flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        gap: '0.28em',
        WebkitTextStroke: stroke ? `1px ${strokeColor}` : undefined,
        ...style,
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          style={{
            display: 'inline-flex',
            whiteSpace: 'nowrap',
          }}
        >
          {word.map((char, charIndex) => (
            <span
              key={`char-${wordIndex}-${charIndex}`}
              ref={setSpanRef}
              style={{
                display: 'inline-block',
                transformOrigin: 'center center',
                willChange: 'font-variation-settings',
                transition: 'font-variation-settings 0.08s ease-out',
                fontVariationSettings: `'wght' ${minWeight}, 'wdth' ${minWidth}, 'ital' ${minItalic}`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
