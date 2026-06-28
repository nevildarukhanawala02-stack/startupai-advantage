import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require("mysql2/promise");
const fs = require("fs");

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/sheetmetal_posts.json", "utf8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-01-product-or-scrap-5DNvA8eEj3AerBAiD5Ltza.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-02-margin-scrap-bin-kMASQsQBhTNjjDYKT4gUWL.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-03-remnant-rack-Gshwq3LaN8p2ewvycSW4Tz.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-04-material-yield-WWsveHRWckhfnPyiggajU4.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-05-true-cost-laser-3o5Nc8X7HimXMUrwyuh4E3.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-06-track-remnant-cjcrrwGyiZk4SqhecTkQyX.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-sm-07-repeat-job-YVGNAjS6MJ3EtNqxtSnBBZ.webp",
];

const SERIES = "Sheet Metal Week";
const PARENT_SERIES = "Manufacturing Week";
const BRAND_PILLAR = "manufacturing";
const BASE_ID = 60001;

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
  console.log(`\nDone! ${posts.length} Sheet Metal posts seeded.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
