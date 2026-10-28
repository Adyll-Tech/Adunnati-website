import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from './icons/ArrowUpRight';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();

    // Reliable smooth scrolling across all mobile browsers
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      window.location.hash = targetId;
    }
  };

  return (
    <header className={`site-header${isMenuOpen ? ' menu-open' : ''}`}>
      <a href="#home" className="logo" aria-label="Adunnati — Build · Market · Grow" onClick={(e) => handleNavClick(e, 'home')}>
        <img
          src="/assets/adunnati-mark.png"
          alt="Adunnati Mark"
          className="logo-mark"
        />
        <div className="logo-text-group">
          <span className="logo-brand-name">ADUNNATI</span>
          <span className="logo-tagline">BUILD · MARKET · GROW</span>
        </div>
      </a>

      {/* Desktop Navigation (Visible on Desktop only) */}
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#services">EXPERTISE</a>
        <a href="#work">WORK</a>
        <a href="#about-us">ABOUT</a>
        <a href="#lets-talk">CONTACT</a>
      </nav>

      {/* Mobile Menu Toggle (Three Lines at top right corner on mobile only) */}
      <button
        className={`mobile-menu-toggle${isMenuOpen ? ' open' : ''}`}
        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        type="button"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Mobile Dark Theme Backdrop */}
      <div
        className={`mobile-drawer-backdrop${isMenuOpen ? ' active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Dark Theme Sidebar Drawer */}
      <aside
        className={`mobile-drawer-sidebar${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <img
              src="/assets/adunnati-mark-white.png"
              alt="Adunnati Mark"
              className="drawer-logo-mark"
            />
            <div className="drawer-logo-text-group">
              <span className="drawer-brand-name">ADUNNATI</span>
              <span className="drawer-tagline">BUILD · MARKET · GROW</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-nav-container">
          <span className="drawer-nav-label">EXPLORE</span>
          <nav className="drawer-nav-list">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="drawer-nav-item">
              <span className="drawer-nav-num">01</span>
              <span className="drawer-nav-title">EXPERTISE</span>
              <span className="drawer-nav-arrow">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </a>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="drawer-nav-item">
              <span className="drawer-nav-num">02</span>
              <span className="drawer-nav-title">WORK</span>
              <span className="drawer-nav-arrow">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </a>
            <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className="drawer-nav-item">
              <span className="drawer-nav-num">03</span>
              <span className="drawer-nav-title">ABOUT</span>
              <span className="drawer-nav-arrow">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </a>
            <a href="#lets-talk" onClick={(e) => handleNavClick(e, 'lets-talk')} className="drawer-nav-item">
              <span className="drawer-nav-num">04</span>
              <span className="drawer-nav-title">CONTACT</span>
              <span className="drawer-nav-arrow">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </a>
          </nav>
        </div>

        <div className="drawer-footer">
          <a
            href="#lets-talk"
            className="drawer-cta-btn"
            onClick={(e) => handleNavClick(e, 'lets-talk')}
          >
            <span>Discuss Your Goals</span>
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
          {/* <div className="drawer-contact-info">
            <span className="drawer-contact-badge">GET IN TOUCH</span>
            <a href="mailto:hello@adunnati.com" className="drawer-contact-link">
              hello@adunnati.com
            </a>
          </div> */}
        </div>
      </aside>
    </header>
  );
};
