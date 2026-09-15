# Personal website

Astro, fully static, deployed on Netlify.

## Where things live

- `src/data/site.ts` — everything the site says about you. Every page reads from here; nothing personal is hard-coded in a component.
- `src/data/blog/*.md` — one file per post. The frontmatter fields are defined in `src/content.config.ts`. `draft: true` shows a post in dev and hides it from builds.
- `src/pages/` — the routes. `src/layouts/Base.astro` is the shell around every page.
- `src/styles/global.css` — colour and type tokens, layout primitives. `prose.css` styles a post body.

## Run

```
npm install
npm run dev      # http://localhost:8029
npm run build    # writes the site to dist/
```

## Deploy

1. Push this folder to a Git repository and connect it on Netlify. `netlify.toml` sets the build command and publish directory.
2. Set `site.url` in `src/data/site.ts` to your domain. It feeds canonical links, the sitemap and the RSS feed.
3. Add the domain under Netlify's domain settings and point your DNS at it.
