import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Search,
  CornerDownLeft,
  X,
  Bot,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  Award,
  Cpu,
  Mail,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { scrapbookData } from '../data/scrapbookData';

const SUGGESTED_QUERIES = [
  { label: 'Current Studies & Thesis', query: 'Where is Nehir studying and what is her focus?' },
  { label: 'Background & Location', query: 'Tell me about Nehir\'s background, age, and where she lives' },
  { label: 'IEEE SIU 2026 Research', query: 'Tell me about Nehir\'s IEEE SIU 2026 research paper' },
  { label: 'RAG & AI Tech Stack', query: 'What technologies and frameworks does Nehir specialize in?' },
  { label: 'Work Experience', query: 'Summarize Nehir\'s engineering work experience' },
  { label: 'Leadership & Run Club', query: 'What community or leadership activities does Nehir do?' },
  { label: 'Contact & Collaboration', query: 'How can I contact Nehir for engineering opportunities?' },
];

/**
 * Intelligent Knowledge Matching Engine (Simulated Local RAG)
 */
function queryKnowledgeBase(input) {
  const q = input.toLowerCase().trim();

  // 1. Strict GPA / Grades Privacy Protection
  if (q.includes('gpa') || q.includes('grade') || q.includes('cgpa') || q.includes('score') || q.includes('transcript') || q.includes('mark')) {
    return {
      text: "Nehir holds a B.S. in Computer Engineering from Işık University, and is currently pursuing her M.S. in Artificial Intelligence at La Salle BCN. Her academic and professional standing is characterized by co-authored peer-reviewed research presented at IEEE SIU conferences",
      sources: ['Işık University (B.S.)', 'IEEE SIU Research'],
      action: { label: 'Explore Academic Journey', targetId: 'academic' },
    };
  }

  // 2. Age, Birthplace, and Background
  if (q.includes('age') || q.includes('old') || q.includes('born') || q.includes('birth') || q.includes('2004') || q.includes('birthday')) {
    return {
      text: "Nehir is 22 years old, born in Istanbul, Turkey in 2004. She completed her Computer Engineering studies in Istanbul and is now living in Barcelona, Spain, pursuing her Master's in Artificial Intelligence.",
      sources: ['Age: 22 (Born 2004)', 'Istanbul, Turkey', 'Barcelona, Spain'],
      action: { label: 'View Profile Overview', targetId: 'hero' },
    };
  }

  // 3. Location & Living Details
  if (q.includes('location') || q.includes('live') || q.includes('living') || q.includes('where is nehir') || q.includes('located') || q.includes('sarria') || q.includes('sant-gervasi') || q.includes('gervasi') || q.includes('city') || q.includes('neighborhood') || q.includes('from')) {
    return {
      text: "Nehir is currently living in the Sarrià - Sant Gervasi district of Barcelona, Spain, while pursuing her Master of Science in Artificial Intelligence at La Salle Campus Barcelona (Universitat Ramon Llull). She was born and raised in Istanbul, Turkey.",
      sources: ['Sarrià - Sant Gervasi', 'Barcelona, Spain', 'Born in Istanbul, Turkey (2004)'],
      action: { label: 'View Academic Roadmap', targetId: 'academic' },
    };
  }

  // 4. Navigation & Projects
  if (q.includes('project') || q.includes('work') || q.includes('publication')) {
    return {
      text: "Nehir has developed peer-reviewed IEEE research, NASA Space Apps telemetry visualization pipelines, and full-stack software applications. Her flagship publications include the 34th IEEE SIU 2026 conference paper on predictive enrollment quota modeling and the 33rd IEEE SIU 2025 presentation.",
      sources: ['Projects & Publications', 'IEEE SIU 2026', 'NASA Space Apps'],
      action: { label: 'Jump to Projects & Publications', targetId: 'projects' },
    };
  }

  // 5. IEEE Research
  if (q.includes('ieee') || q.includes('paper') || q.includes('siu') || q.includes('research') || q.includes('quota') || q.includes('catboost') || q.includes('hurdle') || q.includes('optuna') || q.includes('shap') || q.includes('enrollment')) {
    return {
      text: "Nehir has co-authored a research paper focused on predictive modeling for higher education enrollment quotas. To address the statistical challenge of zero-inflated datasets, the study introduces an optimized two-stage Hurdle architecture utilizing CatBoost and Optuna. By isolating the probability of a quota shift from its exact magnitude, the pipeline significantly outperforms standard baselines. Furthermore, the research leverages SHAP values for advanced data visualization, translating complex predictive models into clear, auditable insights for strategic institutional planning.",
      sources: ['IEEE SIU 2026', 'CatBoost · Optuna', 'Two-Stage Hurdle Model', 'SHAP Explainability'],
      link: { label: 'Open in IEEE Xplore', url: 'https://ieeexplore.ieee.org/document/11636655' },
      action: { label: 'View in Publications', targetId: 'projects' },
    };
  }

  // 6. Studies & University (No GPA mentioned)
  if (q.includes('study') || q.includes('master') || q.includes('degree') || q.includes('education') || q.includes('university') || q.includes('la salle') || q.includes('barcelona') || q.includes('isik')) {
    return {
      text: "Nehir is currently living in Sarrià - Sant Gervasi, Barcelona, pursuing her Master of Science in Artificial Intelligence at La Salle Campus Barcelona (Universitat Ramon Llull). She earned her B.S. in Computer Engineering from Işık University in Istanbul with a 40% Merit Scholarship.",
      sources: ['La Salle BCN · URL', 'Sarrià - Sant Gervasi, Barcelona', 'Işık University (B.S. Computer Engineering)'],
      action: { label: 'View Academic Roadmap', targetId: 'academic' },
    };
  }

  // 7. Tech Stack
  if (q.includes('stack') || q.includes('tech') || q.includes('python') || q.includes('skill') || q.includes('framework') || q.includes('language') || q.includes('tools') || q.includes('frontend') || q.includes('backend') || q.includes('database') || q.includes('devops')) {
    return {
      text: `Nehir's core technical stack:

• Languages & Databases: Python, Java, SQL, PostGIS
• Frontend: React.js, Tailwind CSS, Mapbox GL JS
• Backend & DevOps: FastAPI, Docker
• AI & Design: Machine Learning, Computer Vision, Figma`,
      sources: ['Python · Java · SQL', 'React.js · Tailwind · Mapbox', 'FastAPI · Docker', 'ML · OpenCV · Figma'],
      action: { label: 'Explore Career Highlights', targetId: 'experience' },
    };
  }

  // 8. Work Experience
  if (q.includes('experience') || q.includes('job') || q.includes('career') || q.includes('intern') || q.includes('role') || q.includes('microsoft') || q.includes('eryaz') || q.includes('3dtim') || q.includes('adalab')) {
    return {
      text: `Here is a summary of Nehir's work and research experience:

• Intern, Microsoft (June 2026 to September 2026): Completed the summer internship program at Microsoft.

• Student Assistant, Corporate Communications at Işık Üniversitesi (July 2024 to August 2026): Managed student recruitment operations and corporate communications during her undergraduate studies, completing the role upon graduation.

• Student Research Assistant, ADALab (September 2025 to June 2026): Conducted academic research and coauthored a paper accepted for the SIU 2026 Signal Processing and Communications Applications Congress.

• Software Engineering Intern, Eryaz Software (August 2025 to September 2025): Executed front end development and designed UI/UX mockups using Figma.

• Avionics Team Leader, Işık University Space Club (October 2024 to May 2025): Directed flight computer systems development for a rocket project and competed in the NASA Space Apps Challenge.

• Software Engineering Intern, 3DTim Elektronik (August 2024 to September 2024): Engineered computer vision algorithms for automated industrial conveyor systems.`,
      sources: ['Microsoft', 'Işık Üniversitesi', 'ADALab (SIU 2026)', 'Eryaz Software', 'Işık Space Club', '3DTim Elektronik'],
      action: { label: 'Jump to Career Highlights', targetId: 'experience' },
    };
  }

  // 9. Leadership & Community
  if (q.includes('run') || q.includes('club') || q.includes('lead') || q.includes('hobbies') || q.includes('community') || q.includes('sport')) {
    return {
      text: "Beyond software engineering, Nehir served as the Işık Run Club Leader from January 2026 to September 2026, organizing weekly group training sessions and endurance community runs for over 150 students and alumni in Istanbul.",
      sources: ['Işık Run Club Leadership', 'Student Ambassador (2024-2026)'],
      action: { label: 'See in Projects', targetId: 'projects' },
    };
  }

  // 10. Contact & Opportunities
  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin') || q.includes('collaborate')) {
    return {
      text: "Nehir is open to full-stack engineering roles, RAG/AI development, and research collaborations based in Barcelona, Spain and internationally. You can reach her directly at nehirkaramese@gmail.com or via LinkedIn.",
      sources: ['Sarrià - Sant Gervasi, Barcelona', 'nehirkaramese@gmail.com'],
      link: { label: 'LinkedIn Profile', url: 'https://linkedin.com/in/nehir-karamese' },
      action: { label: 'Go to Contact Form', targetId: 'contact' },
    };
  }

  // Default fallback response
  return {
    text: `Nehir Karameşe is an AI Master's Student at La Salle BCN, living in Sarrià - Sant Gervasi, Barcelona.`,
    action: { label: 'Explore Portfolio Overview', targetId: 'hero' },
  };
}

/**
 * AskNehirAIModal Component
 */
export default function AskNehirAIModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hello! I'm Nehir's AI Portfolio Assistant. Ask me anything about her background!",
      sources: ['La Salle BCN', 'IEEE SIU 2026', 'System Architecture'],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const inputRef = useRef(null);
  const chatBottomRef = useRef(null);

  // Focus input on open & handle ESC key
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamedText, isTyping]);

  const handleAsk = (userQuery) => {
    const textToAsk = userQuery || query;
    if (!textToAsk.trim() || isTyping) return;

    const userMessage = { role: 'user', text: textToAsk };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);
    setStreamedText('');

    const answer = queryKnowledgeBase(textToAsk);

    // Simulate RAG typewriter streaming
    let index = 0;
    const fullText = answer.text;
    const interval = setInterval(() => {
      index += Math.floor(Math.random() * 3) + 2;
      if (index >= fullText.length) {
        clearInterval(interval);
        setStreamedText('');
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: fullText,
            sources: answer.sources,
            link: answer.link,
            action: answer.action,
          },
        ]);
        setIsTyping(false);
      } else {
        setStreamedText(fullText.slice(0, index));
      }
    }, 18);
  };

  const handleActionClick = (targetId) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'assistant',
        text: "Conversation reset! Ask me anything about Nehir's research, RAG engineering, master's studies at La Salle BCN, or IEEE papers.",
        sources: ['La Salle BCN', 'IEEE SIU 2026', 'System Architecture'],
      },
    ]);
    setStreamedText('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000]">
      {/* ── Soft Backdrop (dimmed left side, click to close) ── */}
      <div
        className="fixed inset-0 bg-[#1c1917]/25 backdrop-blur-[1.5px] transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Right-Side Slide-Over Panel ── */}
      <aside
        className="fixed top-0 right-0 bottom-0 w-full sm:w-[430px] md:w-[460px] h-full bg-[#faf8f5]/98 backdrop-blur-2xl border-l border-[#fae5eb] shadow-[-16px_0_48px_rgba(128,18,50,0.15)] flex flex-col z-[10001] animate-in slide-in-from-right duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Ask Nehir AI Side Panel"
      >
        {/* ── 1. Top Panel Header ── */}
        <div className="p-4 sm:p-5 border-b border-[#fae5eb] bg-white/90 backdrop-blur-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[#801232] flex items-center justify-center text-white shadow-xs">
                <Bot size={17} />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-[#1c1917] flex items-center gap-1.5 leading-none">
                <span>Ask Nehir AI</span>
                <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#fdf0f4] text-[#801232] border border-[#fae5eb] font-normal">
                  RAG
                </span>
              </h3>
              <p className="font-sans text-[11px] text-[#78716c] mt-1 leading-none">
                Interactive Research & Portfolio Assistant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClear}
              title="Reset conversation"
              className="p-2 rounded-lg text-[#a8a29e] hover:text-[#801232] hover:bg-[#fae5eb]/60 transition-colors cursor-pointer"
            >
              <RefreshCw size={15} />
            </button>
            <button
              onClick={onClose}
              title="Close panel"
              className="p-2 rounded-lg text-[#a8a29e] hover:text-[#801232] hover:bg-[#fae5eb]/60 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── 2. Suggested Prompt Chips ── */}
        <div className="px-4 py-2.5 bg-[#faf8f5] border-b border-[#fae5eb] overflow-x-auto flex items-center gap-1.5 no-scrollbar shrink-0">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#a8a29e] shrink-0 flex items-center gap-1">
            <Zap size={10} className="text-[#801232]" /> Prompts:
          </span>
          {SUGGESTED_QUERIES.map((s, i) => (
            <button
              key={i}
              onClick={() => handleAsk(s.query)}
              disabled={isTyping}
              className="text-[11px] font-sans font-medium whitespace-nowrap px-2.5 py-1 rounded-full bg-white text-[#801232] hover:bg-[#fdf0f4] border border-[#fae5eb] shadow-2xs transition-all shrink-0 cursor-pointer disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* ── 3. Scrollable Chat Messages Body ── */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-grow font-sans text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 rounded-full bg-[#fdf0f4] border border-[#fae5eb] flex items-center justify-center text-[#801232] shrink-0 mt-1">
                  <Sparkles size={12} />
                </div>
              )}

              <div
                className={`max-w-[88%] rounded-2xl p-3.5 sm:p-4 text-[13px] sm:text-sm ${msg.role === 'user'
                  ? 'bg-[#801232] text-white rounded-br-xs shadow-xs'
                  : 'bg-white text-[#1c1917] border border-[#fae5eb] rounded-bl-xs shadow-2xs'
                  }`}
              >
                <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>

                {/* Citations & Target Jump Links */}
                {msg.role === 'assistant' && (msg.sources || msg.action || msg.link) && (
                  <div className="mt-3 pt-2.5 border-t border-[#fae5eb] flex flex-wrap items-center gap-1.5">
                    {msg.sources?.map((src, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[8.5px] uppercase tracking-wider bg-[#faf8f5] px-1.5 py-0.5 rounded text-[#801232]/80 border border-[#fae5eb]"
                      >
                        ✦ {src}
                      </span>
                    ))}

                    {msg.action && (
                      <button
                        onClick={() => handleActionClick(msg.action.targetId)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#801232] hover:underline ml-auto cursor-pointer"
                      >
                        {msg.action.label} <ArrowRight size={11} />
                      </button>
                    )}

                    {msg.link && (
                      <a
                        href={msg.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#801232] hover:underline ml-auto"
                      >
                        {msg.link.label} <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typewriter Stream Chunk */}
          {isTyping && streamedText && (
            <div className="flex gap-2.5 justify-start">
              <div className="w-6 h-6 rounded-full bg-[#fdf0f4] border border-[#fae5eb] flex items-center justify-center text-[#801232] shrink-0 mt-1">
                <Sparkles size={12} className="animate-spin" />
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-bl-xs p-3.5 bg-white text-[#1c1917] border border-[#fae5eb] text-[13px] sm:text-sm shadow-2xs">
                <p className="leading-relaxed">
                  {streamedText}
                  <span className="inline-block w-1.5 h-3.5 bg-[#801232] ml-1 animate-pulse" />
                </p>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* ── 4. Fixed Bottom Input Bar ── */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#fae5eb] shrink-0">
          <div className="flex items-center gap-2 bg-[#faf8f5] border border-[#fae5eb] rounded-xl px-3 py-2 focus-within:border-[#801232] focus-within:bg-white transition-all shadow-inner-xs">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Ask about thesis, papers, stack..."
              className="w-full bg-transparent font-sans text-xs sm:text-sm text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none"
            />

            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-[#a8a29e] hover:text-[#801232] p-0.5"
              >
                <X size={13} />
              </button>
            )}

            <button
              onClick={() => handleAsk()}
              disabled={!query.trim() || isTyping}
              className="px-2.5 py-1.5 bg-[#801232] text-white rounded-lg text-xs font-semibold hover:bg-[#660d26] transition-colors disabled:opacity-40 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Ask</span>
              <CornerDownLeft size={11} />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2 text-[10px] font-mono text-[#a8a29e] px-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Simulated Local RAG</span>
            </span>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-[#faf8f5] border border-[#fae5eb] rounded text-[9px]">ESC</kbd>
              <span>close</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

/**
 * Floating Command Palette Trigger Pill
 */
export function CommandPaletteTrigger({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Ask Nehir AI Command Palette"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-[#fae5eb] rounded-full shadow-[0_8px_24px_rgba(128,18,50,0.12)] hover:shadow-[0_12px_32px_rgba(128,18,50,0.2)] text-[#801232] transition-all duration-300 hover:scale-105 group cursor-pointer"
    >
      <div className="w-6 h-6 rounded-full bg-[#801232] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
        <Sparkles size={12} />
      </div>
      <div className="text-left font-sans">
        <p className="text-xs font-semibold leading-none text-[#1c1917] flex items-center gap-1.5">
          <span>Ask Nehir AI</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 font-mono text-[9px] bg-[#fdf0f4] text-[#801232] rounded border border-[#fae5eb]">
            ⌘K
          </kbd>
        </p>
      </div>
    </button>
  );
}
