import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-intro services-intro">
          <div className="section-intro-left">
            <div className="eyebrow">OUR SERVICES</div>
            <h2>Four ways we move your business forward</h2>
            <p className="section-subheading">
              Strategy, creative and performance, brought together to help you attract the right audience and turn opportunities into lasting growth.
            </p>
          </div>
        </div>

        <div className="service-grid">
          {/* 01: Build your digital presence */}
          <a href="#contact" className="service-card service-one">
            <div className="service-shade"></div>
            <div className="service-text">
              <span className="service-number">01</span>
              <h3>Build your<br />digital presence.</h3>
              <p className="service-subtext">Give your business a presence worth remembering.</p>
              <ul className="service-bullets">
                <li>Websites</li>
                <li>Landing Pages</li>
                <li>Shopify Stores</li>
                <li>Social Media Management</li>
                <li>Branding</li>
              </ul>
            </div>
            {/* <span className="round-arrow" aria-hidden="true">→</span> */}
            <div className="service-visual-wrap" aria-hidden="true">
              <img
                src="/assets/service-card-scene-1.png"
                alt="SŌVRA Digital Presence Website Laptop"
                className="service-card-scene-img"
                loading="lazy"
              />
            </div>
          </a>

          {/* 02: Creative Production */}
          <a href="#contact" className="service-card service-two">
            <div className="service-shade"></div>
            <div className="service-text">
              <span className="service-number">02</span>
              <h3>Creative<br />Production.</h3>
              <p className="service-subtext">We create the right visuals and messaging, people notice.</p>
              <ul className="service-bullets">
                <li>Static Ads</li>
                <li>Video Ads</li>
                <li>Reels & Short Videos</li>
                <li>E-commerce Photoshoots</li>
                <li>Product Photography</li>
              </ul>
            </div>
            {/* <span className="round-arrow" aria-hidden="true">→</span> */}
            <div className="service-visual-wrap" aria-hidden="true">
              <img
                src="/assets/service-card-scene-2.png"
                alt="Creative Production Media"
                className="service-card-scene-img"
                loading="lazy"
              />
            </div>
          </a>

          {/* 03: Bring in customers */}
          <a href="#contact" className="service-card service-three">
            <div className="service-shade"></div>
            <div className="service-text">
              <span className="service-number">03</span>
              <h3>Bring in<br />customers.</h3>
              <p className="service-subtext">Reach the right people and turn interest into enquiries and sales.</p>
              <ul className="service-bullets">
                <li>Meta Ads</li>
                <li>Google Ads</li>
                <li>Lead Generation</li>
                <li>E-commerce Sales</li>
                <li>Influencer Ads</li>
              </ul>
            </div>
            {/* <span className="round-arrow" aria-hidden="true">→</span> */}
            <div className="service-visual-wrap" aria-hidden="true">
              <img
                src="/assets/service-card-scene-3.png"
                alt="Bring in Customers Campaign Mobile"
                className="service-card-scene-img"
                loading="lazy"
              />
            </div>
          </a>

          {/* 04: Improve your Growth */}
          <a href="#contact" className="service-card service-four">
            <div className="service-shade"></div>
            <div className="service-text">
              <span className="service-number">04</span>
              <h3>Improve your<br />Growth</h3>
              <p className="service-subtext">Understand what is working. Improve what isn’t.</p>
              <ul className="service-bullets">
                <li>Ad Account Audits</li>
                <li>Conversion optimisation</li>
                <li>ROAS Improvement</li>
                <li>Digital Expansion</li>
              </ul>
            </div>
            {/* <span className="round-arrow" aria-hidden="true">→</span> */}
            <div className="service-visual-wrap growth-visual-wrap" aria-hidden="true">
              <img
                src="/assets/service-card-scene-4-rocks.png"
                alt=""
                className="growth-rock-base"
                loading="lazy"
              />
              <div className="growth-device">
                <div className="growth-header">
                  <span className="growth-tag">GROWTH ANALYTICS</span>
                  <span className="growth-dot">● ACTIVE</span>
                </div>
                <div className="growth-metric-block">
                  <div className="growth-metric-val">↑ 312%</div>
                  <div className="growth-metric-lbl">AVERAGE ROAS GAIN</div>
                </div>
                <div className="growth-bars">
                  <div className="growth-bar bar-1"></div>
                  <div className="growth-bar bar-2"></div>
                  <div className="growth-bar bar-3"></div>
                  <div className="growth-bar bar-4"></div>
                  <div className="growth-bar bar-5"></div>
                  <div className="growth-bar bar-6 highlight"></div>
                </div>
                <div className="growth-badge">
                  <span className="growth-kpi">+48% CONVERSION</span>
                  <span className="growth-period">LAST 90 DAYS</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
