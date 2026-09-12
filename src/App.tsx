import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { CreatorSection } from './components/CreatorSection';
import { ManagementSystemSection } from './components/ManagementSystemSection';
import { DownloadSection } from './components/DownloadSection';
import { SupportSection } from './components/SupportSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LAUNCH_CONFIG } from './config/launchConfig';

export const App: React.FC = () => {
  // Check if current system time has passed LAUNCH_CONFIG.launchTime
  const checkRealLaunchStatus = () => {
    const launchTimestamp = new Date(LAUNCH_CONFIG.launchTime).getTime();
    return Date.now() >= launchTimestamp;
  };

  const [isLaunched, setIsLaunched] = useState(checkRealLaunchStatus());

  // Monitor real-time status as countdown reaches zero
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLaunched(checkRealLaunchStatus());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page-root">
      {/* Sticky Ultra-Clean Glass Navbar */}
      <Navbar isLaunched={isLaunched} />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero with Countdown & 3-Screen Mockup */}
        <HeroSection
          isLaunched={isLaunched}
          onLaunchStatusChange={setIsLaunched}
        />

        {/* 2. Why This App? (Vision & Narrative Progression) */}
        <VisionSection />

        {/* 3. What's Inside the App? (8 Core Feature Cards) */}
        <FeaturesGrid />

        {/* 4. App UI Showcase (Actual App Screens Gallery) */}
        <AppShowcaseSection />

        {/* 5. Creator / Designer Profile & Signature Quote */}
        <CreatorSection />

        {/* 6. Upcoming: Sunday School Management System (Laptop Mockup) */}
        <ManagementSystemSection />

        {/* 7. Download The App (Locked/Unlocked Platform Cards) */}
        <DownloadSection isLaunched={isLaunched} />

        {/* 8. Support & Feedback + Support the Vision */}
        <SupportSection />

        {/* 9. Contact (Email & Direct WhatsApp) */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;
