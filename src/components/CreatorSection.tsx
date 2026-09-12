import React, { useState } from 'react';
import { Quote, Sparkles, CheckCircle, Heart, Code2 } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

export const CreatorSection: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [
    { url: LAUNCH_CONFIG.creator.photoUrl, label: 'Ministry & Leadership' },
    { url: LAUNCH_CONFIG.creator.ministryPhotoUrl, label: 'Worship & Word' }
  ];

  return (
    <section id="creator" className="section-padding creator-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge red">
            Heart Behind The Code
          </div>
          <h2 className="section-title">
            The Person Behind The Vision
          </h2>
          <p className="section-subtitle">
            A technology enthusiast and minister inspired by the eternal power of the Sunday School message.
          </p>
        </div>

        {/* Creator Card */}
        <div className="creator-card-wrapper">
          {/* Photograph Side */}
          <div className="creator-image-side">
            <img
              src={photos[photoIndex].url}
              alt="Joseph Akinleye - Creator of GOFAMINT Sunday School App"
              className="creator-photo"
            />
            <div className="creator-photo-overlay">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="creator-badge-pill">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>{photos[photoIndex].label}</span>
                </span>
                
                {/* Photo Switcher */}
                <button
                  onClick={() => setPhotoIndex((prev) => (prev === 0 ? 1 : 0))}
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }}
                  title="Switch between ministry photographs"
                >
                  Switch Photo
                </button>
              </div>
            </div>
          </div>

          {/* Info & Quote Side */}
          <div className="creator-info-side">
            <h3 className="creator-name">
              <span>{LAUNCH_CONFIG.creator.name}</span>
              <span style={{ fontSize: '0.875rem', background: '#dbeafe', color: '#1d4ed8', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                Visionary
              </span>
            </h3>

            <div className="creator-role">
              Minister • Technology Enthusiast • Digital Developer
            </div>

            <p className="creator-bio-text">
              {LAUNCH_CONFIG.creator.bio}
            </p>

            {/* Creator's Prominent Quote (Section 7) */}
            <div className="creator-quote-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Quote className="w-5 h-5 text-blue-700 shrink-0" />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1e3a8a' }}>
                  The Guiding Conviction
                </span>
              </div>
              <div className="quote-lead">
                {LAUNCH_CONFIG.creator.quote}
              </div>
              <p className="quote-explanation">
                {LAUNCH_CONFIG.creator.quoteExplanation}
              </p>
            </div>

            {/* Ministry Notes */}
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.75rem', fontSize: '0.8125rem', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Heart className="w-4 h-4 text-red-500" />
                <span>Passionate for Spiritual Depth</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Modern Software Craftsmanship</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
