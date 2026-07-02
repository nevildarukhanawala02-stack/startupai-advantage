import { eq, desc, and, ne } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, consultationRequests, InsertConsultationRequest, contactSubmissions, InsertContactSubmission, leads, InsertLead, blogPosts, InsertBlogPost } from "../drizzle/schema";
import { ENV } from './_core/env';

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
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
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
