/**
 * Single source of truth for personal details and site-wide SEO copy.
 * Update the canonical URL here and in `index.html` when the domain changes.
 */
export const site = {
  name: 'Michael Entero',
  initials: 'ME',
  role: 'Web Developer',
  location: 'Davao City, Philippines',
  experience: '4+ years',
  email: 'kelentero09@gmail.com',
  githubHandle: 'kelentero09',
  githubUrl: 'https://github.com/kelentero09',
  mailto: 'mailto:kelentero09@gmail.com',
  /** Replace with the production URL once the domain is final. */
  url: 'https://kelentero09.github.io/Portfolio/',
  title: 'Michael Entero | Web Developer',
  description:
    'Michael Entero is a Web Developer specializing in modern, responsive websites and web applications using React, Next.js, TypeScript, and modern web technologies.',
} as const;

export const heroContent = {
  eyebrow: 'Michael Entero — Web Developer',
  heading: 'Web Developer building modern, scalable, and business-focused websites.',
  /** Split so a single phrase can carry the accent colour. */
  headingAccent: 'business-focused',
  supporting:
    'I build responsive websites and web applications using modern technologies, with a focus on performance, usability, and clean development.',
  meta: [
    { label: 'Location', value: 'Davao City, PH' },
    { label: 'Experience', value: '4+ years' },
    { label: 'Focus', value: 'Web & Full-Stack Development' },
  ],
} as const;

export const aboutContent = {
  eyebrow: 'About Me',
  heading: 'Modern, responsive, and practical web solutions.',
  paragraphs: [
    "I'm Michael Entero, a Web Developer focused on creating modern, responsive, and practical web solutions. I work across frontend and full-stack development, turning business requirements into functional and polished digital experiences.",
    'I have experience working with modern JavaScript frameworks, APIs, databases, deployment platforms, and business-oriented websites.',
  ],
  /** Capability statements — no invented employers or job history. */
  focus: [
    'Clean, maintainable code',
    'Responsive design',
    'Performance-conscious builds',
    'Business requirements first',
    'Practical problem solving',
  ],
} as const;

export const contactContent = {
  eyebrow: 'Contact',
  heading: 'Have a project in mind?',
  text: "I'm open to web development opportunities, freelance projects, and collaborations.",
} as const;

export const githubContent = {
  heading: 'Building, experimenting, and learning through code.',
  text: 'Explore my repositories and development work on GitHub.',
  buttonLabel: 'View GitHub',
} as const;

export const processContent = {
  eyebrow: 'Development Approach',
  heading: 'A simple, repeatable process.',
} as const;

export const servicesContent = {
  eyebrow: 'Experience',
  heading: 'What I Do',
  text: 'Capabilities I bring to a project, from the first requirement to a maintained, production-ready website.',
} as const;

export const skillsContent = {
  eyebrow: 'Skills',
  heading: 'Technologies I work with.',
  text: 'The stack I use to design, build, and ship modern web projects.',
} as const;

export const projectsContent = {
  eyebrow: 'Projects',
  heading: 'Selected work.',
  text: 'Business websites and web applications I designed and built — each one focused on clarity, performance, and real requirements.',
} as const;

export const footerContent = {
  note: 'Building modern, responsive websites and web applications.',
} as const;