import React from 'react';
import { 
  Users, Shield, BarChart3, Database, Sparkles, 
  Terminal, Layers, ArrowRight, Laptop, CheckCircle 
} from 'lucide-react';
import { LaptopMockup } from './Mockups/LaptopMockup';
import { LAUNCH_CONFIG } from '../config/launchConfig';

export const ManagementSystemSection: React.FC = () => {
  return (
    <section id="upcoming" className="section-padding upcoming-section">
      <div className="container-custom">
        
        {/* Section 11 & 12 Headers */}
        <div className="section-header-centered">
          <div className="upcoming-dev-banner">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span>Coming Soon</span>
          </div>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            GOFAMINT Sunday School Management System
          </h2>

          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.125rem',
            fontWeight: 700,
            color: '#93c5fd',
            marginBottom: '0.5rem'
          }}>
            {LAUNCH_CONFIG.managementNotice}
          </div>

          <p className="section-subtitle" style={{ color: '#94a3b8' }}>
            An upcoming enterprise digital management platform designed to streamline administration, attendance tracking, and reporting across all GOFAMINT assemblies and directorates worldwide.
          </p>
        </div>

        {/* Laptop & Desktop Showcase Mockup */}
        <LaptopMockup />

        {/* 3 Core System Pillars */}
        <div className="pillars-grid">
          
          {/* Pillar 1: Administration Portal */}
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Shield className="w-5 h-5 text-blue-400" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#60a5fa' }}>Role-Based Access</span>
            </div>
            <h3 className="pillar-title">Administration Portal</h3>
            <p className="pillar-desc">
              Comprehensive role-authenticated management giving authorized officers tailored oversight of curriculum, grading policies, and assembly records.
            </p>
            <div className="pillar-roles-list">
              <span className="role-chip">General Superintendent</span>
              <span className="role-chip">General Secretary</span>
              <span className="role-chip">Class Teachers</span>
              <span className="role-chip">Class Secretaries</span>
              <span className="role-chip">Sunday School Workers</span>
            </div>
          </div>

          {/* Pillar 2: Online Class Register */}
          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Users className="w-5 h-5 text-amber-400" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#fbbf24' }}>Classroom Operations</span>
            </div>
            <h3 className="pillar-title">Online Class Register</h3>
            <p className="pillar-desc">
              High-speed student registration, real-time Sunday morning attendance recording, visitor-to-member follow-up pipelines, and bulk spreadsheet roster imports.
            </p>
            <div className="pillar-roles-list">
              <span className="role-chip">Fast Onboarding (Name + Phone)</span>
              <span className="role-chip">Instant Duplicate Check</span>
              <span className="role-chip">Live Grading Matrix</span>
              <span className="role-chip">Welfare & Absence Care</span>
            </div>
          </div>

          {/* Pillar 3: Intelligence Board */}
          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#34d399' }}>Data & Reports</span>
            </div>
            <h3 className="pillar-title">Sunday School Intelligence Board</h3>
            <p className="pillar-desc">
              Data-driven analytics turning raw attendance records into actionable spiritual intelligence, quarterly attendance retention graphs, and official return prints.
            </p>
            <div className="pillar-roles-list">
              <span className="role-chip">12-Week Trend Analytics</span>
              <span className="role-chip">Visitor Retention Metrics</span>
              <span className="role-chip">Official Printable Returns</span>
              <span className="role-chip">Assembly Comparative Insights</span>
            </div>
          </div>

        </div>

        {/* Future Store Notice */}
        <div style={{
          marginTop: '3.5rem',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
              App Store & Play Store Road Map
            </div>
            <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff' }}>
              Native App Store Listings in Progress
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              We are actively working toward publishing directly on the Apple App Store and Google Play Store for seamless updates.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff' }}>Google Play Store</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff' }}>Apple App Store</span>
          </div>
        </div>

      </div>
    </section>
  );
};
