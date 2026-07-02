import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { blogPosts } from "./drizzle/schema.ts";
import fs from "fs";

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/rubber_posts.json", "utf-8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-01-recipe-cook-once-2etVBU79EPVnJyEyzbFSp5.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-02-batch-found-out-WRDSkX6jnf6RyPjC9bxYiR.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-03-curing-presses-Y8ibFKcF8NwNKwPURh4xHf.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-04-reduce-rejection-3rDdPrprE4sNLajNEyBYnH.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-05-trace-failure-eUuukkf5zaBS7HZrDKKDfs.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-06-curing-energy-VGmQkrGvNHCf74nc4B6FiK.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-rubber-07-batches-kept-failing-bp3enqUpNf698HtZfdM823.webp",
];

const typeMap = { "sub-pillar": "Industry Deep Dive", "deep-dive": "Deep Dive", "microblog": "Quick Read", "case-study": "Case Study" };

async function main() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    await db.insert(blogPosts).values({
      title: p.title,
      slug: p.slug,
      body: p.body,
      type: typeMap[p.type] || p.type,
      author: "Nevil Darukhanawala",
      headerImageUrl: imageUrls[i],
      publishedAt: Date.now() - (posts.length - i) * 86400000,
      series: "Rubber Week",
      parentSeries: "Manufacturing Week",
      brandPillar: "Manufacturing",
    });
    console.log(`Inserted: ${p.slug}`);
  }

  await connection.end();
  console.log("Done! 7 Rubber Week posts seeded.");
}

main().catch(console.error);
