import React, { useState } from 'react';
import { Mail, HeartHandshake, MessageSquare, Send, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

export const SupportSection: React.FC = () => {
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <section id="support" className="section-padding subtle-mesh-bg">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            Partnership & Community
          </div>
          <h2 className="section-title">
            Support & Feedback
          </h2>
          <p className="section-subtitle">
            Building digital tools for God’s kingdom is a shared spiritual and technical endeavor.
          </p>
        </div>

        {/* Dual Panels: Feedback & Support the Vision */}
        <div className="support-dual-grid">
          
          {/* Panel 1: Support & Feedback */}
          <div className="support-panel">
            <div style={{
              width: '3.25rem',
              height: '3.25rem',
              borderRadius: '16px',
              background: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <MessageSquare className="w-6 h-6" />
            </div>

            <h3 className="support-panel-title">We Value Your Feedback</h3>
            <p className="support-panel-desc">
              We want this app to provide a smooth, enjoyable, and spiritually enriching experience for reading and studying God’s Word. If you have feedback, suggestions, feature ideas, or encounter any bugs, we would love to hear from you.
            </p>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Dedicated Feedback Channel:
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0d254c' }}>
                {LAUNCH_CONFIG.feedbackEmail}
              </div>
            </div>

            <div className="contact-button-row">
              <a
                href={`mailto:${LAUNCH_CONFIG.feedbackEmail}?subject=GOFAMINT%20Sunday%20School%20App%20Feedback`}
                className="btn-contact-action email"
                id="send-feedback-btn"
              >
                <Send className="w-4 h-4" />
                <span>Send Feedback</span>
              </a>
            </div>
          </div>

          {/* Panel 2: Support the Project */}
          <div className="support-panel" style={{ borderTop: '5px solid #dc2626' }}>
            <div style={{
              width: '3.25rem',
              height: '3.25rem',
              borderRadius: '16px',
              background: '#fef2f2',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="support-panel-title">Support the Vision</h3>
            <p className="support-panel-desc">
              We are committed to making God’s Word more accessible through technology. There are still important milestones ahead, including publishing the app on the App Store and Play Store, licensing, server databases, and ongoing platform maintenance. If you feel led to support this work, your generosity helps keep these tools active and expanding.
            </p>

            <div style={{
              background: '#fff1f2',
              border: '1px solid #fecdd3',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', fontWeight: 700, color: '#9f1239' }}>
                <Sparkles className="w-4 h-4 text-red-500" />
                <span>Kingdom Technology Initiative</span>
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#881337', marginTop: '0.25rem' }}>
                Every contribution directly supports server infrastructure, database storage, and app store registration fees.
              </div>
            </div>

            <div className="contact-button-row">
              <button
                onClick={() => setShowSupportModal(true)}
                className="btn-primary-launch"
                style={{ width: 'auto', padding: '0.85rem 1.75rem', fontSize: '0.9375rem' }}
                id="support-work-btn"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Support This Work</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Support Details Modal */}
      {showSupportModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6, 21, 45, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '2.25rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HeartHandshake className="w-6 h-6 text-red-600" />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0d254c' }}>
                  Support This Work
                </h4>
              </div>
              <button
                onClick={() => setShowSupportModal(false)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you for your heart to partner with the GOFAMINT Sunday School digital expansion. Please reach out to Joseph Akinleye directly via email or WhatsApp to coordinate your support or partnership.
            </p>

            <div style={{ background: '#eff6ff', borderRadius: '14px', padding: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div><strong>Direct Contact:</strong> Joseph Akinleye</div>
              <div><strong>Email:</strong> {LAUNCH_CONFIG.feedbackEmail}</div>
              <div><strong>WhatsApp:</strong> {LAUNCH_CONFIG.whatsappNumber}</div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={LAUNCH_CONFIG.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-action whatsapp"
                style={{ flex: 1 }}
              >
                Connect on WhatsApp
              </a>
              <button
                onClick={() => setShowSupportModal(false)}
                style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.75rem 1.25rem', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
