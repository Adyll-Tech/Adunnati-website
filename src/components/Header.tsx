import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

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

      {/* Mobile Navigation Drawer / Dropdown */}
      <nav
        className={`mobile-nav-menu${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
          <span>EXPERTISE</span>
          <span className="nav-arrow">↗</span>
        </a>
        <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>
          <span>WORK</span>
          <span className="nav-arrow">↗</span>
        </a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
          <span>ABOUT</span>
          <span className="nav-arrow">↗</span>
        </a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          <span>CONTACT</span>
          <span className="nav-arrow">↗</span>
        </a>
      </nav>
    </header>
  );
};

