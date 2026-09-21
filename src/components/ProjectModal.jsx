import React, { useState } from 'react';
import { X, ExternalLink, Star, Sparkles, Check, RefreshCw, Send } from 'lucide-react';
import { Github } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiPrompt, setAiPrompt] = useState('Write a React custom hook for data fetching');
  const [aiResponse, setAiResponse] = useState('useDataFetch hook generated with sub-50ms caching!');
  const [cartCount, setCartCount] = useState(2);
  const [metricValue, setMetricValue] = useState(99.4);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-box">
            <span className="modal-badge" style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}>
              {project.category.toUpperCase()}
            </span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="modal-tabs">
          <button
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Highlights
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'interactive' ? 'active' : ''}`}
            onClick={() => setActiveTab('interactive')}
          >
            <Sparkles size={14} /> Interactive Live Demo Simulator
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          {activeTab === 'overview' ? (
            <div className="overview-content">
              <p className="modal-long-desc">{project.longDescription}</p>

              {/* Key Highlights */}
              <div className="highlights-box">
                <h4 className="highlights-title">Key Technical Achievements:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>
                      <Check size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="modal-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="glass-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="interactive-simulator-content">
              <div className="simulator-header">
                <span className="simulator-url">https://demo.portfolio.dev/{project.id}</span>
                <span className="status-badge">● LIVE INTERACTIVE SIMULATOR</span>
              </div>

              {/* Custom Interactive Views according to Demo Type */}
              {project.demoType === 'dashboard' && (
                <div className="dashboard-demo">
                  <div className="dash-metrics-grid">
                    <div className="dash-metric-card">
                      <span className="dash-label">System Health</span>
                      <span className="dash-val">{metricValue}%</span>
                      <button 
                        className="btn-dash-sim"
                        onClick={() => setMetricValue((prev) => (prev >= 99.9 ? 98.5 : prev + 0.3))}
                      >
                        <RefreshCw size={12} /> Refresh Signal
                      </button>
                    </div>
                    <div className="dash-metric-card">
                      <span className="dash-label">Active Users</span>
                      <span className="dash-val">12,480</span>
                      <span className="dash-trend">+14% this hour</span>
                    </div>
                  </div>
                </div>
              )}

              {project.demoType === 'editor' && (
                <div className="editor-demo">
                  <div className="editor-prompt-bar">
                    <input
                      type="text"
                      className="editor-input"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                    />
                    <button
                      className="btn-dash-sim"
                      onClick={() => setAiResponse(`Generated solution for "${aiPrompt}"`)}
                    >
                      <Send size={12} /> Run AI
                    </button>
                  </div>
                  <pre className="editor-code-box">
                    <code>// AuraAI Response Output:<br />{aiResponse}</code>
                  </pre>
                </div>
              )}

              {project.demoType === 'store' && (
                <div className="store-demo">
                  <div className="store-card">
                    <h4>Velvet Silk Rose Jacket</h4>
                    <p className="price">$149.00</p>
                    <div className="cart-sim-action">
                      <span>Items in Cart: <strong>{cartCount}</strong></span>
                      <button
                        className="btn-pastel-primary"
                        style={{ padding: '0.4rem 1rem', fontSize: '0.82rem' }}
                        onClick={() => setCartCount(cartCount + 1)}
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {project.demoType === 'kanban' && (
                <div className="kanban-demo">
                  <div className="kanban-cols">
                    <div className="k-col">
                      <h5>To Do (2)</h5>
                      <div className="k-card">Setup OAuth2 SSO</div>
                    </div>
                    <div className="k-col">
                      <h5>In Progress (1)</h5>
                      <div className="k-card active">Pastel Theme Redesign</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="stars-info">
            <Star size={16} fill="#F59E0B" color="#F59E0B" />
            <span>{project.stars} GitHub Stars</span>
          </div>

          <div className="modal-actions">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-pastel-secondary">
              <Github size={16} /> GitHub Repo
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-pastel-primary">
              <ExternalLink size={16} /> Live Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
