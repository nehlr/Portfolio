import React from 'react';

export default function MarqueeRibbon({
  text = "Microsoft AI Innovate · RAG Architecture · OpenCV Vision · IEEE SIU 2026 · La Salle BCN · Full-Stack React · Nehir Karameşe · "
}) {
  const repeated = text.repeat(3);
  return (
    <div className="marquee-ribbon" aria-hidden="true">
      <span className="marquee-content">{repeated}</span>
    </div>
  );
}
