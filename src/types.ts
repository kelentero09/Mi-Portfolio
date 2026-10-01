export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
}

export type ProjectSize = 'feature' | 'standard';

export interface Project {
  /** Stable id, also used for the preview image filename. */
  slug: string;
  name: string;
  /** Short label shown above the title, e.g. "Business Website". */
  category: string;
  description: string;
  /** Only technologies that are genuinely part of this project. */
  technologies: string[];
  /** Public demo URL. */
  demo?: string;
  /** Source repository URL. */
  repository?: string;
  /** Path to the screenshot in /public. */
  preview: string;
  /** Descriptive alt text for the screenshot. */
  previewAlt: string;
  /** Controls the editorial grid layout. */
  size: ProjectSize;
}

export type SkillIconName =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'html'
  | 'css'
  | 'tailwind'
  | 'node'
  | 'rest'
  | 'integration'
  | 'postgres'
  | 'prisma'
  | 'git'
  | 'github'
  | 'vercel'
  | 'supabase'
  | 'linux'
  | 'wordpress'
  | 'elementor'
  | 'webflow';

export interface Skill {
  name: string;
  icon: SkillIconName;
  /** One-line note describing how it is used. */
  note: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: ServiceIconName;
  /** Short mono keyword, e.g. "react · next.js". */
  keywords: string;
}

export type ServiceIconName = 'code' | 'briefcase' | 'layers' | 'plug' | 'wrench' | 'layout';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ExperienceFact {
  label: string;
  value: string;
}