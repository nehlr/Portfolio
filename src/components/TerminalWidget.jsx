import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, Trash2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './TerminalWidget.css';

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { command: 'welcome', response: '💡 Welcome to the Interactive Developer Terminal! Type "help" or click quick chips below to run commands.' }
  ]);

  const { terminalCommands } = portfolioData;

  const runCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = terminalCommands[trimmed];
    if (!output) {
      output = `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmdStr, response: output }]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'experience', 'contact', 'sudo hire', 'clear'];

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} className="inline-icon" /> CLI Environment
          </span>
          <h2 className="section-title">Interactive Terminal</h2>
          <p className="section-subtitle">
            Explore my credentials, tech stack, and background via an interactive terminal interface.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="terminal-box glass-card">
          {/* Top Bar */}
          <div className="terminal-top-bar">
            <div className="terminal-dots">
              <span className="tdot red"></span>
              <span className="tdot yellow"></span>
              <span className="tdot green"></span>
            </div>
            <div className="terminal-title">
              <TerminalIcon size={14} /> zsh — nehir@portfolio:~
            </div>
            <button
              onClick={() => runCommand('clear')}
              className="terminal-clear-btn"
              title="Clear Terminal Output"
            >
              <Trash2 size={14} />
            </button>
          </div>

          {/* Terminal Logs View */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className="terminal-log-entry">
                <div className="terminal-prompt">
                  <span className="prompt-user">nehir@portfolio</span>
                  <span className="prompt-path">:~$</span>
                  <span className="prompt-cmd">{item.command}</span>
                </div>
                <div className="terminal-response">{item.response}</div>
              </div>
            ))}

            {/* Input Line Form */}
            <form onSubmit={handleSubmit} className="terminal-input-line">
              <span className="prompt-user">nehir@portfolio</span>
              <span className="prompt-path">:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command..."
                className="cli-input"
              />
              <button type="submit" className="cli-submit-btn">
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Quick Command Chips */}
          <div className="quick-chips-bar">
            <span className="chips-label">Quick Commands:</span>
            <div className="chips-list">
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className={`chip-btn ${cmd === 'sudo hire' ? 'chip-highlight' : ''}`}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
