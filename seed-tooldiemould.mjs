import mysql from "mysql2/promise";
import fs from "fs";

const SERIES_NAME = "Tool Die & Mould Week";
const PARENT_SERIES = "Manufacturing Week";
const BRAND_PILLAR = "manufacturing";
const ID_START = 40001;
const POSTS_JSON_PATH = "/home/ubuntu/tooldiemould_posts.json";

const HEADER_IMAGES = {
  "tool-die-mould-every-mould-is-a-bet": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-01-every-mould-bet-AKaivH4HZ5t3AEUk9QzvBi.webp",
  "tool-die-mould-ran-over": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-02-ran-over-NZZJvFM6K3SYkGcwGuysX8.webp",
  "tool-die-mould-cash-on-shop-floor": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-03-cash-shop-floor-gHyE9UR9wrcqDtPbYZeBaH.webp",
  "tool-die-mould-true-cost-of-job": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-04-true-cost-job-CH9kdFaqtRZZjfx38boBhJ.webp",
  "tool-die-mould-cash-tied-in-jobs": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-05-cash-tied-jobs-HvhknxhRtAi4unbHBZdWuL.webp",
  "tool-die-mould-quote-from-past-data": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-06-quote-past-data-jDh3m98BiPejL36yy3pLkX.webp",
  "tool-die-mould-customer-stopped-asking": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-tdm-07-customer-stopped-TjNn9q7JGH2gZyD5t46329.webp",
};

// Slug mapping for interlinks - within-branch + upward links
const ALL_SLUGS = {
  // Within-branch (tool-die-mould)
  "tool-die-mould-every-mould-is-a-bet": "/blog/tool-die-mould-every-mould-is-a-bet",
  "tool-die-mould-ran-over": "/blog/tool-die-mould-ran-over",
  "tool-die-mould-cash-on-shop-floor": "/blog/tool-die-mould-cash-on-shop-floor",
  "tool-die-mould-true-cost-of-job": "/blog/tool-die-mould-true-cost-of-job",
  "tool-die-mould-cash-tied-in-jobs": "/blog/tool-die-mould-cash-tied-in-jobs",
  "tool-die-mould-quote-from-past-data": "/blog/tool-die-mould-quote-from-past-data",
  "tool-die-mould-customer-stopped-asking": "/blog/tool-die-mould-customer-stopped-asking",
  // Upward links (Manufacturing Week)
  "factory-runs-real-time-information": "/blog/factory-runs-real-time-information",
  "month-end-close-post-mortem": "/blog/month-end-close-manufacturing-intelligence",
  "leading-vs-lagging-indicators-manufacturing": "/blog/leading-lagging-indicators-manufacturing",
  "seven-systems-zero-answers": "/blog/seven-systems-one-truth-manufacturing",
  "consolidate-tally-erp-excel": "/blog/consolidate-data-sources-manufacturing",
  "what-is-ceo-intelligence-system": "/blog/ceo-intelligence-system-manufacturing",
  "erp-vs-business-intelligence-layer": "/blog/erp-vs-bi-vs-intelligence-manufacturing",
  "reorder-that-almost-didnt-happen": "/blog/reorder-almost-didnt-happen",
  "order-you-didnt-win": "/blog/order-you-didnt-win-manufacturing",
  "mumbai-manufacturer-75-lakhs-receivables": "/blog/mumbai-manufacturer-real-time-intelligence",
  "cross-functional-business-alert": "/blog/cross-functional-alert-manufacturing",
  "ai-alert-before-customer-churns": "/blog/ai-churn-alert-manufacturing",
};

async function main() {
  const posts = JSON.parse(fs.readFileSync(POSTS_JSON_PATH, "utf-8"));
  const conn = await mysql.createConnection(process.env.DATABASE_URL);

  const now = Date.now();
  const DAY_MS = 86400000;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const id = ID_START + i;
    const publishedAt = now - (posts.length - i) * DAY_MS;

    let body = post.body;

    // Resolve interlinks in body - find slug references and make them clickable
    for (const [slug, link] of Object.entries(ALL_SLUGS)) {
      // Look for the slug mentioned in the body text
      if (body.includes(slug)) {
        body = body.replaceAll(slug, `[${slug}](${link})`);
      }
    }

    const headerImageUrl = HEADER_IMAGES[post.slug] || "";

    const sql = `INSERT INTO blog_posts (id, title, slug, body, excerpt, type, author, header_image_url, series, parent_series, brand_pillar, publish_order, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      id,
      post.title,
      post.slug,
      body,
      post.excerpt,
      post.type,
      post.author,
      headerImageUrl,
      SERIES_NAME,
      PARENT_SERIES,
      BRAND_PILLAR,
      i + 1,
      publishedAt,
    ];

    await conn.execute(sql, values);
    console.log(`✓ Inserted: [${post.type}] ${post.title} (id=${id})`);
  }

  await conn.end();
  console.log(`\nDone! Inserted ${posts.length} posts into "${SERIES_NAME}".`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
