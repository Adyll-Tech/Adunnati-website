import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="container about-container">
        {/* Left Column: Narrative Content */}
        <div className="about-content">
          <div className="eyebrow about-eyebrow">
            <span>A LITTLE ABOUT US</span>
           
          </div>

          <h2 className="about-heading">
            Good businesses deserve <br className="about-heading-br" />good digital thinking
          </h2>

          <div className="about-narrative">
            <p className="about-subheading">
              Adunnati is a digital growth partner working across strategy,
              digital experiences and performance marketing.
            </p>
            <p className="about-subheading">
              We bring together the elements that shape how a business shows
              up online, attracts customers and turns attention into action.
            </p>
            <p className="about-subheading">
              Our approach is straightforward: understand the business,
              find the right opportunities and do the work with care.
            </p>
          </div>

          {/* <div className="about-actions">
            <a href="#contact" className="about-cta-btn">
              <span>Get To Know Us</span>
              <span className="about-cta-arrow" aria-hidden="true">↗</span>
            </a>
          </div> */}
        </div>

        {/* Right Architectural 3D Scene - Immersive & Seamless */}
        <div className="about-stage-scene" aria-hidden="true">
          <img
            src="/assets/about-stage-pristine.png?v=20261024"
            alt="Adunnati — Good Businesses Deserve Good Digital Thinking"
            className="about-stage-img"
            loading="lazy"
            width="998"
            height="1152"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
