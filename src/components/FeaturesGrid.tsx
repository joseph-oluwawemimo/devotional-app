import React from 'react';
import { 
  Sparkles, BookOpen, GraduationCap, BookmarkCheck, 
  Music, CalendarCheck, WifiOff, Share2, ArrowUpRight
} from 'lucide-react';
import { FEATURES_LIST, FeatureItem } from '../data/featuresData';

export const FeaturesGrid: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'BookmarkCheck': return <BookmarkCheck {...props} />;
      case 'Music': return <Music {...props} />;
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      case 'WifiOff': return <WifiOff {...props} />;
      case 'Share2': return <Share2 {...props} />;
      default: return <BookOpen {...props} />;
    }
  };

  return (
    <section id="features" className="section-padding subtle-mesh-bg">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            Comprehensive Capabilities
          </div>
          <h2 className="section-title">
            What’s Inside the App?
          </h2>
          <p className="section-subtitle">
            A rich, spiritually rooted suite of features built to elevate personal study, family devotions, and classroom teaching.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="features-grid">
          {FEATURES_LIST.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-card-header">
                <div className={`feature-icon-wrapper ${feature.accentColor}`}>
                  {getFeatureIcon(feature.iconName)}
                </div>
                <span className="feature-badge">{feature.badge}</span>
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <div className="feature-subtitle">{feature.subtitle}</div>
              <p className="feature-description">{feature.description}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem' }}>
                <span className="feature-tag-pill">{feature.tag}</span>
                {feature.previewNote && (
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                    {feature.previewNote}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
