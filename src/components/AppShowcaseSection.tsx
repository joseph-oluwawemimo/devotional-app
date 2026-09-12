import React, { useState } from 'react';
import { 
  Check, Volume2, BookOpen, Sparkles, 
  Bookmark, Share2, Search, SlidersHorizontal, ArrowRight
} from 'lucide-react';

export const AppShowcaseSection: React.FC = () => {
  const [activeScreenTab, setActiveScreenTab] = useState<'devotional' | 'home' | 'bible' | 'keypoint'>('devotional');

  return (
    <section id="showcase" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge red">
            App UI Experience
          </div>
          <h2 className="section-title">
            Explore the Native Application
          </h2>
          <p className="section-subtitle">
            Crafted for reverent study, seamless readability, and total reliability offline. Experience the actual screens designed to enrich your daily walk with God.
          </p>

          {/* Interactive Screen Selector */}
          <div className="showcase-tab-bar">
            <button
              onClick={() => setActiveScreenTab('devotional')}
              className={`showcase-tab-btn ${activeScreenTab === 'devotional' ? 'active' : ''}`}
            >
              Daily Devotion UI
            </button>
            <button
              onClick={() => setActiveScreenTab('home')}
              className={`showcase-tab-btn ${activeScreenTab === 'home' ? 'active' : ''}`}
            >
              Home & Growth Hub
            </button>
            <button
              onClick={() => setActiveScreenTab('bible')}
              className={`showcase-tab-btn ${activeScreenTab === 'bible' ? 'active' : ''}`}
            >
              Multi-Version Bible
            </button>
            <button
              onClick={() => setActiveScreenTab('keypoint')}
              className={`showcase-tab-btn ${activeScreenTab === 'keypoint' ? 'active' : ''}`}
            >
              Key Point Social Card
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="showcase-card-container">
          
          {/* TAB 1: Real Daily Devotion Screen */}
          {activeScreenTab === 'devotional' && (
            <div className="showcase-grid-content">
              <div className="showcase-text-col">
                <span className="showcase-pill-category">
                  Spiritual Depth Daily
                </span>
                <h3 className="showcase-screen-heading">
                  Daily Devotional & Morning Reflection
                </h3>
                <p className="showcase-screen-desc">
                  Every morning greets you with the day’s scheduled passage, a concise 2-minute theological reflection, and audio read-aloud capabilities so you can stay in God's Word anywhere.
                </p>
                
                <div className="showcase-feature-bullets">
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Drop-Cap Editorial Design:</strong> Beautiful, readable serif typography formatted for calm spiritual meditation.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Audio Read-Aloud:</strong> High-clarity voice narration with single-tap listen controls.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Interactive Week Strip:</strong> Effortlessly jump between Monday through Sunday devotional readings.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Bookmark & Share:</strong> Save reflections and create instant key point graphics from any passage.</span>
                  </div>
                </div>

                <div className="showcase-callout-pill">
                  <Volume2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Integrated audio listener for busy morning commutes and evening family devotions.</span>
                </div>
              </div>

              {/* Real App Screenshot Phone Wrapper */}
              <div className="showcase-screen-phone-wrapper">
                <div className="showcase-phone-frame">
                  <div className="phone-screen-notch-mini">
                    <div className="notch-speaker-mini"></div>
                  </div>
                  <img
                    src="/assets/screens/devotional-reading.png"
                    alt="GOFAMINT Sunday School Daily Devotional Screen UI"
                    className="showcase-actual-screenshot"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Real App Home Screen */}
          {activeScreenTab === 'home' && (
            <div className="showcase-grid-content">
              <div className="showcase-text-col">
                <span className="showcase-pill-category">
                  Personalized Dashboard
                </span>
                <h3 className="showcase-screen-heading">
                  Home & Personal Study Hub
                </h3>
                <p className="showcase-screen-desc">
                  Personalized greeting with your real name, daily calendar tracking, quick-access devotional card, and continuous reading progress for the current quarterly manual.
                </p>
                
                <div className="showcase-feature-bullets">
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Personalized Greeting:</strong> Warm daily check-in with current date and spiritual encouragement.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Weekly Consistency Tracker:</strong> Visual streak tracking showing completed devotions for each day of the week.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Continue Reading:</strong> Automatic lesson bookmarking showing exactly where you left off (e.g. 38% completed).</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Quick Actions:</strong> Read now or generate a shareable key point card with one tap.</span>
                  </div>
                </div>

                <div className="showcase-callout-pill">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Designed to build habitual, uninterrupted consistency in God’s Word every single day.</span>
                </div>
              </div>

              {/* Real App Screenshot Phone Wrapper */}
              <div className="showcase-screen-phone-wrapper">
                <div className="showcase-phone-frame">
                  <div className="phone-screen-notch-mini">
                    <div className="notch-speaker-mini"></div>
                  </div>
                  <img
                    src="/assets/screens/home-screen.png"
                    alt="GOFAMINT Sunday School App Home Screen UI"
                    className="showcase-actual-screenshot"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Real Bible Screen */}
          {activeScreenTab === 'bible' && (
            <div className="showcase-grid-content">
              <div className="showcase-text-col">
                <span className="showcase-pill-category">
                  Scripture At Your Fingertips
                </span>
                <h3 className="showcase-screen-heading">
                  Multi-Version Scripture Reader
                </h3>
                <p className="showcase-screen-desc">
                  No need to leave the Sunday School app to cross-reference scripture. Enjoy instant version switching across 9 translations, in-chapter search filtering, and adjustable typography.
                </p>
                
                <div className="showcase-feature-bullets">
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>9 Integrated Translations:</strong> Rapidly switch between NKJV, KJV, ESV, AMP, NIV, NIRV, NLT, MSG, and NASB.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>In-Chapter Word Filtering:</strong> Search specific keywords directly within the chapter in real time.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>A- / A+ Dynamic Font Scaling:</strong> Adjust scripture font size to suit any lighting or comfort level.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Offline Database:</strong> Full scripture text stored securely on device with zero data dependency.</span>
                  </div>
                </div>

                <div className="showcase-callout-pill">
                  <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Seamless parallel study without switching to third-party Bible apps during class.</span>
                </div>
              </div>

              {/* Real App Screenshot Phone Wrapper */}
              <div className="showcase-screen-phone-wrapper">
                <div className="showcase-phone-frame">
                  <div className="phone-screen-notch-mini">
                    <div className="notch-speaker-mini"></div>
                  </div>
                  <img
                    src="/assets/screens/bible-screen.png"
                    alt="GOFAMINT Sunday School Multi-Version Bible Screen UI"
                    className="showcase-actual-screenshot"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Real Key Point Card Generator */}
          {activeScreenTab === 'keypoint' && (
            <div className="showcase-grid-content">
              <div className="showcase-text-col">
                <span className="showcase-pill-category">
                  Digital Evangelism & Sharing
                </span>
                <h3 className="showcase-screen-heading">
                  Custom Key Point Card Generator
                </h3>
                <p className="showcase-screen-desc">
                  Transform Sunday School lessons and memory verses into beautiful, high-definition branded social cards with one tap. Share directly to WhatsApp status and church groups.
                </p>
                
                <div className="showcase-feature-bullets">
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Official GOFAMINT Emblem:</strong> Branded typography, church insignia, and quarterly theme tags.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Memory Verse Callouts:</strong> Formatted quotes ready for daily reflection and memorization.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>One-Tap WhatsApp Status:</strong> Export and publish without cropping or watermarks.</span>
                  </div>
                  <div className="showcase-bullet-item">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Encourages Outreach:</strong> Empower teachers and youth to spread biblical truth across digital networks.</span>
                  </div>
                </div>

                <div className="showcase-callout-pill">
                  <Share2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Turn every believer into an ambassador of Sunday School truth across social channels.</span>
                </div>
              </div>

              {/* Social Card Graphic Wrapper */}
              <div className="showcase-screen-phone-wrapper">
                <div className="showcase-graphic-card-frame">
                  <img
                    src="/assets/refs/GOFAMINT-Lesson_2__GOD_DESIGNED_MAN_TO_WORK-1789062602110.png"
                    alt="Sunday School Lesson 2 Key Point Card"
                    className="showcase-actual-card-graphic"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
