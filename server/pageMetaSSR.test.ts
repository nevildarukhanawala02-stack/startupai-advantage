import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "fs";
import type { Request, Response, NextFunction } from "express";
import { ceoSherpaLegacyRedirect, pageMetaSSRMiddleware } from "./pageMetaSSR";
import { sitemapMiddleware } from "./sitemap";
import { CEO_SHERPA_LEGACY_PATHS, CEO_SHERPA_META, CEO_SHERPA_PATH } from "../shared/ceoSherpa";

/**
 * CEO Sherpa route tests. None of these need a database or a running server:
 * the middleware is called directly with fake request and response objects,
 * the index.html read is stubbed, and the sitemap's blog query is mocked.
 */

vi.mock("./db", () => ({ getAllBlogPosts: async () => [] }));

const TEMPLATE = [
  "<!doctype html>",
  "<html><head>",
  "<title>Default title</title>",
  '<meta name="description" content="Default description" />',
  '<link rel="canonical" href="https://startupaiadvantage.com/" />',
  "</head><body><div id=\"root\"></div></body></html>",
].join("\n");

type Result = {
  nexted: boolean;
  status?: number;
  headers: Record<string, string>;
  body?: string;
  redirect?: { status: number; location: string };
};

async function run(
  mw: (req: Request, res: Response, next: NextFunction) => unknown,
  method: string,
  url: string,
): Promise<Result> {
  const result: Result = { nexted: false, headers: {} };
  const pathname = url.split("?")[0];
  const req = { method, url, path: pathname } as unknown as Request;
  const res = {
    status(code: number) {
      result.status = code;
      return res;
    },
    set(h: Record<string, string>) {
      Object.assign(result.headers, h);
      return res;
    },
    end(body: string) {
      result.body = body;
      return res;
    },
    redirect(status: number, location: string) {
      result.redirect = { status, location };
    },
  } as unknown as Response;
  await mw(req, res, () => {
    result.nexted = true;
  });
  return result;
}

describe("CEO Sherpa head tags (pageMetaSSRMiddleware)", () => {
  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "production");
    vi.spyOn(fs, "readFileSync").mockReturnValue(TEMPLATE);
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("serves /ceo-sherpa in production with the new head tags", async () => {
    const r = await run(pageMetaSSRMiddleware(), "GET", "/ceo-sherpa");
    expect(r.nexted).toBe(false);
    expect(r.status).toBe(200);
    expect(r.headers["Content-Type"]).toContain("text/html");

    const html = r.body ?? "";
    const m = CEO_SHERPA_META;
    expect(html).toContain(`<title>${m.title}</title>`);
    expect(html).toContain(`<meta property="og:title" content="${m.socialTitle}" />`);
    expect(html).toContain('property="og:description"');
    expect(html).toContain(`<meta property="og:url" content="${m.canonical}" />`);
    expect(html).toContain(`<meta property="og:image" content="${m.image}" />`);
    expect(html).toContain('<meta name="twitter:card" content="summary_large_image" />');
    expect(html).toContain(`<link rel="canonical" href="${m.canonical}" />`);
    expect(html).not.toContain("Default title");
    expect(m.canonical).toBe("https://startupaiadvantage.com/ceo-sherpa");
  });

  it("also serves /ceo-sherpa with a trailing slash", async () => {
    const r = await run(pageMetaSSRMiddleware(), "GET", "/ceo-sherpa/");
    expect(r.status).toBe(200);
  });

  it("adds exactly one FAQPage JSON-LD script with 8 questions", async () => {
    const r = await run(pageMetaSSRMiddleware(), "GET", "/ceo-sherpa");
    const html = r.body ?? "";
    const scripts = html.match(/<script type="application\/ld\+json" id="ceo-sherpa-faq-ld">/g) ?? [];
    expect(scripts).toHaveLength(1);

    const json = html.match(/id="ceo-sherpa-faq-ld">([\s\S]*?)<\/script>/)?.[1] ?? "";
    const data = JSON.parse(json);
    expect(data["@type"]).toBe("FAQPage");
    expect(data.mainEntity).toHaveLength(8);
  });

  it("falls through for a path that is not registered", async () => {
    const r = await run(pageMetaSSRMiddleware(), "GET", "/pricing");
    expect(r.nexted).toBe(true);
    expect(r.status).toBeUndefined();
  });

  it("falls through for a POST to /ceo-sherpa", async () => {
    const r = await run(pageMetaSSRMiddleware(), "POST", "/ceo-sherpa");
    expect(r.nexted).toBe(true);
    expect(r.status).toBeUndefined();
  });

  it("falls through in development so Vite serves the template", async () => {
    vi.stubEnv("NODE_ENV", "development");
    const r = await run(pageMetaSSRMiddleware(), "GET", "/ceo-sherpa");
    expect(r.nexted).toBe(true);
  });
});

describe("Retired page redirects (ceoSherpaLegacyRedirect)", () => {
  const suffixes = ["", "/", "?utm_source=linkedin&utm_campaign=sherpa", "/?ref=post"];

  for (const legacy of CEO_SHERPA_LEGACY_PATHS) {
    for (const suffix of suffixes) {
      const url = legacy + suffix;
      const query = suffix.includes("?") ? suffix.slice(suffix.indexOf("?")) : "";
      it(`301s ${url} to ${CEO_SHERPA_PATH}${query}`, async () => {
        const r = await run(ceoSherpaLegacyRedirect(), "GET", url);
        expect(r.nexted).toBe(false);
        expect(r.redirect).toEqual({ status: 301, location: CEO_SHERPA_PATH + query });
      });
    }
  }

  it("also redirects HEAD requests", async () => {
    const r = await run(ceoSherpaLegacyRedirect(), "HEAD", CEO_SHERPA_LEGACY_PATHS[0]);
    expect(r.redirect?.status).toBe(301);
  });

  it("does not redirect the new path or other pages", async () => {
    for (const url of [CEO_SHERPA_PATH, "/pricing", "/intelligence-systems/revenue-growth"]) {
      const r = await run(ceoSherpaLegacyRedirect(), "GET", url);
      expect(r.nexted).toBe(true);
      expect(r.redirect).toBeUndefined();
    }
  });

  it("does not redirect a POST to a legacy path", async () => {
    const r = await run(ceoSherpaLegacyRedirect(), "POST", CEO_SHERPA_LEGACY_PATHS[0]);
    expect(r.nexted).toBe(true);
    expect(r.redirect).toBeUndefined();
  });
});

describe("Sitemap", () => {
  it("lists /ceo-sherpa and no longer lists the retired paths", async () => {
    const r = await run(sitemapMiddleware(), "GET", "/sitemap.xml");
    const xml = r.body ?? "";
    expect(r.status).toBe(200);
    expect(xml).toContain("<loc>https://startupaiadvantage.com/ceo-sherpa</loc>");
    for (const legacy of CEO_SHERPA_LEGACY_PATHS) expect(xml).not.toContain(legacy);
  });
});
