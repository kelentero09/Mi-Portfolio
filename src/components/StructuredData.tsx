import { useEffect } from 'react';
import { projects } from '../data/projects';
import { site } from '../data/site';

const SCRIPT_ID = 'portfolio-structured-data';

/**
 * JSON-LD describing the person and their work. Only facts present on this
 * site are declared — no ratings, employers, or aggregate numbers.
 */
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}og-image.png`,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description: site.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Davao City',
        addressCountry: 'PH',
      },
      sameAs: [site.githubUrl],
      knowsAbout: [
        'Web Development',
        'Frontend Development',
        'Full-Stack Development',
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'PostgreSQL',
        'WordPress',
        'Elementor',
        'Webflow',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}#website`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': `${site.url}#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}#profilepage`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      description: site.description,
      isPartOf: { '@id': `${site.url}#website` },
      about: { '@id': `${site.url}#person` },
      mainEntity: { '@id': `${site.url}#person` },
    },
    {
      '@type': 'ItemList',
      '@id': `${site.url}#projects`,
      name: 'Projects by Michael Entero',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: project.name,
          description: project.description,
          url: project.repository ?? project.demo ?? site.url,
          programmingLanguage: project.technologies,
          author: { '@id': `${site.url}#person` },
        },
      })),
    },
  ],
};

export function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = SCRIPT_ID;
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);
    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
}