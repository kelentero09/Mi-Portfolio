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
      { name: 'Vue.js', icon: 'react', note: 'Component-based UI development' },
      { name: 'HTML', icon: 'html', note: 'Semantic, accessible markup' },
      { name: 'CSS', icon: 'css', note: 'Layout, responsive design, animation' },
      { name: 'Tailwind CSS', icon: 'tailwind', note: 'Utility-first styling systems' },
      { name: 'Bootstrap', icon: 'tailwind', note: 'Responsive component framework' },
      { name: 'Vite', icon: 'node', note: 'Fast frontend build tooling' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'APIs, data, and server-side services.',
    skills: [
      { name: 'Node.js', icon: 'node', note: 'Server-side JavaScript runtime' },
      { name: 'Express.js', icon: 'node', note: 'Node.js API and server framework' },
      { name: 'PHP', icon: 'node', note: 'Server-side web development' },
      { name: 'Laravel', icon: 'node', note: 'PHP framework for internal systems' },
      { name: 'REST APIs', icon: 'rest', note: 'Designing and consuming endpoints' },
      { name: 'GraphQL', icon: 'rest', note: 'Typed API queries and integrations' },
      { name: 'API Integration', icon: 'integration', note: 'Connecting third-party services' },
      { name: 'PostgreSQL', icon: 'postgres', note: 'Relational data modelling' },
      { name: 'Prisma', icon: 'prisma', note: 'Typed database access layer' },
      { name: 'JWT', icon: 'rest', note: 'Token-based authentication' },
      { name: 'OAuth 2.0', icon: 'rest', note: 'Delegated authorization flows' },
      { name: 'Role-Based Access Control', icon: 'integration', note: 'Permission-based access' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    summary: 'Storage, records, and data synchronization.',
    skills: [
      { name: 'MySQL', icon: 'postgres', note: 'Relational inventory and product data' },
      { name: 'MongoDB', icon: 'supabase', note: 'Document-based application data' },
      { name: 'SQLite', icon: 'postgres', note: 'Lightweight embedded database' },
      { name: 'Firebase', icon: 'supabase', note: 'Realtime backend and data services' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    summary: 'Storefronts, platforms, and data flows.',
    skills: [
      { name: 'Saleor', icon: 'integration', note: 'Headless eCommerce platform management' },
      { name: 'Headless Commerce', icon: 'integration', note: 'Decoupled storefront architecture' },
      { name: 'Webhooks', icon: 'rest', note: 'Event-driven system integrations' },
      { name: 'Data Synchronization', icon: 'integration', note: 'Keeping systems in sync' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    summary: 'Version control, hosting, AI assistants, and design tools.',
    skills: [
      { name: 'Git', icon: 'git', note: 'Version control and branching' },
      { name: 'GitHub', icon: 'github', note: 'Repositories and deployment actions' },
      { name: 'Postman', icon: 'rest', note: 'API testing and debugging' },
      { name: 'Docker', icon: 'linux', note: 'Containerized development environments' },
      { name: 'VS Code', icon: 'linux', note: 'Daily development environment' },
      { name: 'Cursor', icon: 'node', note: 'AI-powered code editor' },
      { name: 'OpenCode', icon: 'node', note: 'AI coding agent in the terminal' },
      { name: 'Claude', icon: 'integration', note: 'AI assistant for coding and writing' },
      { name: 'ChatGPT', icon: 'integration', note: 'AI assistant for research and drafting' },
      { name: 'Figma', icon: 'webflow', note: 'UI design and prototyping' },
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