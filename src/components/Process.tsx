import React from 'react';

export const Process: React.FC = () => {
  return (
    <section className="process-section" id="about">
      <div className="container process-layout">
        <div className="process-intro">
          <div className="eyebrow">HOW WE WORK</div>
          <h2>A clear process.<br />Built for results.</h2>
          <p>We keep things simple, transparent and focused on what matters: your business growth.</p>
          <a href="#contact" className="outline-button light-outline">Our Process <span>→</span></a>
        </div>
        <div className="process-steps">
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>
            </div>
            <span>01</span>
            <h3>Understand</h3>
            <p>We learn about your business, goals and challenges.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
            <span>02</span>
            <h3>Plan</h3>
            <p>We create a tailored strategy with clear deliverables.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <path d="m13 2-9 12h7l-1 8 10-13h-7l0-7z" />
              </svg>
            </div>
            <span>03</span>
            <h3>Execute</h3>
            <p>We bring the plan to life with precision and creativity.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="13" width="4" height="8" rx="1" />
                <rect x="10" y="8" width="4" height="13" rx="1" />
                <rect x="17" y="3" width="4" height="18" rx="1" />
              </svg>
            </div>
            <span>04</span>
            <h3>Grow</h3>
            <p>We measure, optimise and scale what works.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
