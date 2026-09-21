import React, { useState } from 'react';
import { Sparkles, ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'ai', label: 'AI & Data Tools' },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} className="inline-icon" /> Featured Works
          </span>
          <h2 className="section-title">Portfolio & Projects</h2>
          <p className="section-subtitle">
            Highlighting web applications, cloud dashboards, and open-source tools engineered with precision and style.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`project-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header & Category Accent */}
              <div className="project-card-header">
                <span
                  className="project-category-tag"
                  style={{ backgroundColor: `${project.accentColor}18`, color: project.accentColor }}
                >
                  {project.category.toUpperCase()}
                </span>

                <div className="project-stars">
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <span>{project.stars}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Highlights List */}
              <ul className="project-quick-highlights">
                {project.highlights.slice(0, 2).map((item, i) => (
                  <li key={i}>✨ {item}</li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="project-tags-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Actions */}
              <div className="project-card-actions">
                <button
                  className="btn-pastel-primary project-demo-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Inspect & Demo <ArrowUpRight size={16} />
                </button>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    title="Visit Live Site"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
