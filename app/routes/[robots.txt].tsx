import { sitemap } from "@packages/settings";

const ROBOT_CONTENT = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${sitemap.url}
`;

export function loader() {
  return new Response(ROBOT_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
