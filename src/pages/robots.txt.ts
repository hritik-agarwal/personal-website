import type { APIContext } from 'astro';

export function GET({ site }: APIContext) {
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
