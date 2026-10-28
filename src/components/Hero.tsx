import React from 'react';
import { ArrowUpRight } from './icons/ArrowUpRight';

export const Hero: React.FC = () => {
  return (
    <section className="hero-content-stage">
      {/* Left Column Text (50% Width on desktop, responsive on mobile) */}
      <div className="hero-copy">
        <div className="eyebrow">
          DIGITAL STRATEGY <i>·</i> MARKETING <i>·</i> GROWTH
        </div>
        <h1 className="hero-headline">
          Make Your Next Stage of Growth Count
        </h1>
        <p className="hero-subheading">
          We help ambitious businesses build a stronger digital presence, acquire customers and turn marketing investment into meaningful business results.
        </p>
        <div className="hero-actions">
          <a href="#lets-talk" className="dark-button hero-button">
            <span>Discuss Your Goals</span>
            <ArrowUpRight size={15} strokeWidth={2.4} className="hero-btn-arrow" />
          </a>
        </div>
      </div>

      {/* Right Visual 3D Stage with Authentic Laptop resting on Stone and Flanked Metric Cards */}
      <div className="hero-visual-3d" aria-label="Premium digital brand presentation">
        <div className="hero-3d-ambient-glow" aria-hidden="true"></div>
        <div className="hero-plinth-shadow" aria-hidden="true"></div>
        <div className="hero-stage-artwork-wrapper">
          <img
            src="/assets/hero-stage-hd.png"
            alt="Adunnati digital showcase - laptop with SŌVRA cosmetic brand mockup resting on chiseled stone plinth with ROAS and Sales performance metrics"
            className="hero-stage-artwork-img"
          />
        </div>
      </div>
    </section>
  );
};
