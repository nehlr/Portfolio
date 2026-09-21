import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ExperienceSection.css';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('work');

  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} className="inline-icon" /> Career Journey
          </span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            A timeline of software engineering roles, impactful deliverables, and academic foundation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="experience-tabs">
          <button
            className={`exp-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <Briefcase size={16} /> Work History ({experiences.length})
          </button>
          <button
            className={`exp-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={16} /> Education ({education.length})
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          {activeTab === 'work' ? (
            experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="role-title">{exp.role}</h3>
                      <h4 className="company-name">{exp.company}</h4>
                    </div>
                    <div className="timeline-meta">
                      <span className="meta-badge">
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span className="meta-badge">
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="role-desc">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="achievements-box">
                    <span className="achieve-title">Impact Highlights:</span>
                    <ul className="achieve-list">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="achieve-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="timeline-tech-pills">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="glass-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="role-title">{edu.degree}</h3>
                      <h4 className="company-name">{edu.institution}</h4>
                    </div>
                    <div className="timeline-meta">
                      <span className="meta-badge">
                        <Calendar size={13} /> {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="role-desc">{edu.details}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
