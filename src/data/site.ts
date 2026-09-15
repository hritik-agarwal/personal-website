/**
 * The one place the site reads about you.
 *
 * Every page imports from here; nothing personal is hard-coded in a
 * component. Blog posts are the markdown files beside this file in
 * ./blog, one per post, with the fields described in ../content.config.ts.
 *
 * Links, employer and education are real. Anything marked TODO, and the
 * `now` and `reading` lists, are still example content to replace.
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

export const about = {
  lede: 'I like solving problems, both in life and in code.',
  paragraphs: [
    'I am a software engineer and technical contractor in Bengaluru, currently at Oliv AI. I studied at IIT (ISM) Dhanbad, class of 2022. I build products end to end: the interface, the API behind it and, increasingly, the model in the middle.',
    'Outside work I read a lot, mostly history and essays, and I keep a journal that occasionally turns into something worth publishing. The blog here is that overflow.',
    'This site is where the writing goes and where I keep a record of what I am working on. If something here is useful to you, I would like to hear about it.',
  ],
  timeline: [
    {
      years: 'TODO start year to now',
      role: 'Software engineer',
      place: 'Oliv AI, Bengaluru',
      note: 'TODO one line on what you build there.',
    },
    {
      years: 'TODO',
      role: 'TODO earlier role',
      place: 'TODO company',
      note: 'TODO. LinkedIn lists two earlier roles that are only visible when signed in.',
    },
    {
      years: '2018 to 2022',
      role: 'B.Tech',
      place: 'IIT (ISM) Dhanbad',
      note: 'TODO branch, and anything worth saying about those years.',
    },
  ],
  stack: [
    { group: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Tailwind CSS', 'Node', 'Astro'] },
    { group: 'AI', items: ['LLM APIs', 'Evals', 'Retrieval'] },
    { group: 'Data and infra', items: ['PostgreSQL', 'MongoDB', 'AWS', 'Netlify'] },
  ],
  reading: [
    { title: 'The Making of the Atomic Bomb', author: 'Richard Rhodes', status: 'reading' },
    { title: 'Working in Public', author: 'Nadia Eghbal', status: 'finished' },
    { title: 'A Writer’s Diary', author: 'Virginia Woolf', status: 'finished' },
  ] as { title: string; author: string; status: 'reading' | 'finished' }[],
};
