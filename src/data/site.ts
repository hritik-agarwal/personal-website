/**
 * The one place the site reads about you.
 *
 * Every page imports from here; nothing personal is hard-coded in a
 * component. Blog posts are the markdown files beside this file in
 * ./blog, one per post, with the fields described in ../content.config.ts.
 *
 * Everything below is example content. Replace it with your own.
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
  { label: 'GitHub', handle: 'hritik', href: 'https://github.com/' },
  { label: 'X', handle: '@hritik', href: 'https://x.com/' },
  { label: 'LinkedIn', handle: 'hritikagarwal', href: 'https://www.linkedin.com/' },
  { label: 'Email', handle: 'hello@example.com', href: 'mailto:hello@example.com' },
];

export const blog = {
  title: 'Blog',
  lede: 'Notes on building software, working with models, and whatever I am reading.',
};

export const about = {
  lede: 'A developer in the JavaScript and Python worlds, with a habit of writing things down.',
  paragraphs: [
    'I have spent the last few years building products end to end: the interface, the API behind it and, increasingly, the model in the middle. I like the whole stack because the interesting problems sit at the joints.',
    'Outside work I read a lot, mostly history and essays, and I keep a journal that occasionally turns into something worth publishing. The blog here is that overflow.',
    'This site is where the writing goes and where I keep a record of what I am working on. If something here is useful to you, I would like to hear about it.',
  ],
  timeline: [
    {
      years: '2024 to now',
      role: 'Full-stack and AI engineer',
      place: 'Example Labs',
      note: 'Agent tooling, evaluation pipelines and the product on top of them.',
    },
    {
      years: '2021 to 2024',
      role: 'Software engineer',
      place: 'Example Co',
      note: 'React and Node at first, then a data platform in Python.',
    },
    {
      years: '2017 to 2021',
      role: 'B.Tech, Computer Science',
      place: 'Example University',
      note: 'Where the journaling habit started.',
    },
  ],
  stack: [
    { group: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Astro', 'Node'] },
    { group: 'AI', items: ['LLM APIs', 'Evals', 'Retrieval', 'PyTorch, a little'] },
    { group: 'Infra', items: ['Postgres', 'Docker', 'Netlify', 'AWS'] },
  ],
  reading: [
    { title: 'The Making of the Atomic Bomb', author: 'Richard Rhodes', status: 'reading' },
    { title: 'Working in Public', author: 'Nadia Eghbal', status: 'finished' },
    { title: 'A Writer’s Diary', author: 'Virginia Woolf', status: 'finished' },
  ] as { title: string; author: string; status: 'reading' | 'finished' }[],
};
