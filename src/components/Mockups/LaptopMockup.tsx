import React, { useState } from 'react';
import { 
  Users, Table2, BarChart3, ShieldCheck, CheckCircle, 
  Search, Download, Plus, FileSpreadsheet, Lock, Sparkles, TrendingUp
} from 'lucide-react';

export const LaptopMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'register' | 'admin' | 'intelligence'>('register');

  return (
    <div className="laptop-mockup-wrapper">
      <div className="laptop-frame">
        {/* Webcam */}
        <div className="laptop-webcam"></div>

        {/* Laptop Screen */}
        <div className="laptop-screen-content">
          {/* Top System Bar */}
          <div className="mgmt-app-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="/assets/refs/Frame 51.png"
                alt="GOFAMINT Logo"
                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.02em' }}>
                GOFAMINT Sunday School Management System
              </span>
              <span style={{ 
                background: '#dc2626', 
                color: '#ffffff', 
                fontSize: '9px', 
                fontWeight: 800, 
                padding: '2px 6px', 
                borderRadius: '4px',
                textTransform: 'uppercase'
              }}>
                Enterprise Preview
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: '#93c5fd' }}>
              <span>Role: <strong>Superintendent / Admin</strong></span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
            </div>
          </div>

          {/* Interactive Navigation Tabs inside Mockup */}
          <div className="mgmt-nav-tabs">
            <button
              className={`mgmt-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              <Table2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Online Class Register & Roster</span>
            </button>
            <button
              className={`mgmt-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Administration & Security Portal</span>
            </button>
            <button
              className={`mgmt-tab-btn ${activeTab === 'intelligence' ? 'active' : ''}`}
              onClick={() => setActiveTab('intelligence')}
            >
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sunday School Intelligence Board</span>
            </button>
          </div>

          {/* Tab 1: Online Class Register */}
          {activeTab === 'register' && (
            <div className="mgmt-dashboard-body">
              <div className="mgmt-table-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0d254c' }}>
                      Fast Onboarding: Adult Class A Roster
                    </h4>
                    <p style={{ fontSize: '10px', color: '#64748b' }}>
                      Auto-detects duplicates, verifies phone formats, and syncs attendance matrix
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                      Parsed: 3 Records
                    </span>
                    <span style={{ background: '#fef3c7', color: '#b45309', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                      Duplicates: 0
                    </span>
                  </div>
                </div>

                {/* Sample Live Table (modeled on actual screenshot) */}
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '6px 8px' }}>#</th>
                      <th style={{ padding: '6px 8px' }}>Full Name</th>
                      <th style={{ padding: '6px 8px' }}>Phone Number</th>
                      <th style={{ padding: '6px 8px' }}>Roster Role</th>
                      <th style={{ padding: '6px 8px' }}>Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '6px 8px', color: '#94a3b8' }}>1</td>
                      <td style={{ padding: '6px 8px', fontWeight: 700, color: '#0f172a' }}>NDUBUEZE ESTHER</td>
                      <td style={{ padding: '6px 8px', color: '#475569' }}>08134561632</td>
                      <td style={{ padding: '6px 8px' }}><span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>Student</span></td>
                      <td style={{ padding: '6px 8px', color: '#16a34a', fontWeight: 700 }}>Present (Wk 1–12)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '6px 8px', color: '#94a3b8' }}>2</td>
                      <td style={{ padding: '6px 8px', fontWeight: 700, color: '#0f172a' }}>OLADELE PRECIOUS</td>
                      <td style={{ padding: '6px 8px', color: '#475569' }}>+2348145359617</td>
                      <td style={{ padding: '6px 8px' }}><span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>Student</span></td>
                      <td style={{ padding: '6px 8px', color: '#16a34a', fontWeight: 700 }}>Present (Wk 1–12)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '6px 8px', color: '#94a3b8' }}>3</td>
                      <td style={{ padding: '6px 8px', fontWeight: 700, color: '#0f172a' }}>NWEKE CHIDIEBERE</td>
                      <td style={{ padding: '6px 8px', color: '#475569' }}>+2347035620537</td>
                      <td style={{ padding: '6px 8px' }}><span style={{ background: '#faf5ff', color: '#9333ea', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>Visitor → Member</span></td>
                      <td style={{ padding: '6px 8px', color: '#2563eb', fontWeight: 700 }}>Converted</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Side Preview Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0d254c', marginBottom: '6px' }}>
                    Real-time Class Summary
                  </div>
                  <div className="mgmt-stats-grid">
                    <div className="stat-metric-box">
                      <div className="stat-metric-val">94.8%</div>
                      <div className="stat-metric-title">Quarter Attendance</div>
                    </div>
                    <div className="stat-metric-box">
                      <div className="stat-metric-val">42</div>
                      <div className="stat-metric-title">Active Class Members</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '9px', color: '#64748b' }}>
                    ✓ Automated attendance scoring synced to Central Sunday School Directorate
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Administration Portal */}
          {activeTab === 'admin' && (
            <div className="mgmt-dashboard-body" style={{ gridTemplateColumns: '1fr' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto' }}>
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0d254c' }}>
                  Sunday School Directorate — Secure Console
                </h4>
                <p style={{ fontSize: '11px', color: '#64748b', marginBottom: '14px' }}>
                  Multi-tier role access for General Superintendent, General Secretary, Teachers, and Class Secretaries
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  <span style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>General Superintendent</span>
                  <span style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>General Secretary</span>
                  <span style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>Class Teachers</span>
                  <span style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>Class Secretaries</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Intelligence Board */}
          {activeTab === 'intelligence' && (
            <div className="mgmt-dashboard-body">
              <div className="mgmt-table-card">
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#0d254c', marginBottom: '8px' }}>
                  12-Week Sunday School Analytical Report
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>
                  {[65, 72, 78, 85, 80, 88, 92, 89, 94, 91, 95, 98].map((val, idx) => (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '100%', height: `${val}%`, background: idx === 11 ? '#dc2626' : '#2563eb', borderRadius: '4px 4px 0 0' }}></div>
                      <span style={{ fontSize: '8px', color: '#94a3b8' }}>W{idx + 1}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginTop: '6px', color: '#475569' }}>
                  <span>Baseline Growth: <strong>+33% Q3</strong></span>
                  <span style={{ color: '#16a34a', fontWeight: 800 }}>Peak Week 12: 98%</span>
                </div>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#0d254c', marginBottom: '8px' }}>
                  Key Intelligence Signals
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px' }}>
                  <div style={{ padding: '6px', background: '#ecfdf5', borderRadius: '6px', color: '#065f46' }}>
                    ✓ 98% Manual Coverage in Assemblies
                  </div>
                  <div style={{ padding: '6px', background: '#eff6ff', borderRadius: '6px', color: '#1e40af' }}>
                    ✓ 342 Visitors Converted to Regular Attendees
                  </div>
                  <div style={{ padding: '6px', background: '#fffbeb', borderRadius: '6px', color: '#92400e' }}>
                    ✓ Zero Data Loss: Dual Cloud & Local Backups
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Laptop Aluminum Base */}
      <div className="laptop-base">
        <div className="laptop-notch"></div>
      </div>
    </div>
  );
};
