/**
 * GOFAMINT Sunday School App Launch Configuration
 * 
 * Edit LAUNCH_DATE_TIME here to configure the exact launch moment.
 * The website will automatically transition from the locked countdown state
 * to the unlocked download state once this time arrives — no code redeployment required.
 */

// Target launch time: 6:30 AM (local time +01:00)
// Format: ISO 8601 string: YYYY-MM-DDTHH:mm:ss+HH:MM
export const LAUNCH_CONFIG = {
  // Set to 6:30 AM morning
  launchTime: '2026-09-13T06:30:00+01:00',

  // App Metadata
  appName: 'GOFAMINT Sunday School',
  organizationName: 'GOFAMINT (The Gospel Faith Mission International)',
  appDescription: 'Daily Devotion & Manual',
  heroTagline: 'Your Daily Growth in the Word',

  // Download Links (Temporarily cleared - updating shortly)
  // Previous: 'https://github.com/joseph-oluwawemimo/GOFAMINT-Sunday-School/releases/download/v1.1.3/gofamint-sundayschool-debug.apk'
  androidDownloadLink: '',
  iosWebAppLink: 'https://gofamint-sundayschool-devotional.vercel.app/',

  // Direct Contact & Support
  feedbackEmail: 'josephakinleye52@gmail.com',
  whatsappNumber: '+234 70 356 205 37',
  whatsappDirectUrl: 'https://wa.me/2347035620537?text=Hello%20Joseph%2C%20I%20am%20reaching%20out%20regarding%20the%20GOFAMINT%20Sunday%20School%20App!',

  // Assets
  logoUrl: '/assets/gofamint-logo-3d.png',

  // Creator Info
  creator: {
    name: 'Joseph Akinleye',
    role: 'Visionary & Digital Developer',
    quote: '“The Word at hand is the Word at heart.”',
    quoteExplanation: 'What stays before us has a greater chance of becoming rooted within us.',
    bio: 'Joseph Akinleye is a young person, minister, and technology enthusiast who has been immensely blessed by the content of the Sunday School and was inspired to transform that experience into a more accessible digital platform.',
    photoUrl: '/assets/joseph-akinleye.jpg',
    ministryPhotoUrl: '/assets/joseph-akinleye-alt.jpg'
  },

  // Management System Upcoming Note
  managementNotice: '(A lot of developers are on ground to ensure it is ready.)'
};
