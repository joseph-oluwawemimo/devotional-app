import React, { useState } from 'react';
import { Settings2, Eye, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';

interface DevPreviewControllerProps {
  isLaunched: boolean;
  onTogglePreviewLaunch: () => void;
  isPreviewLaunch: boolean;
}

export const DevPreviewController: React.FC<DevPreviewControllerProps> = ({
  isLaunched,
  onTogglePreviewLaunch,
  isPreviewLaunch,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      }}
    >
      {collapsed ? (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(12px)',
            color: '#f8fafc',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '8px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 700,
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          title="Click to toggle Launch State Preview mode"
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isLaunched ? '#10b981' : '#f59e0b',
              display: 'inline-block',
            }}
          />
          <span>{isLaunched ? 'Preview: Launched' : 'Countdown Mode'}</span>
          <Settings2 className="w-3.5 h-3.5 text-slate-400" />
        </button>
      ) : (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '14px 16px',
            color: '#ffffff',
            boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.5)',
            width: '260px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '8px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#93c5fd' }}>
              Launch State Switcher
            </div>
            <button
              onClick={() => setCollapsed(true)}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: 1.4, marginBottom: '12px' }}>
            Current View: <strong style={{ color: isLaunched ? '#34d399' : '#fbbf24' }}>{isLaunched ? 'Unlocked (App Launched)' : 'Locked (Launch Countdown)'}</strong>
          </p>

          <button
            onClick={onTogglePreviewLaunch}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: isPreviewLaunch ? '#dc2626' : '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {isPreviewLaunch ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Real Countdown</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Simulate Launched State</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
