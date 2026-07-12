import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "@/lib/analytics";

/**
 * Fires a page_view analytics event on every route change.
 * Mount once near the top of the app. Renders nothing.
 */
export default function RouteTracker() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.startsWith("/admin")) return;
    trackPageView(location);
  }, [location]);

  return null;
}
