import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Target, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Circuit Background */}
      <section 
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)',
        }}
      >
        {/* Circuit pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-white">From scattered data to<br /><span className="text-[#00D9FF]">complete intelligence</span><br />in 20-30 days.</h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              We don't replace your systems. We connect them. And then we make them talk to each other — in plain English.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">The Four Conversations</h2>
              <p className="text-xl text-white">
                Most implementations fail because they try to boil the ocean. We don't. We start with one question, prove it works, then expand.
              </p>
            </div>

            {/* Step 1 */}
            <div className="mb-16">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                      <Phone className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-secondary uppercase tracking-wider">Step 1</span>
                      <span className="text-sm text-white/80">• Day 1-3</span>
                    </div>
                    <h3 className="text-white mb-3">The Discovery Conversation</h3>
                    <p className="text-white mb-4">
                      We spend 45 minutes asking you the questions your data already knows the answer to. What decisions are you making on incomplete information? Where are you losing money you don't know about? What would you do differently if you could see everything?
                    </p>
                    <p className="text-white/80 mb-4 italic">
                      By the end of this call, you'll have a clear picture of your three highest-value intelligence gaps — and a specific proposal for closing them.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Map your data landscape (CRM, ERP, spreadsheets, wherever it lives)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Identify the three questions costing you the most money unanswered</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Define what "working" looks like in 20-30 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-secondary uppercase tracking-wider">Step 2</span>
                      <span className="text-sm text-white/80">• Day 4-10</span>
                    </div>
                    <h3 className="text-white mb-3">Connecting the Dots</h3>
                    <p className="text-white mb-4">
                      This is the technical work — but you won't feel it. We connect to your existing systems (no replacements, no disruption), build the data pipelines, and configure the intelligence layer. You keep running your business. We build in the background.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Secure read-only connections to your CRM, ERP, and data sources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Intelligence layer configured for your industry and business model</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">First answers delivered within 10 days of kickoff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-16">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                      <Zap className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-secondary uppercase tracking-wider">Step 3</span>
                      <span className="text-sm text-white/80">• Day 11-30</span>
                    </div>
                    <h3 className="text-white mb-3">The First Answers</h3>
                    <p className="text-white mb-4">
                      You ask your first question. The system answers it. You ask a second. Then a third. This is the moment the system stops being a product and starts being a tool you rely on. We calibrate based on your feedback until the answers feel like they come from someone who knows your business intimately.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Live Q&A sessions with your actual business questions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Calibration based on your domain expertise and business context</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">First real insight — something you didn't know before — within 20-30 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-16">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-secondary uppercase tracking-wider">Step 4</span>
                      <span className="text-sm text-white/80">• Day 31-45</span>
                    </div>
                    <h3 className="text-white mb-3">Intelligence Becomes Habit</h3>
                    <p className="text-white mb-4">
                      By Day 45, CEO Intel is part of how you run your business. You start your day with it. You walk into meetings with it. You make decisions with it. And as your business evolves, the system evolves with it — new questions, new data sources, new intelligence.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Morning briefing delivered before your first meeting</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Proactive alerts when something needs your attention</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white">Continuous expansion as you discover new questions worth asking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
        {/* Circuit pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">The first step is one conversation.</h2>
            <p className="text-xl text-white mb-4">
              45 minutes. Your data. Your questions. Your industry.
            </p>
            <p className="text-lg text-white/80 mb-8">
              We'll show you exactly what CEO Intel would surface in your business — and you'll leave knowing whether this is right for you. No pressure. No pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
