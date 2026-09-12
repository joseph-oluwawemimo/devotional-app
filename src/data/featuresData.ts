export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
  accentColor: 'blue' | 'red' | 'indigo' | 'emerald' | 'amber' | 'purple';
  previewNote?: string;
  sampleUiSnippet?: {
    type: 'devotional' | 'manual' | 'bible' | 'anthem' | 'keypoint' | 'offline' | 'teachers' | 'quarter';
    content: any;
  };
}

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'daily-devotion',
    badge: 'Feature 01',
    title: 'Sunday School Daily Devotion',
    subtitle: 'Nourishing Daily Spiritual Habit',
    description: 'Daily spiritual content designed to encourage consistent engagement with God\'s Word. Features daily reflections, key scripture references, audio listening options, and day-by-day reading tracks.',
    iconName: 'Sparkles',
    tag: 'Spiritual Discipline',
    accentColor: 'blue',
    previewNote: 'Includes 2-minute audio narration & scripture bookmarks',
    sampleUiSnippet: {
      type: 'devotional',
      content: {
        verse: 'Eph. 6:5–9',
        theme: 'Work And Serve As Unto The Lord',
        date: 'Fri, 18 Sep 2026',
        readTime: '2 min read'
      }
    }
  },
  {
    id: 'lesson-manual',
    badge: 'Feature 02',
    title: 'Sunday School Lesson Manual',
    subtitle: 'From Paper to Living Digital Experience',
    description: 'Access the complete Sunday School lesson material in a clean, legible, digital reading experience. Say goodbye to damaged paper booklets and low-quality PDF scans.',
    iconName: 'BookOpen',
    tag: 'Curriculum & Study',
    accentColor: 'red',
    previewNote: '12-Week Quarterly Lessons with rich commentary & memory verses',
    sampleUiSnippet: {
      type: 'manual',
      content: {
        lessonNumber: 2,
        title: 'GOD DESIGNED MAN TO WORK',
        passage: 'Genesis 2:15',
        memoryVerse: 'And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.'
      }
    }
  },
  {
    id: 'teachers-guide',
    badge: 'Feature 03',
    title: 'Teacher\'s Guide',
    subtitle: 'Empowering Class Leaders & Teachers',
    description: 'An integrated pedagogical guide designed to support teachers as they prepare, analyze, and teach each lesson with clarity, teaching outlines, discussion questions, and application points.',
    iconName: 'GraduationCap',
    tag: 'Teaching Aids',
    accentColor: 'indigo',
    previewNote: 'Includes teaching objectives, historical contexts & class prompts'
  },
  {
    id: 'builtin-bible',
    badge: 'Feature 04',
    title: 'Built-in Bible Reader',
    subtitle: 'Cross-Reference Without Leaving the App',
    description: 'Seamless Bible engine supporting multiple translations including KJV, ESV, NKJV, and more. Tap any scripture reference in the manual or daily devotional to instantly read and cross-reference.',
    iconName: 'BookmarkCheck',
    tag: 'Multi-Translation',
    accentColor: 'purple',
    previewNote: 'Fast parallel verse lookup & clean font scaling'
  },
  {
    id: 'anthem',
    badge: 'Feature 05',
    title: 'Sunday School Anthem',
    subtitle: '“I Cherish You My Sunday School”',
    description: 'Easy, immediate access to the official Sunday School anthem written by John Oluwadare Olayokun within the app—complete with lyrics in English, Yoruba, and musical notation references.',
    iconName: 'Music',
    tag: 'Heritage & Worship',
    accentColor: 'amber',
    previewNote: 'Full musical notation and dual-language stanzas'
  },
  {
    id: 'quarterly-lessons',
    badge: 'Feature 06',
    title: 'Up-to-Date Quarterly Lessons',
    subtitle: 'Always in Sync with the Curriculum',
    description: 'Access current quarterly Sunday School content in one systematically organized place. Follow church calendar timelines with automated week highlighting and quarter theme overviews.',
    iconName: 'CalendarCheck',
    tag: 'Curriculum Tracking',
    accentColor: 'blue',
    previewNote: 'Theme: The Theology of Hard Work & Christian Identity'
  },
  {
    id: 'offline-reading',
    badge: 'Feature 07',
    title: 'Read Offline Anywhere',
    subtitle: 'No Internet? No Problem.',
    description: 'All essential devotionals, lesson manuals, and scriptures remain fully available for reading even in areas without mobile network or internet coverage. Download once and study anywhere.',
    iconName: 'WifiOff',
    tag: 'Zero Data Dependency',
    accentColor: 'emerald',
    previewNote: 'Automatic local storage caching with zero latency'
  },
  {
    id: 'keypoint-generator',
    badge: 'Feature 08',
    title: 'Custom Key Point Cards',
    subtitle: 'Generate & Share Beautiful Quotes',
    description: 'Instantly generate stylized, customized Sunday School key-point cards with the official GOFAMINT brand emblem for sharing on WhatsApp status, social media, teaching, or personal reflection.',
    iconName: 'Share2',
    tag: 'Social Sharing & Evangelism',
    accentColor: 'red',
    previewNote: 'High-res image export with biblical truth cards'
  }
];
