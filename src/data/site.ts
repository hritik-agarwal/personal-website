/**
 * The one place the site reads about you.
 *
 * Every page imports from here; nothing personal is hard-coded in a
 * component. Blog posts are the markdown files beside this file in
 * ./blog, one per post, with the fields described in ../content.config.ts.
 *
 * Links, work history and education are real. The posts in ./blog are
 * still examples.
 */

export const site = {
  name: 'Hritik Agarwal',
  /** Feeds canonical links, the sitemap and RSS. */
  url: 'https://hritikagarwal.com',
  description: 'Full-stack and AI developer. I build software and write about what I learn.',
  locale: 'en',
};

export const links = [
  { label: 'GitHub', handle: 'hritik-agarwal', href: 'https://github.com/hritik-agarwal' },
  { label: 'X', handle: '@htkzone', href: 'https://x.com/htkzone' },
  { label: 'LinkedIn', handle: 'hritik-agarwal', href: 'https://www.linkedin.com/in/hritik-agarwal' },
  { label: 'Email', handle: 'hritikagarwal456@gmail.com', href: 'mailto:hritikagarwal456@gmail.com' },
];

export const blog = {
  title: 'Blog',
  lede: 'Notes on building software, working with models, and whatever I am reading.',
};

export type TimelineEntry = {
  years: string;
  role: string;
  place: string;
  /** Where the place name links to, when it does. */
  href?: string;
  /** A square logo in public/logos, shown on the timeline. */
  logo?: string;
  note: string;
};

export const about = {
  lede: 'I like solving problems, both in life and in code.',
  paragraphs: [
    'I am Hritik Agarwal, a software engineer in Bengaluru. I spent nearly three years building Oliv, an AI companion for sales teams, and since April 2026 I have worked one-on-one with founders as a technical consultant, turning ideas into working products.',
  ],
  timeline: [
    {
      years: 'Apr 2026 to now',
      role: 'Technical consultant',
      place: 'Self-employed',
      note: 'Working with founders one-on-one to build their ideas.',
    },
    {
      years: 'Jun 2023 to Mar 2026',
      role: 'Senior product engineer',
      place: 'Oliv AI, remote from Bengaluru',
      href: 'https://www.linkedin.com/company/oliv-ai/',
      logo: '/logos/oliv-ai.png',
      note: 'Built Oliv, an AI companion that helps sales leaders streamline their process and close more deals. Clojure and Datomic.',
    },
    {
      years: 'Jun 2022 to Apr 2023',
      role: 'Software developer',
      place: 'Newzera, Indore',
      href: 'https://www.linkedin.com/company/newzera/',
      logo: '/logos/newzera.png',
      note: 'Shipped the swipeable fullscreen video newsfeed, in-app video shooting and editing, contact syncing and dark mode, and cut UI re-renders, animation glitches and crashes.',
    },
    {
      years: 'Dec 2020 to Feb 2021',
      role: 'Software engineer intern',
      place: 'Newton School, remote',
      href: 'https://www.linkedin.com/school/newtonschool/',
      logo: '/logos/newton-school.png',
      note: 'Full-stack web apps in React and Node, unit tests in Cypress, and peer review of other members’ projects before release.',
    },
    {
      years: '2018 to 2022',
      role: 'B.Tech in Electrical, Electronics and Communications Engineering',
      place: 'IIT (ISM) Dhanbad',
      href: 'https://www.linkedin.com/school/iitism/',
      logo: '/logos/iitism.png',
      note: 'CGPA 8.57.',
    },
  ] as TimelineEntry[],
  stack: [
    { group: 'Languages', items: ['TypeScript', 'Python', 'Clojure', 'SQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Tailwind CSS', 'Node', 'Astro'] },
    { group: 'AI', items: ['LLM APIs', 'Evals', 'Retrieval'] },
    { group: 'Data and infra', items: ['PostgreSQL', 'MongoDB', 'Datomic', 'AWS', 'Netlify'] },
  ],
};
