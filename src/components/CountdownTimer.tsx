import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/launchConfig';

interface CountdownTimerProps {
  onStatusChange?: (isLaunched: boolean) => void;
  forceLaunched?: boolean;
}

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLaunched: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  onStatusChange,
  forceLaunched = false
}) => {
  const calculateTimeRemaining = (): TimeRemaining => {
    if (forceLaunched) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
    }

    const launchDate = new Date(LAUNCH_CONFIG.launchTime).getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
      isLaunched: false
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeRemaining();
      setTimeLeft(updated);
      if (onStatusChange) {
        onStatusChange(updated.isLaunched);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [forceLaunched]);

  if (timeLeft.isLaunched) {
    return (
      <div className="countdown-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981' }}>
        <div className="countdown-label" style={{ color: '#6ee7b7' }}>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Application Now Officially Launched & Available!</span>
        </div>
        <p style={{ color: '#d1fae5', fontSize: '0.9375rem', textAlign: 'center' }}>
          Download access is now fully active. Select your device below to begin your daily journey in God’s Word.
        </p>
      </div>
    );
  }

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="countdown-box">
      <div className="countdown-label">
        <Clock className="w-4 h-4 text-blue-400 animate-pulse" />
        <span>Official App Launch Countdown</span>
      </div>
      <div className="countdown-grid">
        {timeLeft.days > 0 ? (
          <div className="time-card">
            <span className="time-num">{formatDigit(timeLeft.days)}</span>
            <span className="time-label">Days</span>
          </div>
        ) : null}

        <div className="time-card">
          <span className="time-num">{formatDigit(timeLeft.hours)}</span>
          <span className="time-label">Hours</span>
        </div>

        <div className="time-card">
          <span className="time-num">{formatDigit(timeLeft.minutes)}</span>
          <span className="time-label">Minutes</span>
        </div>

        <div className="time-card">
          <span className="time-num" style={{ color: '#f87171' }}>{formatDigit(timeLeft.seconds)}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
      <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>
        Target Launch: {new Date(LAUNCH_CONFIG.launchTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} • Access unlocks automatically at zero
      </div>
    </div>
  );
};
