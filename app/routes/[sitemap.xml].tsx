import { sitemap } from "@packages/settings";

const SITEMAP_CONTENT = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
${sitemap.urls
  .map(
    (url) => `
<loc>${url.loc}</loc>
<lastmod>${url.lastmod}</lastmod>
<priority>${url.priority}</priority>
`,
  )
  .join("\n")}
</url>
</urlset>
`;

export function loader() {
  return new Response(SITEMAP_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
}
