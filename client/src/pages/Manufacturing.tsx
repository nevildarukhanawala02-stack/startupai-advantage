import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  MessageSquare,
  Clock,
  AlertTriangle,
  Users,
  FileText,
  Factory,
  Gauge,
  DollarSign,
  MapPin,
  AlertCircle,
  Monitor,
  Package,
  Eye,
  Building2,
  Percent,
  Settings,
  Zap,
  CheckCircle2,
  Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Manufacturing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden pt-16"
        style={{
          background: "linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/manufacturing-bg.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">
              Manufacturing Intel · A CEO Intel Framework
            </span>
            <h1 className="mb-6 text-white">
              Run the entire business — RFQ to cash — on one intelligent system.
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              You don't have to choose between an ERP and a BI tool. Manufacturing
              Intel gives you both — the system that runs your floor and the
              intelligence that runs your business — built for each other from day one.
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

      {/* Two Layers, One System */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                How It Works
              </span>
              <h2 className="text-white mb-4">Two layers. One system.</h2>
              <p className="text-xl text-white/80">
                Every manufacturing CEO we talk to already knows one half of this story.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">A</span>
                  </div>
                  <h3 className="text-white">Layer A — The Brain</h3>
                </div>
                <p className="text-white/60 text-sm italic mb-6">
                  Universal. Never changes per client.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">AI Chat — ask anything in plain English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Morning Brief — delivered by 7:30 AM daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Proactive Alerts — before a problem becomes a crisis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Role-based Dashboards — CEO, PM, and operator views</span>
                  </li>
                </ul>
                <p className="text-white/60 text-xs mt-6">
                  This is the same intelligence layer already behind our{" "}
                  <Link href="/intelligence-systems/revenue-growth" className="text-secondary hover:underline">
                    Revenue Growth
                  </Link>
                  ,{" "}
                  <Link href="/intelligence-systems/operational-excellence" className="text-secondary hover:underline">
                    Operational Excellence
                  </Link>{" "}
                  and{" "}
                  <Link href="/intelligence-systems/market-competitive" className="text-secondary hover:underline">
                    Market &amp; Competitive
                  </Link>{" "}
                  systems.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">B</span>
                  </div>
                  <h3 className="text-white">Layer B — The Floor</h3>
                </div>
                <p className="text-white/60 text-sm italic mb-6">
                  Bespoke. Shaped to how you manufacture.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">RFQ → Quotation → PO Pipeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Production Job Tracking, phase by phase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Machine Tracking &amp; Capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Job Costing &amp; Margin</span>
                  </li>
                </ul>
                <p className="text-white/60 text-xs mt-6">
                  If you already have systems — an ERP, SAP, a CNC cloud — we connect
                  to them. If you don't, which is most SMEs, we build it, shaped
                  specifically to how you manufacture.
                </p>
              </Card>
            </div>

            <p className="text-center text-white/90 text-lg italic max-w-3xl mx-auto">
              Whatever runs your floor today — nothing, something broken, or a full
              ERP — the brain on top is exactly the same.
            </p>
          </div>
        </div>
      </section>

      {/* What It Actually Does */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">What Manufacturing Intel actually does</h2>
              <p className="text-xl text-white/80">
                Every job, every machine, every rupee of margin — visible without
                asking anyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Know Your Win Rate on Every Quote</h3>
                </div>
                <p className="text-white/80 mb-4">
                  A structured RFQ → feasibility → quotation → PO pipeline, with
                  pricing intelligence that checks a new quote against your own
                  quoting history before you send it.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">"Where Is My Job?" — Answered Instantly</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Phase-by-phase tracking from DFM to dispatch — planned vs. actual,
                  visible to you without pulling a PM off the floor to ask.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">No More Guessing Whose Fault It Was</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Every delay is logged and attributed — client-caused, internal, or
                  external — the moment it happens, not reconstructed after the fact.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Your Shop Floor, Finally Visible</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Gantt-level machine tracking shows utilization, bottlenecks, and
                  idle time across every machine — not a supervisor's memory.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Margin You Know Today, Not at Month-End</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Job costing tied to the specific job gives you live margin
                  visibility instead of a reactive number your accountant hands you
                  weeks later.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">One Picture of the Day, Not Five Tools</h3>
                </div>
                <p className="text-white/80 mb-4">
                  One AI chat, one morning brief, one alert system, and KPI rollups
                  down to PM, engineer, and operator — regardless of what runs
                  underneath.
                </p>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Package className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">No system yet</h3>
                <p className="text-white/70 text-sm">
                  Running on Tally, Excel, WhatsApp. We build your operations
                  backbone, shaped to your rules.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <AlertTriangle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">
                  Tried a platform, it didn't stick
                </h3>
                <p className="text-white/70 text-sm">
                  Rules were too rigid, team reverted to old habits. We co-build the
                  rules with you — it bends to you, not the reverse.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Eye className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">
                  Using a system, but it feels incomplete
                </h3>
                <p className="text-white/70 text-sm">
                  Data goes in, but no intelligence comes back out. Keep what
                  works — we plug in what it never gave you.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Building2 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">
                  Already on a full ERP
                </h3>
                <p className="text-white/70 text-sm">
                  Operations are covered end to end. We add the AI brain on top —
                  briefs, alerts, plain-English chat.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <Percent className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">
                  Worried it'll be slow or expensive
                </h3>
                <p className="text-white/70 text-sm">
                  We configure a working module library — we don't build from a
                  blank slate. See "Why This Is Different" below.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proof, Not Promises */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-[#0f1419] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
              Proof, Not Promises
            </span>
            <h2 className="text-white mb-4">Already live. Already running.</h2>
            <p className="text-lg text-white/80">
              A precision CNC mold manufacturer — running for global OEM supply
              chains, no SAP, all Excel/SharePoint-based — is live on this exact
              architecture today. Exactly the environment most manufacturing SMEs
              run in.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Factory className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">28</div>
              <div className="text-sm text-white/60">Machines tracked</div>
            </div>
            <div className="text-center">
              <Layers className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">9</div>
              <div className="text-sm text-white/60">Lifecycle stages, RFQ to close</div>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">3</div>
              <div className="text-sm text-white/60">Delay categories, auto-attributed</div>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">7:30</div>
              <div className="text-sm text-white/60">AM daily intelligence brief</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different */}
      <section className="relative py-20 bg-gradient-to-b from-[#0f1419] to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold mb-3 block uppercase tracking-wider text-sm">
                Why This Is Different
              </span>
              <h2 className="text-white mb-4">Live on your data, your rules — fast.</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Large, one-size-fits-all platforms are built once for everyone and
                sold as-is — months of implementation before you've customized
                anything. We built the opposite.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Settings className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Shared Core</h3>
                <p className="text-white/70 text-sm">Built once. Every client inherits it as-is.</p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Package className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Module Library</h3>
                <p className="text-white/70 text-sm">
                  RFQ, job tracking, machine tracking, costing — proven, not new.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <Zap className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">Configure, Not Code</h3>
                <p className="text-white/70 text-sm">
                  Your stages, your SLAs, your roles — set in config, not engineered.
                </p>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-white text-base font-semibold mb-2">You Go Live</h3>
                <p className="text-white/70 text-sm">
                  On your own data, in your own rules, in days.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">10–15</div>
              <p className="text-white/80 uppercase tracking-wider text-sm mb-6">
                Days to go live, on your own data
              </p>
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
              Your operations. Your rules. Our intelligence.
            </h2>
            <p className="text-xl text-white mb-8">
              Let's map your floor and show you exactly what's possible — on your
              own data.
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
