import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', icon: Sparkles },
    { label: 'Features', href: '#features', icon: BookOpen },
    { label: 'App UI', href: '#showcase', icon: Smartphone },
    { label: 'Download', href: '#download', icon: Download },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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

            {/* Desktop Navigation Links (4 Most Important Items) */}
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

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                className="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-800" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu rendered directly via createPortal into document.body */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div 
            className="mobile-nav-panel" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-nav-header">
              <div className="mobile-brand-row">
                <img
                  src={LAUNCH_CONFIG.logoUrl}
                  alt="Logo"
                  className="mobile-brand-logo"
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.0625rem', color: '#0d254c', lineHeight: 1.1 }}>GOFAMINT</div>
                  <div style={{ fontSize: '0.75rem', color: '#b91c1c', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Sunday School</div>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* 4 Main Mobile Navigation Rows */}
            <div className="mobile-links-container">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.href}
                    type="button"
                    className="mobile-link-row"
                    onClick={() => handleLinkClick(link.href)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div className="mobile-link-icon-box">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="mobile-link-text">{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}
            </div>

            <div className="mobile-nav-footer">
              <button
                type="button"
                className={`mobile-cta-btn ${!isLaunched ? 'locked' : 'unlocked'}`}
                onClick={() => handleLinkClick('#download')}
              >
                {!isLaunched ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Launch Countdown Active</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download The App</span>
                  </>
                )}
              </button>

              <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                <a 
                  href={LAUNCH_CONFIG.whatsappDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-whatsapp-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Need assistance? Reach us on WhatsApp →
                </a>
              </div>

              <p className="mobile-footer-text">
                The Gospel Faith Mission International
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
