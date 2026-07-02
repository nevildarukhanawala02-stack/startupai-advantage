import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require("mysql2/promise");
const fs = require("fs");

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/forging_posts.json", "utf8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-01-pay-before-know-PN6v6kH6WAysw56hw9SDy6.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-02-reject-full-price-3vFyvqc2c6XK5kfSHrfyDy.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-03-energy-lump-sum-MD4sZP6dYhGDWZ7VgzFFdt.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-04-true-cost-rejection-3JxLuQ33cwvrYgd3s8qSna.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-05-energy-cost-per-part-gyxAc7RitVYfbDk7GiYhf5.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-06-trace-defects-4Epd3LuQgsWHjFukiH3Ys9.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-fc-07-recurring-reject-UtcaC4dGrZJbGaQ5e97iej.webp",
];

const SERIES = "Forging & Casting Week";
const PARENT_SERIES = "Manufacturing Week";
const BRAND_PILLAR = "manufacturing";
const BASE_ID = 70001;

async function main() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  const now = Date.now();
  const DAY = 86400000;

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const id = BASE_ID + i;
    const publishedAt = new Date(now - (posts.length - i) * DAY);

    await connection.execute(
      `INSERT INTO blog_posts (id, title, slug, body, type, author, header_image_url, published_at, series, parent_series, brand_pillar)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        p.title,
        p.slug,
        p.body,
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
  console.log(`\nDone! ${posts.length} Forging & Casting posts seeded.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
