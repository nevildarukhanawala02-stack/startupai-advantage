// server/_core/index.ts
import "dotenv/config";
import express2 from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

// shared/const.ts
var COOKIE_NAME = "app_session_id";
var ONE_YEAR_MS = 1e3 * 60 * 60 * 24 * 365;
var UNAUTHED_ERR_MSG = "Please login (10001)";
var NOT_ADMIN_ERR_MSG = "You do not have required permission (10002)";

// server/_core/cookies.ts
function isSecureRequest(req) {
  if (req.protocol === "https") return true;
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (!forwardedProto) return false;
  const protoList = Array.isArray(forwardedProto) ? forwardedProto : forwardedProto.split(",");
  return protoList.some((proto) => proto.trim().toLowerCase() === "https");
}
function getSessionCookieOptions(req) {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: isSecureRequest(req)
  };
}

// shared/_core/errors.ts
var HttpError = class extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
};
var ForbiddenError = (msg) => new HttpError(403, msg);

// server/_core/sdk.ts
import { parse as parseCookieHeader } from "cookie";
import { SignJWT, jwtVerify } from "jose";

// server/db.ts
import { eq, desc, and, ne, gte, sql, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";

// drizzle/schema.ts
import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, bigint } from "drizzle-orm/mysql-core";
var users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Stable user identifier (openId). Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull()
});
var consultationRequests = mysqlTable("consultation_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  companySize: varchar("company_size", { length: 100 }),
  industry: varchar("industry", { length: 100 }),
  message: text("message"),
  status: mysqlEnum("status", ["new", "contacted", "qualified", "converted", "closed"]).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
});
var contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied", "closed"]).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
});
var leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  source: varchar("source", { length: 100 }).default("lead_magnet").notNull(),
  // e.g., 'lead_magnet', 'newsletter', etc.
  resourceDownloaded: varchar("resource_downloaded", { length: 255 }),
  // Track which resource they downloaded
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  body: text("body").notNull(),
  excerpt: text("excerpt"),
  type: varchar("type", { length: 50 }).notNull().default("article"),
  // pillar, deep-dive, microblog, case-study, roundup
  author: varchar("author", { length: 255 }).notNull().default("Nevil Darukhanawala"),
  headerImageUrl: text("header_image_url"),
  series: varchar("series", { length: 255 }),
  // e.g. "Manufacturing Week"
  parentSeries: varchar("parent_series", { length: 255 }),
  // e.g. "Manufacturing Week" for sub-series
  brandPillar: varchar("brand_pillar", { length: 255 }),
  publishOrder: int("publish_order"),
  publishedAt: bigint("published_at", { mode: "number" }).notNull(),
  // UTC ms timestamp
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
});
var analyticsEvents = mysqlTable("analytics_events", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: varchar("session_id", { length: 64 }).notNull(),
  eventType: varchar("event_type", { length: 64 }).notNull(),
  // e.g. 'page_view', 'blog_post_view'
  entityId: int("entity_id"),
  // optional: e.g. blog post id this event relates to
  entityType: varchar("entity_type", { length: 32 }),
  // optional: e.g. 'blog_post'
  pagePath: varchar("page_path", { length: 255 }),
  referrer: varchar("referrer", { length: 500 }),
  // document.referrer at time of page_view, if any
  deviceType: varchar("device_type", { length: 16 }),
  // 'desktop' | 'mobile' | 'tablet'
  country: varchar("country", { length: 2 }),
  // ISO 3166-1 alpha-2, derived server-side from IP
  value: int("value"),
  // generic numeric payload, e.g. seconds spent on page for 'page_time' events
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// server/db.ts
var _db = null;
async function getDb() {
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
async function getUserByOpenId(openId) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return void 0;
  }
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : void 0;
}
async function createConsultationRequest(data) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(consultationRequests).values(data);
  return result;
}
async function getAllConsultationRequests() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(consultationRequests).orderBy(consultationRequests.createdAt);
}
async function createContactSubmission(data) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(contactSubmissions).values(data);
  return result;
}
async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
}
async function getAllLeads() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return await db.select().from(leads).orderBy(leads.createdAt);
}
async function getAllBlogPosts() {
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
    publishedAt: blogPosts.publishedAt
  }).from(blogPosts).orderBy(desc(blogPosts.publishedAt));
}
async function getBlogPostBySlug(slug) {
  const db = await getDb();
  if (!db) {
    return void 0;
  }
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : void 0;
}
async function getRelatedBlogPosts(slug, series) {
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
    series: blogPosts.series
  }).from(blogPosts).where(and(eq(blogPosts.series, series), ne(blogPosts.slug, slug))).limit(4);
  return results;
}
async function trackEvent(data) {
  const db = await getDb();
  if (!db) return;
  try {
    await db.insert(analyticsEvents).values(data);
  } catch (error) {
    console.warn("[Analytics] Failed to track event:", error);
  }
}
function classifyReferrer(referrer) {
  if (!referrer) return "Direct";
  let host = "";
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "Direct";
  }
  if (host.includes("google")) return "Google";
  if (host.includes("bing")) return "Bing";
  const socialHosts = [
    "facebook.com",
    "instagram.com",
    "twitter.com",
    "x.com",
    "linkedin.com",
    "tiktok.com",
    "t.co",
    "reddit.com",
    "youtube.com"
  ];
  if (socialHosts.some((s) => host.includes(s))) return "Social";
  return "Referral";
}
async function getKpiDashboard(period) {
  const days = period === "week" ? 7 : 30;
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1e3);
  const empty = {
    period,
    visits: 0,
    pageViews: 0,
    pagesPerVisit: 0,
    blogViewers: 0,
    contactSubmissions: 0,
    conversionRate: 0,
    newVisitors: 0,
    returningVisitors: 0,
    funnel: [
      { stage: "Visited site", count: 0 },
      { stage: "Read a blog post", count: 0 },
      { stage: "Submitted contact form", count: 0 }
    ],
    topBlogPosts: [],
    topPages: [],
    trafficSources: [],
    deviceBreakdown: [],
    topCountries: []
  };
  const db = await getDb();
  if (!db) return empty;
  const [visitsRow] = await db.select({
    visits: sql`COUNT(DISTINCT ${analyticsEvents.sessionId})`,
    pageViews: sql`COUNT(*)`
  }).from(analyticsEvents).where(and(eq(analyticsEvents.eventType, "page_view"), gte(analyticsEvents.createdAt, since)));
  const [blogRow] = await db.select({
    blogViewers: sql`COUNT(DISTINCT ${analyticsEvents.sessionId})`
  }).from(analyticsEvents).where(and(eq(analyticsEvents.eventType, "blog_post_view"), gte(analyticsEvents.createdAt, since)));
  const [contactRow] = await db.select({ count: sql`COUNT(*)` }).from(contactSubmissions).where(gte(contactSubmissions.createdAt, since));
  const leaderboard = await db.select({
    entityId: analyticsEvents.entityId,
    views: sql`COUNT(*)`
  }).from(analyticsEvents).where(and(eq(analyticsEvents.eventType, "blog_post_view"), gte(analyticsEvents.createdAt, since))).groupBy(analyticsEvents.entityId).orderBy(desc(sql`COUNT(*)`)).limit(5);
  const postIds = leaderboard.map((l) => l.entityId).filter((id) => id !== null);
  const posts = postIds.length ? await db.select({ id: blogPosts.id, title: blogPosts.title, slug: blogPosts.slug }).from(blogPosts).where(inArray(blogPosts.id, postIds)) : [];
  const durationRows = await db.select({
    pagePath: analyticsEvents.pagePath,
    avgSeconds: sql`AVG(${analyticsEvents.value})`
  }).from(analyticsEvents).where(and(eq(analyticsEvents.eventType, "page_time"), gte(analyticsEvents.createdAt, since))).groupBy(analyticsEvents.pagePath);
  const avgDurationByPath = /* @__PURE__ */ new Map();
  for (const row of durationRows) {
    if (row.pagePath && row.avgSeconds !== null) {
      avgDurationByPath.set(row.pagePath, Math.round(Number(row.avgSeconds)));
    }
  }
  const topBlogPosts = leaderboard.filter((l) => l.entityId !== null).map((l) => {
    const post = posts.find((p) => p.id === l.entityId);
    return {
      id: l.entityId,
      title: post?.title ?? "Unknown post",
      slug: post?.slug ?? "",
      views: Number(l.views),
      avgSeconds: post?.slug ? avgDurationByPath.get(`/blog/${post.slug}`) ?? 0 : 0
    };
  });
  const pageViewRows = await db.select({
    sessionId: analyticsEvents.sessionId,
    pagePath: analyticsEvents.pagePath,
    referrer: analyticsEvents.referrer,
    deviceType: analyticsEvents.deviceType,
    country: analyticsEvents.country,
    createdAt: analyticsEvents.createdAt
  }).from(analyticsEvents).where(and(eq(analyticsEvents.eventType, "page_view"), gte(analyticsEvents.createdAt, since))).orderBy(analyticsEvents.createdAt);
  const pageSessionSets = /* @__PURE__ */ new Map();
  for (const row of pageViewRows) {
    if (!row.pagePath || row.pagePath.startsWith("/admin")) continue;
    if (!pageSessionSets.has(row.pagePath)) pageSessionSets.set(row.pagePath, /* @__PURE__ */ new Set());
    pageSessionSets.get(row.pagePath).add(row.sessionId);
  }
  const topPages = Array.from(pageSessionSets.entries()).map(([path2, sessions]) => ({
    path: path2,
    visitors: sessions.size,
    avgSeconds: avgDurationByPath.get(path2) ?? 0
  })).sort((a, b) => b.visitors - a.visitors).slice(0, 5);
  const firstRowBySession = /* @__PURE__ */ new Map();
  for (const row of pageViewRows) {
    if (!firstRowBySession.has(row.sessionId)) firstRowBySession.set(row.sessionId, row);
  }
  const deviceCounts = /* @__PURE__ */ new Map();
  const trafficCounts = /* @__PURE__ */ new Map();
  const countryCounts = /* @__PURE__ */ new Map();
  for (const row of Array.from(firstRowBySession.values())) {
    const device = row.deviceType ? row.deviceType.charAt(0).toUpperCase() + row.deviceType.slice(1) : "Unknown";
    deviceCounts.set(device, (deviceCounts.get(device) ?? 0) + 1);
    const source = classifyReferrer(row.referrer);
    trafficCounts.set(source, (trafficCounts.get(source) ?? 0) + 1);
    const country = row.country ?? "Unknown";
    countryCounts.set(country, (countryCounts.get(country) ?? 0) + 1);
  }
  const deviceBreakdown = Array.from(deviceCounts.entries()).map(([device, count]) => ({ device, count })).sort((a, b) => b.count - a.count);
  const trafficSources = Array.from(trafficCounts.entries()).map(([source, count]) => ({ source, count })).sort((a, b) => b.count - a.count);
  const topCountries = Array.from(countryCounts.entries()).map(([country, count]) => ({ country, count })).sort((a, b) => b.count - a.count).slice(0, 5);
  const sessionIdsInPeriod = Array.from(firstRowBySession.keys());
  let newVisitors = 0;
  let returningVisitors = 0;
  if (sessionIdsInPeriod.length) {
    const firstSeenRows = await db.select({
      sessionId: analyticsEvents.sessionId,
      firstSeen: sql`MIN(${analyticsEvents.createdAt})`
    }).from(analyticsEvents).where(inArray(analyticsEvents.sessionId, sessionIdsInPeriod)).groupBy(analyticsEvents.sessionId);
    for (const row of firstSeenRows) {
      if (new Date(row.firstSeen) >= since) newVisitors++;
      else returningVisitors++;
    }
  }
  const visits = Number(visitsRow?.visits ?? 0);
  const pageViews = Number(visitsRow?.pageViews ?? 0);
  const blogViewers = Number(blogRow?.blogViewers ?? 0);
  const contactCount = Number(contactRow?.count ?? 0);
  return {
    period,
    visits,
    pageViews,
    pagesPerVisit: visits > 0 ? Math.round(pageViews / visits * 10) / 10 : 0,
    blogViewers,
    contactSubmissions: contactCount,
    conversionRate: visits > 0 ? Math.round(contactCount / visits * 1e3) / 10 : 0,
    newVisitors,
    returningVisitors,
    funnel: [
      { stage: "Visited site", count: visits },
      { stage: "Read a blog post", count: blogViewers },
      { stage: "Submitted contact form", count: contactCount }
    ],
    topBlogPosts,
    topPages,
    trafficSources,
    deviceBreakdown,
    topCountries
  };
}

// server/_core/env.ts
var ENV = {
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  isProduction: process.env.NODE_ENV === "production",
  adminEmail: process.env.ADMIN_EMAIL ?? "",
  adminPassword: process.env.ADMIN_PASSWORD ?? "",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  // Optional: AI/LLM features (leave empty to disable chat/voice/image generation)
  forgeApiUrl: process.env.FORGE_API_URL ?? "",
  forgeApiKey: process.env.FORGE_API_KEY ?? ""
};

// server/_core/sdk.ts
var isNonEmptyString = (value) => typeof value === "string" && value.length > 0;
var SDKServer = class {
  parseCookies(cookieHeader) {
    if (!cookieHeader) return /* @__PURE__ */ new Map();
    const parsed = parseCookieHeader(cookieHeader);
    return new Map(Object.entries(parsed));
  }
  getSessionSecret() {
    return new TextEncoder().encode(ENV.cookieSecret);
  }
  async createSessionToken(openId, options = {}) {
    const issuedAt = Date.now();
    const expiresInMs = options.expiresInMs ?? ONE_YEAR_MS;
    const expirationSeconds = Math.floor((issuedAt + expiresInMs) / 1e3);
    const secretKey = this.getSessionSecret();
    return new SignJWT({
      openId,
      appId: "saa",
      name: options.name || "",
      role: options.role || "user",
      email: options.email || ""
    }).setProtectedHeader({ alg: "HS256", typ: "JWT" }).setExpirationTime(expirationSeconds).sign(secretKey);
  }
  async verifySession(cookieValue) {
    if (!cookieValue) return null;
    try {
      const secretKey = this.getSessionSecret();
      const { payload } = await jwtVerify(cookieValue, secretKey, {
        algorithms: ["HS256"]
      });
      const { openId, appId, name, role, email } = payload;
      if (!isNonEmptyString(openId) || !isNonEmptyString(appId) || !isNonEmptyString(name)) return null;
      return {
        openId,
        appId,
        name,
        role: typeof role === "string" ? role : void 0,
        email: typeof email === "string" ? email : void 0
      };
    } catch {
      return null;
    }
  }
  async authenticateRequest(req) {
    const cookies = this.parseCookies(req.headers.cookie);
    const sessionCookie = cookies.get(COOKIE_NAME);
    const session = await this.verifySession(sessionCookie);
    if (!session) throw ForbiddenError("Invalid session cookie");
    if (session.role === "admin") {
      return {
        id: 1,
        openId: session.openId,
        name: session.name,
        email: session.email || ENV.adminEmail,
        loginMethod: "password",
        role: "admin",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        lastSignedIn: /* @__PURE__ */ new Date()
      };
    }
    const user = await getUserByOpenId(session.openId);
    if (!user) throw ForbiddenError("User not found");
    return user;
  }
};
var sdk = new SDKServer();

// server/_core/oauth.ts
function registerOAuthRoutes(app) {
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({ error: "Email and password are required" });
        return;
      }
      const adminEmail = ENV.adminEmail;
      const adminPassword = ENV.adminPassword;
      if (!adminEmail || !adminPassword) {
        res.status(500).json({ error: "Auth not configured" });
        return;
      }
      if (email.trim() !== adminEmail.trim() || password !== adminPassword) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const sessionToken = await sdk.createSessionToken("admin-user", {
        name: "Admin",
        role: "admin",
        email: adminEmail,
        expiresInMs: ONE_YEAR_MS
      });
      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
      res.json({ success: true });
    } catch (error) {
      console.error("[Auth] Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app.post("/api/auth/logout", (req, res) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
}

// server/_core/chat.ts
import { streamText, stepCountIs } from "ai";
import { tool } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod/v4";

// server/_core/patchedFetch.ts
function createPatchedFetch(originalFetch) {
  return async (input, init) => {
    const response = await originalFetch(input, init);
    if (!response.body) return response;
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";
    const stream = new ReadableStream({
      async pull(controller) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            if (buffer.length > 0) {
              const fixed = buffer.replace(/"type":""/g, '"type":"function"');
              controller.enqueue(encoder.encode(fixed));
            }
            controller.close();
            return;
          }
          buffer += decoder.decode(value, { stream: true });
          const eventSeparator = "\n\n";
          let separatorIndex;
          while ((separatorIndex = buffer.indexOf(eventSeparator)) !== -1) {
            const completeEvent = buffer.slice(
              0,
              separatorIndex + eventSeparator.length
            );
            buffer = buffer.slice(separatorIndex + eventSeparator.length);
            const fixedEvent = completeEvent.replace(
              /"type":""/g,
              '"type":"function"'
            );
            controller.enqueue(encoder.encode(fixedEvent));
          }
        } catch (error) {
          controller.error(error);
        }
      }
    });
    return new Response(stream, {
      headers: response.headers,
      status: response.status,
      statusText: response.statusText
    });
  };
}

// server/_core/chat.ts
function createLLMProvider() {
  const baseURL = ENV.forgeApiUrl.endsWith("/v1") ? ENV.forgeApiUrl : `${ENV.forgeApiUrl}/v1`;
  return createOpenAI({
    baseURL,
    apiKey: ENV.forgeApiKey,
    fetch: createPatchedFetch(fetch)
  });
}
var tools = {
  getWeather: tool({
    description: "Get the current weather for a location",
    inputSchema: z.object({
      location: z.string().describe("The city and country, e.g. 'Tokyo, Japan'"),
      unit: z.enum(["celsius", "fahrenheit"]).optional().default("celsius")
    }),
    execute: async ({ location, unit }) => {
      const temp = Math.floor(Math.random() * 30) + 5;
      const conditions = ["sunny", "cloudy", "rainy", "partly cloudy"][Math.floor(Math.random() * 4)];
      return {
        location,
        temperature: unit === "fahrenheit" ? Math.round(temp * 1.8 + 32) : temp,
        unit,
        conditions,
        humidity: Math.floor(Math.random() * 50) + 30
      };
    }
  }),
  calculate: tool({
    description: "Perform a mathematical calculation",
    inputSchema: z.object({
      expression: z.string().describe("The math expression to evaluate, e.g. '2 + 2'")
    }),
    execute: async ({ expression }) => {
      try {
        const sanitized = expression.replace(/[^0-9+\-*/().%\s]/g, "");
        const result = Function(
          `"use strict"; return (${sanitized})`
        )();
        return { expression, result };
      } catch {
        return { expression, error: "Invalid expression" };
      }
    }
  })
};
function registerChatRoutes(app) {
  const openai = createLLMProvider();
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "messages array is required" });
        return;
      }
      const result = streamText({
        model: openai.chat("gpt-4o"),
        system: "You are a helpful assistant. You have access to tools for getting weather and doing calculations. Use them when appropriate.",
        messages,
        tools,
        stopWhen: stepCountIs(5)
      });
      result.pipeUIMessageStreamToResponse(res);
    } catch (error) {
      console.error("[/api/chat] Error:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
}

// server/_core/systemRouter.ts
import { z as z2 } from "zod";

// server/_core/notification.ts
import { Resend } from "resend";
var resend = new Resend(process.env.RESEND_API_KEY);
var ADMIN_EMAIL = process.env.ADMIN_EMAIL || "nevildarukhanawala02@gmail.com";
async function notifyOwner(payload) {
  console.log(`[Notification] ${payload.title}
${payload.content}`);
  try {
    const { error } = await resend.emails.send({
      from: "StartupAI Advantage <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: payload.title,
      text: payload.content
    });
    if (error) {
      console.error("[Notification] Resend error:", error);
      return false;
    }
    console.log("[Notification] Email sent successfully to", ADMIN_EMAIL);
    return true;
  } catch (err) {
    console.error("[Notification] Failed to send email:", err);
    return false;
  }
}

// server/_core/trpc.ts
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
var t = initTRPC.context().create({
  transformer: superjson
});
var router = t.router;
var publicProcedure = t.procedure;
var requireUser = t.middleware(async (opts) => {
  const { ctx, next } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user
    }
  });
});
var protectedProcedure = t.procedure.use(requireUser);
var adminProcedure = t.procedure.use(
  t.middleware(async (opts) => {
    const { ctx, next } = opts;
    if (!ctx.user || ctx.user.role !== "admin") {
      throw new TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }
    return next({
      ctx: {
        ...ctx,
        user: ctx.user
      }
    });
  })
);

// server/_core/systemRouter.ts
var systemRouter = router({
  health: publicProcedure.input(
    z2.object({
      timestamp: z2.number().min(0, "timestamp cannot be negative")
    })
  ).query(() => ({
    ok: true
  })),
  notifyOwner: adminProcedure.input(
    z2.object({
      title: z2.string().min(1, "title is required"),
      content: z2.string().min(1, "content is required")
    })
  ).mutation(async ({ input }) => {
    const delivered = await notifyOwner(input);
    return {
      success: delivered
    };
  })
});

// server/routers.ts
import { z as z3 } from "zod";
import geoip from "geoip-lite";
var appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true
      };
    })
  }),
  consultation: router({
    submit: publicProcedure.input(
      z3.object({
        name: z3.string().min(1, "Name is required"),
        email: z3.string().email("Valid email is required"),
        company: z3.string().min(1, "Company name is required"),
        phone: z3.string().optional(),
        companySize: z3.string().optional(),
        industry: z3.string().optional(),
        message: z3.string().optional()
      })
    ).mutation(async ({ input }) => {
      const result = await createConsultationRequest(input);
      await notifyOwner({
        title: "New Consultation Request",
        content: `New consultation request from ${input.name} (${input.company})

Email: ${input.email}
Phone: ${input.phone || "Not provided"}
Company Size: ${input.companySize || "Not provided"}
Industry: ${input.industry || "Not provided"}

Message:
${input.message || "No message provided"}`
      });
      return { success: true };
    }),
    list: protectedProcedure.query(async () => {
      return await getAllConsultationRequests();
    })
  }),
  contact: router({
    submit: publicProcedure.input(
      z3.object({
        name: z3.string().min(1, "Name is required"),
        email: z3.string().email("Valid email is required"),
        subject: z3.string().optional(),
        message: z3.string().min(1, "Message is required")
      })
    ).mutation(async ({ input }) => {
      const result = await createContactSubmission(input);
      await notifyOwner({
        title: "New Contact Form Submission",
        content: `New contact form submission from ${input.name}

Email: ${input.email}
Subject: ${input.subject || "No subject"}

Message:
${input.message}`
      });
      return { success: true };
    }),
    list: protectedProcedure.query(async () => {
      return await getAllContactSubmissions();
    })
  }),
  blog: router({
    list: publicProcedure.query(async () => {
      return await getAllBlogPosts();
    }),
    getBySlug: publicProcedure.input(z3.object({ slug: z3.string() })).query(async ({ input }) => {
      return await getBlogPostBySlug(input.slug);
    }),
    related: publicProcedure.input(z3.object({ slug: z3.string(), series: z3.string().nullable() })).query(async ({ input }) => {
      return await getRelatedBlogPosts(input.slug, input.series);
    })
  }),
  admin: router({
    getLeads: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }
      return await getAllLeads();
    })
  }),
  analytics: router({
    // Public, fire-and-forget event tracking. Never surfaces errors to the caller.
    track: publicProcedure.input(
      z3.object({
        sessionId: z3.string().min(1),
        eventType: z3.string().min(1),
        entityId: z3.number().optional(),
        entityType: z3.string().optional(),
        pagePath: z3.string().optional(),
        referrer: z3.string().max(500).optional(),
        deviceType: z3.enum(["desktop", "mobile", "tablet"]).optional(),
        value: z3.number().int().nonnegative().optional()
      })
    ).mutation(async ({ input, ctx }) => {
      let country;
      try {
        const ip = ctx.req.ip;
        const geo = ip ? geoip.lookup(ip) : null;
        country = geo?.country ?? void 0;
      } catch {
        country = void 0;
      }
      trackEvent({ ...input, country }).catch(() => {
      });
      return { success: true };
    }),
    dashboard: adminProcedure.input(z3.object({ period: z3.enum(["week", "month"]) })).query(async ({ input }) => {
      return await getKpiDashboard(input.period);
    })
  })
});

// server/_core/context.ts
async function createContext(opts) {
  let user = null;
  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    user = null;
  }
  return {
    req: opts.req,
    res: opts.res,
    user
  };
}

// server/_core/vite.ts
import express from "express";
import fs from "fs";
import { nanoid } from "nanoid";
import path from "path";
async function setupVite(app, server) {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    configFile: path.resolve(process.cwd(), "vite.config.ts"),
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true
    },
    appType: "custom"
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(process.cwd(), "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app) {
  const distPath = path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

// server/blogSSR.ts
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function renderBodyToHtml(body) {
  const lines = body.split("\n").filter((l) => l.trim() !== "");
  return lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`;
    } else if (trimmed.startsWith("### ")) {
      return `<h3>${escapeHtml(trimmed.slice(4))}</h3>`;
    } else if (trimmed.startsWith("# ")) {
      return `<h1>${escapeHtml(trimmed.slice(2))}</h1>`;
    } else {
      let html = escapeHtml(trimmed);
      html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      return `<p>${html}</p>`;
    }
  }).join("\n");
}
function generateJsonLd(post) {
  const baseUrl = "https://startupaiadvantage.com";
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.body.slice(0, 160),
    image: post.headerImageUrl || `${baseUrl}/logo512.png`,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "StartupAI Advantage",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo512.png`
      }
    },
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.publishedAt).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    articleSection: post.series || "Manufacturing",
    url: `${baseUrl}/blog/${post.slug}`
  });
}
function blogSSRMiddleware() {
  return async (req, res, next) => {
    const url = req.originalUrl;
    if (!url.startsWith("/blog")) {
      return next();
    }
    if (url.includes("/api/") || url.includes(".")) {
      return next();
    }
    try {
      const slugMatch = url.match(/^\/blog\/([a-z0-9-]+)\/?$/);
      if (slugMatch) {
        const slug = slugMatch[1];
        const post = await getBlogPostBySlug(slug);
        if (!post) {
          return next();
        }
        const bodyHtml = renderBodyToHtml(post.body);
        const jsonLd = generateJsonLd(post);
        const description = post.excerpt || post.body.slice(0, 160).replace(/\n/g, " ");
        const baseUrl = "https://startupaiadvantage.com";
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
  <title>${escapeHtml(post.title)} | StartupAI Advantage Blog</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(post.title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${post.headerImageUrl || `${baseUrl}/logo512.png`}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${baseUrl}/blog/${post.slug}" />
  <meta property="article:published_time" content="${new Date(post.publishedAt).toISOString()}" />
  <meta property="article:author" content="${escapeHtml(post.author)}" />
  <meta property="article:section" content="${escapeHtml(post.series || "Manufacturing")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${post.headerImageUrl || `${baseUrl}/logo512.png`}" />
  <link rel="canonical" href="${baseUrl}/blog/${post.slug}" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body>
  <div id="root"></div>
  <!-- SSR Content for crawlers -->
  <article id="ssr-content" style="max-width:800px;margin:0 auto;padding:2rem;font-family:Inter,sans-serif;">
    <header>
      <nav><a href="/">StartupAI Advantage</a> &gt; <a href="/blog">Blog</a> &gt; ${escapeHtml(post.series || "Article")}</nav>
      ${post.headerImageUrl ? `<img src="${post.headerImageUrl}" alt="${escapeHtml(post.title)}" style="width:100%;max-height:400px;object-fit:cover;border-radius:8px;margin:1rem 0;" />` : ""}
      <h1>${escapeHtml(post.title)}</h1>
      <p><strong>By ${escapeHtml(post.author)}</strong> | ${post.series ? `Series: ${escapeHtml(post.series)}` : ""}</p>
    </header>
    <section>
      ${bodyHtml}
    </section>
    <footer>
      <p><a href="/blog">\u2190 Back to All Posts</a></p>
      <p><a href="/get-started">Book a Discovery Call</a> | <a href="/contact">Contact Us</a></p>
    </footer>
  </article>
  <script type="module" src="/src/main.tsx"></script>
  <script>
    // Hide SSR content once React hydrates
    if (document.getElementById('ssr-content')) {
      const observer = new MutationObserver(() => {
        const root = document.getElementById('root');
        if (root && root.children.length > 0) {
          document.getElementById('ssr-content').style.display = 'none';
          observer.disconnect();
        }
      });
      observer.observe(document.getElementById('root'), { childList: true });
    }
  </script>
</body>
</html>`;
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
        return;
      }
      if (url === "/blog" || url === "/blog/") {
        return next();
      }
      next();
    } catch (error) {
      console.error("[BlogSSR] Error:", error);
      next();
    }
  };
}

// server/sitemap.ts
var STATIC_PAGES = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/blog", priority: "0.9", changefreq: "daily" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/our-story", priority: "0.6", changefreq: "monthly" },
  { loc: "/how-it-works", priority: "0.8", changefreq: "monthly" },
  { loc: "/contact", priority: "0.6", changefreq: "monthly" },
  { loc: "/pricing", priority: "0.8", changefreq: "monthly" },
  { loc: "/resources", priority: "0.7", changefreq: "monthly" },
  { loc: "/get-started", priority: "0.8", changefreq: "monthly" },
  { loc: "/intelligence-systems/revenue-growth", priority: "0.7", changefreq: "monthly" },
  { loc: "/intelligence-systems/operational-excellence", priority: "0.7", changefreq: "monthly" },
  { loc: "/intelligence-systems/market-competitive", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/manufacturing", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/fmcg", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/retail", priority: "0.7", changefreq: "monthly" },
  { loc: "/solutions/b2b-services", priority: "0.7", changefreq: "monthly" }
];
var BASE_URL = "https://startupaiadvantage.com";
function sitemapMiddleware() {
  return async (req, res, next) => {
    if (req.path !== "/sitemap.xml") {
      return next();
    }
    try {
      const posts = await getAllBlogPosts();
      const staticUrls = STATIC_PAGES.map(
        (page) => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      ).join("\n");
      const blogUrls = posts.map(
        (post) => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.publishedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
      ).join("\n");
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;
      res.status(200).set({ "Content-Type": "application/xml" }).end(xml);
    } catch (error) {
      console.error("[Sitemap] Error generating sitemap:", error);
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><priority>1.0</priority></url>
  <url><loc>${BASE_URL}/blog</loc><priority>0.9</priority></url>
</urlset>`;
      res.status(200).set({ "Content-Type": "application/xml" }).end(xml);
    }
  };
}
function robotsTxtMiddleware() {
  return (req, res, next) => {
    if (req.path !== "/robots.txt") {
      return next();
    }
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Allow all crawlers to index blog content
User-agent: Googlebot
Allow: /blog/

User-agent: GPTBot
Allow: /blog/

User-agent: ChatGPT-User
Allow: /blog/

User-agent: Claude-Web
Allow: /blog/

User-agent: PerplexityBot
Allow: /blog/

User-agent: Anthropic-AI
Allow: /blog/
`;
    res.status(200).set({ "Content-Type": "text/plain" }).end(robotsTxt);
  };
}

// server/_core/storageProxy.ts
function registerStorageProxy() {
}

// server/_core/index.ts
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}
async function findAvailablePort(startPort = 3e3) {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}
async function startServer() {
  const app = express2();
  const server = createServer(app);
  app.set("trust proxy", true);
  app.use(express2.json({ limit: "50mb" }));
  app.use(express2.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  registerChatRoutes(app);
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext
    })
  );
  app.use(sitemapMiddleware());
  app.use(robotsTxtMiddleware());
  app.use(blogSSRMiddleware());
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);
  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
