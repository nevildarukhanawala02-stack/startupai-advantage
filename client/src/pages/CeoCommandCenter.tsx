import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  Percent,
  Handshake,
  Boxes,
  BellRing,
  Telescope,
  BookOpenCheck,
  PartyPopper,
  PackageSearch,
  Users,
  Layers,
  Briefcase,
  BadgeCheck,
  Settings,
  RefreshCw,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CEO_COMMAND_CENTER_META, CEO_COMMAND_CENTER_FAQS } from "@shared/ceoCommandCenter";

/**
 * CEO Command Center product page.
 * Copy is final and comes from the "CEO Command Center: Product Page Brief".
 * Do not edit copy here without checking the brief's claims guardrails (part 8).
 *
 * Open [CONFIRM] items are rendered with <Confirm /> so they are visible on the page
 * until each one is resolved.
 */

/** Flip to true only when the NGO partner is named and the first payout is made (brief, part 8). */
const SHOW_WHAT_WE_STAND_FOR = false;

const DEMO_LABEL = "Demo brand, sample data";

function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-dashed border-amber-400 bg-amber-400/10 px-2 py-0.5 text-amber-300 text-sm">
      [CONFIRM: {children}]
    </span>
  );
}

function DemoLabel() {
  return (
    <p className="text-xs uppercase tracking-wider text-white/60 mt-4">{DEMO_LABEL}</p>
  );
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      {eyebrow && (
        <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-white">{children}</h2>
    </div>
  );
}

function IconBadge({
  children,
  tone = "secondary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary";
}) {
  const cls =
    tone === "primary"
      ? "bg-primary/10 border-primary"
      : "bg-secondary/10 border-secondary";
  return (
    <div
      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${cls}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

const COSTS = [
  { icon: Megaphone, title: "Ad Spend", line: "The budget that didn\u2019t pay back." },
  { icon: Percent, title: "Discounts", line: "The sale that ate the margin." },
  { icon: Handshake, title: "Agencies", line: "The retainer that didn\u2019t deliver." },
  {
    icon: Boxes,
    title: "Stock",
    line: "The bestseller that ran out before the festive season.",
  },
];

const DOES = [
  {
    icon: BellRing,
    title: "Warns You Early",
    line: "Before a campaign, discount, stock gap or cash squeeze turns into an expensive mistake.",
  },
  {
    icon: Telescope,
    title: "Finds Opportunities",
    line: "The customers, products and ads worth acting on, before they pass you by.",
  },
  {
    icon: BookOpenCheck,
    title: "Shows the Full Story",
    line: "What each recommendation is based on, how sure we are, and where the numbers came from.",
  },
];

const FULL_STORY_POINTS = [
  { label: "What it\u2019s based on", text: "Your own orders, ad spend and stock records." },
  { label: "How sure we are", text: "Counted figures and assumptions are labelled apart." },
  { label: "Where it came from", text: "Tap any number to see the orders behind it." },
];

const DECISIONS = [
  { icon: Megaphone, title: "Ad Spend", line: "Raise it, hold it or cut it." },
  { icon: Percent, title: "Discounts", line: "How deep a sale can go." },
  { icon: PartyPopper, title: "Festive Plan", line: "Can we afford it?" },
  { icon: PackageSearch, title: "Reordering", line: "What to reorder, and how much." },
  { icon: Users, title: "Agencies", line: "Renew, cut or replace." },
];

const FINDINGS = [
  {
    stat: "18%",
    caption:
      "repeat within 90 days after a 30% Diwali sale, against 33% after a 15% sale. Lots of new customers, few who came back.",
  },
  {
    stat: "26 days",
    caption:
      "of stock left on the hero product, against a 45-day lead time and nothing on the way.",
  },
  {
    stat: "60%",
    caption:
      "repeat rate for customers won through creators, against 32% overall, on just 5% of ad spend.",
  },
];

const WHY_US = [
  {
    icon: Layers,
    title: "Shaped Around Your Business",
    line: "Not a one-size platform. We start from a proven core and shape it around you, your way of working and the numbers that matter to you.",
  },
  {
    icon: Briefcase,
    title: "Decades in the Digital Trenches",
    line: "Websites and apps, a social media company, an agency running ads for 100+ brands, and a D2C brand of our own.",
  },
  {
    icon: BadgeCheck,
    title: "A Framework Already Proven",
    line: "The same framework runs a \u20B9200 crore+ manufacturing company, down to the second level of its processes.",
  },
];

export default function CeoCommandCenter() {
  // Client-side head tags. Crawlers get the same tags from server/pageMetaSSR.ts.
  useEffect(() => {
    const m = CEO_COMMAND_CENTER_META;
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
    setTag('meta[name="twitter:title"]', "content", m.socialTitle, meta("name", "twitter:title"));
    setTag('meta[name="twitter:description"]', "content", m.twitterDescription, meta("name", "twitter:description"));
    setTag('link[rel="canonical"]', "href", m.canonical, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    });

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "ceo-command-center-faq-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: CEO_COMMAND_CENTER_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aPlain },
      })),
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
      touched.forEach(({ el, prev, created }) => {
        if (created) el.remove();
        else if (prev !== null) el.setAttribute(el.tagName === "LINK" ? "href" : "content", prev);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 1. Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)" }}
      >
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Make Informed Decisions, Not Gut-Feel Ones.</h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Every decision a D2C CEO makes has a cost, and it arrives fast. CEO Command Center
              brings your history and your current numbers together, warns you before a mistake
              becomes expensive, and shows the full story behind every recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <a href="#full-story">See It Working</a>
              </Button>
            </div>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 text-white">
              {["Built for D2C Brands", "Shaped Around Your Business", "Works With Your Existing Systems"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" aria-hidden="true" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. The cost */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <SectionHeading>Every Decision Has a Cost. It Arrives Fast.</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COSTS.map(({ icon: Icon, title, line }) => (
              <Card key={title} className="bg-gray-800/50 border-gray-700 p-6">
                <div className="mb-4">
                  <IconBadge tone="primary">
                    <Icon className="w-6 h-6 text-primary" />
                  </IconBadge>
                </div>
                <h3 className="text-white mb-2">{title}</h3>
                <p className="text-white/80">{line}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mt-10">
            Most of these calls are made on feel, partial reports, or whichever platform&rsquo;s
            number looks best.
          </p>
        </div>
      </section>

      {/* 3. The gap */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <SectionHeading eyebrow="One festive campaign">Which Number Do You Trust?</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 p-8 text-center">
              <p className="text-6xl font-bold text-secondary mb-3">3.7</p>
              <p className="text-white/80">
                What the ad platform says it earned for every rupee spent.
              </p>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 p-8 text-center">
              <p className="text-6xl font-bold text-primary mb-3">1.4</p>
              <p className="text-white/80">
                What your store actually sees, after discounts, cash on delivery and returns.
              </p>
            </Card>
          </div>
          <p className="text-center text-white text-xl mt-8">
            At that gap, each order loses about &#8377;175.
          </p>
          <div className="text-center">
            <DemoLabel />
          </div>
        </div>
      </section>

      {/* 4. What it does */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <SectionHeading>Helping You Decide on Solid Ground</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {DOES.map(({ icon: Icon, title, line }) => (
              <Card key={title} className="bg-gray-800/50 border-gray-700 p-8">
                <div className="mb-4">
                  <IconBadge>
                    <Icon className="w-6 h-6 text-secondary" />
                  </IconBadge>
                </div>
                <h3 className="text-white mb-3">{title}</h3>
                <p className="text-white/80">{line}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mt-10">
            CEO Command Center works from your own history and your current numbers.
          </p>
        </div>
      </section>

      {/* 5. The full story */}
      <section id="full-story" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 scroll-mt-20">
        <div className="container">
          <SectionHeading>Every Answer Comes With the Full Story</SectionHeading>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                You ask
              </p>
              <p className="text-white text-xl mb-6">&ldquo;Can we afford the festive plan?&rdquo;</p>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                The answer
              </p>
              <p className="text-white text-lg">
                Not as planned. Cash would fall to about &#8377;185 lakh, below your &#8377;240 lakh
                safe level. Phasing the spend and the reorder avoids it.
              </p>
              <DemoLabel />
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {FULL_STORY_POINTS.map((p) => (
                <Card key={p.label} className="bg-gray-800/50 border-gray-700 p-6">
                  <h3 className="text-white text-lg mb-2">{p.label}</h3>
                  <p className="text-white/80">{p.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Five decisions */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <SectionHeading>Five Decisions, Answered With Reasons</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {DECISIONS.map(({ icon: Icon, title, line }) => (
              <Card key={title} className="bg-gray-800/50 border-gray-700 p-6">
                <div className="mb-4">
                  <IconBadge>
                    <Icon className="w-6 h-6 text-secondary" />
                  </IconBadge>
                </div>
                <h3 className="text-white mb-2">{title}</h3>
                <p className="text-white/80">{line}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mt-10">
            Each one built on your own history and your current numbers.
          </p>
        </div>
      </section>

      {/* 7. What it finds */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <SectionHeading>Real Problems, Hiding in Your Own Numbers</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FINDINGS.map((f) => (
              <Card key={f.stat} className="bg-gray-800/50 border-gray-700 p-8">
                <p className="text-5xl font-bold text-secondary mb-4">{f.stat}</p>
                <p className="text-white/80">{f.caption}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mt-10">
            Each one is a decision a CEO would otherwise find out about too late.
          </p>
          <div className="text-center">
            <DemoLabel />
          </div>
        </div>
      </section>

      {/* 8. Why us */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <SectionHeading>Built Around You, From Decades of Experience</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {WHY_US.map(({ icon: Icon, title, line }) => (
              <Card key={title} className="bg-gray-800/50 border-gray-700 p-8">
                <div className="mb-4">
                  <IconBadge tone="primary">
                    <Icon className="w-6 h-6 text-primary" />
                  </IconBadge>
                </div>
                <h3 className="text-white mb-3">{title}</h3>
                <p className="text-white/80">{line}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-white text-lg max-w-3xl mx-auto mt-10">
            We know the pain because we have lived it.{" "}
            <Link href="/our-story" className="text-secondary hover:underline">
              Our Story <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </section>

      {/* 9. How we work */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <SectionHeading>One Setup. Then Pay Only for What You Use.</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <div className="mb-4">
                <IconBadge>
                  <Settings className="w-6 h-6 text-secondary" />
                </IconBadge>
              </div>
              <h3 className="text-white mb-3">A One-Time Setup</h3>
              <p className="text-white/80">
                Your sources connected, your history brought in, and the product shaped around the
                metrics you care about.
              </p>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <div className="mb-4">
                <IconBadge>
                  <RefreshCw className="w-6 h-6 text-secondary" />
                </IconBadge>
              </div>
              <h3 className="text-white mb-3">AI Packs You Refill</h3>
              <p className="text-white/80">
                You buy a pack and refill it as you use it. It covers the AI, the hosting, the
                upkeep and support.
              </p>
            </Card>
          </div>
          <ul className="flex flex-wrap justify-center gap-3 mt-8">
            {["No monthly retainer", "No per-user fees", "Customisation included"].map((p) => (
              <li
                key={p}
                className="rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 text-sm text-white"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/how-it-works" className="text-secondary hover:underline">
              See How It Works <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </section>

      {/* 10. Questions */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading>Questions CEOs Ask</SectionHeading>
            <Accordion type="single" collapsible className="space-y-4">
              {CEO_COMMAND_CENTER_FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i + 1}`}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-secondary text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
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
        </div>
      </section>

      {/* Hidden block: What we stand for (brief, part 8). Not rendered until SHOW_WHAT_WE_STAND_FOR is true. */}
      {SHOW_WHAT_WE_STAND_FOR && (
        <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">10% of Our Revenue Goes Back.</h2>
              <p className="text-white/80 text-lg">
                Every six months, through an NGO partner working on causes including
                children&rsquo;s education.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 11. Call to action */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Let&rsquo;s Look at Your Numbers.</h2>
            <p className="text-xl text-white mb-8">
              A short conversation, then a walkthrough on your own data.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
