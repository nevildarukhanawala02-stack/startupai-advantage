import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, Presentation, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const CORPORATE_DECK_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/CEO_Intel_Corporate_2026_327486e5.pdf";

const ALERTS_GUIDE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/CEO_Intel_Alerts_Guide_86c57d81.pdf";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-[#0d1b2e] to-[#0a1628]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-widest text-[#0BA5DC] uppercase mb-4">
                Knowledge Centre
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Resources &amp; Insights
              </h1>
              <p className="text-lg text-white/80">
                Practical intelligence for Indian business leaders — decks, guides, and frameworks to help you make better decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resource — Corporate Deck */}
        <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#0d1b2e]">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-semibold tracking-widest text-[#0BA5DC] uppercase mb-3">Featured Resource</p>
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0f2035] border border-white/10 rounded-2xl overflow-hidden">

                {/* Left — PDF preview thumbnail */}
                <div className="relative bg-[#0a1628] flex items-center justify-center min-h-[280px] p-8">
                  <div className="w-full max-w-xs aspect-[3/4] bg-gradient-to-br from-[#1a3a5c] to-[#0a1628] rounded-xl border border-[#0BA5DC]/30 flex flex-col items-center justify-center gap-4 shadow-2xl">
                    <Presentation className="w-16 h-16 text-[#0BA5DC]" />
                    <div className="text-center px-4">
                      <p className="text-white font-bold text-lg leading-tight">CEO Intel</p>
                      <p className="text-white/60 text-sm mt-1">Corporate Deck</p>
                      <p className="text-[#F26522] text-xs mt-2 font-semibold">PDF · 628 KB</p>
                    </div>
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse at 50% 50%, rgba(11,165,220,0.08) 0%, transparent 70%)"}} />
                </div>

                {/* Right — Description + CTA */}
                <div className="p-8 lg:p-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/20 rounded-full px-3 py-1 mb-5">
                    <FileText className="w-3 h-3" /> Corporate Deck
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                    CEO Intel — Corporate Overview
                  </h2>
                  <p className="text-white/75 mb-6 leading-relaxed">
                    A concise overview of what CEO Intel is, how it works, and what it delivers for Indian businesses in the ₹10–200 Cr range. Share it with your leadership team or review it before your discovery call.
                  </p>

                  <ul className="space-y-2 mb-8">
                    {[
                      "What CEO Intel does and how it connects your data",
                      "The three intelligence systems: Revenue, Operations, Market",
                      "How implementation works in 20–30 days",
                      "Who it's built for and what to expect",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-white/80">
                        <ChevronRight className="w-4 h-4 text-[#0BA5DC] flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CORPORATE_DECK_URL}
                    download="CEO_Intel_Corporate_2026.pdf"
                    className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d4561e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Resource — Alerts Guide eBook */}
        <section className="py-20 bg-gradient-to-b from-[#0d1b2e] to-[#0a1628]">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0f2035] border border-white/10 rounded-2xl overflow-hidden">

                {/* Left — Description + CTA */}
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0BA5DC]/10 text-[#0BA5DC] border border-[#0BA5DC]/20 rounded-full px-3 py-1 mb-5">
                    <BookOpen className="w-3 h-3" /> eBook
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                    CEO Intel Alerts Guide
                  </h2>
                  <p className="text-white/75 mb-6 leading-relaxed">
                    A practical guide to the early-warning alerts built into CEO Intel — what they detect, when they fire, and how to act on them before a problem becomes a crisis.
                  </p>

                  <ul className="space-y-2 mb-8">
                    {[
                      "The alert types that matter most for Indian businesses",
                      "How to read and respond to each alert category",
                      "Setting thresholds that match your business rhythm",
                      "Turning alerts into faster, more confident decisions",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-white/80">
                        <ChevronRight className="w-4 h-4 text-[#0BA5DC] flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ALERTS_GUIDE_URL}
                    download="CEO_Intel_Alerts_Guide.pdf"
                    className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d4561e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>

                {/* Right — eBook thumbnail */}
                <div className="relative bg-[#0a1628] flex items-center justify-center min-h-[280px] p-8 order-1 lg:order-2">
                  <div className="w-full max-w-xs aspect-[3/4] bg-gradient-to-br from-[#0f2035] to-[#0a1628] rounded-xl border border-[#F26522]/30 flex flex-col items-center justify-center gap-4 shadow-2xl">
                    <BookOpen className="w-16 h-16 text-[#F26522]" />
                    <div className="text-center px-4">
                      <p className="text-white font-bold text-lg leading-tight">CEO Intel</p>
                      <p className="text-white/60 text-sm mt-1">Alerts Guide</p>
                      <p className="text-[#0BA5DC] text-xs mt-2 font-semibold">eBook · PDF</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse at 50% 50%, rgba(242,101,34,0.06) 0%, transparent 70%)"}} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Resources */}
        <section className="py-20 bg-[#0a1628]">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest text-[#0BA5DC] uppercase mb-3">Coming Soon</p>
                <h2 className="text-3xl font-extrabold text-white mb-4">More Resources in the Pipeline</h2>
                <p className="text-white/70 max-w-xl mx-auto">
                  We're building a library of practical guides for Indian business leaders. These are being developed based on real conversations with founders.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: "The CEO's Guide to Revenue Intelligence",
                    desc: "A practical framework for understanding where your revenue is growing, stalling, and at risk — before it's too late.",
                    tag: "Guide",
                  },
                  {
                    icon: FileText,
                    title: "Data Readiness Checklist for Indian SMEs",
                    desc: "A simple self-assessment to understand how ready your business is for AI-powered intelligence — and what to fix first.",
                    tag: "Checklist",
                  },
                  {
                    icon: Presentation,
                    title: "CEO Intel Implementation Playbook",
                    desc: "A step-by-step walkthrough of the 20–30 day onboarding process — what happens, who's involved, and what to expect.",
                    tag: "Playbook",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#0f2035] border border-white/10 rounded-xl p-6 flex flex-col gap-4 opacity-70"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0BA5DC]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#0BA5DC]" />
                      </div>
                      <span className="text-xs font-semibold text-white/50 border border-white/10 rounded-full px-2.5 py-0.5">
                        {item.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2 leading-snug">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-auto">
                      <span className="text-xs text-[#F26522] font-semibold">Coming Soon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-[#0d1b2e] to-[#0a1628]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to see it in action?
              </h2>
              <p className="text-white/70 mb-8">
                The deck gives you the overview. A 45-minute discovery call gives you the full picture — using your own business data.
              </p>
              <Link href="/get-started">
                <Button size="lg" className="bg-[#F26522] hover:bg-[#d4561e] text-white font-semibold px-8">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
