import React from 'react';

export default function BoutiqueFAQSection() {
  const faqs = [
    {
      q: "WHAT ARE YOUR CORE RESEARCH & ENGINEERING SPECIALIZATIONS?",
      a: "I focus primarily on Retrieval-Augmented Generation (RAG) architectures with Microsoft Foundry Local, real-time Computer Vision via OpenCV pipelines, and scientific Signal Processing algorithms."
    },
    {
      q: "WHERE CAN I READ YOUR RECENT IEEE SCIENTIFIC PAPER?",
      a: "Our co-authored paper presented at the 34th IEEE SIU 2026 Congress is indexed on IEEE Xplore (Document #11636655). It demonstrates advanced signal processing and data visualization methodologies."
    },
    {
      q: "WHAT TECHNOLOGIES COMPRISE YOUR DAILY STACK?",
      a: "Python, PyTorch, OpenCV, LangChain, React, JavaScript (ES6+), C# MVC architectures, TailwindCSS, SQL/NoSQL databases, and Git version control."
    },
    {
      q: "ARE YOU CURRENTLY OPEN TO WORK OPPORTUNITIES?",
      a: "Yes. I am actively open to AI Engineering, Computer Vision, and Full-Stack Software roles or research collaborations in Barcelona, Spain and remote internationally."
    }
  ];

  return (
    <section className="py-20 bg-[#fdf0f4] border-b border-pink-200/80">
      <div className="site-container">
        
        {/* Large FAQ Heading Matching Reference */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#801232] tracking-wider uppercase">
            FAQ
          </h2>
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#8c3b52] block mt-1">
            Frequently Asked Questions & Technical Overview
          </span>
        </div>

        {/* 2-Column Grid with Thin Dividing Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b border-pink-200 pb-6 space-y-2">
              <h3 className="font-serif text-sm uppercase tracking-[0.14em] font-bold text-[#801232]">
                {item.q}
              </h3>
              <p className="font-sans text-sm text-[#660d26]/85 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
