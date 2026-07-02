import { describe, it, expect } from "vitest";
import { getAllBlogPosts, getBlogPostBySlug } from "./db";

describe("Blog API", () => {
  it("should list all published blog posts (69 manufacturing + 7 infographic)", async () => {
    const posts = await getAllBlogPosts();
    expect(posts).toBeDefined();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(76);
  });

  it("should return posts sorted by publishedAt descending", async () => {
    const posts = await getAllBlogPosts();
    for (let i = 0; i < posts.length - 1; i++) {
      expect(posts[i].publishedAt).toBeGreaterThanOrEqual(posts[i + 1].publishedAt);
    }
  });

  it("should get a manufacturing pillar post by slug", async () => {
    const post = await getBlogPostBySlug("factory-runs-real-time-information");
    expect(post).toBeDefined();
    expect(post!.title).toBe("The Factory Runs in Real Time. Why Doesn't Your Information?");
    expect(post!.type).toBe("pillar");
    expect(post!.author).toBe("Nevil Darukhanawala");
    expect(post!.series).toBe("Manufacturing Week");
    expect(post!.parentSeries).toBeNull();
    expect(post!.headerImageUrl).toContain("cloudfront.net");
    expect(post!.body.length).toBeGreaterThan(1000);
  });

  it("should get an auto components sub-series post by slug", async () => {
    const post = await getBlogPostBySlug("auto-components-making-money-on-the-part");
    expect(post).toBeDefined();
    expect(post!.title).toBe("You Won the Part. Are You Sure You're Making Money on It?");
    expect(post!.type).toBe("sub-pillar");
    expect(post!.series).toBe("Auto Components Week");
    expect(post!.parentSeries).toBe("Manufacturing Week");
    expect(post!.headerImageUrl).toContain("cloudfront.net");
    expect(post!.body.length).toBeGreaterThan(500);
  });

  it("should return undefined for non-existent slug", async () => {
    const post = await getBlogPostBySlug("non-existent-post-slug");
    expect(post).toBeUndefined();
  });

  it("should have all expected post types including infographic", async () => {
    const posts = await getAllBlogPosts();
    const types = new Set(posts.map(p => p.type));
    expect(types.has("pillar")).toBe(true);
    expect(types.has("deep-dive")).toBe(true);
    expect(types.has("microblog")).toBe(true);
    expect(types.has("case-study")).toBe(true);
    expect(types.has("roundup")).toBe(true);
    expect(types.has("sub-pillar")).toBe(true);
    expect(types.has("infographic")).toBe(true);
  });

  it("should have valid header image URLs for all posts", async () => {
    const posts = await getAllBlogPosts();
    for (const post of posts) {
      // CloudFront CDN images or manus-storage proxy images
      expect(post.headerImageUrl).toMatch(/^(https:\/\/d2xsxph8kpxj0f\.cloudfront\.net\/.+\.webp|\/manus-storage\/.+\.png)$/);
    }
  });

  it("should have unique slugs for all posts", async () => {
    const posts = await getAllBlogPosts();
    const slugs = posts.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("should have parentSeries for auto components posts", async () => {
    const posts = await getAllBlogPosts();
    const autoPosts = posts.filter(p => p.series === "Auto Components Week");
    expect(autoPosts.length).toBe(7);
    for (const post of autoPosts) {
      expect(post.parentSeries).toBe("Manufacturing Week");
    }
  });

  it("should have no parentSeries for manufacturing posts", async () => {
    const posts = await getAllBlogPosts();
    const mfgPosts = posts.filter(p => p.series === "Manufacturing Week");
    expect(mfgPosts.length).toBe(13);
    for (const post of mfgPosts) {
      expect(post.parentSeries).toBeNull();
    }
  });

  it("should have 7 infographic posts in CEO Intel Infographic Series", async () => {
    const posts = await getAllBlogPosts();
    const igPosts = posts.filter(p => p.series === "CEO Intel Infographic Series");
    expect(igPosts.length).toBe(7);
    for (const post of igPosts) {
      expect(post.parentSeries).toBe("Manufacturing Week");
      expect(post.type).toBe("infographic");
      expect(post.headerImageUrl).toMatch(/^\/manus-storage\/.+\.png$/);
    }
  });

  it("should get an infographic post by slug", async () => {
    const post = await getBlogPostBySlug("ig-five-blind-spots-manufacturing-ceo");
    expect(post).toBeDefined();
    expect(post!.title).toBe("The Five Blind Spots Every Manufacturing CEO Has");
    expect(post!.type).toBe("infographic");
    expect(post!.series).toBe("CEO Intel Infographic Series");
    expect(post!.parentSeries).toBe("Manufacturing Week");
    expect(post!.body).toContain("Explore more");
  });
});
