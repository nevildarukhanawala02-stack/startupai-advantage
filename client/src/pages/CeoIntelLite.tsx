import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  MessageSquare,
  Clock,
  AlertTriangle,
  BarChart3,
  Package,
  Presentation,
  Factory,
  Store,
  TrendingUp,
  FileText,
  DollarSign,
  Users,
  Send,
  CheckCircle2,
  Target,
  Monitor,
  Eye,
  Percent,
  Settings,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CeoIntelLite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[65vh] flex items-center overflow-hidden pt-16"
        style={{
          background: "linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)",
        }}
      >
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">
              CEO Intel Lite · A CEO Intel Framework
            </span>
            <h1 className="mb-6 text-white">
              One brief. Every morning. Your whole business.
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              The intelligence of a full-time analyst — for a fraction of hiring
              one. Built for growing B2B businesses, any industry, any size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pitch Quote */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl italic text-white leading-relaxed mb-6">
              &ldquo;It&rsquo;s like hiring a sharp analyst for your business — one
              who tracks your revenue, your operations, and your clients, and
              hands you the alerts and the answers every morning.&rdquo;
            </p>
            <p className="text-lg text-secondary italic mb-4">
              Except this one never quits, never takes a day off, and gets
              smarter every month.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                Who This Is For
              </span>
              <h2 className="text-white mb-4">
                Any B2B business. Any size. Any industry.
              </h2>
              <p className="text-xl text-white/80">
                Products or services. Five people or fifty. If you have clients,
                revenue, and a pipeline someone needs to follow up on — this is
                built for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Product Businesses</h3>
                </div>
                <p className="text-white/80">
                  Distributors, small manufacturers, suppliers — anyone moving
                  physical stock to a client.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-white">Service Businesses</h3>
                </div>
                <p className="text-white/80">
                  Agencies, consultancies, studios — anyone delivering work,
                  reports, or a specific outcome.
                </p>
              </Card>
            </div>

            <p className="text-center text-white/70 text-base italic max-w-3xl mx-auto mt-10">
              The qualifying question isn&rsquo;t your industry or your size —
              it&rsquo;s whether you have a business you want tracked and
              understood, without doing it yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Backed By CEO Intel (Trust Signal) */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-[#0f1419]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                Backed By CEO Intel
              </span>
              <h2 className="text-white mb-4">
                Not a new, unproven build. A proven engine, resized.
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                CEO Intel Lite runs on the same core intelligence engine as CEO
                Intel — already deployed across demanding, complex operations:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Factory className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Manufacturing</h3>
                <p className="text-white/70 text-sm">
                  RFQ-to-cash operations, machine tracking, job costing.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Store className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Retail</h3>
                <p className="text-white/70 text-sm">
                  Multi-location visibility, margin and inventory intelligence.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <TrendingUp className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">FMCG</h3>
                <p className="text-white/70 text-sm">
                  High-velocity distribution and demand tracking.
                </p>
              </Card>
            </div>

            <div className="bg-[#161b30] border border-gray-700 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-1">28</div>
                  <div className="text-sm text-white/60">Machines tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-1">9</div>
                  <div className="text-sm text-white/60">Lifecycle stages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-1">3</div>
                  <div className="text-sm text-white/60">Delay categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-1">7:30</div>
                  <div className="text-sm text-white/60">AM daily brief</div>
                </div>
              </div>
              <p className="text-center text-white/70 text-sm italic">
                Already live: a precision CNC mold manufacturer runs on this
                exact engine today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One Brief, Not Three Systems */}
      <section className="relative py-20 bg-gradient-to-b from-[#0f1419] to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                How It Works
              </span>
              <h2 className="text-white mb-4">One brief. Not three systems.</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                CEO Intel&rsquo;s larger clients get three separate Intelligence
                Systems because a bigger business has three separate problems. A
                smaller business doesn&rsquo;t — it needs one place to look,
                every morning.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">AI Chat</h3>
                <p className="text-white/70 text-sm">Ask anything about your business, in plain English.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Daily Brief</h3>
                <p className="text-white/70 text-sm">Pipeline, cash, and deliveries — one view, every morning.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Proactive Alerts</h3>
                <p className="text-white/70 text-sm">Know before a small issue becomes a big one.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">KPIs & Reports</h3>
                <p className="text-white/70 text-sm">The numbers that matter, always current.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Core + Shaped To You */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                What&rsquo;s Custom To You
              </span>
              <h2 className="text-white mb-4">A universal core. Shaped to how you work.</h2>
            </div>

            {/* Every Client Gets — compact strip */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-5 mb-8 flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-white font-semibold whitespace-nowrap">Every Client Gets:</span>
              <span className="text-white/70 text-sm">
                Pipeline / CRM &nbsp;&middot;&nbsp; Invoicing &amp; receivables
                with reminders &nbsp;&middot;&nbsp; One client record
              </span>
            </div>

            {/* Shaped To You */}
            <div className="bg-[#161b30] border border-gray-700 rounded-lg p-8">
              <h3 className="text-white mb-1">Shaped To You</h3>
              <p className="text-white/60 text-sm italic mb-8">
                The custom translation layer — built around how your business
                actually runs, stage by stage.
              </p>

              <div className="flex flex-wrap items-start justify-center gap-2 md:gap-4 mb-8">
                {[
                  { icon: FileText, label: "Intake / RFQ" },
                  { icon: Send, label: "Quote & Proposal" },
                  { icon: Package, label: "Delivery / Work" },
                  { icon: DollarSign, label: "Invoice" },
                  { icon: CheckCircle2, label: "Paid" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-start">
                    <div className="flex flex-col items-center w-24">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-white/80 text-xs text-center">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/30 mt-5 mx-1 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-white/80 text-sm mb-6">
                <span className="text-primary font-semibold">Product businesses</span> → inventory
                tracking, stock levels, reorder points.&nbsp;&nbsp;
                <span className="text-primary font-semibold">Service businesses</span> → delivery
                &amp; milestone tracking.
              </p>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-primary font-semibold text-sm md:text-base">
                  Every stage — plus the KPIs, reports, and alerts built around
                  it — is custom to your business, not a generic template.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Get */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                What You Actually Get
              </span>
              <h2 className="text-white mb-4">Everything an analyst would give you. Automatically.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Target className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Pipeline Visibility</h3>
                <p className="text-white/70 text-sm">Know exactly where every lead and deal stands.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <DollarSign className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Cash, Chased Automatically</h3>
                <p className="text-white/70 text-sm">Reminders go out before you have to ask.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Package className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Stock Clarity</h3>
                <p className="text-white/70 text-sm">Know what you have, and what&rsquo;s running low.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <CheckCircle2 className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Nothing Falls Through</h3>
                <p className="text-white/70 text-sm">Every deliverable and deadline, tracked.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Monitor className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">One Morning View</h3>
                <p className="text-white/70 text-sm">Pipeline, cash, and deliveries — one place, daily.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <AlertTriangle className="w-7 h-7 text-secondary mb-3" />
                <h3 className="text-white text-base font-semibold mb-2">Early Warnings</h3>
                <p className="text-white/70 text-sm">Alerts before small issues become big ones.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* No Wrong Starting Point */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                No Wrong Starting Point
              </span>
              <h2 className="text-white mb-4">Wherever you are today, we meet you there.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Package className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">No system yet</h3>
                <p className="text-white/70 text-sm">
                  Running on memory, WhatsApp, maybe basic Excel.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <AlertTriangle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Tried a tool, it didn&rsquo;t stick</h3>
                <p className="text-white/70 text-sm">
                  Too rigid or too complex — you went back to spreadsheets.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Eye className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Doing okay, but flying blind</h3>
                <p className="text-white/70 text-sm">
                  You&rsquo;re the single point of visibility on cash and pipeline.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Considering hiring an analyst</h3>
                <p className="text-white/70 text-sm">
                  This is that hire — without the risk or the ramp-up time.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                Why This Is Different
              </span>
              <h2 className="text-white mb-4">No setup fee. Built on a proven engine.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Percent className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">No One-Time Fee</h3>
                <p className="text-white/70 text-sm">
                  Just a simple monthly retainer — no large upfront cost to get started.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">3-Month Minimum</h3>
                <p className="text-white/70 text-sm">
                  Enough time for the system to learn your business and prove its value.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Settings className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">A Proven Engine</h3>
                <p className="text-white/70 text-sm">
                  Built on the same shared engine and module library already
                  running in production — not a new, unproven build.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="link" className="text-secondary text-base" asChild>
                <Link href="/pricing">
                  See pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Your business. Tracked. Understood. Every morning.
            </h2>
            <p className="text-xl text-white mb-8">
              Let&rsquo;s map out what CEO Intel Lite looks like for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
