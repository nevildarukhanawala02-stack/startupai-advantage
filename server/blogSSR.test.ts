import { describe, it, expect } from "vitest";

/**
 * Blog SSR & Sitemap integration tests.
 * These test the server endpoints directly via HTTP.
 */

const BASE = "http://localhost:3000";

describe("Blog SSR Middleware", () => {
  it("returns full HTML with article content for a blog post slug", async () => {
    const res = await fetch(`${BASE}/blog/factory-runs-real-time-information`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/html");

    const html = await res.text();
    // Should contain the article title
    expect(html).toContain("The Factory Runs in Real Time");
    // Should contain JSON-LD structured data
    expect(html).toContain("application/ld+json");
    expect(html).toContain('"@type":"Article"');
    // Should contain Open Graph meta tags
    expect(html).toContain('og:title');
    expect(html).toContain('og:description');
    // Should contain the React app script for hydration
    expect(html).toContain("src/main.tsx");
    // Should contain the SSR content div
    expect(html).toContain("ssr-content");
    // Should contain actual body paragraphs
    expect(html).toContain("<p>");
  });

  it("returns SPA shell on /blog in development (SSR skipped for lazy loading)", async () => {
    const res = await fetch(`${BASE}/blog`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/html");

    const html = await res.text();
    // In dev mode, SSR is skipped for /blog listing so React handles lazy loading
    // Should contain the React app mount point and script
    expect(html).toContain("root");
    expect(html).toContain("src/main.tsx");
  });

  it("falls through to SPA for non-existent slugs", async () => {
    const res = await fetch(`${BASE}/blog/non-existent-slug-xyz`);
    // Should still return 200 (SPA handles 404 display)
    expect(res.status).toBe(200);
    const html = await res.text();
    // SPA fallback (Vite dev HTML) should have root div
    expect(html).toContain("root");
  });
});

describe("Sitemap.xml", () => {
  it("returns valid XML with all blog URLs", async () => {
    const res = await fetch(`${BASE}/sitemap.xml`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("application/xml");

    const xml = await res.text();
    // Should be valid sitemap format
    expect(xml).toContain('<?xml version="1.0"');
    expect(xml).toContain("urlset");
    // Should contain static pages
    expect(xml).toContain("https://startupaiadvantage.com/");
    expect(xml).toContain("https://startupaiadvantage.com/blog");
    // Should contain blog post URLs
    expect(xml).toContain("https://startupaiadvantage.com/blog/factory-runs-real-time-information");
    // Should have at least 69 blog URLs + static pages
    const urlCount = (xml.match(/<loc>/g) || []).length;
    expect(urlCount).toBeGreaterThanOrEqual(69 + 10);
  });
});

describe("Robots.txt", () => {
  it("returns valid robots.txt with sitemap reference", async () => {
    const res = await fetch(`${BASE}/robots.txt`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/plain");

    const text = await res.text();
    expect(text).toContain("User-agent: *");
    expect(text).toContain("Allow: /");
    expect(text).toContain("Sitemap: https://startupaiadvantage.com/sitemap.xml");
    // Should allow LLM crawlers
    expect(text).toContain("GPTBot");
    expect(text).toContain("PerplexityBot");
  });
});
