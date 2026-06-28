import { getDb } from "./server/db.ts";
import { blogPosts } from "./drizzle/schema.ts";
import fs from "fs";

const posts = JSON.parse(fs.readFileSync("/home/ubuntu/packaging_posts.json", "utf-8"));

const imageUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-01-yield-speed-FKtpiMBVpHauvjbBU89fRn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-02-hours-between-PPPGGU9HQcsZiKw28fLUqs.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-03-delivery-stopped-H5cxA9ytCBWwdZgueLcjJp.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-04-changeover-GAR2Q8VbNFU6ya3fc5Ecwk.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-05-material-yield-ReEB9LqQA9dUHahwEMtimM.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-06-orders-at-risk-favCwS6i3MczLwhViqGmGg.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-packaging-07-capacity-found-SqhpA6hkootZLHUWHfhe3u.webp",
];

const typeMap = {
  "sub-pillar": "Industry Deep Dive",
  "deep-dive": "Deep Dive",
  "microblog": "Quick Read",
  "case-study": "Case Study",
};

async function seed() {
  const db = await getDb();
  if (!db) { console.error('No DB connection'); process.exit(1); }
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
      series: "Packaging Week",
      parentSeries: "Manufacturing Week",
      brandPillar: "Manufacturing",
    });
    console.log(`Inserted: ${p.slug}`);
  }
  console.log(`Done! ${posts.length} Packaging Week posts seeded.`);
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });
