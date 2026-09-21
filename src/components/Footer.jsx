import React from 'react';
import { Sparkles, ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#about" className="nav-logo">
              <span className="logo-badge">
                <Sparkles size={16} className="logo-sparkle" />
              </span>
              <span className="logo-text">
                Nehir<span className="logo-dot">.dev</span>
              </span>
            </a>
            <p className="footer-tagline">
              Crafted with precision, modern web technology, and an elegant pastel aesthetic.
            </p>
          </div>

          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#terminal">CLI</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personal.name}. All rights reserved. Built with React & Vite.
          </p>

          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
