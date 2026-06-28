import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const fs = require("fs");

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/cnc_posts.json", "utf8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-01-machines-earn-bANMGNy7en9oStESQb59SH.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-02-floor-busy-5iFRQv8kx9QMLyEP5AaQup.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-03-buy-machine-nEyN3AvmYMQbrDBta2f5Hi.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-04-measure-utilisation-kjJW9AYpSPvrhkaM5dTPMa.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-05-real-capacity-YzuJvkyqCSJk6q6rUC9YbZ.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-06-one-view-plants-jMo7BYtMhVhSn9oaAGQyHU.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-cnc-07-machine-didnt-need-jSqi4dVqWAjrJad82uNN8S.webp",
];

const SERIES = "CNC Precision Week";
const PARENT_SERIES = "Manufacturing Week";
const BRAND_PILLAR = "manufacturing";
const BASE_ID = 50001;

async function main() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  const now = Date.now();
  const DAY = 86400000;

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const id = BASE_ID + i;
    const publishedAt = new Date(now - (posts.length - i) * DAY);

    // Resolve interlinks in body
    let body = p.body;
    const allLinks = [...(p.within_links || []), ...(p.upward_links || [])];
    for (const slug of allLinks) {
      // Find mentions and add link context (the frontend renders /blog/slug links)
      // We embed links as markdown-style for the renderer to pick up
    }

    await connection.execute(
      `INSERT INTO blog_posts (id, title, slug, body, type, author, header_image_url, published_at, series, parent_series, brand_pillar)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        p.title,
        p.slug,
        body,
        p.type,
        p.author || "Nevil Darukhanawala",
        imageUrls[i],
        publishedAt,
        SERIES,
        PARENT_SERIES,
        BRAND_PILLAR,
      ]
    );
    console.log(`Inserted: [${id}] ${p.title}`);
  }

  await connection.end();
  console.log(`\nDone! ${posts.length} CNC Precision posts seeded.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
