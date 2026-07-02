import { Request, Response, NextFunction } from "express";
import { getBlogPostBySlug, getAllBlogPosts } from "./db";

/**
 * SSR middleware for blog routes.
 * Intercepts /blog and /blog/:slug requests and injects full HTML content
 * into the page so crawlers (Google, LLM bots) can index the content
 * without executing JavaScript.
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

function renderBodyToHtml(body: string): string {
  const lines = body.split("\n").filter((l) => l.trim() !== "");
  return lines
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`;
      } else if (trimmed.startsWith("### ")) {
        return `<h3>${escapeHtml(trimmed.slice(4))}</h3>`;
      } else if (trimmed.startsWith("# ")) {
        return `<h1>${escapeHtml(trimmed.slice(2))}</h1>`;
      } else {
        // Handle markdown bold and links
        let html = escapeHtml(trimmed);
        // Bold: **text**
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Links: [text](url)
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        return `<p>${html}</p>`;
      }
    })
    .join("\n");
}

function generateJsonLd(post: {
  title: string;
  slug: string;
  body: string;
  excerpt?: string | null;
  author: string;
  headerImageUrl?: string | null;
  publishedAt: number;
  series?: string | null;
}) {
  const baseUrl = "https://startupaiadvantage.com";
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.body.slice(0, 160),
    image: post.headerImageUrl || `${baseUrl}/logo512.png`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "StartupAI Advantage",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo512.png`,
      },
    },
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.publishedAt).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    articleSection: post.series || "Manufacturing",
    url: `${baseUrl}/blog/${post.slug}`,
  });
}

export function blogSSRMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    // Only handle /blog routes
    if (!url.startsWith("/blog")) {
      return next();
    }

    // Skip API requests and static assets
    if (url.includes("/api/") || url.includes(".")) {
      return next();
    }

    try {
      // Blog post detail page: /blog/:slug
      const slugMatch = url.match(/^\/blog\/([a-z0-9-]+)\/?$/);
      if (slugMatch) {
        const slug = slugMatch[1];
        const post = await getBlogPostBySlug(slug);

        if (!post) {
          return next(); // Let the SPA handle 404
        }

        const bodyHtml = renderBodyToHtml(post.body);
        const jsonLd = generateJsonLd(post);
        const description = post.excerpt || post.body.slice(0, 160).replace(/\n/g, " ");
        const baseUrl = "https://startupaiadvantage.com";

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
  <title>${escapeHtml(post.title)} | StartupAI Advantage Blog</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(post.title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${post.headerImageUrl || `${baseUrl}/logo512.png`}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${baseUrl}/blog/${post.slug}" />
  <meta property="article:published_time" content="${new Date(post.publishedAt).toISOString()}" />
  <meta property="article:author" content="${escapeHtml(post.author)}" />
  <meta property="article:section" content="${escapeHtml(post.series || "Manufacturing")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${post.headerImageUrl || `${baseUrl}/logo512.png`}" />
  <link rel="canonical" href="${baseUrl}/blog/${post.slug}" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body>
  <div id="root"></div>
  <!-- SSR Content for crawlers -->
  <article id="ssr-content" style="max-width:800px;margin:0 auto;padding:2rem;font-family:Inter,sans-serif;">
    <header>
      <nav><a href="/">StartupAI Advantage</a> &gt; <a href="/blog">Blog</a> &gt; ${escapeHtml(post.series || "Article")}</nav>
      ${post.headerImageUrl ? `<img src="${post.headerImageUrl}" alt="${escapeHtml(post.title)}" style="width:100%;max-height:400px;object-fit:cover;border-radius:8px;margin:1rem 0;" />` : ""}
      <h1>${escapeHtml(post.title)}</h1>
      <p><strong>By ${escapeHtml(post.author)}</strong> | ${post.series ? `Series: ${escapeHtml(post.series)}` : ""}</p>
    </header>
    <section>
      ${bodyHtml}
    </section>
    <footer>
      <p><a href="/blog">← Back to All Posts</a></p>
      <p><a href="/get-started">Book a Discovery Call</a> | <a href="/contact">Contact Us</a></p>
    </footer>
  </article>
  <script type="module" src="/src/main.tsx"></script>
  <script>
    // Hide SSR content once React hydrates
    if (document.getElementById('ssr-content')) {
      const observer = new MutationObserver(() => {
        const root = document.getElementById('root');
        if (root && root.children.length > 0) {
          document.getElementById('ssr-content').style.display = 'none';
          observer.disconnect();
        }
      });
      observer.observe(document.getElementById('root'), { childList: true });
    }
  </script>
</body>
</html>`;

        res.status(200).set({ "Content-Type": "text/html" }).end(html);
        return;
      }

      // Blog listing page: /blog
      // Always pass through to the SPA for the blog listing page.
      // The React app handles lazy loading with collapsed series and IntersectionObserver.
      // Crawlers will still get content via the sitemap + individual post SSR pages.
      if (url === "/blog" || url === "/blog/") {
        return next();
      }

      // Not a recognized blog route pattern, pass to SPA
      next();
    } catch (error) {
      console.error("[BlogSSR] Error:", error);
      next(); // Fall through to SPA on error
    }
  };
}
