import type { SkillGroup } from '../types';

/**
 * Only technologies Michael has listed as part of his stack appear here.
 * No proficiency percentages — capability is communicated through the work.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Interfaces, components, and responsive layouts.',
    skills: [
      { name: 'JavaScript', icon: 'javascript', note: 'Core language for the web' },
      { name: 'TypeScript', icon: 'typescript', note: 'Typed, maintainable application code' },
      { name: 'React', icon: 'react', note: 'Component-based UI development' },
      { name: 'Next.js', icon: 'nextjs', note: 'Server-rendered React applications' },
      { name: 'HTML', icon: 'html', note: 'Semantic, accessible markup' },
      { name: 'CSS', icon: 'css', note: 'Layout, responsive design, animation' },
      { name: 'Tailwind CSS', icon: 'tailwind', note: 'Utility-first styling systems' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'APIs, data, and server-side services.',
    skills: [
      { name: 'Node.js', icon: 'node', note: 'Server-side JavaScript runtime' },
      { name: 'REST APIs', icon: 'rest', note: 'Designing and consuming endpoints' },
      { name: 'API Integration', icon: 'integration', note: 'Connecting third-party services' },
      { name: 'PostgreSQL', icon: 'postgres', note: 'Relational data modelling' },
      { name: 'Prisma', icon: 'prisma', note: 'Typed database access layer' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    summary: 'Version control, hosting, and the local environment.',
    skills: [
      { name: 'Git', icon: 'git', note: 'Version control and branching' },
      { name: 'GitHub', icon: 'github', note: 'Repositories and deployment actions' },
      { name: 'Vercel', icon: 'vercel', note: 'Frontend hosting and previews' },
      { name: 'Supabase', icon: 'supabase', note: 'Managed backend and database' },
      { name: 'Linux / WSL', icon: 'linux', note: 'Terminal-based development workflow' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS & Page Builders',
    summary: 'Content-managed sites clients can maintain themselves.',
    skills: [
      {
        name: 'WordPress',
        icon: 'wordpress',
        note: 'Business sites, themes, plugins, and hosting',
      },
      {
        name: 'Elementor',
        icon: 'elementor',
        note: 'Drag-and-drop page design and landing pages',
      },
      {
        name: 'Webflow',
        icon: 'webflow',
        note: 'Visual site building and CMS-driven pages',
      },
    ],
  },
];