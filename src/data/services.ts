import type { ProcessStep, Service } from '../types';

/** Capabilities — deliberately not an employment history. */
export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Building responsive and modern websites using React, Next.js, TypeScript, and modern CSS frameworks.',
    icon: 'code',
    keywords: 'react · next.js',
  },
  {
    title: 'Business Websites',
    description:
      'Creating professional websites for businesses to showcase their services, products, company information, and contact channels.',
    icon: 'briefcase',
    keywords: 'services · products · inquiry',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Developing applications that connect frontend interfaces with APIs, databases, and backend services.',
    icon: 'layers',
    keywords: 'node.js · postgresql',
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party services and APIs into web applications.',
    icon: 'plug',
    keywords: 'rest · third-party',
  },
  {
    title: 'Website Maintenance',
    description:
      'Updating, improving, troubleshooting, and maintaining existing websites and web applications.',
    icon: 'wrench',
    keywords: 'updates · fixes · upkeep',
  },
  {
    title: 'CMS & Page Builders',
    description:
      'Building and customizing WordPress, Elementor, and Webflow sites, set up so clients can update their own content.',
    icon: 'layout',
    keywords: 'wordpress · elementor · webflow',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the business, requirements, users, and goals.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Plan the structure, features, technology, and user experience.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop a responsive and maintainable website.',
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Test, optimize, fix issues, and improve the final experience.',
  },
];