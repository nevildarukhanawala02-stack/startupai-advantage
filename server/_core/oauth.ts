import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";

// Simple email+password admin login — credentials set in .env
// ADMIN_EMAIL and ADMIN_PASSWORD

export function registerOAuthRoutes(app: Express) {
  // POST /api/auth/login — email + password
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const adminEmail = ENV.adminEmail;
    const adminPassword = ENV.adminPassword;

    if (!adminEmail || !adminPassword) {
      console.error("[Auth] ADMIN_EMAIL or ADMIN_PASSWORD not set in environment");
      res.status(500).json({ error: "Auth not configured" });
      return;
    }

    if (email !== adminEmail || password !== adminPassword) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // Upsert admin user in DB using email as the stable openId
    const openId = `admin:${email}`;
    await db.upsertUser({
      openId,
      name: "Admin",
      email,
      loginMethod: "password",
      role: "admin",
      lastSignedIn: new Date(),
    });

    const sessionToken = await sdk.createSessionToken(openId, {
      name: "Admin",
      expiresInMs: ONE_YEAR_MS,
    });

    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
    res.json({ success: true });
  });

  // POST /api/auth/logout — clear cookie
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
}
