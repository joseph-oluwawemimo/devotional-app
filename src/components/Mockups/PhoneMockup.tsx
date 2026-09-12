import React from 'react';
import { Sparkles, ShieldCheck, BookOpen, Volume2 } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="hero-mockup-stage">
      <div className="mockup-trio-container">
        
        {/* =======================================================
            LEFT PHONE: Real App Home Screen ("Good morning, Joseph")
            ======================================================= */}
        <div className="phone-device side-phone-left" title="GOFAMINT Sunday School App Home Screen">
          {/* Top Speaker & Camera Notch */}
          <div className="phone-notch-bar">
            <span>09:41</span>
            <div className="notch-speaker"></div>
            <span>5G 98%</span>
          </div>

          {/* Real Screen Image Container */}
          <div className="phone-screen-img-container">
            <img
              src="/assets/screens/home-screen.png"
              alt="GOFAMINT Sunday School App Home Screen"
              className="phone-screen-screenshot"
            />
            {/* Screen reflection overlay */}
            <div className="phone-screen-glare"></div>
          </div>

          {/* Floating Pill Caption */}
          <div className="phone-floating-label">
            <span>Daily Hub & Progress</span>
          </div>
        </div>

        {/* =======================================================
            CENTER PHONE: Real Daily Devotional ("Man Expected To Eat From His Labour")
            ======================================================= */}
        <div className="phone-device center-phone" title="GOFAMINT Sunday School Daily Devotional Reading Screen">
          {/* Top Speaker & Camera Notch */}
          <div className="phone-notch-bar">
            <span>09:41</span>
            <div className="notch-speaker"></div>
            <span>5G 100%</span>
          </div>

          {/* Real Screen Image Container */}
          <div className="phone-screen-img-container">
            <img
              src="/assets/screens/devotional-reading.png"
              alt="GOFAMINT Sunday School Daily Devotional Reading Screen"
              className="phone-screen-screenshot"
            />
            {/* Screen reflection overlay */}
            <div className="phone-screen-glare"></div>
          </div>

          {/* Floating Pill Caption */}
          <div className="phone-floating-label center-label">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Daily Devotion & Audio</span>
          </div>
        </div>

        {/* =======================================================
            RIGHT PHONE: Real Multi-Version Bible Screen (Hebrews 11)
            ======================================================= */}
        <div className="phone-device side-phone-right" title="GOFAMINT Sunday School Built-in Bible Screen">
          {/* Top Speaker & Camera Notch */}
          <div className="phone-notch-bar">
            <span>09:41</span>
            <div className="notch-speaker"></div>
            <span>5G 95%</span>
          </div>

          {/* Real Screen Image Container */}
          <div className="phone-screen-img-container">
            <img
              src="/assets/screens/bible-screen.png"
              alt="GOFAMINT Sunday School Multi-Version Bible Screen"
              className="phone-screen-screenshot"
            />
            {/* Screen reflection overlay */}
            <div className="phone-screen-glare"></div>
          </div>

          {/* Floating Pill Caption */}
          <div className="phone-floating-label">
            <span>Multi-Version Bible</span>
          </div>
        </div>

      </div>
    </div>
  );
};
