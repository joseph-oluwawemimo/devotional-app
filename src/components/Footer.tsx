import React from 'react';
import { Sparkles, BookOpen, Heart, Shield } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container-custom">
        
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img
                src={LAUNCH_CONFIG.logoUrl}
                alt="GOFAMINT Sunday School 3D Logo"
                style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(37,99,235,0.3))' }}
              />
              <span className="footer-brand-title">{LAUNCH_CONFIG.appName}</span>
            </div>
            <p className="footer-brand-tagline">
              <strong>{LAUNCH_CONFIG.heroTagline}.</strong> Official digital launch for daily devotions, quarterly lesson manuals, built-in scriptures, and Sunday school administration.
            </p>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '1rem' }}>
              Organization: {LAUNCH_CONFIG.organizationName}
            </div>
          </div>

          {/* Navigation Links Column 1 */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#vision" className="footer-link">Why This App</a></li>
              <li><a href="#features" className="footer-link">Features & Curriculum</a></li>
              <li><a href="#showcase" className="footer-link">App UI Showcase</a></li>
              <li><a href="#upcoming" className="footer-link">Coming Soon (Management)</a></li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div>
            <div className="footer-col-title">Resources & Connect</div>
            <ul className="footer-links-list">
              <li><a href="#download" className="footer-link">Download App</a></li>
              <li><a href="#creator" className="footer-link">The Creator</a></li>
              <li><a href="#support" className="footer-link">Support the Vision</a></li>
              <li><a href="#contact" className="footer-link">Contact & WhatsApp</a></li>
              <li><a href={`mailto:${LAUNCH_CONFIG.feedbackEmail}`} className="footer-link">Developer Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {LAUNCH_CONFIG.organizationName}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Built with reverence & modern code by <strong>{LAUNCH_CONFIG.creator.name}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
