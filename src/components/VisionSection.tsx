import React from 'react';
import { BookMarked, Smartphone, BellRing, Sprout, CheckCircle2, ArrowRight, Layers, Bell, Eye, Download } from 'lucide-react';
import { VISION_STEPS, VISION_PILLARS } from '../data/visionData';

export const VisionSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-blue-700" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-red-600" />;
      case 'BellRing': return <BellRing className="w-6 h-6 text-amber-600" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      default: return <BookMarked className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="vision" className="section-padding subtle-mesh-bg">
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            The Purpose & Heart
          </div>
          <h2 className="section-title">
            Why This App?
          </h2>
          <p className="section-subtitle">
            The vision behind the digital transformation: From printed pages to a living digital experience.
          </p>
        </div>

        {/* 4-Step Narrative Progression */}
        <div className="vision-timeline-grid">
          {VISION_STEPS.map((step) => (
            <div key={step.stepNumber} className="vision-card">
              <div className="vision-step-badge">{step.stepNumber}</div>
              <div style={{ marginBottom: '0.75rem' }}>{getIcon(step.iconName)}</div>
              <h3 className="vision-card-title">{step.title}</h3>
              <div className="vision-card-sub">{step.subtitle}</div>
              <p className="vision-card-desc">{step.description}</p>
              
              <ul className="vision-highlights-list">
                {step.highlights.map((item, idx) => (
                  <li key={idx} className="vision-highlight-item">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Narrative Banner: Physical to Living Digital Experience */}
        <div className="vision-narrative-banner">
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f87171', marginBottom: '0.5rem' }}>
              The Shift in Daily Study
            </div>
            <h3 className="narrative-quote-callout">
              “Moving away from poorly formatted scanned PDFs into a <span>clean, articulate, and accessible</span> digital journey.”
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65 }}>
              For decades, the GOFAMINT Sunday School Board and GOFAMINT Press have faithfully produced spiritual nourishment in printed booklets. Today, this app liberates that rich legacy—empowering youth, workers, teachers, and members with daily notification nudges, offline reading, audio capability, and instant scripture cross-referencing.
            </p>
          </div>

          {/* Pillars List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem' }}>
              <Bell className="w-5 h-5 text-amber-400" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>Daily Notifications</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Consistent study reminders</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem' }}>
              <Eye className="w-5 h-5 text-blue-400" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>Clean Typography</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Pleasing editorial reading</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem' }}>
              <Download className="w-5 h-5 text-emerald-400" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>Offline Access</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Zero network dependency</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem' }}>
              <Layers className="w-5 h-5 text-red-400" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>Organized Manual</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>12-week quarterly lessons</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
