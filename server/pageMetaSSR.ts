import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import {
  CEO_COMMAND_CENTER_FAQS,
  CEO_COMMAND_CENTER_META,
  CEO_COMMAND_CENTER_PATH,
} from "../shared/ceoCommandCenter";

/**
 * Per-route head tags for pages that need their own title, description, social tags,
 * canonical URL and structured data in the HTML a crawler receives (before any script runs).
 *
 * The SPA otherwise serves the home page's head to every route. This middleware reads the
 * built index.html and swaps the head tags for the routes registered below. Production only:
 * in development Vite serves the template and the React page sets the same tags client-side.
 */

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceTag(html: string, pattern: RegExp, replacement: string): string {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `  ${replacement}\n  </head>`);
}

function ceoCommandCenterHtml(template: string): string {
  const m = CEO_COMMAND_CENTER_META;
  let html = template;

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`);
  html = replaceTag(html, /<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(m.description)}" />`);
  html = replaceTag(html, /<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(m.socialTitle)}" />`);
  html = replaceTag(html, /<meta\s+property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(m.socialDescription)}" />`);
  html = replaceTag(html, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${m.canonical}" />`);
  html = replaceTag(html, /<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(m.socialTitle)}" />`);
  html = replaceTag(html, /<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(m.twitterDescription)}" />`);
  html = replaceTag(html, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${m.canonical}" />`);

  // FAQPage data: only answers that are final. Unconfirmed answers (e.g. the security answer) are left out.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CEO_COMMAND_CENTER_FAQS.filter((f) => f.aPlain).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aPlain },
    })),
  };
  const ld = `<script type="application/ld+json" id="ceo-command-center-faq-ld">${JSON.stringify(faq).replace(/</g, "\\u003c")}</script>`;
  return html.replace("</head>", `  ${ld}\n  </head>`);
}

const ROUTES: Record<string, (template: string) => string> = {
  [CEO_COMMAND_CENTER_PATH]: ceoCommandCenterHtml,
};

export function pageMetaSSRMiddleware() {
  const indexPath = path.resolve(import.meta.dirname, "public", "index.html");
  let cached: string | null = null;

  return (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "development") return next();
    if (req.method !== "GET") return next();

    const pathname = req.path.replace(/\/+$/, "") || "/";
    const render = ROUTES[pathname];
    if (!render) return next();

    try {
      if (cached === null) cached = fs.readFileSync(indexPath, "utf-8");
      res.status(200).set({ "Content-Type": "text/html" }).end(render(cached));
    } catch (error) {
      console.error("[PageMetaSSR] Error:", error);
      next(); // fall through to the SPA with default tags
    }
  };
}
