/**
 * Single source of truth for personal details and site-wide SEO copy.
 * Update the canonical URL here and in `index.html` when the domain changes.
 */
export const site = {
  name: 'Michael Entero',
  fullName: 'Michael E. Entero',
  initials: 'ME',
  role: 'Web Developer',
  titles: ['Website Developer & Specialist', 'Full-Stack Web Developer'],
  location: 'Davao City, Philippines',
  availability: 'Available for Remote Work',
  experience: '4+ years',
  email: 'kelentero09@gmail.com',
  githubHandle: 'kelentero09',
  githubUrl: 'https://github.com/kelentero09',
  linkedinHandle: 'khaelzen',
  linkedinUrl: 'https://www.linkedin.com/in/khaelzen',
  mailto: 'mailto:kelentero09@gmail.com',
  profileImage: './profile.png',
  /** Replace with the production URL once the domain is final. */
  url: 'https://kelentero09.github.io/Portfolio/',
  title: 'Michael Entero | Web Developer',
  description:
    'Michael Entero is a Web Developer specializing in modern, responsive websites and web applications using React, Next.js, TypeScript, and modern web technologies.',
} as const;

export const heroContent = {
  eyebrow: 'Michael Entero — Web Developer',
  heading: 'I build practical websites for real businesses.',
  /** Split so a single phrase can carry the accent colour. */
  headingAccent: 'real businesses',
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
    'As a Website Developer & Specialist and Full-Stack Web Developer based in Davao City, Philippines, I build, maintain, and improve business websites, eCommerce platforms, internal systems, and web applications — covering responsive UI development, API integration, troubleshooting existing production systems, system improvements, and deployment. My core stack includes React, Next.js, JavaScript, TypeScript, Node.js, PHP, Laravel, PostgreSQL, REST APIs, and GraphQL, and I am available for remote work.',
  ],
  /** Capability statements — no invented employers or job history. */
  focus: [
    'Clean, maintainable code',
    'Responsive design',
    'Performance-conscious builds',
    'Business requirements first',
    'Practical problem solving',
    'API & database integration',
    'Production maintenance & debugging',
    'Team & remote collaboration',
  ],
} as const;

export const contactContent = {
  eyebrow: 'Contact',
  heading: 'Have a project in mind?',
  text: "I'm open to web development opportunities, freelance projects, and collaborations. Based in Davao City, Philippines and available for remote work.",
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