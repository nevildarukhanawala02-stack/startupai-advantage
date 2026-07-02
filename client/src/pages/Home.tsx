import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, TrendingUp, Target, Zap, BarChart3, Users, Clock, Monitor, Activity, Settings } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Integrated Neural Brain Background */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NE21l5gZWsPdyVmkGUiUbb/sandbox/1Hge4BcWv35nosd4oCEjca-img-1_1770888879000_na1fn_aGVyby1uZXVyYWwtYnJhaW4taW50ZWdyYXRlZC1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTkUyMWw1Z1pXc1BkeVZta0dVaVViYi9zYW5kYm94LzFIZ2U0QmNXdjM1bm9zZDRvQ0VqY2EtaW1nLTFfMTc3MDg4ODg3OTAwMF9uYTFmbl9hR1Z5YnkxdVpYVnlZV3d0WW5KaGFXNHRhVzUwWldkeVlYUmxaQzFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CYefYtLAGO3q6kOtoUhci6nW7JN0ixo-sDXZfQbyVfm~L~IwOu33dGqYruadTsChoblLviuA6HP4u~vFvnXmrYJ~toWAng0Vnv8ytMFTkGH4if5vmswD43lqfzbNHgOZTcsoKlDoJCHPtsrja6YSaNAJ26LpX2WGH44QSYTpA0M5gAQ6H~kyU1djjtY-Zr7xDEtDTWE-yvn2H7a6ydysP3-gVmmTjnBpqlvI2QWBSpYEn1~ZeDBKjLk6REsGmi5BY8zAlAxCfuLfg4DmODzvlGBsKMCBNqDlX1c26Fi~wEiymcuJbOyEi4yqYIj6SmSXEVFUhq5ZAiyUUewnPSFUTQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white text-5xl md:text-6xl font-bold leading-tight">
              Walk Into Every Room
              <br />
              <span className="text-[#00D9FF]">Knowing.</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Most Indian CEOs are making ₹50 crore decisions on fragmented data. We connect everything your business knows — and turn it into answers you can act on in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                <Link href="/our-story">
                  Watch the Story
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span>Built for Indian Businesses ₹10–200 Cr</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span>Results in 20–30 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span>Works With Your Existing Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Feeling Section - NEW */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
              There's a feeling every CEO knows.
            </h2>
            <div className="space-y-6 text-lg text-white leading-relaxed">
              <p>
                Walking into a board meeting — or an investor call, or a leadership review — and not being completely sure what you're about to face.
              </p>
              <p>
                Not because you're not good at your job.
              </p>
              <p>
                But because your revenue data is in the CRM. Your operations data is in the ERP. Your customer health is in a spreadsheet. Your supplier performance is in an email thread. And nobody has connected the dots.
              </p>
              <p>
                By the time the full picture comes together — the moment to act has passed.
              </p>
              <p className="text-white font-semibold text-xl">
                That feeling has a name. It's called flying blind.
              </p>
              <p className="text-[#00D9FF] font-bold text-xl">
                CEO Intel ends it.
              </p>
            </div>
            <div className="mt-12 p-8 rounded-2xl border border-[#00D9FF]/20 bg-[#00D9FF]/5">
              <p className="text-2xl md:text-3xl font-bold text-white italic leading-snug">
                “Imagine walking into every room already knowing — every risk, every opportunity, every action required. Before the meeting starts.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Promises Section - NEW */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Two Things CEOs Pay Us For.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Promise 1: Disaster Prevention */}
            <Card className="p-10 bg-gray-900/80 backdrop-blur-sm border-red-500/30 hover:border-red-500/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6">
                <span className="text-2xl">&#x26A0;&#xFE0F;</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">We find the disasters before they find you.</h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Right now, somewhere in your data, a ₹2–3 crore problem is quietly building. A customer reducing orders — and the last time your team called them was 61 days ago. A stockout 9 days away that nobody noticed because inventory lives in the ERP and customer orders live somewhere else. A supplier performance issue that hasn't hit your P&L yet — but will.
                </p>
                <p>
                  These aren't management failures. They're visibility failures.
                </p>
                <p>
                  When your data is fragmented, problems are invisible until they're expensive. CEO Intel connects every system — and surfaces what needs your attention before it becomes a crisis.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-red-500/20">
                <p className="text-red-400 font-semibold italic">“The disaster didn't happen. Because the data connected.”</p>
              </div>
            </Card>

            {/* Promise 2: Growth Unlocking */}
            <Card className="p-10 bg-gray-900/80 backdrop-blur-sm border-[#00D9FF]/30 hover:border-[#00D9FF]/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-[#00D9FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Your next ₹75 lakh is already in your data.</h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  A customer scaling their business — buying a product category from someone else that you manufacture. A product line quietly outperforming that your sales team hasn't prioritised. A market segment growing that your competitors haven't reached yet.
                </p>
                <p>
                  Growth opportunities don't announce themselves. They sit silently in the gap between your CRM and your ERP, between your sales data and your operations data — waiting for someone to connect the dots.
                </p>
                <p>
                  CEO Intel finds them. Before your competition does.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#00D9FF]/20">
                <p className="text-[#00D9FF] font-semibold italic">“Same question. Same morning. One disaster prevented. One opportunity unlocked.”</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Story Section - Rajesh Narrative */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              This is what a Monday morning looks like with CEO Intel.
            </h2>

            <Card className="p-10 bg-gray-900/60 border border-[#00D9FF]/20 rounded-2xl">
              <div className="space-y-5 text-white leading-relaxed text-lg">
                <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest">6:47am</p>
                <p className="text-white font-semibold">Rajesh runs a ₹65 crore auto components company.</p>
                <p>
                  He types one question: <span className="text-[#00D9FF] italic">“How has Mehta Assemblies performed in the last 90 days — orders, deliveries, and when did we last contact them?”</span>
                </p>
                <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest">15 seconds later:</p>
                <div className="pl-4 border-l-2 border-[#00D9FF]/40 space-y-1">
                  <p>Orders down <span className="text-red-400 font-bold">34%</span>.</p>
                  <p>Two delayed deliveries.</p>
                  <p>Last contact: <span className="text-red-400 font-bold">61 days ago</span>.</p>
                </div>
                <p>
                  Three systems. Three pieces of a story. Never connected — until now.
                </p>
                <p>
                  He digs deeper. Nine days of stock on their most critical component. Fourteen-day lead time to reorder.
                </p>
                <p className="text-white font-semibold">
                  He was five days away from a third service failure on a customer already frustrated by two.
                </p>
                <p>
                  He called the MD personally. Acknowledged the delays. Offered a priority slot.
                </p>
                <p className="text-white/80 italic">
                  The MD said: “I was starting to wonder if we mattered to you.”
                </p>
                <p className="text-[#00D9FF] font-semibold">
                  Three weeks later — Mehta placed their largest order of the year.
                </p>
              </div>
            </Card>

            <div className="mt-10 text-center">
              <p className="text-2xl font-bold text-white mb-6">But that was only the first question.</p>
              <p className="text-lg text-white mb-6">
                The second question found ₹75 lakh in new revenue — hiding in a product category a growing customer had never been offered.
              </p>
              <p className="text-lg text-white mb-10">
                Same morning. Same system. Same 15 seconds.
              </p>
              <p className="text-xl font-semibold text-white italic">
                That's not a product demo. That's what running a business with complete intelligence feels like.
              </p>
              <div className="mt-10">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/our-story">
                    Read the Full Story <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Systems - Detailed Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="container">
          {/* Systems Intro */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-white mb-4">
              CEO Intel is built around three intelligence systems — each one designed to answer a different category of question your business is constantly asking.
            </p>
            <div className="space-y-2 text-white/90">
              <p><span className="text-[#00D9FF] font-semibold">Revenue Intelligence</span> answers: where is growth coming from, and what's threatening it?</p>
              <p><span className="text-[#F26522] font-semibold">Operational Excellence</span> answers: where are we bleeding money, and how do we fix it?</p>
              <p><span className="text-[#00D9FF] font-semibold">Market &amp; Competitive</span> answers: where is the market going, and are we ahead or behind?</p>
            </div>
            <p className="text-white mt-6">
              Together, they give you complete intelligence across your entire business. Start with one. Expand as you see results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Revenue Intelligence Card */}
            <Card className="p-8 bg-gray-900/80 backdrop-blur-sm border-secondary/30 hover:border-secondary transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#00D9FF] text-gray-900 rounded-full mb-4">
                  Most Popular
                </span>
                <div className="w-16 h-16 rounded-lg bg-gray-800 border-2 border-secondary flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">REVENUE INTELLIGENCE</h3>
                <p className="text-white/80 italic mb-6">
                  "Where is your revenue really coming from and where should you focus?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Connects To:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>CRM & sales pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Customer databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Financial systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Sales reports & history</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3">Key Answers:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Customer churn risk prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Sales focus optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Product/SKU prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Revenue driver analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Team performance insights</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-lg font-bold text-primary mb-2">Revenue Growth Intelligence</p>
                <p className="text-sm text-white/80">Better allocation • Reduced churn • Faster decisions</p>
                <p className="text-xs text-white/60 mt-3">Implementation: 20-30 days</p>
              </div>
            </Card>

            {/* Operational Excellence Card */}
            <Card className="p-8 bg-gray-900/80 backdrop-blur-sm border-secondary/30 hover:border-secondary transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#F26522] text-white rounded-full mb-4">
                  Recommended for Growth
                </span>
                <div className="w-16 h-16 rounded-lg bg-gray-800 border-2 border-secondary flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">OPERATIONAL EXCELLENCE</h3>
                <p className="text-white/80 italic mb-6">
                  "Where are you bleeding money and how do you scale efficiently?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Connects To:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Production systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Supply chain & inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Quality control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>HR & workforce management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Procurement & vendors</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3">Key Answers:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Money leak identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Process bottleneck detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Scaling opportunity mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Supplier performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Margin improvement areas</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-lg font-bold text-primary mb-2">Operational Cost Intelligence</p>
                <p className="text-sm text-white/80">EBITDA improvement • Scalability readiness • Higher valuation</p>
                <p className="text-xs text-white/60 mt-3">Implementation: 20-30 days</p>
              </div>
            </Card>

            {/* Market & Competitive Card */}
            <Card className="p-8 bg-gray-900/80 backdrop-blur-sm border-secondary/30 hover:border-secondary transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#00D9FF] text-gray-900 rounded-full mb-4">
                  Strategic Edge
                </span>
                <div className="w-16 h-16 rounded-lg bg-gray-800 border-2 border-secondary flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">MARKET & COMPETITIVE</h3>
                <p className="text-white/80 italic mb-6">
                  "How do you stay ahead of competition and find new opportunities?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Connects To:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Market data sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Competitor monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Customer sentiment platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Industry trends & news</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Regulatory tracking</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3">Key Answers:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Competitor activity monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Market direction prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Opportunity identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Threat early warning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Strategic positioning insights</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-lg font-bold text-secondary mb-2">Strategic Advantage</p>
                <p className="text-sm text-white/80">First-mover opportunities • Risk mitigation • Market leadership</p>
                <p className="text-xs text-white/60 mt-3">Implementation: 20-30 days</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Morning Briefing Callout Section */}
      <section className="py-20 bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-[#00D9FF]/20 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-mono uppercase tracking-widest">Live Intelligence · 6:47am</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Every morning, before your first meeting,<br />
                <span className="text-[#00D9FF]">CEO Intel briefs you.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/70 text-sm mb-2">Revenue Alert</p>
                  <p className="text-white font-semibold">Mehta Assemblies orders down 34%. Last contact: 61 days ago.</p>
                  <p className="text-red-400 text-sm mt-2 font-medium">Action required today</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/70 text-sm mb-2">Operations Alert</p>
                  <p className="text-white font-semibold">Brake pads: 9 days stock. 14-day reorder lead time. Stockout risk.</p>
                  <p className="text-orange-400 text-sm mt-2 font-medium">Order today to avoid crisis</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/70 text-sm mb-2">Growth Opportunity</p>
                  <p className="text-white font-semibold">Sharma Industries scaling fast. Never offered Product Line C. ₹75L opportunity.</p>
                  <p className="text-[#00D9FF] text-sm mt-2 font-medium">Propose this week</p>
                </div>
              </div>
              <p className="text-white/70 mt-8 text-center italic">
                Three questions. Three answers. Three actions. Before 7am.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-white">Which industry are you in?</h2>
            <p className="text-lg text-white">
              CEO Intel is configured for the specific data structures, KPIs, and decision patterns of your sector. Not a generic dashboard — a system that speaks your industry's language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/solutions/manufacturing">
              <Card className="p-6 bg-gray-900/80 border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Manufacturing</h3>
                <p className="text-sm text-white/80">Production optimization & supply chain intelligence</p>
              </Card>
            </Link>

            <Link href="/solutions/fmcg">
              <Card className="p-6 bg-gray-900/80 border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary transition-colors">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">FMCG & Consumer Brands</h3>
                <p className="text-sm text-white/80">Demand forecasting & distribution intelligence</p>
              </Card>
            </Link>

            <Link href="/solutions/retail">
              <Card className="p-6 bg-gray-900/80 border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary transition-colors">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Retail & QSR</h3>
                <p className="text-sm text-white/80">Customer behavior & inventory intelligence</p>
              </Card>
            </Link>

            <Link href="/solutions/b2b-services">
              <Card className="p-6 bg-gray-900/80 border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary transition-colors">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">B2B Services</h3>
                <p className="text-sm text-white/80">Client intelligence & service optimization</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <DashboardShowcase />

      {/* Meet the Founder - Trust Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Section label */}
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[#0BA5DC] uppercase mb-12">The Person Behind the Intelligence</p>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 md:p-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0BA5DC]/20 to-[#F26522]/20 blur-xl" />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/nevil-founder-professional_d046ba74.png"
                    alt="Nevil Darukhanawala — Founder & CEO, StartupAI Advantage"
                    className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover object-top border-2 border-[#0BA5DC]/30"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Nevil Darukhanawala</h3>
                <p className="text-[#0BA5DC] font-medium mb-4">Founder & CEO</p>

                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                  26 years. 5 businesses. Worked with PharmEasy, Johnson &amp; Johnson, HDFC Red, and 40+ brands across India and internationally.
                  I built CEO Intel because I kept watching smart founders make expensive decisions on incomplete data — and I knew AI could fix that.
                </p>

                {/* Media badges */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  {[
                    { label: "ET Now", url: "https://www.etnownews.com/markets/celebrating-iconic-brands/leaders-of-the-year-2024-article-116431565" },
                    { label: "Times Now", url: "https://www.timesnownews.com/business-economy/meet-12-noteworthy-indian-personalities-of-2024-article-115339220" },
                    { label: "YourStory", url: "https://yourstory.com/2024/08/innovative-founders-aim-change-status-quo" },
                  ].map((m) => (
                    <a
                      key={m.label}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold border border-gray-600 text-gray-300 rounded-full hover:border-[#0BA5DC] hover:text-[#0BA5DC] transition-colors"
                    >
                      {m.label} <span className="text-[10px]">↗</span>
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#F26522] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read Nevil's Full Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The question isn't whether you need this.
            </h2>
            <p className="text-xl text-white mb-4">
              The question is: how many decisions have you already made without it?
            </p>
            <p className="text-lg text-white/80 mb-12">
              Book a 45-minute discovery call. We'll show you exactly what CEO Intel would surface in your business — using your own data, your own questions, your own industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                <Link href="/our-story">
                  Read Why We Built This
                </Link>
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-8">
              No commitment required. No generic pitch. Just your data, your questions, your answers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── Dashboard Showcase Component ───────────────────────────────────────────

const DASHBOARD_TABS = [
  {
    id: "revenue",
    label: "Revenue Dashboard",
    icon: BarChart3,
    badge: "Live KPIs",
    description: "Track total revenue, growth rate, pipeline value, customer churn risk, NPS scores, and deal win rates — all in one executive view.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/dash-revenue-hires_7eb40165.png",
    stats: [
      { label: "Revenue Growth", value: "Tracked Live" },
      { label: "Pipeline Value", value: "₹3,886 L" },
      { label: "Customers Tracked", value: "135" },
    ],
  },
  {
    id: "operations",
    label: "Operations Intelligence",
    icon: Settings,
    badge: "Supply Chain",
    description: "Monitor order fill rates, on-time delivery, stockout risk, supplier performance, SLA breaches, and backorder value with real-time alerts.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/dash-operations_1147f5e3.webp",
    stats: [
      { label: "On-Time Delivery", value: "100%" },
      { label: "Avg Freight Cost", value: "₹2.4K/order" },
      { label: "Active Alerts", value: "8 critical" },
    ],
  },
  {
    id: "analytics",
    label: "Question Analytics",
    icon: Activity,
    badge: "AI Insights",
    description: "See which business questions your team asks most, track usage patterns across categories, and continuously improve your intelligence catalog.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/dash-analytics_60a1c8c9.webp",
    stats: [
      { label: "Questions Tracked", value: "10 unique" },
      { label: "Top Category", value: "Customer Intel" },
      { label: "Total Queries", value: "13 clicks" },
    ],
  },
];

function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = DASHBOARD_TABS[activeTab];

  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #0d1b2a 0%, #0a1628 50%, #0d1b2a 100%)"
    }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0BA5DC]/40 bg-[#0BA5DC]/10 text-[#0BA5DC] text-sm font-medium mb-6">
            <Monitor className="h-4 w-4" />
            Live Intelligence Dashboards
          </div>
          <h2 className="text-white mb-4">
            See Your Business Intelligence <span className="text-[#00D9FF]">In Action</span>
          </h2>
          <p className="text-lg text-white">
            Real dashboards. Real data. Built for Indian businesses that need answers in plain English — not spreadsheets.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {DASHBOARD_TABS.map((t, i) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === i
                    ? "bg-[#0BA5DC] border-[#0BA5DC] text-white shadow-lg shadow-[#0BA5DC]/30"
                    : "bg-gray-900/60 border-gray-700 text-white hover:border-[#0BA5DC]/60 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
                {activeTab === i && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">{t.badge}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dashboard Preview */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Description & Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#0BA5DC]/20 border border-[#0BA5DC]/40 flex items-center justify-center">
                  {(() => { const Icon = tab.icon; return <Icon className="h-4 w-4 text-[#0BA5DC]" />; })()}
                </div>
                <span className="text-[#0BA5DC] text-sm font-medium uppercase tracking-wider">{tab.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tab.label}</h3>
              <p className="text-white/80 leading-relaxed text-sm">{tab.description}</p>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              {tab.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-gray-900/60 border border-gray-800">
                  <span className="text-white/80 text-sm">{stat.label}</span>
                  <span className="text-[#00D9FF] font-semibold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="/demo">
                <Button className="w-full gap-2">
                  <Monitor className="h-4 w-4" />
                  Explore Live Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-white/60 text-center mt-2">No sign-up required for the demo</p>
            </div>
          </div>

          {/* Right: Browser Frame with Screenshot */}
          <div className="lg:col-span-2">
            {/* Browser chrome frame */}
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50" style={{
              background: "linear-gradient(135deg, #1a2332 0%, #0d1b2a 100%)"
            }}>
              {/* Browser top bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/60" style={{ background: "#111827" }}>
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                {/* URL bar */}
                <div className="flex-1 mx-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800 border border-gray-700">
                    <div className="w-3 h-3 rounded-full border border-[#0BA5DC]/60 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0BA5DC]/60" />
                    </div>
                    <span className="text-white/60 text-xs font-mono">revintdemo-ycwhqbof.manus.space/{tab.id === "revenue" ? "dashboard" : tab.id}</span>
                  </div>
                </div>
                {/* Live badge */}
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-900/40 border border-green-700/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Live</span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={tab.image}
                  alt={`${tab.label} dashboard screenshot`}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                  style={{ display: "block" }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none" style={{
                  background: "linear-gradient(to bottom, transparent, rgba(13,27,42,0.4))"
                }} />
              </div>
            </div>

            {/* Caption below */}
            <p className="text-center text-white/60 text-xs mt-3">
              Actual dashboard from our Revenue Growth Intelligence system — powered by your real business data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
