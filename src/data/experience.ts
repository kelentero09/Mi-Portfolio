import type { EducationEntry, ExperienceRole } from '../types';

/**
 * Professional experience — real roles only, no invented metrics.
 * Rendered below the existing capabilities grid in the Experience section,
 * so all prior content stays intact.
 */
export const experienceRoles: ExperienceRole[] = [
  {
    company: 'CitiHardware',
    title: 'Website Specialist / Developer',
    period: 'October 2025 – Present',
    current: true,
    highlights: [
      'Website development, maintenance, feature development, and bug fixing',
      'eCommerce and Saleor platform management',
      'Admin dashboard and internal tool development',
      'API integrations, data synchronization, and webhooks',
      'Website performance and analytics',
      'Continuous improvement of existing production systems',
    ],
  },
  {
    company: 'WorkwiseElite Auto Solution',
    title: 'Full-Stack Developer',
    period: 'December 2024 – June 2025',
    highlights: [
      'Developed full-stack features using React and JavaScript',
      'Built custom Chrome extensions to automate internal workflows',
      'Handled feature development, debugging, performance optimization, and deployment',
      'Worked on maintainable and scalable application architecture',
    ],
  },
  {
    company: 'WulaPal',
    title: 'Full-Stack Developer',
    period: 'December 2024 – June 2025',
    highlights: [
      'Blockchain-based digital paluwagan / group savings platform',
      'Developed using React, Node.js, and Solidity',
      'Implemented smart contract-based contribution and payout functionality',
      'Built responsive web and mobile interfaces',
      'Implemented transaction history and blockchain audit logging',
    ],
  },
  {
    company: 'DSWD-RRCY',
    title: 'Backend Developer & IT Support',
    period: 'June 2024 – December 2024',
    highlights: [
      'Developed internal systems using Laravel, Vue.js, Node.js, and Express.js',
      'Digitized manual workflows and records',
      'Assisted with system troubleshooting and IT support',
      'Collaborated with a development team on internal information systems',
    ],
  },
  {
    company: 'eCommerce Platform Project',
    title: 'Backend Developer',
    period: 'June 2024 – December 2024',
    highlights: [
      'Developed an eCommerce platform using PHP and CSS',
      'Implemented product catalog, shopping cart, authentication, and order tracking',
      'Worked with inventory and product management functionality',
      'Developed responsive layouts for different devices',
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Southeastern Philippines',
    detail: 'Major in Business Technology Management',
    period: '2021 – 2025',
    achievements: ['Cum Laude', "Dean's Lister", 'Internship Grade: 100'],
  },
];
