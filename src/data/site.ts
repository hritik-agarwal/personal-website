/**
 * The one place the site reads about you.
 *
 * Every page imports from here; nothing personal is hard-coded in a
 * component. Blog posts are the markdown files beside this file in
 * ./blog, one per post, with the fields described in ../content.config.ts.
 *
 * Links, work history and education are real. The `now` and `reading`
 * lists are still example content to replace.
 */

export const site = {
  name: 'Hritik Agarwal',
  /** Feeds canonical links, the sitemap and RSS. */
  url: 'https://hritikagarwal.com',
  description: 'Full-stack and AI developer. I build software and write about what I learn.',
  locale: 'en',
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const hero = {
  headline: ['I build software', 'and write about it.'],
  claim:
    'Full-stack and AI developer. Most days that means TypeScript, Python and a model or two. Most nights, a book and a notebook.',
};

/** Short, current, dated by the fact that you will edit it. Shown on the home page. */
export const now = [
  {
    term: 'Building',
    text: 'A small framework for internal agents, in TypeScript, that I keep rewriting until it is boring.',
  },
  {
    term: 'Learning',
    text: 'How the falling cost of inference changes what software is worth building.',
  },
  {
    term: 'Reading',
    text: 'Richard Rhodes on the Manhattan Project, and a stack of essays on tacit knowledge.',
  },
];

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
  note: string;
};

export const about = {
  lede: 'I like solving problems, both in life and in code.',
  paragraphs: [
    'I am a software engineer in Bengaluru. For nearly three years I built Oliv, an AI companion for sales teams, and since April 2026 I have worked with founders one-on-one as a technical consultant, turning their ideas into working products. I build end to end: the interface, the API behind it and, increasingly, the model in the middle.',
    'Outside work I read a lot, mostly history and essays, and I keep a journal that occasionally turns into something worth publishing. The blog here is that overflow.',
    'This site is where the writing goes and where I keep a record of what I am working on. If something here is useful to you, I would like to hear about it.',
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
      note: 'Built Oliv, an AI companion that helps sales leaders streamline their process and close more deals. Clojure and Datomic.',
    },
    {
      years: 'Jun 2022 to Apr 2023',
      role: 'Software developer',
      place: 'Newzera, Indore',
      href: 'https://www.linkedin.com/company/newzera/',
      note: 'Shipped the swipeable fullscreen video newsfeed, in-app video shooting and editing, contact syncing and dark mode, and cut UI re-renders, animation glitches and crashes.',
    },
    {
      years: 'Dec 2020 to Feb 2021',
      role: 'Software engineer intern',
      place: 'Newton School, remote',
      href: 'https://www.linkedin.com/school/newtonschool/',
      note: 'Full-stack web apps in React and Node, unit tests in Cypress, and peer review of other members’ projects before release.',
    },
    {
      years: '2018 to 2022',
      role: 'B.Tech in Electrical, Electronics and Communications Engineering',
      place: 'IIT (ISM) Dhanbad',
      href: 'https://www.linkedin.com/school/iitism/',
      note: 'CGPA 8.57.',
    },
  ] as TimelineEntry[],
  stack: [
    { group: 'Languages', items: ['TypeScript', 'Python', 'Clojure', 'SQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Tailwind CSS', 'Node', 'Astro'] },
    { group: 'AI', items: ['LLM APIs', 'Evals', 'Retrieval'] },
    { group: 'Data and infra', items: ['PostgreSQL', 'MongoDB', 'Datomic', 'AWS', 'Netlify'] },
  ],
  reading: [
    { title: 'The Making of the Atomic Bomb', author: 'Richard Rhodes', status: 'reading' },
    { title: 'Working in Public', author: 'Nadia Eghbal', status: 'finished' },
    { title: 'A Writer’s Diary', author: 'Virginia Woolf', status: 'finished' },
  ] as { title: string; author: string; status: 'reading' | 'finished' }[],
};
