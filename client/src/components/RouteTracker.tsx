import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageView, trackPageDuration } from "@/lib/analytics";

/**
 * Fires a page_view analytics event on every route change, and a page_time
 * event (seconds spent) whenever the visitor leaves that page — either by
 * navigating elsewhere or closing the tab. Mount once near the top of the
 * app. Renders nothing.
 */
export default function RouteTracker() {
  const [location] = useLocation();
  const currentPathRef = useRef<string | null>(null);
  const enteredAtRef = useRef<number>(Date.now());

  useEffect(() => {
    // Flush time spent on the page we're leaving before entering the new one
    const previousPath = currentPathRef.current;
    if (previousPath && !previousPath.startsWith("/admin")) {
      const seconds = Math.round((Date.now() - enteredAtRef.current) / 1000);
      trackPageDuration(previousPath, seconds);
    }

    currentPathRef.current = location;
    enteredAtRef.current = Date.now();

    if (!location.startsWith("/admin")) {
      trackPageView(location);
    }
  }, [location]);

  useEffect(() => {
    // pagehide fires reliably on tab close / navigation away from the site,
    // unlike beforeunload which can be skipped by the bfcache.
    function flushOnHide() {
      const path = currentPathRef.current;
      if (path && !path.startsWith("/admin")) {
        const seconds = Math.round((Date.now() - enteredAtRef.current) / 1000);
        trackPageDuration(path, seconds);
      }
    }
    window.addEventListener("pagehide", flushOnHide);
    return () => window.removeEventListener("pagehide", flushOnHide);
  }, []);

  return null;
}
