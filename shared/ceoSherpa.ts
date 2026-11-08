/**
 * Single source of truth for the CEO Sherpa page metadata and FAQ.
 * Used by the React page (client/src/pages/CeoSherpa.tsx) and by
 * server/pageMetaSSR.ts so crawlers receive the same head tags and FAQPage data.
 *
 * Copy comes from "CEO Sherpa on the website: master framework" (sections 6 and 8).
 */

// Canonical host matches the rest of the site (server/sitemap.ts and blogSSR.ts use the non-www host).
export const CEO_SHERPA_PATH = "/ceo-sherpa";
// Retired product-page paths. Both 301 to CEO_SHERPA_PATH (server/_core/index.ts) and
// redirect client-side (client/src/App.tsx).
export const CEO_SHERPA_LEGACY_PATHS = [
  "/intelligence-systems/ceo-command-center",
  "/intelligence-systems/ceo-sherpa",
];
export const SITE_BASE_URL = "https://startupaiadvantage.com";

export const CEO_SHERPA_META = {
  title: "StartupAI Advantage - CEO Sherpa for D2C Brands",
  description:
    "CEO Sherpa reads your own numbers every day and shows D2C founders what to look at first, and why, with the full story behind every recommendation.",
  socialTitle: "CEO Sherpa for D2C Brands - StartupAI Advantage",
  socialDescription:
    "Know what to look at, and why. CEO Sherpa shows D2C founders what needs a look each morning, with the full story behind every recommendation.",
  twitterDescription: "CEO Sherpa: know what to look at, and why.",
  canonical: `${SITE_BASE_URL}${CEO_SHERPA_PATH}`,
  image: `${SITE_BASE_URL}/og/ceo-sherpa.png`,
  imageWidth: "1200",
  imageHeight: "630",
  imageAlt: "CEO Sherpa: know what to look at, and why.",
} as const;

export type SherpaFaq = {
  q: string;
  /** Visible answer text. */
  a: string;
  /** Answer used in FAQPage structured data. Empty means the answer is not final and is left out. */
  aPlain: string;
  /** Open [CONFIRM] item, rendered as a visible placeholder on the page. */
  confirm?: string;
};

export const CEO_SHERPA_FAQS: SherpaFaq[] = [
  {
    q: "What is CEO Sherpa?",
    a: "A decision layer for D2C founders and CEOs. It brings your history and current numbers from the systems you already use into one place, warns you before costly mistakes, points out opportunities, and shows the full story behind every recommendation.",
    aPlain:
      "A decision layer for D2C founders and CEOs. It brings your history and current numbers from the systems you already use into one place, warns you before costly mistakes, points out opportunities, and shows the full story behind every recommendation.",
  },
  {
    q: "Who is it for?",
    a: "D2C founders and CEOs who run ads, agencies, marketplaces and stock across many tools and want to decide with the full picture. Built for Indian businesses \u20B910\u2013200 Cr.",
    aPlain:
      "D2C founders and CEOs who run ads, agencies, marketplaces and stock across many tools and want to decide with the full picture. Built for Indian businesses \u20B910\u2013200 Cr.",
  },
  {
    q: "Is it a subscription?",
    a: "No. You pay once for setup, which connects your sources, brings in your history and shapes the product around the metrics you care about. After that you buy AI packs and refill them as you use them. There is no monthly retainer and no per-user fee.",
    aPlain:
      "No. You pay once for setup, which connects your sources, brings in your history and shapes the product around the metrics you care about. After that you buy AI packs and refill them as you use them. There is no monthly retainer and no per-user fee.",
  },
  {
    q: "What decisions does it cover today?",
    a: "Five: ad spend, discount depth, whether you can afford the festive plan, what and how much to reorder, and whether to renew, cut or replace an agency.",
    aPlain:
      "Five: ad spend, discount depth, whether you can afford the festive plan, what and how much to reorder, and whether to renew, cut or replace an agency.",
  },
  {
    q: "Does it make the decision for me?",
    a: "No. It gives you the reasoning, how sure it is, and where the numbers came from. You decide.",
    aPlain:
      "No. It gives you the reasoning, how sure it is, and where the numbers came from. You decide.",
  },
  {
    q: "Will it replace my agencies or my team?",
    a: "No. It gives you and your team the same clear picture to decide from.",
    aPlain: "No. It gives you and your team the same clear picture to decide from.",
  },
  {
    q: "Is my data safe?",
    // Source: docs/SECURITY.md in the product repo. Approved by Nevil.
    a: "Security is built in from the start. Each person signs in with their own account and sees only what their role allows, and repeated wrong-password attempts are blocked. The AI can only read, never change anything, and it works from the worked-out answers your numbers produce, not from customer names, phone numbers or addresses. Before any real data is connected, we agree with you what goes where, including how the AI provider handles it.",
    aPlain:
      "Security is built in from the start. Each person signs in with their own account and sees only what their role allows, and repeated wrong-password attempts are blocked. The AI can only read, never change anything, and it works from the worked-out answers your numbers produce, not from customer names, phone numbers or addresses. Before any real data is connected, we agree with you what goes where, including how the AI provider handles it.",
  },
  {
    q: "Can I see it first?",
    a: "Yes. Book a discovery call and we will walk you through it. The examples on this page come from a demo brand with sample data, and we can talk through what it would look like on your own numbers.",
    aPlain:
      "Yes. Book a discovery call and we will walk you through it. The examples on this page come from a demo brand with sample data, and we can talk through what it would look like on your own numbers.",
  },
];
