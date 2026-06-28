import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

// Load the extracted posts
const posts = JSON.parse(fs.readFileSync("/home/ubuntu/auto_blog_posts.json", "utf-8"));

// Header image URLs (compressed webp versions)
const headerImages = {
  "auto-components-making-money-on-the-part": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-01-making-money-7C2yM2fPGoHudYKA25a7bQ.webp",
  "auto-components-rfq-quoted-blind": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-02-rfq-quoted-blind-AawZqHfBMt49mNrSBcRVuK.webp",
  "auto-components-biggest-customer-watch-least": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-03-biggest-customer-hvMaNMFcCrcr6MLLns5UCB.webp",
  "auto-components-true-cost-per-part": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-04-true-cost-per-part-Wueuf55cPHMxyeSeeEUdWV.webp",
  "auto-components-early-warning-customer-leaving": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-05-early-warning-DATPrXs53g7vuKsy23vyqd.webp",
  "auto-components-cnc-utilisation-real-time": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-06-cnc-utilisation-7pXZ3EXm3wxoe53diACx6E.webp",
  "auto-components-program-losing-money": "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/blog-auto-07-program-losing-money-gNcXfryEmHrWYUSuVwAgLK.webp",
};

// Interlink map - within branch and upward to Manufacturing
const interlinkMap = {
  "auto-components-making-money-on-the-part": {
    within: ["auto-components-rfq-quoted-blind", "auto-components-biggest-customer-watch-least"],
    upward: ["factory-runs-real-time-information"]
  },
  "auto-components-rfq-quoted-blind": {
    within: ["auto-components-making-money-on-the-part", "auto-components-biggest-customer-watch-least", "auto-components-true-cost-per-part"],
    upward: ["seven-systems-zero-answers", "consolidate-tally-erp-excel"]
  },
  "auto-components-biggest-customer-watch-least": {
    within: ["auto-components-making-money-on-the-part", "auto-components-rfq-quoted-blind", "auto-components-early-warning-customer-leaving"],
    upward: ["order-you-didnt-win", "ai-alert-before-customer-churns", "cross-functional-business-alert"]
  },
  "auto-components-true-cost-per-part": {
    within: ["auto-components-rfq-quoted-blind", "auto-components-making-money-on-the-part"],
    upward: ["consolidate-tally-erp-excel", "what-is-ceo-intelligence-system"]
  },
  "auto-components-early-warning-customer-leaving": {
    within: ["auto-components-biggest-customer-watch-least"],
    upward: ["cross-functional-business-alert", "ai-alert-before-customer-churns"]
  },
  "auto-components-cnc-utilisation-real-time": {
    within: ["auto-components-making-money-on-the-part"],
    upward: ["what-is-ceo-intelligence-system", "seven-systems-zero-answers"]
  },
  "auto-components-program-losing-money": {
    within: ["auto-components-making-money-on-the-part"],
    upward: ["mumbai-manufacturer-75-lakhs-receivables", "month-end-close-post-mortem"]
  }
};

// Title-to-slug map for resolving [link text](#) placeholders
const titleToSlug = {
  "You Won the Part. Are You Sure You're Making Money on It?": "auto-components-making-money-on-the-part",
  "The RFQ You Quoted Blind": "auto-components-rfq-quoted-blind",
  "Your Biggest Customer Is the One You Watch Least": "auto-components-biggest-customer-watch-least",
  "How Do Auto-Component Manufacturers Track True Cost Per Part?": "auto-components-true-cost-per-part",
  "How Can a Manufacturer Get Early Warning That a Major Customer Is Leaving?": "auto-components-early-warning-customer-leaving",
  "Can You Track CNC Machine Utilisation Across Different Systems in Real Time?": "auto-components-cnc-utilisation-real-time",
  "The Program That Was Quietly Losing Money for Eight Months": "auto-components-program-losing-money",
  // Manufacturing parent posts
  "The Factory Runs in Real Time. Why Doesn't Your Information?": "factory-runs-real-time-information",
  "Your Month-End Close Is a Post-Mortem": "month-end-close-post-mortem",
  "Seven Systems, Zero Answers: The Manufacturing Data Trap": "seven-systems-zero-answers",
  "The Order You Didn't Win (And Never Knew Was There)": "order-you-didnt-win",
  "What Is a CEO Intelligence System?": "what-is-ceo-intelligence-system",
  "What's the Difference Between an ERP and a Business Intelligence Layer?": "erp-vs-business-intelligence-layer",
  "How Can Manufacturers Consolidate Data from Tally, ERP, and Excel?": "consolidate-tally-erp-excel",
  "What Are Leading vs. Lagging Indicators in Manufacturing?": "leading-vs-lagging-indicators-manufacturing",
  "What Is a Cross-Functional Business Alert?": "cross-functional-business-alert",
  "Can AI Alert a CEO Before a Customer Churns?": "ai-alert-before-customer-churns",
  "How a Mumbai Manufacturer Caught ₹75 Lakhs Before It Slipped Away": "mumbai-manufacturer-75-lakhs-receivables",
  "The Reorder That Almost Didn't Happen": "reorder-that-almost-didnt-happen",
  "Manufacturing Week: What Every Plant-Floor CEO Should Take Away": "manufacturing-week-roundup",
};

// Resolve [link text](#) placeholders in body text
function resolveLinks(body, slug) {
  // Replace [text](#) with [text](/blog/resolved-slug)
  let resolved = body.replace(/\[([^\]]+)\]\(#\)/g, (match, text) => {
    // Try to find the slug by matching the link text to a title
    for (const [title, targetSlug] of Object.entries(titleToSlug)) {
      if (text.toLowerCase().includes(title.toLowerCase().substring(0, 30)) || 
          title.toLowerCase().includes(text.toLowerCase().substring(0, 30))) {
        return `[${text}](/blog/${targetSlug})`;
      }
    }
    // If no match found, try the interlink map
    const links = interlinkMap[slug];
    if (links) {
      const allTargets = [...links.within, ...links.upward];
      // Just use the first unresolved target
      if (allTargets.length > 0) {
        return `[${text}](/blog/${allTargets[0]})`;
      }
    }
    return match; // Leave as-is if can't resolve
  });
  
  return resolved;
}

// Build SQL values
const baseTimestamp = Date.now();
const values = posts.map((post, idx) => {
  const resolvedBody = resolveLinks(post.body, post.slug);
  const imageUrl = headerImages[post.slug] || "";
  const publishedAt = baseTimestamp - (7 - idx) * 86400000; // stagger by 1 day each
  
  return {
    title: post.title,
    slug: post.slug,
    body: resolvedBody,
    excerpt: post.excerpt,
    type: post.type,
    author: post.author,
    headerImageUrl: imageUrl,
    series: "Auto Components Week",
    parentSeries: "Manufacturing Week",
    brandPillar: post.pillar,
    publishOrder: idx + 1,
    publishedAt: publishedAt,
  };
});

// Generate SQL INSERT
function escapeSQL(str) {
  if (str === null || str === undefined) return "NULL";
  return "'" + str.replace(/'/g, "''").replace(/\\/g, "\\\\") + "'";
}

let sql = "INSERT INTO blog_posts (title, slug, body, excerpt, type, author, header_image_url, series, parent_series, brand_pillar, publish_order, published_at) VALUES\n";

const rows = values.map(v => {
  return `(${escapeSQL(v.title)}, ${escapeSQL(v.slug)}, ${escapeSQL(v.body)}, ${escapeSQL(v.excerpt)}, ${escapeSQL(v.type)}, ${escapeSQL(v.author)}, ${escapeSQL(v.headerImageUrl)}, ${escapeSQL(v.series)}, ${escapeSQL(v.parentSeries)}, ${escapeSQL(v.brandPillar)}, ${v.publishOrder}, ${v.publishedAt})`;
});

sql += rows.join(",\n") + ";";

fs.writeFileSync("/home/ubuntu/auto_blog_insert.sql", sql);
console.log(`Generated SQL for ${values.length} posts`);
console.log("SQL file: /home/ubuntu/auto_blog_insert.sql");
