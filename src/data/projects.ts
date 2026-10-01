import type { Project } from '../types';

/**
 * Every project below is real. The `technologies` lists were verified against
 * each site's own source/runtime (build assets, `package.json`, framework
 * fingerprints) rather than guessed — see README.
 *
 * `size` drives the editorial grid. At `lg` the grid is 6 columns, so the
 * ordering below always fills complete rows:
 *   feature(4) + standard(2) | standard(2) x3 | feature(4) + standard(2)
 *
 * To add a project: append an entry, drop a screenshot at
 * `public/previews/<slug>.jpg`, and give it a `size` that keeps each row full.
 */
export const projects: Project[] = [
  {
    slug: 'cmf-works',
    name: 'CMF Works',
    category: 'Business Website',
    description:
      'A professional business website for a refrigeration and air-conditioning services company, presenting services, coverage areas, and clear contact channels.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://kelentero09.github.io/CMF-Works/',
    preview: './previews/cmf-works.jpg',
    previewAlt:
      'Screenshot of the CMF Works website showing the refrigeration and air-conditioning services homepage.',
    size: 'feature',
  },
  {
    slug: 'clm-electronics',
    name: 'CLM Electronics',
    category: 'Business / Industrial Website',
    description:
      'A professional industrial electronics and manufacturing website featuring products, services, equipment, company information, and business-focused content.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://clmelectronics.vercel.app/',
    preview: './previews/clm-electronics.jpg',
    previewAlt:
      'Screenshot of the CLM Electronics website showing the engineering services homepage with navigation and company information.',
    size: 'standard',
  },
  {
    slug: 'sureparts',
    name: 'SureParts OPC',
    category: 'Business / Product Website',
    description:
      'An industrial surplus and parts business website designed to present products, categories, company information, and customer inquiries in a professional format.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://sureparts.vercel.app/',
    preview: './previews/sureparts.jpg',
    previewAlt:
      'Screenshot of the SureParts Trading website showing the industrial parts product listing and category filters.',
    size: 'standard',
  },
  {
    slug: 'buildfolio',
    name: 'Buildfolio',
    category: 'Portfolio / Business Website',
    description:
      'A modern portfolio and construction-oriented website concept focused on presenting projects, services, and business information.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://buildfolio-show.vercel.app/',
    preview: './previews/buildfolio.jpg',
    previewAlt:
      'Screenshot of the Buildfolio construction website showing the hero section and service highlights.',
    size: 'standard',
  },
  {
    slug: 'apexbuild',
    name: 'ApexBuild',
    category: 'Business Website',
    description:
      'A modern construction and building services website focused on professional presentation, responsive design, and service showcasing.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demo: 'https://kelentero09.github.io/Apexbuild/',
    preview: './previews/apexbuild.jpg',
    previewAlt:
      'Screenshot of the ApexBuild construction website showing the homepage hero and services section.',
    size: 'standard',
  },
  {
    slug: 'ai-tools-hub',
    name: 'AI Tools Hub',
    category: 'Web Application / AI',
    description:
      'A web application for discovering and organizing AI tools through a modern and user-friendly interface.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://ai-tools-hub-eta-lilac.vercel.app/',
    preview: './previews/ai-tools-hub.jpg',
    previewAlt:
      'Screenshot of the AI Tools Hub web application showing the AI tool discovery interface.',
    size: 'feature',
  },
  {
    slug: 'aoda',
    name: 'Aoda Gensets',
    category: 'Business Website',
    description:
      'A business website project created for an industrial generator and power solutions company.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repository: 'https://github.com/kelentero09/Aoda',
    preview: './previews/aoda.jpg',
    previewAlt:
      'Screenshot of the Aoda generator set supplier website repository on GitHub.',
    size: 'standard',
  },
];

/** Every project exposes at least one external link. */
export const featuredProjects = projects;

/** Primary call to action for a card: the live site when there is one. */
export function primaryLink(project: Project) {
  if (project.demo) {
    return { label: 'Live Demo', href: project.demo, kind: 'demo' as const };
  }
  if (project.repository) {
    return { label: 'View Code', href: project.repository, kind: 'repo' as const };
  }
  return null;
}

/** Secondary link, shown only when both a demo and a repository exist. */
export function secondaryLink(project: Project) {
  if (project.demo && project.repository) {
    return { label: 'View Code', href: project.repository, kind: 'repo' as const };
  }
  return null;
}