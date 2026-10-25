import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" id="contact" aria-label="Adunnati Site Footer">
      {/* Volumetric Atmosphere & Ground Reflections Container */}
      <div className="footer-backdrop-layer" aria-hidden="true">
        <img
          src="/assets/footer-backdrop@2x.webp"
          alt=""
          className="footer-backdrop-img"
          loading="lazy"
          width="2048"
          height="1152"
        />
        <div className="footer-ambient-vignette" />
      </div>

      <div className="container footer-container">
        {/* Top Gold Divider Line */}
        <div className="footer-top-rule" aria-hidden="true" />

        {/* Brand Header: Logo & Copyright */}
        <div className="footer-brand-header">
          <a href="#home" className="footer-logo" aria-label="Adunnati — Build · Market · Grow">
            <img
              src="/assets/adunnati-mark-white.png"
              alt="Adunnati Mark"
              className="footer-logo-mark"
              width="44"
              height="44"
            />
            <div className="footer-logo-text-group">
              <span className="footer-brand-name">ADUNNATI</span>
              <span className="footer-tagline">BUILD · MARKET · GROW</span>
            </div>
          </a>
          <p className="footer-copyright">
            © {CURRENT_YEAR} Adunnati. All rights reserved.
          </p>
        </div>

        {/* 4 Navigation Columns Grid */}
        <div className="footer-nav-grid">
          {/* Column 1: Company Navigation */}
          <div className="footer-col footer-col-company">
            <ul className="footer-links-list">
              <li><a href="#about-us">About</a></li>
              <li><a href="#services">Expertise</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#lets-talk">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 2: Creative & Digital Experience Services */}
          <div className="footer-col footer-col-creative">
            <ul className="footer-links-list">
              <li><a href="#services">Websites</a></li>
              <li><a href="#services">Landing Pages</a></li>
              <li><a href="#services">Shopify Stores</a></li>
              <li><a href="#services">Social Media Management</a></li>
              <li><a href="#services">Branding</a></li>
              <li><a href="#services">Static Ads</a></li>
              <li><a href="#services">Video Ads</a></li>
              <li><a href="#services">Reels & Short Videos</a></li>
              <li><a href="#services">E-commerce Photoshoots</a></li>
              <li><a href="#services">Product Photography</a></li>
            </ul>
          </div>

          {/* Column 3: Growth & Performance Marketing Services */}
          <div className="footer-col footer-col-marketing">
            <ul className="footer-links-list">
              <li><a href="#services">Meta Ads</a></li>
              <li><a href="#services">Google Ads</a></li>
              <li><a href="#services">Lead Generation</a></li>
              <li><a href="#services">E-commerce Sales</a></li>
              <li><a href="#services">Influencer Ads</a></li>
              <li><a href="#services">Ad Account Audits</a></li>
              <li><a href="#services">Conversion optimisation</a></li>
              <li><a href="#services">ROAS Improvement</a></li>
              <li><a href="#services">Digital Expansion</a></li>
            </ul>
          </div>

          {/* Column 4: Social Channels */}
          <div className="footer-col footer-col-socials">
            <ul className="footer-social-list">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Contact Adunnati on WhatsApp"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <span className="footer-social-label">WhatsApp</span>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Adunnati on Facebook"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  <span className="footer-social-label">Facebook</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Adunnati on Instagram"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span className="footer-social-label">Instagram</span>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Adunnati on LinkedIn"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  <span className="footer-social-label">LinkedIn</span>
                </a>
              </li>

              {/* YouTube */}
              <li>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Adunnati on YouTube"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#11100e" />
                    </svg>
                  </span>
                  <span className="footer-social-label">YouTube</span>
                </a>
              </li>

              {/* X */}
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Adunnati on X"
                >
                  <span className="footer-social-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                  <span className="footer-social-label">X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
