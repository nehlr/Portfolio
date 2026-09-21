import React, { useState } from 'react';
import { 
  Search, Atom, Code2, Zap, FileCode, Palette, Layout, Database, 
  Server, Terminal, Layers, Network, Box, GitBranch, Cloud, Globe, CheckCircle2, Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './SkillsSection.css';

// Map icon names to actual Lucide component icons
const iconMap = {
  Atom, Code2, Zap, FileCode, Palette, Layout, Database,
  Server, Terminal, Layers, Network, Box, GitBranch, Cloud, Globe, CheckCircle2
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { skills, skillsCategories } = portfolioData;

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} className="inline-icon" /> Tech Ecosystem
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated stack of modern web tools, frameworks, and backend technologies I use to build fast, scalable applications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="skills-controls glass-card">
          {/* Category Tabs */}
          <div className="skills-tabs">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div key={skill.name} className="skill-card glass-card">
                  <div className="skill-card-top">
                    <div className="skill-icon-box">
                      <IconComponent size={22} className="skill-icon" />
                    </div>
                    {skill.popular && (
                      <span className="popular-badge">Core Tech</span>
                    )}
                  </div>

                  <h3 className="skill-name">{skill.name}</h3>

                  {/* Level Progress Bar */}
                  <div className="skill-progress-wrapper">
                    <div className="skill-progress-info">
                      <span className="proficiency-text">Proficiency</span>
                      <span className="percentage-text">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-results glass-card">
              <p>No technologies found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
