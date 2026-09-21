import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Menu, X, Copy, Check, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#about" className="nav-logo">
          <span className="logo-badge">
            <Sparkles size={16} className="logo-sparkle" />
          </span>
          <span className="logo-text">
            Nehir<span className="logo-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="copy-email-btn"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
            <span className="copy-text">{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="mobile-drawer glass-card">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-pastel-primary mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              <Send size={16} /> Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
