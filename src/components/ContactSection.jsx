import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { personal } = portfolioData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Trigger confetti burst celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FB6F92', '#FFB3C6', '#E8998D', '#FFF0F5']
      });
    } catch (err) {
      console.log("Confetti trigger skipped:", err);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} className="inline-icon" /> Get In Touch
          </span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            Have a project in mind, a position to discuss, or just want to connect? Send a message below or email me directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            <div className="info-card glass-card">
              <div className="info-icon-box">
                <Mail size={22} />
              </div>
              <div className="info-text-content">
                <h4>Direct Email</h4>
                <p>{personal.email}</p>
                <button onClick={handleCopyEmail} className="copy-pill-btn">
                  {copiedEmail ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
                  <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-box">
                <MapPin size={22} />
              </div>
              <div className="info-text-content">
                <h4>Location</h4>
                <p>{personal.location}</p>
                <span className="location-pill">Remote & Hybrid Friendly</span>
              </div>
            </div>

            <div className="availability-card glass-card">
              <div className="availability-badge">
                <span className="pulsing-green-dot"></span>
                <span>Current Status</span>
              </div>
              <h4>{personal.status}</h4>
              <p>Typically responds within 24 hours.</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-column glass-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={44} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-pastel-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi Nehir, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-pastel-primary submit-btn">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
