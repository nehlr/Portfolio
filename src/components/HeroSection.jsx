import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Copy, Check, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './HeroSection.css';

export default function HeroSection() {
  const [copiedCode, setCopiedCode] = useState(false);
  const { personal } = portfolioData;

  const codeSnippet = `const developer = {
  name: "${personal.name}",
  role: "${personal.role}",
  location: "${personal.location}",
  status: "${personal.status}",
  stack: ["React", "TypeScript", "Node.js", "Cloud"],
  passions: ["Clean Code", "UX Aesthetics", "Scalable Systems"],
  hireable: true
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        {/* Left Column - Intro & Call To Actions */}
        <div className="hero-content">
          {/* Status Chip */}
          <div className="hero-status-pill glass-pill">
            <span className="status-dot pulsing"></span>
            <span>{personal.status}</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>
          <h2 className="hero-subtitle text-gradient-soft">
            {personal.role}
          </h2>

          <p className="hero-description">
            {personal.tagline}
          </p>

          {/* Stats Bar */}
          <div className="hero-stats-grid">
            <div className="stat-card glass-card">
              <span className="stat-number">{personal.yearsOfExperience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">{personal.projectsCompleted}+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">{personal.codeCommitsThisYear}</span>
              <span className="stat-label">Commits This Year</span>
            </div>
          </div>

          {/* CTA Button Group */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-pastel-primary">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-pastel-secondary">
              Contact Me <Mail size={18} />
            </a>
            <a
              href={personal.resumeUrl}
              className="btn-pastel-secondary icon-only-btn"
              title="Download Resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered! You can customize this link in portfolioData.js.");
              }}
            >
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="social-label">Connect with me:</span>
            <a href={personal.github} target="_blank" rel="noreferrer" className="social-icon-btn">
              <Github size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="social-icon-btn">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column - Interactive Code Card */}
        <div className="hero-code-wrapper">
          <div className="hero-code-card glass-card">
            {/* Header / Window Controls */}
            <div className="code-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-title">
                <Code2 size={14} className="code-icon" /> developer.ts
              </div>
              <button
                className="code-copy-btn"
                onClick={handleCopyCode}
                title="Copy Code"
              >
                {copiedCode ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Code Body */}
            <div className="code-body">
              <pre className="code-block">
                <code>
                  <span className="kwd">const</span> <span className="var">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="prop">name</span>: <span className="str">"{personal.name}"</span>,<br />
                  &nbsp;&nbsp;<span className="prop">role</span>: <span className="str">"{personal.role}"</span>,<br />
                  &nbsp;&nbsp;<span className="prop">location</span>: <span className="str">"{personal.location}"</span>,<br />
                  &nbsp;&nbsp;<span className="prop">status</span>: <span className="str">"Open for hire"</span>,<br />
                  &nbsp;&nbsp;<span className="prop">stack</span>: [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>, <span className="str">"Node"</span>, <span className="str">"Cloud"</span>],<br />
                  &nbsp;&nbsp;<span className="prop">passions</span>: [<span className="str">"Clean Architecture"</span>, <span className="str">"Aesthetics"</span>],<br />
                  &nbsp;&nbsp;<span className="prop">available</span>: <span className="bool">true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Floating Decorative Badges */}
            <div className="floating-badge badge-1 glass-card">
              <Sparkles size={16} className="sparkle-pink" />
              <span>Pixel Perfect UX</span>
            </div>
            <div className="floating-badge badge-2 glass-card">
              <Terminal size={16} className="terminal-pink" />
              <span>Clean Code Advocate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
