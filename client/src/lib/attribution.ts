/**
 * First-touch ad attribution.
 *
 * When a visitor lands with utm_* (or a LinkedIn / Google click id) in the URL, remember it
 * for 30 days so an inquiry submitted later can say which ad it came from, even if the visitor
 * browsed other pages first. Storage failures are ignored: attribution is a convenience.
 */
const KEY = "saa_attribution";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const CLICK_IDS = ["li_fat_id", "gclid"] as const;

type Stored = { at: number; landing: string; values: Record<string, string> };

function read(): Stored | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stored;
    if (!parsed || typeof parsed.at !== "number" || Date.now() - parsed.at > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** True when the current URL carries ad parameters. */
export function hasAdParams(search: string = window.location.search): boolean {
  const q = new URLSearchParams(search);
  return [...PARAMS, ...CLICK_IDS].some((k) => q.has(k));
}

/** Call once on page load. Keeps the first ad touch; a later touch replaces it only after 30 days. */
export function captureAttribution(): void {
  try {
    if (typeof window === "undefined" || !hasAdParams()) return;
    if (read()) return;
    const q = new URLSearchParams(window.location.search);
    const values: Record<string, string> = {};
    [...PARAMS, ...CLICK_IDS].forEach((k) => {
      const v = q.get(k);
      if (v) values[k] = v.slice(0, 120);
    });
    const stored: Stored = { at: Date.now(), landing: window.location.pathname, values };
    window.localStorage.setItem(KEY, JSON.stringify(stored));
  } catch {
    /* ignore */
  }
}

/**
 * One readable line for the inquiry notification, e.g.
 * "Source: linkedin / paid-video / sherpa-launch (landed on /ceo-sherpa)".
 * Falls back to the referrer, then to "direct or unknown".
 */
export function attributionLine(): string {
  try {
    const s = read();
    if (s && Object.keys(s.values).length > 0) {
      const v = s.values;
      const parts = [v.utm_source, v.utm_medium, v.utm_campaign, v.utm_content].filter(Boolean).join(" / ");
      const click = v.li_fat_id ? " [LinkedIn click id present]" : v.gclid ? " [Google click id present]" : "";
      return `Source: ${parts || "ad click"}${click} (landed on ${s.landing})`;
    }
    const ref = document.referrer;
    if (ref) {
      try {
        return `Source: referred by ${new URL(ref).hostname}`;
      } catch {
        /* fall through */
      }
    }
  } catch {
    /* ignore */
  }
  return "Source: direct or unknown";
}
