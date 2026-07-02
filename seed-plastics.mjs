import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require("mysql2/promise");
const fs = require("fs");

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/plastics_posts.json", "utf8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-01-margin-moves-nFFJaKQs8UJ9RvnfqifTkW.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-02-quote-resin-Qg74Rg5Ztwvqdc8FgZHFmE.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-03-half-second-7YKvq42oQYDtRma9Fwr8bX.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-04-track-margin-ZKEYaMzqhXeZKYH3rfLh4C.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-05-moulding-efficiency-BfcyuXAJBtxDobNYq4FEMD.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-06-reduce-waste-b7pqyAnM3iu4M6QoqBp3CV.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-plastics-07-product-underwater-nD2JcUpCTT4pjQFDHwfBhU.webp",
];

const SERIES = "Plastics Week";
const PARENT_SERIES = "Manufacturing Week";
const BRAND_PILLAR = "manufacturing";
const BASE_ID = 80001;

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
  console.log(`\nDone! ${posts.length} Plastics posts seeded.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
