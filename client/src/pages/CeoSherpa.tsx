import { useEffect } from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CEO_SHERPA_META, CEO_SHERPA_FAQS } from "@shared/ceoSherpa";

/**
 * CEO Sherpa page.
 * Copy comes from "CEO Sherpa on the website: master framework" (section 6) and must pass the
 * guardrails in its section 7. Do not edit copy here without checking them.
 *
 * Anything Nevil has not confirmed yet sits behind one of the constants below.
 */

/** Flip to true only when the NGO partner is named and the first payout is made. */
const SHOW_WHAT_WE_STAND_FOR = false;
/** Reports screen and results copy. Hidden until Nevil confirms the Reports screen is live (finding 5, D11). */
const SHOW_REPORTS = false;
/** Product-story PDF download. Turn on once the PDF is updated for findings 1, 2, 4 and 6 (D9). */
const SHOW_PDF_DOWNLOAD = false;
/** Walkthrough video. The block renders only when this is a non-empty string (D10). */
const WALKTHROUGH_VIDEO_URL: string = "";
/** The four trust claims marked CONFIRM (O2). Hidden until Nevil ticks them against the live product. */
const SHOW_STRONG_TRUST_CLAIMS = false;

const PDF_DOWNLOAD_PATH = "/downloads/CEO-Sherpa-Product-Story.pdf";
const DEMO_LABEL = "Demo brand, sample data";
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@600;700&display=swap";

/** Page-scoped look. Every selector starts with .sherpa-page so nothing leaks to the rest of the site. */
const SHERPA_CSS = `
.sherpa-page{--ink:#14281D;--forest:#3A6B4F;--paper:#FAF8F3;--mint:#DCE8DF;--mist:#EAF1EC;--sage:#CFE3D6;--orange:#E36B3F;--gold:#E8BD57;--cream:#F6E7BD;--stone:#56665C;
  background:var(--paper);color:var(--ink);font-family:'Source Sans 3',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:1.0625rem;line-height:1.65}
.sherpa-page h1,.sherpa-page h2,.sherpa-page h3,.sherpa-page h4{font-family:'Source Serif 4',Georgia,'Times New Roman',serif;color:var(--ink);font-weight:700;line-height:1.2;letter-spacing:-0.01em;margin:0}
.sherpa-page h1{font-size:clamp(2.25rem,5.5vw,3.75rem)}
.sherpa-page h2{font-size:clamp(1.75rem,3.6vw,2.5rem)}
.sherpa-page h3{font-size:1.3rem}
.sherpa-page h4{font-size:1.1rem}
.sherpa-page p{color:var(--ink);margin:0}
.sherpa-page a{color:var(--forest)}
.sherpa-page a:focus-visible,.sherpa-page button:focus-visible{outline:3px solid var(--orange);outline-offset:3px;border-radius:4px}
.sherpa-page .sherpa-wrap{max-width:68rem;margin:0 auto;padding:0 1.25rem}
.sherpa-page .sherpa-narrow{max-width:46rem}
.sherpa-page .sherpa-sec{padding:4.5rem 0;scroll-margin-top:5rem}
.sherpa-page .sherpa-paper{background:var(--paper)}
.sherpa-page .sherpa-mist{background:var(--mist)}
.sherpa-page .sherpa-label{font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.78rem;letter-spacing:.14em;color:var(--forest);font-weight:500}
.sherpa-page .sherpa-lead{font-size:1.2rem;color:var(--stone);max-width:42rem}
.sherpa-page .sherpa-stack>*+*{margin-top:1rem}
.sherpa-page .sherpa-head{margin-bottom:2rem}
.sherpa-page .sherpa-head>*+*{margin-top:.9rem}
.sherpa-page .sherpa-btn{display:inline-block;background:var(--forest);color:var(--paper);font-weight:700;padding:.9rem 1.6rem;border-radius:.5rem;text-decoration:none;border:2px solid var(--forest)}
.sherpa-page .sherpa-btn:hover{background:var(--ink);border-color:var(--ink)}
.sherpa-page .sherpa-btn-light{background:var(--paper);color:var(--ink);border-color:var(--paper)}
.sherpa-page .sherpa-btn-light:hover{background:var(--mint);border-color:var(--mint)}
.sherpa-page .sherpa-link{color:var(--forest);font-weight:600;text-underline-offset:3px}
.sherpa-page .sherpa-hero{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:2.5rem;align-items:center}
.sherpa-page .sherpa-hero-icon{display:flex;justify-content:center;align-items:center}
.sherpa-page .sherpa-hero-icon img{width:100%;max-width:20rem;height:auto;border-radius:2.25rem;box-shadow:0 24px 48px -20px rgba(20,40,29,.45)}
@media (max-width:900px){.sherpa-page .sherpa-hero{grid-template-columns:minmax(0,1fr)}.sherpa-page .sherpa-hero-icon{order:-1;justify-content:flex-start}.sherpa-page .sherpa-hero-icon img{max-width:7rem;border-radius:1.5rem}}
.sherpa-page .sherpa-small{font-size:.9rem;color:var(--stone)}
.sherpa-page .sherpa-demo{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.75rem;letter-spacing:.1em;color:var(--stone);margin-top:1rem}
.sherpa-page .sherpa-takeaway{background:var(--mint);border-left:5px solid var(--forest);border-radius:.25rem;padding:1.1rem 1.4rem;margin-top:2.5rem;max-width:46rem}
.sherpa-page .sherpa-takeaway .sherpa-label{display:block;margin-bottom:.35rem}
.sherpa-page .sherpa-card{background:#fff;border:1px solid var(--sage);border-radius:.75rem;padding:1.4rem}
.sherpa-page .sherpa-card>*+*{margin-top:.6rem}
.sherpa-page .sherpa-grid{display:grid;gap:1.25rem}
.sherpa-page .sherpa-g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.sherpa-page .sherpa-g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.sherpa-page .sherpa-g5{grid-template-columns:repeat(5,minmax(0,1fr))}
@media (max-width:900px){.sherpa-page .sherpa-g3,.sherpa-page .sherpa-g5{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.sherpa-page .sherpa-g2,.sherpa-page .sherpa-g3,.sherpa-page .sherpa-g5{grid-template-columns:minmax(0,1fr)}.sherpa-page .sherpa-sec{padding:3rem 0}}
.sherpa-page .sherpa-chip{display:inline-block;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.7rem;letter-spacing:.12em;padding:.15rem .55rem;border-radius:.25rem;border:1px solid transparent;font-weight:500;white-space:nowrap}
.sherpa-page .sherpa-chip-record{background:var(--forest);color:var(--paper);border-color:var(--forest)}
.sherpa-page .sherpa-chip-estimate{background:var(--mint);color:var(--ink);border-color:var(--forest)}
.sherpa-page .sherpa-chip-told{background:var(--cream);color:var(--ink);border-color:var(--gold)}
.sherpa-page .sherpa-chip-assumed{background:var(--paper);color:var(--stone);border:1px dashed var(--stone)}
.sherpa-page .sherpa-class{display:inline-block;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.75rem;letter-spacing:.12em;font-weight:500;color:var(--ink);background:var(--cream);border:1px solid var(--gold);border-radius:.25rem;padding:.15rem .55rem}
.sherpa-page .sherpa-big{font-family:'Source Serif 4',Georgia,serif;font-weight:600;font-size:clamp(1.35rem,2.6vw,1.9rem);line-height:1.35}
.sherpa-page .sherpa-rows>div{display:flex;gap:.75rem;flex-wrap:wrap;align-items:baseline;border-top:1px solid var(--sage);padding:.65rem 0}
.sherpa-page .sherpa-rows dt{color:var(--stone);min-width:13rem;font-size:.95rem}
.sherpa-page .sherpa-rows dd{margin:0;flex:1 1 14rem}
.sherpa-page ol.sherpa-parts{list-style:none;counter-reset:part;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem 1.25rem;padding:0;margin:1rem 0 0}
.sherpa-page ol.sherpa-parts li{counter-increment:part;display:flex;gap:.6rem;align-items:baseline}
.sherpa-page ol.sherpa-parts li::before{content:counter(part);font-family:'JetBrains Mono',ui-monospace,monospace;color:var(--forest);font-weight:500}
@media (max-width:900px){.sherpa-page ol.sherpa-parts{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.sherpa-page ol.sherpa-parts{grid-template-columns:minmax(0,1fr)}}
.sherpa-page ul.sherpa-plain{list-style:none;padding:0;margin:0}
.sherpa-page ul.sherpa-plain li{padding:.55rem 0 .55rem 1.1rem;border-left:3px solid var(--sage)}
.sherpa-page .sherpa-line{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;list-style:none;padding:0;margin:1.5rem 0 0;position:relative}
.sherpa-page .sherpa-line::before{content:"";position:absolute;left:8%;right:8%;top:.55rem;height:3px;background:var(--forest)}
.sherpa-page .sherpa-line li{position:relative;text-align:center;padding-top:1.9rem;font-weight:600}
.sherpa-page .sherpa-line li::before{content:"";position:absolute;top:0;left:50%;width:1.2rem;height:1.2rem;margin-left:-.6rem;border-radius:50%;background:var(--paper);border:4px solid var(--forest)}
.sherpa-page .sherpa-line li:last-child::before{background:var(--orange);border-color:var(--orange)}
@media (max-width:640px){.sherpa-page .sherpa-line{grid-template-columns:minmax(0,1fr);gap:.75rem}.sherpa-page .sherpa-line::before{display:none}.sherpa-page .sherpa-line li{text-align:left;padding:0 0 0 2rem}.sherpa-page .sherpa-line li::before{left:0;margin-left:0}}
.sherpa-page .sherpa-faq-item{background:#fff;border:1px solid var(--sage);border-radius:.5rem;padding:0 1.25rem}
.sherpa-page .sherpa-band{background:var(--forest)}
.sherpa-page .sherpa-band h2,.sherpa-page .sherpa-band p{color:var(--paper)}
.sherpa-page .sherpa-band a.sherpa-small{color:var(--paper)}
`;

function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-dashed border-amber-400 bg-amber-400/10 px-2 py-0.5 text-amber-700 text-sm">
      [CONFIRM: {children}]
    </span>
  );
}

function DemoLabel() {
  return <p className="sherpa-demo">{DEMO_LABEL}</p>;
}

type ChipKind = "record" | "estimate" | "told" | "assumed";
const CHIP_WORD: Record<ChipKind, string> = {
  record: "RECORD",
  estimate: "ESTIMATE",
  told: "TOLD",
  assumed: "ASSUMED",
};
function Chip({ kind }: { kind: ChipKind }) {
  return <span className={`sherpa-chip sherpa-chip-${kind}`}>{CHIP_WORD[kind]}</span>;
}

function Section({
  id,
  tone,
  children,
}: {
  id?: string;
  tone: "paper" | "mist";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`sherpa-sec sherpa-${tone}`}>
      <div className="sherpa-wrap">{children}</div>
    </section>
  );
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <aside className="sherpa-takeaway">
      <span className="sherpa-label">What this means for you</span>
      <p>{children}</p>
    </aside>
  );
}

function SherpaMark() {
  return (
    <svg viewBox="17 19 322 273" role="img" aria-label="CEO Sherpa mark" width="150" height="127">
      <path
        d="M25 271.5 H69 L131.3 178 H231"
        fill="none"
        stroke="#3A6B4F"
        strokeWidth="25"
        strokeLinejoin="miter"
      />
      <line x1="231" y1="178" x2="308" y2="51.6" stroke="#E36B3F" strokeWidth="25" />
      <circle cx="318.2" cy="39.7" r="12.5" fill="#E8BD57" />
    </svg>
  );
}

const ONE_PAGE_POINTS: { title: string; text: string }[] = [
  {
    title: "You stop deciding where to start.",
    text: "Instead of opening many tools to find the problem, you open one short list, each item with the money at stake and the date it matters.",
  },
  {
    title: "You can check every figure.",
    text: "Each number says whether it was counted, worked out, told to us by you, or assumed, and you can open the rows behind it.",
  },
  {
    title: "Your team knows what is theirs.",
    text: "Accept a card and it becomes a task for the right head. One head holds it at a time, and it comes back to you if it stalls.",
  },
  {
    title: "You see the season coming.",
    text: "Festivals and sales are counted back from the date you must act, using your own lead times, while there is still time.",
  },
  {
    title: "You can ask your own question.",
    text: "Tell Sherpa the problem or the outcome you want. It looks through your numbers and history, and answers in plain words.",
  },
];

const FOUR_LINES = [
  "Too many tools. Which number do you trust?",
  "The sale worked. Nobody came back.",
  "Three agencies. Which one actually delivered?",
  "Your bestseller will run out before the new stock arrives.",
];

const NINE_PARTS = [
  "What is happening",
  "Why it matters",
  "Why now",
  "The evidence",
  "What we assume",
  "What to do",
  "The cost of waiting",
  "Why it ranks here",
  "The rows behind each figure",
];

const CHIP_DEFS: { kind: ChipKind; text: string }[] = [
  { kind: "record", text: "Counted directly from your orders, spend, stock or ledger." },
  { kind: "estimate", text: "Worked out from your records by a stated method, shown as a range." },
  { kind: "told", text: "Said by your business, with who and when." },
  {
    kind: "assumed",
    text: "A default used because we have neither records nor words. Always listed, with the one question that would replace it.",
  },
];

const TASK_MOVES: { title: string; text: string }[] = [
  {
    title: "One holder at a time.",
    text: "Everyone can see who is holding the ball, and since when. A head can pass it to another head, or ask you for clarity.",
  },
  {
    title: "Everyone can read the whole thread.",
    text: "Heads and you see the same history, so nobody has to ask what happened.",
  },
  {
    title: "Stuck tasks escalate by themselves.",
    text: "If a task stays with one holder past a limit you set, for example ten days, it comes to you with the holder named. You change that limit yourself, on a Rules screen, without a developer.",
  },
  {
    title: "Heads keep a note of what they did.",
    text: "What a head did with their own team goes in a note on the card. CEO Sherpa is not a project-management tool, and your heads\u2019 teams keep their own.",
  },
];

const HEADS: { title: string; text: string }[] = [
  { title: "Marketing", text: "Ad spend and campaigns, agency delivery." },
  { title: "E-commerce", text: "Store, conversion and catalogue." },
  { title: "Operations", text: "Stock, couriers and returns." },
  { title: "Finance", text: "Cash, payments and margin." },
  { title: "Customer experience", text: "Support, reviews and repeat customers, as sources are connected." },
];

const SEASON_ITEMS: { title: string; text: string }[] = [
  {
    title: "A season line on your list.",
    text: "Which preparation steps are late, which are at risk, and which could not be judged yet because the data was missing.",
  },
  {
    title: "A card before every event.",
    text: "Your events calendar holds the main festivals and sales. Before each one, Sherpa raises a card with what happened last year in your own history.",
  },
  {
    title: "Your say wins.",
    text: "You can add your own sales and dates, and set which events matter to your brand.",
  },
];

const NOT_DO: { title: string; text: string }[] = [
  {
    title: "It will not decide, spend or act on its own.",
    text: "It proposes, explains and records. You decide, and the decision and its owner are logged.",
  },
  {
    title: "It will not promise a result.",
    text: "It helps you make informed decisions. It cannot promise that a decision will be correct, and it never says it can.",
  },
  {
    title: "It will not guess.",
    text: "Where it has neither records nor words, it uses a stated default, marks it assumed, and asks the one question that would replace it.",
  },
  {
    title: "It is not a project-management tool.",
    text: "It holds the work that comes from a decision: who holds it, since when, and what happened. Your heads\u2019 teams keep their own tools.",
  },
  {
    title: "It does not watch everything.",
    text: "Pricing strategy, hiring, legal and tax, and competitors\u2019 moves are outside its sweep. It tells you so, and lists any area that has no source connected.",
  },
  {
    title: "It learns carefully.",
    text: "It learns your thresholds, rules and history, and proposes changes for your approval. It does not change its own rules.",
  },
];

const BRING: { title: string; text: string }[] = [
  {
    title: "Where your numbers live.",
    text: "Your store, ad accounts, marketplaces and quick commerce, couriers, payments, and your CRM or WhatsApp tools. A list is enough.",
  },
  {
    title: "The three to five measures you most want to move.",
    text: "For example: contribution margin per order, cash runway against your safe level, repeat rate, stock-out days on key products, late-delivery and return rates, or the share of ad spend that earns back after discounts and returns.",
  },
  {
    title: "The one decision on your mind.",
    text: "Whatever you are weighing next. It is the best test of whether this is useful.",
  },
  {
    title: "Who your heads are.",
    text: "Marketing, e-commerce, operations, finance and customer experience, and anyone who should see their own view.",
  },
];

export default function CeoSherpa() {
  // Client-side head tags. Crawlers get the same tags from server/pageMetaSSR.ts.
  useEffect(() => {
    const m = CEO_SHERPA_META;
    const prevTitle = document.title;
    document.title = m.title;

    const touched: Array<{ el: Element; prev: string | null; created: boolean }> = [];
    const setTag = (selector: string, attr: "content" | "href", value: string, make: () => Element) => {
      let el = document.head.querySelector(selector);
      const created = !el;
      if (!el) {
        el = make();
        document.head.appendChild(el);
      }
      touched.push({ el, prev: el.getAttribute(attr), created });
      el.setAttribute(attr, value);
    };
    const meta = (key: "name" | "property", name: string) => () => {
      const el = document.createElement("meta");
      el.setAttribute(key, name);
      return el;
    };

    setTag('meta[name="description"]', "content", m.description, meta("name", "description"));
    setTag('meta[property="og:title"]', "content", m.socialTitle, meta("property", "og:title"));
    setTag('meta[property="og:description"]', "content", m.socialDescription, meta("property", "og:description"));
    setTag('meta[property="og:url"]', "content", m.canonical, meta("property", "og:url"));
    setTag('meta[property="og:image"]', "content", m.image, meta("property", "og:image"));
    setTag('meta[property="og:image:width"]', "content", m.imageWidth, meta("property", "og:image:width"));
    setTag('meta[property="og:image:height"]', "content", m.imageHeight, meta("property", "og:image:height"));
    setTag('meta[property="og:image:alt"]', "content", m.imageAlt, meta("property", "og:image:alt"));
    setTag('meta[name="twitter:title"]', "content", m.socialTitle, meta("name", "twitter:title"));
    setTag('meta[name="twitter:description"]', "content", m.twitterDescription, meta("name", "twitter:description"));
    setTag('meta[name="twitter:image"]', "content", m.image, meta("name", "twitter:image"));
    setTag('meta[name="twitter:card"]', "content", "summary_large_image", meta("name", "twitter:card"));
    setTag('link[rel="canonical"]', "href", m.canonical, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    });

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "ceo-sherpa-faq-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: CEO_SHERPA_FAQS.filter((f) => f.aPlain).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aPlain },
      })),
    });
    document.head.appendChild(ld);

    // One Google Fonts request for the page. Fonts fall back to system fonts if it fails.
    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href = FONTS_HREF;
    document.head.appendChild(fonts);

    return () => {
      document.title = prevTitle;
      ld.remove();
      fonts.remove();
      touched.forEach(({ el, prev, created }) => {
        if (created) el.remove();
        else if (prev !== null) el.setAttribute(el.tagName === "LINK" ? "href" : "content", prev);
      });
    };
  }, []);

  const hasVideo = WALKTHROUGH_VIDEO_URL.length > 0;
  const videoIsFile = /\.(mp4|webm)(\?.*)?$/i.test(WALKTHROUGH_VIDEO_URL);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <style>{SHERPA_CSS}</style>

      <main className="sherpa-page flex-1">
        {/* 1. Hero */}
        <Section tone="paper">
          <div className="sherpa-hero" style={{ paddingTop: "1.5rem" }}>
          <div className="sherpa-stack">
            <p className="sherpa-label">CEO SHERPA FOR D2C BRANDS</p>
            <h1>Know what to look at, and why.</h1>
            <p className="sherpa-lead" style={{ color: "var(--ink)" }}>
              CEO Sherpa reads your own numbers every day and shows you what to look at first, and
              why. You decide. It never acts on its own.
            </p>
            <p style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/get-started" className="sherpa-btn">
                Talk to us about your numbers
              </Link>
              <a href="#how-it-works" className="sherpa-link">
                See how it works
              </a>
            </p>
            <p className="sherpa-small">Examples on this page come from a demo brand with sample data.</p>
          </div>
          <div className="sherpa-hero-icon">
            <img src="/ceo-sherpa-icon.svg" alt="CEO Sherpa" width={320} height={320} />
          </div>
          </div>
        </Section>

        {/* 2. If you read one section */}
        <Section tone="mist">
          <div className="sherpa-head">
            <h2>If you read one section</h2>
            <p className="sherpa-lead">
              CEO Sherpa sits on your own numbers and tells you, each morning, what needs a look,
              why it matters, and what happens if it waits.
            </p>
          </div>
          <div className="sherpa-grid sherpa-g3">
            {ONE_PAGE_POINTS.map((p) => (
              <div key={p.title} className="sherpa-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
            {SHOW_REPORTS && (
              <div className="sherpa-card">
                <h3>You see what changed.</h3>
                <p>
                  Results are kept in three kinds, counted, measured and estimated, so a counted
                  fact is never mixed with an estimate.
                </p>
              </div>
            )}
          </div>
        </Section>

        {/* 3. The morning you already know */}
        <Section tone="paper">
          <div className="sherpa-head">
            <h2>The morning you already know</h2>
            <p className="sherpa-lead">
              It is not a lack of reports. It is a lack of someone who says where to look first.
            </p>
          </div>
          <div className="sherpa-narrow sherpa-stack">
            <p className="sherpa-big">
              Your ad platform says 2.2. Your store says 1.5. Your agency report says sales are
              up. Your bank says otherwise.
            </p>
            <DemoLabel />
            <p>
              You run a store, ad platforms, marketplaces, quick commerce, a CRM and shipping
              partners. Each reports its own version of the truth, and each is correct about its
              own corner. Cash is the real constraint.
            </p>
            <p>
              So the week fills with calls that cost money when they are wrong: the ad budget that
              did not pay back, the discount that ate the margin, the agency that did not deliver,
              the bestseller that ran out before the festive season. Most of those were visible
              somewhere, before they were expensive. Nobody had the time to look in all of the
              places.
            </p>
          </div>
          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "2rem" }}>
            {FOUR_LINES.map((l) => (
              <p key={l} className="sherpa-big">
                {l}
              </p>
            ))}
            <p>
              And at eleven at night, there is nobody to think the hard call through with. Five
              advisors give five opposite answers. So you decide on gut feel, and hope.
            </p>
          </div>
          <Takeaway>
            The problem is not that you lack numbers. You lack a guide who has already looked at
            all of them, and who tells you what to look at first, and why.
          </Takeaway>
        </Section>

        {/* 4. Meet the guide who goes ahead */}
        <Section tone="mist">
          <div className="sherpa-head">
            <h2>Meet the guide who goes ahead</h2>
            <p className="sherpa-lead">
              A Sherpa does not carry you up the mountain. A Sherpa goes first, knows the route,
              reads the weather and points out where to slow down.
            </p>
          </div>
          <div className="sherpa-narrow sherpa-stack">
            <p>
              That is the whole idea. You are the climber and the decisions stay with you. CEO
              Sherpa goes ahead of you through your own numbers and comes back with a short,
              honest report on what it found.
            </p>
          </div>
          <figure style={{ margin: "2rem 0 0" }}>
            <SherpaMark />
            <figcaption className="sherpa-small" style={{ marginTop: ".75rem", maxWidth: "34rem" }}>
              The steps are your record. The climb is the next move that matters most. The point
              of light is the one thing to reach.
            </figcaption>
          </figure>
          <div className="sherpa-grid sherpa-g3" style={{ marginTop: "2rem" }}>
            <div className="sherpa-card">
              <p className="sherpa-label">1</p>
              <h3>Nothing is invented.</h3>
              <p>Every figure comes from calculations on your own data.</p>
              {SHOW_STRONG_TRUST_CLAIMS && (
                <p>A figure the calculations did not produce is sent back before you see it.</p>
              )}
            </div>
            <div className="sherpa-card">
              <p className="sherpa-label">2</p>
              <h3>Everything is labelled.</h3>
              <p>
                Each statement says whether it was counted, worked out, told to us, or assumed.
              </p>
            </div>
            <div className="sherpa-card">
              <p className="sherpa-label">3</p>
              <h3>Silence is information.</h3>
              <p>
                It tells you what it checked and found fine, and what it could not check, so you
                never wonder whether nothing was found or nothing was looked at.
              </p>
            </div>
          </div>
          <Takeaway>
            You keep the decision. Sherpa keeps the route in view, and tells you plainly what it
            does and does not know.
          </Takeaway>
        </Section>

        {/* 5. A morning, told as a story */}
        <Section id="how-it-works" tone="paper">
          <div className="sherpa-head">
            <h2>A morning, told as a story</h2>
            <p className="sherpa-lead">
              CEO Sherpa does not hand you thirty items. It brings the few that matter today, and
              for each one says what is at stake, by when, and why.
            </p>
            <DemoLabel />
          </div>

          <article className="sherpa-card" aria-label="Sample card">
            <div>
              <span className="sherpa-class">FIX</span>
            </div>
            <h3>
              Meta, prospecting, evergreen interests: its real return fell from 1.9x to 0.5x in
              three days
            </h3>
            <dl className="sherpa-rows" style={{ margin: 0 }}>
              <div>
                <dt>Money at stake over the next 60 days</dt>
                <dd>
                  ₹32,600 to ₹65,201 <Chip kind="estimate" />
                </dd>
              </div>
              <div>
                <dt>Last 3 days</dt>
                <dd>
                  Spent ₹44,665, kept sales ₹23,494, a return of 0.53x <Chip kind="record" />
                </dd>
              </div>
              <div>
                <dt>The 28 days before</dt>
                <dd>
                  A return of 1.95x on ₹2.31 lakh spent <Chip kind="record" />
                </dd>
              </div>
              <div>
                <dt>What we assume</dt>
                <dd>Nothing is assumed in this figure.</dd>
              </div>
              <div>
                <dt>How firm</dt>
                <dd>
                  Thin. Three days of one campaign against its own recent normal. A signal to look,
                  not a verdict.
                </dd>
              </div>
              <div>
                <dt>Suggested owner</dt>
                <dd>Marketing head, due tomorrow.</dd>
              </div>
            </dl>
          </article>

          <div className="sherpa-grid sherpa-g2" style={{ marginTop: "1.25rem" }}>
            <div className="sherpa-card">
              <div>
                <span className="sherpa-class">STOP THE LOSS</span>
              </div>
              <h3>Google, search, non-brand is losing money on every order.</h3>
              <p>
                1.5 real return, against 2.2 reported by the platform <Chip kind="record" />
              </p>
              <p className="sherpa-small">
                The card says it is not sized in rupees yet, so it ranks on its date and evidence
                alone.
              </p>
            </div>
            <div className="sherpa-card">
              <div>
                <span className="sherpa-class">PROTECT</span>
              </div>
              <h3>The hero hair oil will run out before new stock can arrive.</h3>
              <p>Money at stake over the next 60 days: ₹2.32 lakh to ₹3.94 lakh.</p>
            </div>
          </div>
          <Takeaway>
            Three things, not thirty. Each comes with its money, its date and its reason, so you
            can decide in minutes instead of searching for hours.
          </Takeaway>

          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "3rem" }}>
            <h3>Every card tells you the same story</h3>
            <p className="sherpa-lead">
              Same nine parts, same order, every time. Once you have read one, you can read them
              all.
            </p>
            <ol className="sherpa-parts" style={{ maxWidth: "none" }}>
              {NINE_PARTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>How firm is each figure?</h3>
            <div className="sherpa-grid sherpa-g2">
              {CHIP_DEFS.map((c) => (
                <div key={c.kind} className="sherpa-card">
                  <div>
                    <Chip kind={c.kind} />
                  </div>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "2rem" }}>
            <p>
              <strong>Facts and opinion stay apart.</strong> Anything Sherpa infers goes on its
              own line, starting &ldquo;My read:&rdquo;.
            </p>
            <p>
              <strong>Tap any figure.</strong> Each one opens the orders, stock lines or payments
              behind it.
              {SHOW_STRONG_TRUST_CLAIMS && " If a figure cannot be traced to its rows, you will not see it."}
            </p>
          </div>
          <Takeaway>
            You never have to take its word for it. Every claim shows what it rests on, how firm
            that is, and what would change the answer.
          </Takeaway>
        </Section>

        {/* 6. Ask your own question */}
        <Section tone="mist">
          <div className="sherpa-head">
            <h2>Ask your own question</h2>
          </div>
          <div className="sherpa-narrow sherpa-stack">
            <p>
              Got a question of your own? Tell Sherpa the problem or the outcome you want. It
              looks through your numbers and history, and answers in plain words, and it tells
              you what it assumed.
            </p>
            <p>
              Ask about cash, customers, marketing and spend, stock and delivery, platforms, or
              what to expect. Facts go on one line. Opinion goes on another, starting &ldquo;My
              read:&rdquo;.
            </p>
          </div>
          <Takeaway>
            You do not have to know how to phrase it. Start with the problem you have.
          </Takeaway>
        </Section>

        {/* 7. From advice to action */}
        <Section tone="paper">
          <div className="sherpa-head">
            <h2>From advice to action</h2>
            <p className="sherpa-lead">Sherpa proposes and you decide.</p>
          </div>
          <div className="sherpa-narrow sherpa-stack">
            <p>
              Accept a card and it becomes a task for the department head who owns it: operations,
              marketing, finance, e-commerce or customer experience. You can change the owner or
              the date, or say it is not relevant, and why.
            </p>
            <p>
              In the morning meeting, each card arrives with its whole story: what was found, what
              was decided, who has it, and what happened next.
            </p>
          </div>

          <h3 style={{ margin: "2.5rem 0 1rem" }}>How a task moves</h3>
          <div className="sherpa-grid sherpa-g2">
            {TASK_MOVES.map((t) => (
              <div key={t.title} className="sherpa-card">
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <DemoLabel />
          <div className="sherpa-card" style={{ marginTop: "1.25rem" }}>
            <h4>One case per problem</h4>
            <p>
              Every problem keeps one case, from found to lesson. It is never deleted, and it
              reopens if the problem comes back.
            </p>
          </div>
          <Takeaway>
            You stop chasing. A decision made in the room reaches the person who owns it, and if
            it stalls, it finds its way back to you.
          </Takeaway>

          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "3rem" }}>
            <h3>Everyone sees their own morning</h3>
            <p>
              Each department head signs in and sees the same screens you do, with their own
              items. A head&rsquo;s items reach your list only when the item is CEO level, when the
              owner missed the window, or when the head escalates for clarity.
            </p>
          </div>
          <div className="sherpa-grid sherpa-g5" style={{ marginTop: "1.5rem" }}>
            {HEADS.map((h) => (
              <div key={h.title} className="sherpa-card">
                <h4>{h.title}</h4>
                <p className="sherpa-small">{h.text}</p>
              </div>
            ))}
          </div>
          <Takeaway>
            Your list is the short one. Your heads work the rest where it belongs, and the work
            comes to you only when it should.
          </Takeaway>
        </Section>

        {/* 8. The season is a deadline, not a date */}
        <Section tone="mist">
          <div className="sherpa-head">
            <h2>The season is a deadline, not a date</h2>
            <p className="sherpa-lead">
              A festival does not arrive on its date. It arrives on the day you had to place the
              order.
            </p>
          </div>
          <div className="sherpa-narrow sherpa-stack">
            <p>
              For a D2C brand a festival is the year, and the real deadline is the date minus the
              time it takes to be ready. CEO Sherpa counts back from each festival or sale using
              your own lead times, and shows you the last responsible moment to act.
            </p>
          </div>
          <ol className="sherpa-line" aria-label="Counting back from a festival">
            <li>Last moment to order</li>
            <li>Your supplier&rsquo;s lead time</li>
            <li>Festival day</li>
          </ol>
          <h3 style={{ margin: "2.5rem 0 1rem" }}>What you see</h3>
          <div className="sherpa-grid sherpa-g3">
            {SEASON_ITEMS.map((s) => (
              <div key={s.title} className="sherpa-card">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <Takeaway>
            You see the season coming while there is still time to act, instead of finding out on
            the day that the bestseller should have been ordered weeks ago.
          </Takeaway>
        </Section>

        {/* 9. Why you can believe what it says */}
        <Section tone="paper">
          <div className="sherpa-head">
            <h2>Why you can believe what it says</h2>
            <p className="sherpa-lead">Trust is the product. These are the rules it keeps.</p>
          </div>
          <div className="sherpa-narrow">
            <ul className="sherpa-plain">
              <li>
                <strong>It calculates, then it explains.</strong> The numbers come from
                calculations on your data. The AI writes the plain-English explanation. It does
                not make the figures up.
              </li>
              <li>
                <strong>It shows its reasons.</strong> Every item says why it is on your list, why
                it sits above the next one, and why the others can wait.
              </li>
              <li>
                <strong>It keeps fact and opinion apart.</strong> What it records, what it
                estimates and what it infers are on separate lines, and the inference is marked as
                such.
              </li>
              {SHOW_STRONG_TRUST_CLAIMS && (
                <>
                  <li>
                    <strong>It treats outside text as data.</strong> Customer messages, reviews,
                    emails and social posts are read for what they say. They are never treated as
                    instructions.
                  </li>
                  <li>
                    <strong>It keeps working if the AI pauses.</strong> When an AI pack runs out,
                    ranking, lists and tasks keep working. Only the plain-English narration and
                    chat pause, after a low-balance warning.
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "2.5rem" }}>
            <h3>What I do not watch</h3>
            <p className="sherpa-small">This is the product&rsquo;s own panel, in its own voice.</p>
            <p>
              Sherpa keeps a standing list of what is outside its sweep, and reviews it with you at
              setup: pricing strategy, hiring, legal and tax, competitors&rsquo; moves, and any
              area without a connected source. When a source is stale, it says it cannot judge yet,
              and what data would let it judge.
            </p>
          </div>

          <h3 style={{ margin: "2.5rem 0 1rem" }}>What it will not do</h3>
          <div className="sherpa-grid sherpa-g3">
            {NOT_DO.map((n) => (
              <div key={n.title} className="sherpa-card">
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
          <Takeaway>
            Silence is information. You always know what was checked, what was found fine, and
            what could not be checked. The limits are part of the design.
          </Takeaway>
        </Section>

        {/* 10. How we start */}
        <Section tone="mist">
          <div className="sherpa-head">
            <h2>How we start</h2>
            <p className="sherpa-lead">A conversation first. Then you decide.</p>
          </div>
          <ol className="sherpa-grid sherpa-g3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className="sherpa-card">
              <p className="sherpa-label">1</p>
              <h3>A conversation, on your numbers.</h3>
              <p>
                We walk through how this would look on your business, and what your sources of
                truth are.
              </p>
            </li>
            <li className="sherpa-card">
              <p className="sherpa-label">2</p>
              <h3>A one-time setup.</h3>
              <p>
                We connect your data sources, import your history, and agree your key measures.
                Customisation to your business is included.
              </p>
            </li>
            <li className="sherpa-card">
              <p className="sherpa-label">3</p>
              <h3>Then you use it, and refill as needed.</h3>
              <p>
                A refillable AI pack covers AI usage, hosting, upkeep and support. There is no
                monthly retainer and no per-user fee.
              </p>
            </li>
          </ol>

          <div className="sherpa-narrow sherpa-stack" style={{ marginTop: "2rem" }}>
            <p>
              <strong>Day one.</strong> On day one it reads the history your business already
              holds: orders, ad spend, stock, cash and customers. From that it writes the story so
              far, and drafts your first priorities from the lessons already in your data. You
              start from your own history, not from zero.
            </p>
          </div>

          <h3 style={{ margin: "2.5rem 0 1rem" }}>Before our call, bring or send us</h3>
          <div className="sherpa-grid sherpa-g2">
            {BRING.map((b) => (
              <div key={b.title} className="sherpa-card">
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>

          <p className="sherpa-small sherpa-narrow" style={{ marginTop: "2rem" }}>
            We have built websites and apps, run a social media company and an agency that ran ads
            for 100+ brands, and operated a D2C brand of our own. The same framework also runs a
            ₹200 crore+ manufacturing company, in a different industry.
          </p>

          {hasVideo && (
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ marginBottom: "1rem" }}>Watch a short walkthrough</h3>
              {videoIsFile ? (
                <video
                  controls
                  preload="metadata"
                  src={WALKTHROUGH_VIDEO_URL}
                  style={{ width: "100%", maxWidth: "46rem", borderRadius: ".5rem" }}
                />
              ) : (
                <iframe
                  src={WALKTHROUGH_VIDEO_URL}
                  title="CEO Sherpa walkthrough"
                  allow="fullscreen"
                  loading="lazy"
                  style={{ width: "100%", maxWidth: "46rem", aspectRatio: "16 / 9", border: 0, borderRadius: ".5rem" }}
                />
              )}
            </div>
          )}

          {SHOW_PDF_DOWNLOAD && (
            <p style={{ marginTop: "2rem" }}>
              <a className="sherpa-link" href={PDF_DOWNLOAD_PATH} download>
                Download the product story (PDF)
              </a>
            </p>
          )}
        </Section>

        {/* 11. Questions */}
        <Section tone="paper">
          <div className="sherpa-head">
            <h2>Questions</h2>
          </div>
          <div className="sherpa-narrow">
            <Accordion type="single" collapsible className="space-y-3">
              {CEO_SHERPA_FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i + 1}`} className="sherpa-faq-item">
                  <AccordionTrigger className="text-left text-[#14281D] hover:text-[#3A6B4F]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#14281D]">
                    {f.a}
                    {f.confirm && (
                      <>
                        {" "}
                        <Confirm>{f.confirm}</Confirm>
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Hidden block: What we stand for. Not rendered until SHOW_WHAT_WE_STAND_FOR is true. */}
        {SHOW_WHAT_WE_STAND_FOR && (
          <Section tone="mist">
            <div className="sherpa-narrow sherpa-stack">
              <h2>10% of Our Revenue Goes Back.</h2>
              <p>
                Every six months, through an NGO partner working on causes including
                children&rsquo;s education.
              </p>
            </div>
          </Section>
        )}

        {/* 12. Call to action */}
        <section className="sherpa-sec sherpa-band">
          <div className="sherpa-wrap">
            <div className="sherpa-narrow sherpa-stack">
              <h2>Let&rsquo;s look at your numbers.</h2>
              <p style={{ fontSize: "1.2rem" }}>
                If it is useful, the next step is a walkthrough on your own numbers. You do not
                need to prepare anything beyond a list.
              </p>
              <p>
                <Link href="/get-started" className="sherpa-btn sherpa-btn-light">
                  Talk to us about your numbers
                </Link>
              </p>
              <p className="sherpa-small">
                <Link href="/pricing" className="sherpa-small" style={{ color: "var(--paper)" }}>
                  Pricing
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
