import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge red">
            Direct Reach
          </div>
          <h2 className="section-title">
            Get in Touch
          </h2>
          <p className="section-subtitle">
            Whether you have an inquiry about deployment in your local assembly, need technical support, or want to contribute, we’re ready to assist.
          </p>
        </div>

        {/* Contact Methods Card */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #0d254c 0%, #06152d 100%)',
          borderRadius: '28px',
          padding: '3rem 2.5rem',
          color: '#ffffff',
          boxShadow: '0 20px 40px -10px rgba(13, 37, 76, 0.4)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa' }}>
              We Are Available
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, margin: '0.5rem 0 1rem 0' }}>
              Connect with Joseph Akinleye
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Reach out directly for assembly onboarding, teacher training resources, Sunday School Directorate inquiries, or feedback.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail className="w-4 h-4 text-blue-400" />
                <span style={{ color: '#e2e8f0' }}>{LAUNCH_CONFIG.feedbackEmail}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone className="w-4 h-4 text-emerald-400" />
                <span style={{ color: '#e2e8f0' }}>{LAUNCH_CONFIG.whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href={`mailto:${LAUNCH_CONFIG.feedbackEmail}?subject=Inquiry%20Regarding%20GOFAMINT%20Sunday%20School%20App`}
              className="btn-contact-action email"
              style={{
                background: '#ffffff',
                color: '#0d254c',
                fontSize: '1rem',
                padding: '1rem 1.5rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
              }}
              id="contact-email-btn"
            >
              <Mail className="w-5 h-5 text-blue-700" />
              <span>Email Us</span>
            </a>

            <a
              href={LAUNCH_CONFIG.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action whatsapp"
              style={{
                fontSize: '1rem',
                padding: '1rem 1.5rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800
              }}
              id="contact-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
