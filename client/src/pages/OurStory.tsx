import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurStory() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: "linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 text-[#00D9FF] text-sm font-medium mb-8">
              Why We Built This
            </div>
            <h1 className="mb-6 text-white">
              We built CEO Intel because we were tired of watching smart founders make expensive decisions in the dark.
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* The Observation */}
            <div>
              <p className="text-xl text-white leading-relaxed mb-6">
                Every founder we've ever worked with is intelligent. Most are working harder than anyone in their organisation. And almost all of them are making critical decisions — about customers, inventory, pricing, hiring — based on incomplete, delayed, or simply missing information.
              </p>
              <p className="text-xl text-white leading-relaxed">
                Not because they don't care. Because the data exists in five different systems, none of which talk to each other, and nobody has the time to pull it all together before the meeting starts.
              </p>
            </div>

            {/* The Divider */}
            <div className="border-l-4 border-[#00D9FF] pl-8">
              <p className="text-2xl text-white font-semibold leading-relaxed italic">
                "The data was there. The answer was there. We just couldn't see it in time."
              </p>
              <p className="text-white/70 mt-4">— Something we've heard from nearly every founder we've spoken to.</p>
            </div>

            {/* The Rajesh Story */}
            <div>
              <h2 className="text-white mb-6">The story that changed everything for us.</h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                We were working with a manufacturing founder — let's call him Rajesh. Smart guy. Twenty years in the industry. Running a ₹40 crore business with a team of 60 people.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                Rajesh had a customer — his second-largest account — that had been quietly reducing orders for four months. Not dramatically. Just a little less each month. The kind of decline that's invisible when you're looking at weekly numbers but obvious when you zoom out.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                By the time Rajesh noticed, the account had already started talking to a competitor. He found out at a trade show. From someone else.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                The data was in his CRM. The trend was visible in his order history. His sales team knew the account was quiet — they just hadn't connected the dots. Nobody had.
              </p>
              <p className="text-lg text-white leading-relaxed font-semibold">
                He lost a ₹1.2 crore account that year. Not because of price. Not because of quality. Because nobody was watching.
              </p>
            </div>

            {/* The Realisation */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <h2 className="text-white mb-6">That's when we stopped building dashboards and started building intelligence.</h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                Dashboards show you what happened. Intelligence tells you what to do about it — before it's too late.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                The difference isn't the data. Every founder has data. The difference is whether your systems are working for you while you sleep — connecting the dots, spotting the patterns, surfacing the questions you didn't know to ask.
              </p>
              <p className="text-lg text-white leading-relaxed">
                CEO Intel is the system we wish Rajesh had. The one that would have flagged the account decline in month two, not month five. The one that would have said: <span className="text-[#00D9FF] font-semibold">this customer is drifting. Call them this week.</span>
              </p>
            </div>

            {/* What We Believe */}
            <div>
              <h2 className="text-white mb-8">What we believe.</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] mt-3 flex-shrink-0" />
                  <p className="text-lg text-white leading-relaxed">
                    <span className="text-white font-semibold">Indian founders are underserved by technology.</span> The tools built for Silicon Valley startups don't fit the reality of a ₹20-200 crore Indian business with complex supply chains, relationship-driven sales, and data spread across WhatsApp, Tally, and five spreadsheets.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] mt-3 flex-shrink-0" />
                  <p className="text-lg text-white leading-relaxed">
                    <span className="text-white font-semibold">Intelligence should be proactive, not reactive.</span> You shouldn't have to go looking for problems. Your systems should find them and bring them to you — with enough time to act.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] mt-3 flex-shrink-0" />
                  <p className="text-lg text-white leading-relaxed">
                    <span className="text-white font-semibold">The best decisions are made with complete information.</span> Not perfect information — complete information. The difference between knowing 60% of what's happening and knowing 90% is the difference between a guess and a decision.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] mt-3 flex-shrink-0" />
                  <p className="text-lg text-white leading-relaxed">
                    <span className="text-white font-semibold">Implementation should be invisible.</span> You shouldn't have to change how you work to get better intelligence. CEO Intel connects to your existing systems and works in the background. You just get better answers.
                  </p>
                </div>
              </div>
            </div>

            {/* Who We Are */}
            <div>
              <h2 className="text-white mb-6">Who we are.</h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                We're a small team of people who've spent years at the intersection of business strategy and data systems. We've worked with founders across manufacturing, FMCG, retail, and B2B services. We've seen what happens when intelligence works — and what it costs when it doesn't.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                We're not a software company that stumbled into AI. We're a team that started with the problem — the founder sitting in a meeting without the information they need — and worked backwards to build the solution.
              </p>
              <p className="text-lg text-white leading-relaxed">
                CEO Intel is the product of that work. And we're proud of what it does for the founders who use it.
              </p>
            </div>

            {/* The Invitation */}
            <div className="rounded-2xl border border-[#00D9FF]/20 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] p-10 text-center">
              <h2 className="text-white mb-4">If any of this resonates with you —</h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                If you've ever walked into a meeting wishing you had better information. If you've ever lost a customer you should have kept. If you've ever made a decision and thought: I wish I'd known that sooner.
              </p>
              <p className="text-xl text-white mb-10 font-semibold">
                Then let's talk. One conversation. No pitch. Just your business, your data, and what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/get-started">
                    Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                  <Link href="/how-it-works">
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
