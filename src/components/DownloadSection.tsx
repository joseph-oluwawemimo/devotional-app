import React, { useState } from 'react';
import { 
  Download, Lock, Smartphone, Apple, Copy, Check, 
  ExternalLink, Sparkles, AlertCircle, ShieldAlert 
} from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

interface DownloadSectionProps {
  isLaunched: boolean;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ isLaunched }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyIosLink = () => {
    navigator.clipboard.writeText(LAUNCH_CONFIG.iosWebAppLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <section id="download" className="section-padding download-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge red">
            {isLaunched ? 'Instant Installation' : 'Launch Pending'}
          </div>
          <h2 className="section-title">
            Download the App
          </h2>
          <p className="section-subtitle">
            {isLaunched
              ? 'Choose your mobile platform below to start growing daily in God’s Word.'
              : 'The application is packaged and undergoing final pre-launch checks. Download access will automatically unlock when the countdown arrives.'}
          </p>
        </div>

        {/* Dual Cards: Android & iOS */}
        <div className="download-cards-container">
          
          {/* =========================================
              Android Download Card
              ========================================= */}
          <div className="download-card android-card">
            <div className="download-os-icon">
              <Smartphone className="w-8 h-8" />
            </div>

            <h3 className="download-os-title">Download for Android</h3>
            <p className="download-os-desc">
              Direct Android Package (APK) download for all modern Android phones and tablets. Fast installation, zero bloat, and automatic offline storage for the full curriculum.
            </p>

            <div style={{ marginBottom: '1.5rem', fontSize: '0.8125rem', color: '#64748b' }}>
              ✓ Latest Official Build • Requires Android 7.0+ • Fast Direct Download
            </div>

            {!isLaunched ? (
              <div className="download-locked-notice">
                <Lock className="w-4 h-4 shrink-0 text-red-600" />
                <span>Download access is currently locked until official launch time.</span>
              </div>
            ) : !LAUNCH_CONFIG.androidDownloadLink ? (
              <div className="download-locked-notice" style={{ borderColor: '#f59e0b', background: '#fffbeb', color: '#b45309' }}>
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Download link is currently being updated. Please check back shortly!</span>
              </div>
            ) : (
              <div>
                <a
                  href={LAUNCH_CONFIG.androidDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-action-btn android"
                  id="android-download-btn"
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK for Android</span>
                </a>
                <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                  Target: <code>{LAUNCH_CONFIG.androidDownloadLink}</code>
                </div>
              </div>
            )}
          </div>

          {/* =========================================
              iPhone / iOS Download Card
              ========================================= */}
          <div className="download-card ios-card">
            <div className="download-os-icon">
              <Apple className="w-8 h-8" />
            </div>

            <h3 className="download-os-title">For iPhone Users</h3>
            <p className="download-os-desc">
              The iPhone version is not yet registered on the Apple App Store. However, you can access the full app immediately as a Progressive Web App (PWA) with complete offline support.
            </p>

            {/* Clear iOS Notice as requested */}
            <div style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#1e40af', marginBottom: '0.25rem' }}>
                How to Access on iPhone:
              </div>
              <div style={{ fontSize: '0.875rem', color: '#1e3a8a', fontWeight: 600 }}>
                «Copy the provided link and open it in Chrome to access the app.»
              </div>
            </div>

            {!isLaunched ? (
              <div className="download-locked-notice">
                <Lock className="w-4 h-4 shrink-0 text-red-600" />
                <span>Web App access link will be unveiled at official launch time.</span>
              </div>
            ) : (
              <div>
                <a
                  href={LAUNCH_CONFIG.iosWebAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-action-btn ios"
                  id="ios-open-webapp-btn"
                  style={{ marginBottom: '1rem', textDecoration: 'none' }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open Web App / PWA</span>
                </a>

                {/* 1-Click Copy Link Box */}
                <div className="copy-input-group">
                  <input
                    type="text"
                    readOnly
                    value={LAUNCH_CONFIG.iosWebAppLink}
                    className="copy-input-field"
                  />
                  <button
                    onClick={handleCopyIosLink}
                    className="copy-btn-mini"
                    id="ios-copy-btn"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                {/* 3-Step Guide */}
                <div className="ios-step-guide">
                  <div className="ios-step-item">
                    <span className="step-num">1</span>
                    <span>Tap <strong>Open Web App</strong> or click <strong>Copy Link</strong></span>
                  </div>
                  <div className="ios-step-item">
                    <span className="step-num">2</span>
                    <span>Open in <strong>Google Chrome</strong> (or Safari) on your iPhone</span>
                  </div>
                  <div className="ios-step-item">
                    <span className="step-num">3</span>
                    <span>Paste and tap <strong>Add to Home Screen</strong></span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
