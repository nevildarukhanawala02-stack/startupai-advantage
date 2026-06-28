import { Request, Response, NextFunction } from "express";
import { getAllBlogPosts } from "./db";

/**
 * Dynamic sitemap.xml generator.
 * Includes all static pages and dynamically generated blog post URLs.
 */

const STATIC_PAGES = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/blog", priority: "0.9", changefreq: "daily" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/our-story", priority: "0.6", changefreq: "monthly" },
  { loc: "/how-it-works", priority: "0.8", changefreq: "monthly" },
  { loc: "/contact", priority: "0.6", changefreq: "monthly" },
  { loc: "/pricing", priority: "0.8", changefreq: "monthly" },
  { loc: "/resources", priority: "0.7", changefreq: "monthly" },
  { loc: "/get-started", priority: "0.8", changefreq: "monthly" },
  { loc: "/intelligence-systems/revenue-growth", priority: "0.7", changefreq: "monthly" },
  { loc: "/intelligence-systems/operational-excellence", priority: "0.7", changefreq: "monthly" },
  { loc: "/intelligence-systems/market-competitive", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/manufacturing", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/fmcg", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/retail", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/b2b-services", priority: "0.7", changefreq: "monthly" },
];

const BASE_URL = "https://startupaiadvantage.com";

export function sitemapMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/sitemap.xml") {
      return next();
    }

    try {
      const posts = await getAllBlogPosts();

      const staticUrls = STATIC_PAGES.map(
        (page) => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      ).join("\n");

      const blogUrls = posts
        .map(
          (post) => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.publishedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

      res.status(200).set({ "Content-Type": "application/xml" }).end(xml);
    } catch (error) {
      console.error("[Sitemap] Error generating sitemap:", error);
      // Return a minimal sitemap on error
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><priority>1.0</priority></url>
  <url><loc>${BASE_URL}/blog</loc><priority>0.9</priority></url>
</urlset>`;
      res.status(200).set({ "Content-Type": "application/xml" }).end(xml);
    }
  };
}

/**
 * robots.txt middleware
 */
export function robotsTxtMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/robots.txt") {
      return next();
    }

    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Allow all crawlers to index blog content
User-agent: Googlebot
Allow: /blog/

User-agent: GPTBot
Allow: /blog/

User-agent: ChatGPT-User
Allow: /blog/

User-agent: Claude-Web
Allow: /blog/

User-agent: PerplexityBot
Allow: /blog/

User-agent: Anthropic-AI
Allow: /blog/
`;

    res.status(200).set({ "Content-Type": "text/plain" }).end(robotsTxt);
  };
}
