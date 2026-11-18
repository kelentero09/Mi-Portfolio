import type { Project, ProjectStack } from '../types';

/**
 * Every project below is real and links to a live site. The `technologies`
 * lists were verified against each site's own source/runtime (build assets,
 * `package.json`, framework fingerprints) rather than guessed — see README.
 * Entries labelled "Concept", "Demo" or "Template" are self-initiated builds
 * for fictional businesses, and say so.
 *
 * `size` drives the editorial grid. At `lg` the grid is 6 columns, so the
 * ordering below always fills complete rows:
 *   feature(4) + standard(2) | standard(2) x3 | standard(2) + feature(4)
 *   | standard(2) x3 | standard(2) x3
 *
 * To add a project: add an entry, drop a screenshot at
 * `public/previews/<slug>.jpg`, and give it a `size` that keeps each row full.
 */

const NEXT_STACK = ['Next.js', 'React', 'Tailwind CSS', 'Vercel'];
const VITE_STACK = ['React', 'TypeScript', 'Tailwind CSS', 'Vite'];
const STATIC_STACK = ['HTML', 'CSS', 'JavaScript'];

export const projects: Project[] = [
  {
    slug: 'aaa',
    name: 'AAA Architects & Builders',
    category: 'Concept / Architecture Website',
    description:
      'An editorial-style sample website for a fictional tropical-modern design-and-build firm, with a filterable project portfolio, single-project pages, and a contact page.',
    technologies: STATIC_STACK,
    demo: 'https://kelentero09.github.io/AAA/',
    repository: 'https://github.com/kelentero09/AAA',
    preview: './previews/aaa.jpg',
    previewAlt:
      'Screenshot of the AAA Architects & Builders sample website showing a full-screen architectural hero image and serif headline.',
    size: 'feature',
    stack: 'static',
  },
  {
    slug: 'clm-electronics',
    name: 'CLM Electronics',
    category: 'Business / Industrial Website',
    description:
      'A professional industrial electronics and manufacturing website featuring products, services, equipment, company information, and business-focused content.',
    technologies: NEXT_STACK,
    demo: 'https://clmelectronics.vercel.app/',
    preview: './previews/clm-electronics.jpg',
    previewAlt:
      'Screenshot of the CLM Electronics website showing the engineering services homepage with navigation and company information.',
    size: 'standard',
    stack: 'next',
  },
  {
    slug: 'tibay',
    name: 'Tibay Builders & Supply Co.',
    category: 'Concept / Construction Website',
    description:
      'A single-page sample website for a fictional construction company in Lipa City, Batangas, with services, a project gallery, a reviews carousel, an FAQ, and a quote request form.',
    technologies: STATIC_STACK,
    demo: 'https://kelentero09.github.io/Tibay/',
    repository: 'https://github.com/kelentero09/Tibay',
    preview: './previews/tibay.jpg',
    previewAlt:
      'Screenshot of the Tibay Builders & Supply Co. sample website showing the construction hero section and quote buttons.',
    size: 'standard',
    stack: 'static',
  },
  {
    slug: 'sureparts',
    name: 'SureParts OPC',
    category: 'Business / Product Website',
    description:
      'An industrial surplus and parts business website designed to present products, categories, company information, and customer inquiries in a professional format.',
    technologies: NEXT_STACK,
    demo: 'https://sureparts.vercel.app/',
    preview: './previews/sureparts.jpg',
    previewAlt:
      'Screenshot of the SureParts Trading website showing the industrial parts product listing and category filters.',
    size: 'standard',
    stack: 'next',
  },
  {
    slug: 'buildwise',
    name: 'Buildwise',
    category: 'Web Application',
    description:
      'A project profitability tracker for small contractors: set budgets, record expenses, and monitor client payments to see the actual profit on every job.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    demo: 'https://buildwise-ecru-nine.vercel.app/',
    repository: 'https://github.com/kelentero09/Buildwise',
    preview: './previews/buildwise.jpg',
    previewAlt:
      'Screenshot of the Buildwise web application landing page describing budget, expense, and payment tracking for contractors.',
    size: 'standard',
    stack: 'next',
  },
  {
    slug: 'cmf-works',
    name: 'CMF Works',
    category: 'Business Website',
    description:
      'A professional business website for a refrigeration and air-conditioning services company, presenting services, coverage areas, and clear contact channels.',
    technologies: STATIC_STACK,
    demo: 'https://kelentero09.github.io/CMF-Works/',
    preview: './previews/cmf-works.jpg',
    previewAlt:
      'Screenshot of the CMF Works website showing the refrigeration and air-conditioning services homepage.',
    size: 'standard',
    stack: 'static',
  },
  {
    slug: 'ai-tools-hub',
    name: 'AI Tools Hub',
    category: 'Web Application / AI',
    description:
      'A web application for discovering and organizing AI tools through a modern and user-friendly interface.',
    technologies: NEXT_STACK,
    demo: 'https://ai-tools-hub-eta-lilac.vercel.app/',
    preview: './previews/ai-tools-hub.jpg',
    previewAlt:
      'Screenshot of the AI Tools Hub web application showing the AI tool discovery interface.',
    size: 'feature',
    stack: 'next',
  },
  {
    slug: 'aoda',
    name: 'Aoda Gensets',
    category: 'Business / Industrial Website',
    description:
      'A website for a direct generator set supplier and importer, presenting brand-new gensets from 25kVA to 1000kVA for construction, commercial, and industrial use.',
    technologies: VITE_STACK,
    demo: 'https://kelentero09.github.io/Aoda/',
    repository: 'https://github.com/kelentero09/Aoda',
    preview: './previews/aoda.jpg',
    previewAlt:
      'Screenshot of the Aoda Gensets website showing the generator set supplier homepage.',
    size: 'standard',
    stack: 'react',
  },
  {
    slug: 'apexbuild',
    name: 'ApexBuild',
    category: 'Business Website',
    description:
      'A modern construction and building services website focused on professional presentation, responsive design, and service showcasing.',
    technologies: VITE_STACK,
    demo: 'https://kelentero09.github.io/Apexbuild/',
    preview: './previews/apexbuild.jpg',
    previewAlt:
      'Screenshot of the ApexBuild construction website showing the homepage hero and services section.',
    size: 'standard',
    stack: 'react',
  },
  {
    slug: 'buildfolio',
    name: 'Buildfolio',
    category: 'Portfolio / Business Website',
    description:
      'A modern portfolio and construction-oriented website concept focused on presenting projects, services, and business information.',
    technologies: NEXT_STACK,
    demo: 'https://buildfolio-show.vercel.app/',
    preview: './previews/buildfolio.jpg',
    previewAlt:
      'Screenshot of the Buildfolio construction website showing the hero section and service highlights.',
    size: 'standard',
    stack: 'next',
  },
  {
    slug: 'solidbuild',
    name: 'SolidBuild Construction',
    category: 'Demo / Construction Website',
    description:
      'A multi-page demo website for a construction and contracting company, with service listings, project showcases, and quote-request calls to action throughout.',
    technologies: VITE_STACK,
    demo: 'https://kelentero09.github.io/Contractor-Construction/',
    repository: 'https://github.com/kelentero09/Contractor-Construction',
    preview: './previews/solidbuild.jpg',
    previewAlt:
      'Screenshot of the SolidBuild Construction demo website showing the hero section with a free quote panel.',
    size: 'standard',
    stack: 'react',
  },
  {
    slug: 'smileright',
    name: 'SmileRight Dental Clinic',
    category: 'Demo / Clinic Website',
    description:
      'A demo website for a family dental clinic, presenting services, a gallery, and clear appointment-booking calls to action.',
    technologies: VITE_STACK,
    demo: 'https://kelentero09.github.io/Dental-Clinic/',
    repository: 'https://github.com/kelentero09/Dental-Clinic',
    preview: './previews/smileright.jpg',
    previewAlt:
      'Screenshot of the SmileRight Dental Clinic demo website showing the hero section and appointment buttons.',
    size: 'standard',
    stack: 'react',
  },
  {
    slug: 'northstar',
    name: 'Northstar Trading & Services',
    category: 'Website Template',
    description:
      'A reusable small-business website template with sections for services, a gallery, and contact details, ready to be rebranded for a client.',
    technologies: VITE_STACK,
    demo: 'https://kelentero09.github.io/Website-Template/',
    repository: 'https://github.com/kelentero09/Website-Template',
    preview: './previews/northstar.jpg',
    previewAlt:
      'Screenshot of the Northstar Trading & Services template showing the homepage hero and navigation.',
    size: 'standard',
    stack: 'react',
  },
];

export type ProjectFilter = 'all' | ProjectStack;

/** Filter tabs shown above the grid, in display order. */
export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'next', label: 'Next.js' },
  { id: 'react', label: 'React + Vite' },
  { id: 'static', label: 'HTML / CSS / JS' },
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
