import React, { useState } from 'react';

const quotes = [
  {
    text: '“Adunnati completely transformed our online presence. From strategy to execution, everything was seamless and result-driven.”',
    name: 'Jessica Miller',
    role: 'Founder, SŌVRA',
  },
  {
    text: '“Their creative thinking and performance focus brought new energy to our brand and helped us reach the right customers.”',
    name: 'Alex Morgan',
    role: 'Marketing Lead, Lume',
  },
  {
    text: '“A thoughtful team that understands both brand storytelling and measurable business outcomes.”',
    name: 'Taylor Reed',
    role: 'Director, Kairo',
  },
];

export const Trust: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  const setQuote = (direction: number) => {
    setQuoteIndex((prev) => (prev + direction + quotes.length) % quotes.length);
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <section className="trust-section container">
      <div className="trust-copy">
        <h2>Trusted by ambitious<br />brands around the world.</h2>
        <p>We work with businesses across India, the UAE, the US and Australia to create meaningful growth through digital strategy, creative and performance marketing.</p>
        <div className="brand-strip">
          <span>SŌVRA</span>
          <span>Lume</span>
          <span>Kairo</span>
          <span>Vellora</span>
          <span>NEXUS</span>
        </div>
      </div>
      <div className="testimonial">
        <div className="quote-mark">“</div>
        <blockquote id="quote-text">{currentQuote.text}</blockquote>
        <div className="testimonial-bottom">
          <div className="avatar" aria-hidden="true"></div>
          <div className="quote-person">
            <strong id="quote-name">{currentQuote.name}</strong>
            <span id="quote-role">{currentQuote.role}</span>
          </div>
          <div className="quote-controls">
            <button id="prev-quote" aria-label="Previous testimonial" onClick={() => setQuote(-1)}>←</button>
            <button id="next-quote" aria-label="Next testimonial" onClick={() => setQuote(1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};
