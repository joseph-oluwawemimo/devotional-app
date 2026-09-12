import React from 'react';
import { Download, Lock, ChevronDown, Sparkles, BookOpen, ShieldCheck, Flame } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { PhoneMockup } from './Mockups/PhoneMockup';
import { LAUNCH_CONFIG } from '../config/launchConfig';

interface HeroSectionProps {
  isLaunched: boolean;
  onLaunchStatusChange: (status: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isLaunched,
  onLaunchStatusChange,
}) => {
  return (
    <section id="hero" className="hero-section hero-gradient-bg">
      <div className="container-custom hero-content">
        
        {/* Launch Status Pill */}
        <div className="launch-status-pill">
          <span className={`pulse-dot ${isLaunched ? 'launched' : ''}`}></span>
          <span>{isLaunched ? 'Officially Available for Download' : 'App Launching Soon • Access Locked'}</span>
        </div>

        {/* Main Brand Titles */}
        <h1 className="hero-main-title">
          {LAUNCH_CONFIG.appName}
        </h1>

        <div className="hero-description-tag">
          {LAUNCH_CONFIG.appDescription}
        </div>

        <p className="hero-tagline">
          <strong>{LAUNCH_CONFIG.heroTagline}.</strong> From printed manual pages to an articulate, living digital study companion—uniting daily devotion, 12-week lesson manuals, built-in scriptures, and offline accessibility for every believer.
        </p>

        {/* Real-time Countdown Timer */}
        <CountdownTimer
          onStatusChange={onLaunchStatusChange}
        />

        {/* Hero Actions */}
        <div className="hero-actions">
          <a
            href="#download"
            className="btn-primary-launch"
            id="hero-download-cta"
          >
            {!isLaunched ? (
              <>
                <Lock className="w-5 h-5 text-red-200" />
                <span>Download Access (Locked)</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Download The App</span>
              </>
            )}
          </a>

          <a href="#vision" className="btn-secondary-launch">
            <span>Why This App?</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Highlights Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '0.8125rem',
          color: '#93c5fd',
          marginBottom: '2rem'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Daily Devotions
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <BookOpen className="w-3.5 h-3.5 text-blue-300" /> 12-Week Quarterly Manual
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Offline Capable
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Flame className="w-3.5 h-3.5 text-red-400" /> Built-in Multi-Version Bible
          </span>
        </div>

        {/* 3-Screen Animated Mobile Mockup */}
        <PhoneMockup />

      </div>
    </section>
  );
};
