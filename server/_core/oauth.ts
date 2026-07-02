import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";

export function registerOAuthRoutes(app: Express) {
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
        res.status(500).json({ error: "Auth not configured" });
        return;
      }

      if (email.trim() !== adminEmail.trim() || password !== adminPassword) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }

      // Embed role directly in JWT — no DB write needed
      const sessionToken = await sdk.createSessionToken("admin-user", {
        name: "Admin",
        role: "admin",
        email: adminEmail,
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

  app.post("/api/auth/logout", (req: Request, res: Response) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
}
