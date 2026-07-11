import { eq, desc, and, ne, gte, sql, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, consultationRequests, InsertConsultationRequest, contactSubmissions, InsertContactSubmission, leads, InsertLead, blogPosts, InsertBlogPost, analyticsEvents, InsertAnalyticsEvent } from "../drizzle/schema";


let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    // admin role set explicitly during login
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Consultation Requests
export async function createConsultationRequest(data: InsertConsultationRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(consultationRequests).values(data);
  return result;
}

export async function getAllConsultationRequests() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(consultationRequests).orderBy(consultationRequests.createdAt);
}

// Contact Submissions
export async function createContactSubmission(data: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(contactSubmissions).values(data);
  return result;
}

export async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
}

// Leads (Email Captures)
export async function createLead(data: InsertLead) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(leads).values(data);
  return result;
}

export async function getLeadByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }
  const result = await db.select().from(leads).where(eq(leads.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllLeads() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(leads).orderBy(leads.createdAt);
}

// Blog Posts
export async function getAllBlogPosts() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select({
    id: blogPosts.id,
    title: blogPosts.title,
    slug: blogPosts.slug,
    excerpt: blogPosts.excerpt,
    type: blogPosts.type,
    author: blogPosts.author,
    headerImageUrl: blogPosts.headerImageUrl,
    series: blogPosts.series,
    parentSeries: blogPosts.parentSeries,
    brandPillar: blogPosts.brandPillar,
    publishOrder: blogPosts.publishOrder,
    publishedAt: blogPosts.publishedAt,
  }).from(blogPosts).orderBy(desc(blogPosts.publishedAt));
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getRelatedBlogPosts(slug: string, series: string | null) {
  const db = await getDb();
  if (!db || !series) {
    return [];
  }
  const results = await db.select({
    id: blogPosts.id,
    title: blogPosts.title,
    slug: blogPosts.slug,
    type: blogPosts.type,
    headerImageUrl: blogPosts.headerImageUrl,
    series: blogPosts.series,
  }).from(blogPosts)
    .where(and(eq(blogPosts.series, series), ne(blogPosts.slug, slug)))
    .limit(4);
  return results;
}

export async function createBlogPost(data: InsertBlogPost) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(blogPosts).values(data);
  return result;
}

export async function createManyBlogPosts(posts: InsertBlogPost[]) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(blogPosts).values(posts);
  return result;
}

// Analytics (KPI Dashboard)

/**
 * Fire-and-forget event write. Never throws — a failed tracking call
 * should be invisible to the visitor and to the caller.
 */
export async function trackEvent(data: InsertAnalyticsEvent) {
  const db = await getDb();
  if (!db) return;
  try {
    await db.insert(analyticsEvents).values(data);
  } catch (error) {
    console.warn("[Analytics] Failed to track event:", error);
  }
}

export async function getKpiDashboard(period: "week" | "month") {
  const days = period === "week" ? 7 : 30;
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const empty = {
    period,
    visits: 0,
    pageViews: 0,
    pagesPerVisit: 0,
    blogViewers: 0,
    contactSubmissions: 0,
    conversionRate: 0,
    funnel: [
      { stage: "Visited site", count: 0 },
      { stage: "Read a blog post", count: 0 },
      { stage: "Submitted contact form", count: 0 },
    ],
    topBlogPosts: [] as { id: number; title: string; slug: string; views: number }[],
  };

  const db = await getDb();
  if (!db) return empty;

  const [visitsRow] = await db
    .select({
      visits: sql<number>`COUNT(DISTINCT ${analyticsEvents.sessionId})`,
      pageViews: sql<number>`COUNT(*)`,
    })
    .from(analyticsEvents)
    .where(and(eq(analyticsEvents.eventType, "page_view"), gte(analyticsEvents.createdAt, since)));

  const [blogRow] = await db
    .select({
      blogViewers: sql<number>`COUNT(DISTINCT ${analyticsEvents.sessionId})`,
    })
    .from(analyticsEvents)
    .where(and(eq(analyticsEvents.eventType, "blog_post_view"), gte(analyticsEvents.createdAt, since)));

  // Real conversion table — never duplicated in analytics_events
  const [contactRow] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(contactSubmissions)
    .where(gte(contactSubmissions.createdAt, since));

  const leaderboard = await db
    .select({
      entityId: analyticsEvents.entityId,
      views: sql<number>`COUNT(*)`,
    })
    .from(analyticsEvents)
    .where(and(eq(analyticsEvents.eventType, "blog_post_view"), gte(analyticsEvents.createdAt, since)))
    .groupBy(analyticsEvents.entityId)
    .orderBy(desc(sql`COUNT(*)`))
    .limit(5);

  const postIds = leaderboard.map(l => l.entityId).filter((id): id is number => id !== null);
  const posts = postIds.length
    ? await db
        .select({ id: blogPosts.id, title: blogPosts.title, slug: blogPosts.slug })
        .from(blogPosts)
        .where(inArray(blogPosts.id, postIds))
    : [];

  const topBlogPosts = leaderboard
    .filter(l => l.entityId !== null)
    .map(l => {
      const post = posts.find(p => p.id === l.entityId);
      return {
        id: l.entityId as number,
        title: post?.title ?? "Unknown post",
        slug: post?.slug ?? "",
        views: Number(l.views),
      };
    });

  const visits = Number(visitsRow?.visits ?? 0);
  const pageViews = Number(visitsRow?.pageViews ?? 0);
  const blogViewers = Number(blogRow?.blogViewers ?? 0);
  const contactCount = Number(contactRow?.count ?? 0);

  return {
    period,
    visits,
    pageViews,
    pagesPerVisit: visits > 0 ? Math.round((pageViews / visits) * 10) / 10 : 0,
    blogViewers,
    contactSubmissions: contactCount,
    conversionRate: visits > 0 ? Math.round((contactCount / visits) * 1000) / 10 : 0,
    funnel: [
      { stage: "Visited site", count: visits },
      { stage: "Read a blog post", count: blogViewers },
      { stage: "Submitted contact form", count: contactCount },
    ],
    topBlogPosts,
  };
}
