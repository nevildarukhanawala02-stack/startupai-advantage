import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { ForbiddenError } from "@shared/_core/errors";
import { parse as parseCookieHeader } from "cookie";
import type { Request } from "express";
import { SignJWT, jwtVerify } from "jose";
import type { User } from "../../drizzle/schema";
import * as db from "../db";
import { ENV } from "./env";

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

class SDKServer {
  private parseCookies(cookieHeader: string | undefined) {
    if (!cookieHeader) return new Map<string, string>();
    const parsed = parseCookieHeader(cookieHeader);
    return new Map(Object.entries(parsed));
  }

  private getSessionSecret() {
    return new TextEncoder().encode(ENV.cookieSecret);
  }

  async createSessionToken(
    openId: string,
    options: { expiresInMs?: number; name?: string; role?: string; email?: string } = {}
  ): Promise<string> {
    const issuedAt = Date.now();
    const expiresInMs = options.expiresInMs ?? ONE_YEAR_MS;
    const expirationSeconds = Math.floor((issuedAt + expiresInMs) / 1000);
    const secretKey = this.getSessionSecret();
    return new SignJWT({
      openId,
      appId: "saa",
      name: options.name || "",
      role: options.role || "user",
      email: options.email || "",
    })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setExpirationTime(expirationSeconds)
      .sign(secretKey);
  }

  async verifySession(
    cookieValue: string | undefined | null
  ): Promise<{ openId: string; appId: string; name: string; role?: string; email?: string } | null> {
    if (!cookieValue) return null;
    try {
      const secretKey = this.getSessionSecret();
      const { payload } = await jwtVerify(cookieValue, secretKey, {
        algorithms: ["HS256"],
      });
      const { openId, appId, name, role, email } = payload as Record<string, unknown>;
      if (!isNonEmptyString(openId) || !isNonEmptyString(appId) || !isNonEmptyString(name)) return null;
      return { 
        openId, appId, name,
        role: typeof role === "string" ? role : undefined,
        email: typeof email === "string" ? email : undefined,
      };
    } catch {
      return null;
    }
  }

  async authenticateRequest(req: Request): Promise<User> {
    const cookies = this.parseCookies(req.headers.cookie);
    const sessionCookie = cookies.get(COOKIE_NAME);
    const session = await this.verifySession(sessionCookie);
    if (!session) throw ForbiddenError("Invalid session cookie");

    // If the JWT has role=admin embedded, return synthesized user without DB lookup
    if (session.role === "admin") {
      return {
        id: 1,
        openId: session.openId,
        name: session.name,
        email: session.email || ENV.adminEmail,
        loginMethod: "password",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      } as User;
    }

    // For regular users, look up in DB
    const user = await db.getUserByOpenId(session.openId);
    if (!user) throw ForbiddenError("User not found");
    return user;
  }
}

export const sdk = new SDKServer();
