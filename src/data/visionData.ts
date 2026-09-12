export interface VisionStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  highlights: string[];
}

export const VISION_STEPS: VisionStep[] = [
  {
    stepNumber: '01',
    badge: 'The Foundation',
    title: 'Printed Manual',
    subtitle: 'Decades of Faithful Compilation',
    description: 'The Sunday School Board has long packaged an extraordinary wealth of spiritual wisdom, faithfully compiled and printed into physical booklets by GOFAMINT Press. Yet physical copies face physical boundaries of distribution and availability.',
    iconName: 'BookMarked',
    highlights: [
      'Rich theological wisdom compiled by the Sunday School Board',
      'Printed distribution across assemblies and regions',
      'Challenges of wear, loss, and carrying multiple booklets'
    ]
  },
  {
    stepNumber: '02',
    badge: 'The Shift',
    title: 'Digital Transformation',
    subtitle: 'From Scanned PDFs to Native Clarity',
    description: 'The modern world is digital. Instead of struggling with blurry, poorly scanned PDF files that strain the eyes, the Sunday School material is reborn into a crisp, responsive, articulate digital interface optimized for phones and tablets.',
    iconName: 'Smartphone',
    highlights: [
      'Elimination of cumbersome, poorly formatted PDF files',
      'Beautiful typographic hierarchy with scalable fonts',
      'Available everywhere in your pocket at a moment’s notice'
    ]
  },
  {
    stepNumber: '03',
    badge: 'The Routine',
    title: 'Daily Engagement',
    subtitle: 'Inspiring a Living Daily Habit',
    description: 'Sunday School is no longer confined to 60 minutes on Sunday morning. Through gentle reminder notifications, integrated audio, and organized daily devotional portions, opening God’s Word becomes an instinctive daily joy.',
    iconName: 'BellRing',
    highlights: [
      'Daily devotional reading for every day of the week',
      'Audio read-aloud options for busy commutes',
      'Built-in Bible cross-referencing with a single tap'
    ]
  },
  {
    stepNumber: '04',
    badge: 'The Fruit',
    title: 'Spiritual Growth',
    subtitle: 'Deeply Rooted in the Word of God',
    description: 'When God’s Word is always at hand, it naturally becomes rooted in the heart. Young people, workers, and members develop sustained study discipline, producing grounded Christian maturity across generations.',
    iconName: 'Sprout',
    highlights: [
      'Cultivating consistent personal quiet time habits',
      'Strengthening youth participation in Sunday School',
      'Equipping teachers with structured, reliable study aids'
    ]
  }
];

export const VISION_PILLARS = [
  {
    title: 'Smart Daily Notifications',
    description: 'Gentle nudges that help you build an unbroken daily devotion rhythm.',
    icon: 'Bell'
  },
  {
    title: 'Articulate Typography',
    description: 'Crisp readability designed for effortless reading in daylight or dark mode.',
    icon: 'Eye'
  },
  {
    title: 'Instant Offline Access',
    description: 'Study and meditate anytime, anywhere without burning cellular data.',
    icon: 'Download'
  },
  {
    title: 'Systematic Structure',
    description: 'Quarterly lessons organized with memory verses, commentary, and prayer.',
    icon: 'Layers'
  }
];
