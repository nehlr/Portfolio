import React, { useEffect, useRef, useState } from 'react';
import { Activity, Sparkles, Sliders } from 'lucide-react';

/**
 * SynapticSignalCanvas
 * 
 * An interactive canvas combining a biological Synaptic Neural Graph
 * with real-time Mathematical Harmonic Signal Processing waveforms.
 * Celebrates AI Neural Networks and IEEE SIU Signal Processing research.
 */
export default function SynapticSignalCanvas({
  nodeCount = 55,
  connectionDistance = 140,
  glowColor = '128, 18, 50', // Maroon / Burgundy
  accentColor = '244, 63, 94', // Radiant Rose
  showWaveform = true,
  interactive = true,
  opacity = 0.75,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, isHovered: false, clickPulse: 0 });
  const isVisibleRef = useRef(true);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // IntersectionObserver to pause rendering when scrolled out of view (high performance)
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    // Initialize Neural Nodes
    const colors = [
      `rgba(${glowColor}, 0.85)`,
      `rgba(${accentColor}, 0.85)`,
      'rgba(190, 24, 93, 0.85)',
      'rgba(251, 113, 133, 0.85)',
    ];

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 2.2 + 1.8,
      baseRadius: Math.random() * 2.2 + 1.8,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.015,
      color: colors[Math.floor(Math.random() * colors.length)],
      energy: 0,
    }));

    // Action potential signal packets traveling across synapses
    const signals = [];

    // Mouse events
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      mouseRef.current.clickPulse = 1.0;

      // Stimulate nearby nodes with neural energy burst
      nodes.forEach((node) => {
        const dx = node.x - clickX;
        const dy = node.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          node.energy = Math.min(1.0, node.energy + (1 - dist / 220));
          // Spawn action potential signal packets towards connected nodes
          signals.push({
            fromX: clickX,
            fromY: clickY,
            toX: node.x,
            toY: node.y,
            progress: 0,
            speed: 0.05,
            color: `rgba(${accentColor}, 0.9)`,
          });
        }
      });
      setPulseCount(p => p + 1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);

    let animationFrameId;
    let time = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // ── 1. Harmonic Signal Processing Waveform (IEEE SIU Spectral Layer) ──
      if (showWaveform) {
        ctx.save();
        const baseWaveY = height * 0.78;
        const waveLength = width;

        // Subtle background frequency grid lines
        ctx.strokeStyle = `rgba(${glowColor}, 0.04)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        for (let y = baseWaveY - 40; y <= baseWaveY + 40; y += 20) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // Multi-frequency harmonic wave (Fourier synthesis)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${accentColor}, 0.22)`;
        ctx.lineWidth = 1.6;

        for (let x = 0; x <= width; x += 3) {
          const freq1 = Math.sin(x * 0.008 + time * 1.2) * 16;
          const freq2 = Math.cos(x * 0.018 - time * 0.8) * 8;
          const freq3 = Math.sin(x * 0.035 + time * 2.0) * 4;
          
          // Cursor resonance: wave amplitude elevates near cursor
          let cursorResonance = 0;
          if (mouseRef.current.isHovered) {
            const distToCursorX = Math.abs(x - mouseRef.current.x);
            if (distToCursorX < 180) {
              cursorResonance = Math.cos((distToCursorX / 180) * (Math.PI / 2)) * 14;
            }
          }

          const y = baseWaveY + freq1 + freq2 + freq3 + cursorResonance;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Second out-of-phase wave (phase quadrature)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${glowColor}, 0.14)`;
        ctx.lineWidth = 1.2;
        for (let x = 0; x <= width; x += 4) {
          const freqA = Math.cos(x * 0.006 - time * 0.9) * 12;
          const freqB = Math.sin(x * 0.02 + time * 1.5) * 6;
          const y = baseWaveY + freqA + freqB;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      // ── 2. Neural Nodes Movement & Pulse ──
      nodes.forEach((node) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries with damping
        if (node.x < 10) { node.x = 10; node.vx *= -1; }
        if (node.x > width - 10) { node.x = width - 10; node.vx *= -1; }
        if (node.y < 10) { node.y = 10; node.vy *= -1; }
        if (node.y > height - 10) { node.y = height - 10; node.vy *= -1; }

        // Natural synaptic pulse (action potential rhythm)
        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        node.radius = node.baseRadius + pulse * 1.2 + node.energy * 2.5;

        // Decay energy over time
        if (node.energy > 0) {
          node.energy = Math.max(0, node.energy - 0.015);
        }

        // Cursor stimulus attraction / repulsion
        if (mouseRef.current.isHovered) {
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160 && dist > 1) {
            const force = (1 - dist / 160) * 0.25;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
            // Cap max speed
            const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
            if (speed > 2.5) {
              node.vx = (node.vx / speed) * 2.5;
              node.vy = (node.vy / speed) * 2.5;
            }
          }
        }
      });

      // ── 3. Synaptic Axon Connections (Edges) ──
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Connection to cursor
        if (mouseRef.current.isHovered) {
          const cdx = mouseRef.current.x - a.x;
          const cdy = mouseRef.current.y - a.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance * 1.2) {
            const alpha = (1 - cdist / (connectionDistance * 1.2)) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 4]);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Occasional spontaneous signal packet
            if (Math.random() < 0.02) {
              signals.push({
                fromX: a.x,
                fromY: a.y,
                toX: mouseRef.current.x,
                toY: mouseRef.current.y,
                progress: 0,
                speed: 0.04,
                color: `rgba(${accentColor}, 0.8)`,
              });
            }
          }
        }

        // Connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.28 * (1 + (a.energy + b.energy) * 0.8);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${glowColor}, ${alpha})`;
            ctx.lineWidth = 0.85 + (a.energy + b.energy) * 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // Random action potentials traveling down the synapse
            if (Math.random() < 0.002) {
              signals.push({
                fromX: a.x,
                fromY: a.y,
                toX: b.x,
                toY: b.y,
                progress: 0,
                speed: 0.03 + Math.random() * 0.03,
                color: `rgba(${accentColor}, 0.8)`,
              });
            }
          }
        }
      }

      // ── 4. Action Potential Signal Packets ──
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const currX = sig.fromX + (sig.toX - sig.fromX) * sig.progress;
        const currY = sig.fromY + (sig.toY - sig.fromY) * sig.progress;

        ctx.beginPath();
        ctx.fillStyle = sig.color;
        ctx.shadowColor = `rgba(${accentColor}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── 5. Render Neural Nodes (Soma) ──
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.fillStyle = node.color;
        
        if (node.energy > 0.3) {
          ctx.shadowColor = `rgba(${accentColor}, 0.9)`;
          ctx.shadowBlur = 10 * node.energy;
        }

        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Delicate outer halo for energized nodes
        if (node.energy > 0.1) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${accentColor}, ${node.energy * 0.6})`;
          ctx.lineWidth = 1;
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // ── 6. Active Cursor Electrode ──
      if (mouseRef.current.isHovered) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${accentColor}, 0.65)`;
        ctx.shadowColor = `rgba(${accentColor}, 0.9)`;
        ctx.shadowBlur = 12;
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Expanding stimulus ring
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${accentColor}, 0.35)`;
        ctx.lineWidth = 1;
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 14 + Math.sin(time * 3) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, [nodeCount, connectionDistance, glowColor, accentColor, showWaveform, opacity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ opacity, ...style }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
