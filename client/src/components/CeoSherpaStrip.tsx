import { useEffect } from "react";
import { Link } from "wouter";

/**
 * Home page strip for CEO Sherpa. Copy comes from "CEO Sherpa on the website: master framework",
 * section 6 (Home page strip). It must pass the guardrails in section 7.
 * The Sherpa look is applied with classes on this component only. Nothing here is global CSS.
 */

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@600;700&display=swap";

const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const SANS = "'Source Sans 3', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

const POINTS = [
  "A short list each morning, with the money at stake and the date it matters.",
  "Every figure labelled: counted, worked out, told, or assumed.",
  "Your heads see their own list, and you see what needs you.",
];

export default function CeoSherpaStrip() {
  // One Google Fonts request. Text falls back to system fonts if it fails.
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  return (
    <section
      aria-labelledby="ceo-sherpa-strip-heading"
      className="bg-[#FAF8F3] py-16 md:py-20"
      style={{ fontFamily: SANS }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <p
            className="text-[0.78rem] font-medium tracking-[0.14em] text-[#3A6B4F] mb-4"
            style={{ fontFamily: MONO }}
          >
            CEO SHERPA FOR D2C BRANDS
          </p>
          <h2
            id="ceo-sherpa-strip-heading"
            className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-[#14281D] mb-4"
            style={{ fontFamily: SERIF }}
          >
            Know what to look at, and why.
          </h2>
          <p className="text-lg leading-relaxed text-[#14281D] mb-8">
            CEO Sherpa reads your own numbers every day and shows D2C founders what to look at
            first, and why. You decide.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3 mb-8 list-none p-0">
          {POINTS.map((p) => (
            <li
              key={p}
              className="rounded-xl border border-[#CFE3D6] bg-white p-5 text-[#14281D] leading-relaxed"
            >
              {p}
            </li>
          ))}
        </ul>

        <Link
          href="/ceo-sherpa"
          className="inline-block rounded-lg border-2 border-[#3A6B4F] bg-[#3A6B4F] px-6 py-3 font-bold text-[#FAF8F3] no-underline hover:border-[#14281D] hover:bg-[#14281D] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#E36B3F]"
        >
          See CEO Sherpa
        </Link>
      </div>
    </section>
  );
}
