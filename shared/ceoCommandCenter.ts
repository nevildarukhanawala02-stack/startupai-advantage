/**
 * Single source of truth for the CEO Command Center page metadata and FAQ.
 * Used by the React page (client/src/pages/CeoCommandCenter.tsx) and by
 * server/pageMetaSSR.ts so crawlers receive the same head tags and FAQPage data.
 *
 * Copy comes from "CEO Command Center: Product Page Brief" (parts 6 and 10).
 */

// Canonical host matches the rest of the site (server/sitemap.ts and blogSSR.ts use the non-www host).
export const CEO_COMMAND_CENTER_PATH = "/intelligence-systems/ceo-command-center";
export const SITE_BASE_URL = "https://startupaiadvantage.com";

export const CEO_COMMAND_CENTER_META = {
  title: "StartupAI Advantage - CEO Command Center for D2C Brands",
  description:
    "CEO Command Center helps D2C founders make informed decisions on ad spend, discounts and stock, with the full story behind every recommendation.",
  socialTitle: "CEO Command Center - StartupAI Advantage",
  socialDescription:
    "Make informed decisions, not gut-feel ones. CEO Command Center warns you before a costly mistake and shows the full story behind every call.",
  twitterDescription: "CEO Command Center: informed decisions for D2C brands.",
  canonical: `${SITE_BASE_URL}${CEO_COMMAND_CENTER_PATH}`,
} as const;

export type CommandCenterFaq = {
  q: string;
  /** Visible answer text. */
  a: string;
  /** Answer used in FAQPage structured data. Empty means the answer is not final and is left out. */
  aPlain: string;
  /** Open [CONFIRM] item, rendered as a visible placeholder on the page. */
  confirm?: string;
};

export const CEO_COMMAND_CENTER_FAQS: CommandCenterFaq[] = [
  {
    q: "What is CEO Command Center?",
    a: "A decision layer for D2C founders and CEOs. It brings your history and current numbers from the systems you already use into one place, warns you before costly mistakes, points out opportunities, and shows the full story behind every recommendation.",
    aPlain:
      "A decision layer for D2C founders and CEOs. It brings your history and current numbers from the systems you already use into one place, warns you before costly mistakes, points out opportunities, and shows the full story behind every recommendation.",
  },
  {
    q: "Who is it for?",
    a: "D2C founders and CEOs who run ads, agencies, marketplaces and stock across many tools and want to decide with the full picture.",
    aPlain:
      "D2C founders and CEOs who run ads, agencies, marketplaces and stock across many tools and want to decide with the full picture.",
    confirm: "add \u201CBuilt for Indian businesses \u20B910\u2013200 Cr\u201D, as elsewhere on the site, if it applies to D2C",
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
    // Source: ceo-command-center repo, docs/SECURITY.md. Approved by Nevil.
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
