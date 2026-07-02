import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";

export function registerOAuthRoutes(app: Express) {
  // POST /api/auth/login — email + password
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
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

      if (email.trim() !== adminEmail.trim() || password !== adminPassword) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }

      // Try to upsert user in DB — but don't fail login if DB write fails
      const openId = "admin-user";
      try {
        await db.upsertUser({
          openId,
          name: "Admin",
          email: adminEmail,
          loginMethod: "password",
          role: "admin",
          lastSignedIn: new Date(),
        });
      } catch (dbError) {
        console.error("[Auth] DB upsert failed (non-fatal):", dbError);
        // Continue — session token works without DB record
      }

      const sessionToken = await sdk.createSessionToken(openId, {
        name: "Admin",
        expiresInMs: ONE_YEAR_MS,
      });

      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
      res.json({ success: true });
    } catch (error) {
      console.error("[Auth] Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // POST /api/auth/logout
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
}
