import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, Lock, ChevronRight, 
  Sparkles, BookOpen, Smartphone, ShieldCheck, Heart 
} from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

interface NavbarProps {
  isLaunched: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLaunched }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'App UI', href: '#showcase' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-custom">
        <div className="nav-inner-wrapper">
          
          {/* Brand Identity with New 3D Emblem Logo */}
          <a href="#hero" className="brand-badge" aria-label="GOFAMINT Sunday School Home">
            <div className="brand-logo-container">
              <img
                src={LAUNCH_CONFIG.logoUrl}
                alt="GOFAMINT Sunday School 3D Logo"
                className="brand-badge-logo-3d"
              />
            </div>
            <div className="brand-titles">
              <div className="brand-top-row">
                <span className="brand-title-main">GOFAMINT</span>
                <span className="brand-tag-school">Sunday School</span>
              </div>
              <span className="brand-subtitle">Daily Devotion & Manual</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="desktop-nav-item">
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="nav-action-cluster">
            {/* Launch Status Indicator Pill */}
            <div className={`nav-status-indicator ${isLaunched ? 'status-live' : 'status-pending'}`}>
              <span className="status-indicator-dot"></span>
              <span className="status-indicator-label">
                {isLaunched ? 'Live Release' : 'Sept 13 Launch'}
              </span>
            </div>

            {/* Primary Action Button */}
            <a
              href="#download"
              className={`nav-cta-btn ${!isLaunched ? 'locked' : 'unlocked'}`}
              id="nav-download-button"
            >
              {!isLaunched ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-300" />
                  <span>Get Ready</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>Download App</span>
                </>
              )}
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <div className="mobile-brand-row">
                <img
                  src={LAUNCH_CONFIG.logoUrl}
                  alt="Logo"
                  className="mobile-brand-logo"
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0d254c' }}>GOFAMINT</div>
                  <div style={{ fontSize: '0.75rem', color: '#b91c1c', fontWeight: 700 }}>Sunday School</div>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mobile-links-container">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-link-row"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <a
                href="#download"
                className={`mobile-cta-btn ${!isLaunched ? 'locked' : 'unlocked'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {!isLaunched ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Launch Countdown Active</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download App Now</span>
                  </>
                )}
              </a>

              <p className="mobile-footer-text">
                The Gospel Faith Mission International
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
