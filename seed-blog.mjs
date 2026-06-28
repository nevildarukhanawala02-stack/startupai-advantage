import { readFileSync } from 'fs';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

const posts = JSON.parse(readFileSync('/home/ubuntu/blog_posts.json', 'utf-8'));

// Map of post index to slug and header image URL (compressed webp)
const postMeta = [
  {
    slug: "factory-runs-real-time-information",
    type: "pillar",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-01-factory-real-time-Bn2zd9yooieq338FpMEEwy.webp",
    publishOrder: 1,
  },
  {
    slug: "month-end-close-post-mortem",
    type: "deep-dive",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-02-month-end-close-92JtkYjQPfJKxmJ3JjGn2u.webp",
    publishOrder: 2,
  },
  {
    slug: "seven-systems-zero-answers",
    type: "deep-dive",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-03-seven-systems-Gz6Ui2FBuCckdJ3mScZ7f5.webp",
    publishOrder: 3,
  },
  {
    slug: "order-you-didnt-win",
    type: "deep-dive",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-04-order-didnt-win-b9i8optvgAqu5GPRTRdmTb.webp",
    publishOrder: 4,
  },
  {
    slug: "what-is-ceo-intelligence-system",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-05-ceo-intelligence-NB42iTzBsWx9xHi6xmtjEc.webp",
    publishOrder: 5,
  },
  {
    slug: "erp-vs-business-intelligence-layer",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-06-erp-vs-bi-WXG4V2stuFSLMCkNANT7sK.webp",
    publishOrder: 6,
  },
  {
    slug: "consolidate-tally-erp-excel",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-07-consolidate-data-Fu47KHPQDzG4te4STFNLti.webp",
    publishOrder: 7,
  },
  {
    slug: "leading-vs-lagging-indicators-manufacturing",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-08-leading-lagging-bw6poaDFCxCF53gSH4icgC.webp",
    publishOrder: 8,
  },
  {
    slug: "cross-functional-business-alert",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-09-cross-functional-alert-o2RLsSyFVJjNhafQpdCpiJ.webp",
    publishOrder: 9,
  },
  {
    slug: "ai-alert-before-customer-churns",
    type: "microblog",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-10-ai-churn-alert-M5LUWiQmmDDFpWz568HiXT.webp",
    publishOrder: 10,
  },
  {
    slug: "mumbai-manufacturer-75-lakhs-receivables",
    type: "case-study",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-11-mumbai-manufacturer-8iY6cvqDkLDgkQfefw6icP.webp",
    publishOrder: 11,
  },
  {
    slug: "reorder-that-almost-didnt-happen",
    type: "case-study",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-12-reorder-almost-didnt-Wa2a3VWxoxjQtmuyk3ua9U.webp",
    publishOrder: 12,
  },
  {
    slug: "manufacturing-week-roundup",
    type: "roundup",
    headerImageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-header-13-manufacturing-roundup-XDmM3MWsPoK2NVxV4gia7c.webp",
    publishOrder: 13,
  },
];

// Base publish date: April 14, 2025 (Manufacturing Week start)
const baseDate = new Date('2025-04-14T06:00:00Z');

async function seed() {
  const connection = await mysql.createConnection(DATABASE_URL);

  // Clear existing blog posts
  await connection.execute('DELETE FROM blog_posts');
  console.log('Cleared existing blog posts');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const meta = postMeta[i];

    // Stagger publish dates: pillar on day 1, then 1 post per day
    const publishedAt = new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000).getTime();

    // Extract first ~200 chars as excerpt
    const bodyText = post.body || '';
    const firstPara = bodyText.split('\n\n')[0] || '';
    const excerpt = firstPara.length > 200 ? firstPara.substring(0, 200) + '...' : firstPara;

    await connection.execute(
      `INSERT INTO blog_posts (title, slug, body, excerpt, type, author, header_image_url, series, brand_pillar, publish_order, published_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        post.title,
        meta.slug,
        bodyText,
        excerpt,
        meta.type,
        'Nevil Darukhanawala',
        meta.headerImageUrl,
        'Manufacturing Week',
        'Operational Intelligence',
        meta.publishOrder,
        publishedAt,
      ]
    );
    console.log(`✓ Seeded: ${post.title}`);
  }

  await connection.end();
  console.log('\nDone! All 13 posts seeded.');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
