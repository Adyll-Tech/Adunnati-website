import React from 'react';
import { ArrowUpRight } from './icons/ArrowUpRight';

export const LetsTalk: React.FC = () => {
  return (
    <section className="talk-section" id="lets-talk" aria-label="Let's Talk — Tell Us Where You Want To Go">
      <div className="container talk-container">
        <div className="talk-card">
          {/* Subtle Ambient Atmosphere Glow */}
          <div className="talk-ambient-glow" aria-hidden="true" />

          {/* Narrative Column */}
          <div className="talk-content">
            <div className="talk-eyebrow">
              <span className="talk-eyebrow-text">LET'S TALK</span>
              <span className="talk-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="talk-heading">
              Tell Us Where 
              You Want To Go
            </h2>

            <p className="talk-narrative talk-subheading">
              Whether you're building your digital presence, looking to bring in more
              customers or trying to get more from your marketing, let's start with a
              conversation about your business.
            </p>

            <div className="talk-actions">
              <a href="#contact" className="talk-cta-btn" id="talk-start-conversation-btn">
                <span>Start A Conversation</span>
                <ArrowUpRight size={15} strokeWidth={2.4} className="talk-cta-arrow" />
              </a>
            </div>
          </div>

          {/* Dedicated Architectural 3D Scene Stage (for Mobile & Tablet View) */}
          <div className="talk-stage-visual" aria-hidden="true">
            <img
              src="/assets/talk-scene-stage@2x.webp"
              alt="Adunnati — Products to Possibilities"
              className="talk-stage-img"
              loading="lazy"
              width="1116"
              height="840"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
