import React, { useState, useEffect } from 'react';
import { MountainIcon, PineTreeIcon, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bespoke Rigs', href: '#bikes' },
    { label: 'Build Estimator', href: '#configurator' },
    { label: 'Garage Services', href: '#services' },
    { label: 'Craft & Heritage', href: '#workshop' },
    { label: 'Field Tests', href: '#journal' },
    { label: 'Workshop Location', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Workshop Status Banner */}
      <div className="status-bar">
        <div className="container status-inner">
          <div className="status-indicator">
            <span className="live-dot"></span>
            <span className="status-text">
              <strong>Bellingham Garage Open</strong> · Currently accepting 3 custom frame builds for Autumn / Winter season
            </span>
          </div>
          <div className="status-coords">
            <span>48.7519° N, 122.4787° W · Galbraith Foothills</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        <div className="container nav-content">
          {/* Brand Logo */}
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="logo-emblem">
              <MountainIcon size={22} className="mountain-svg" />
              <PineTreeIcon size={16} className="pine-svg" />
            </div>
            <div className="brand-text">
              <span className="brand-title">CASCADIA</span>
              <span className="brand-tagline">CUSTOM CYCLES · PACIFIC NW</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onOpenBooking}
            >
              Book Fit Session
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn btn-primary btn-sm mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
            >
              Book Fit Session
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(8, 15, 12, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(56, 178, 108, 0.12);
        }

        .navbar-wrapper.scrolled {
          background: rgba(7, 13, 10, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          border-bottom-color: rgba(56, 178, 108, 0.22);
        }

        .status-bar {
          background: rgba(14, 28, 22, 0.9);
          border-bottom: 1px solid rgba(56, 178, 108, 0.1);
          padding: 5px 0;
          font-size: 11.5px;
          color: var(--text-secondary);
        }

        .status-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-text strong {
          color: var(--green-bright);
        }

        .status-coords {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .status-coords {
            display: none;
          }
          .status-inner {
            justify-content: center;
            text-align: center;
          }
        }

        .main-nav {
          padding: 14px 0;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
        }

        .logo-emblem {
          position: relative;
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #183327 0%, #0d1e16 100%);
          border: 1px solid var(--border-medium);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .mountain-svg {
          color: var(--green-bright);
        }

        .pine-svg {
          position: absolute;
          bottom: 4px;
          right: 4px;
          color: var(--bronze);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .brand-tagline {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.16em;
          color: var(--green-bright);
          text-transform: uppercase;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-family: var(--font-display);
          font-size: 14.5px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--green-bright);
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .desktop-links {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-drawer {
          background: rgba(10, 20, 16, 0.98);
          border-bottom: 1px solid var(--border-medium);
          padding: 20px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 17px;
          color: var(--text-primary);
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid rgba(56, 178, 108, 0.1);
        }

        .mobile-cta {
          margin-top: 10px;
          width: 100%;
        }
      `}</style>
    </header>
  );
};
