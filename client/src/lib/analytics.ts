import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "../../../server/routers";

// Standalone (non-React) tRPC client so tracking calls can fire from
// anywhere — route changes, effects, callbacks — without needing a
// mounted query hook. Mirrors the link setup in main.tsx.
const analyticsClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
          keepalive: true,
        });
      },
    }),
  ],
});

const SESSION_KEY = "saa_session_id";

export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = window.localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function detectDeviceType(): "desktop" | "mobile" | "tablet" {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return "tablet";
  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) return "mobile";
  return "desktop";
}

type TrackInput = {
  eventType: string;
  entityId?: number;
  entityType?: string;
  pagePath?: string;
  value?: number;
};

/**
 * Fire-and-forget analytics tracking. Never blocks the UI and never
 * surfaces errors — a failed tracking call should be invisible.
 *
 * document.referrer reflects the referrer at initial page load and doesn't
 * change on client-side (SPA) navigation, so it naturally captures the
 * session's true entry source across every event fired afterward.
 */
function track({ eventType, entityId, entityType, pagePath, value }: TrackInput) {
  if (typeof window === "undefined") return;
  analyticsClient.analytics.track
    .mutate({
      sessionId: getSessionId(),
      eventType,
      entityId,
      entityType,
      pagePath: pagePath ?? window.location.pathname,
      referrer: document.referrer || undefined,
      deviceType: detectDeviceType(),
      value,
    })
    .catch(() => {
      // Silently ignore — analytics should never break the app
    });
}

export function trackPageView(pagePath?: string) {
  track({ eventType: "page_view", pagePath });
}

export function trackBlogPostView(postId: number, pagePath?: string) {
  track({ eventType: "blog_post_view", entityId: postId, entityType: "blog_post", pagePath });
}

export function trackContactSubmit() {
  track({ eventType: "contact_form_submit" });
}

export function trackPageDuration(pagePath: string, seconds: number) {
  if (seconds <= 0) return;
  track({ eventType: "page_time", pagePath, value: seconds });
}
