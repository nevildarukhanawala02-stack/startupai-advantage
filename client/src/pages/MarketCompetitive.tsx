import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Eye, AlertCircle, BarChart2, Compass, Lightbulb, Users, BarChart3, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MarketCompetitive() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)',
        }}
      >
        {/* Background Brain Illustration */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NE21l5gZWsPdyVmkGUiUbb/sandbox/qnJwpHgnIvG1BZ1uHhJC9F-img-3_1771016947000_na1fn_bWFya2V0LWNvbXBldGl0aXZlLWJyYWlu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTkUyMWw1Z1pXc1BkeVZta0dVaVViYi9zYW5kYm94L3FuSndwSGduSXZHMUJaMXVIaEpDOUYtaW1nLTNfMTc3MTAxNjk0NzAwMF9uYTFmbl9iV0Z5YTJWMExXTnZiWEJsZEdsMGFYWmxMV0p5WVdsdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DC7SSku2zUreoWNkjs6~xtD~7G9YnNWQcWjMjISWbw4mtJ1u0o2LekN4siB1hHjxY5coWP52VEjabVYer4ek2RGw3L0po9AFO0knvo6I93VN-X5gJcd4Yy2yN8eZqpi7sDyNQ5-IbheFGXAGkEopuQOqEtC5oKffSX3XNBfFQiXsCsZ3OmBfGoBGSKKdwqzk4YX0-GH9fFGbFiAtXOKG~hvwGRCb218IxDjhZ4VMqYdusobELK7U7OaLIskrCYaZq9NN6B-ip40dEFgxMrbt03yleXV7zMIrlscuek4lhGwC~naviPsxdWxcMeLD7EuPbi0flc9YB31bqyjS2kXV-g__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">Intelligence Systems</span>
            <h1 className="mb-6 text-white">Market & Competitive System</h1>
            <p className="text-xl text-white mb-4 leading-relaxed italic">
              "How do you stay ahead of competition and find new opportunities?"
            </p>
            <Button size="lg" asChild className="mb-8">
              <Link href="/get-started">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="inline-block border-2 border-secondary bg-secondary/10 rounded-lg px-6 py-4">
              <p className="text-secondary font-bold text-lg mb-1">Strategic Advantage</p>
              <p className="text-white text-sm">First-mover opportunities • Risk mitigation • Market leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Market & Competitive Actually Does */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">What Market & Competitive Intelligence <span className="text-secondary">Actually Does</span></h2>
              <p className="text-xl text-white">
                Stop reacting to market changes. Get instant answers to your most critical strategic questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "What are our competitors doing that we should know about?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Where is the market heading and what opportunities exist?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "What threats should we be preparing for?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "How do we position ourselves for maximum competitive advantage?"
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">Key <span className="text-secondary">Capabilities</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Competitor Activity Monitoring</h3>
                </div>
                <p className="text-white mb-4">
                  Track competitor moves in real-time. Get alerts when competitors launch products, change pricing, or make strategic moves that affect your business.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Product launch tracking</li>
                  <li>• Pricing change detection</li>
                  <li>• Market positioning analysis</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Market Direction Prediction</h3>
                </div>
                <p className="text-white mb-4">
                  Understand where your market is heading before it gets there. Identify emerging trends, shifting customer preferences, and new opportunities.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Trend forecasting</li>
                  <li>• Demand pattern analysis</li>
                  <li>• Market size projections</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Opportunity Identification</h3>
                </div>
                <p className="text-white mb-4">
                  Discover untapped market opportunities, underserved segments, and white space where you can win. Get first-mover advantage on emerging opportunities.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• White space analysis</li>
                  <li>• Segment opportunity scoring</li>
                  <li>• Partnership opportunity mapping</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Threat Early Warning</h3>
                </div>
                <p className="text-white mb-4">
                  Get advance warning of competitive threats, market disruptions, and regulatory changes. Prepare responses before threats materialize.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Disruption risk assessment</li>
                  <li>• Competitive threat alerts</li>
                  <li>• Regulatory change monitoring</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Strategic Positioning Insights</h3>
                </div>
                <p className="text-white mb-4">
                  Understand how you're positioned relative to competitors. Identify your unique advantages and areas where you need to strengthen.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Competitive positioning maps</li>
                  <li>• Strength/weakness analysis</li>
                  <li>• Differentiation opportunities</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Customer Sentiment Analysis</h3>
                </div>
                <p className="text-white mb-4">
                  Understand what customers are saying about you and your competitors. Track sentiment shifts and identify reputation risks early.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Brand sentiment tracking</li>
                  <li>• Competitor perception analysis</li>
                  <li>• Review and feedback monitoring</li>
                </ul>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* What It Connects To */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">What It <span className="text-secondary">Connects To</span></h2>
              <p className="text-xl text-white">
                Market & Competitive Intelligence integrates with external data sources to provide comprehensive market insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Market Data Sources</h3>
                <p className="text-white">Industry reports, market research platforms, economic indicators</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Competitor Monitoring</h3>
                <p className="text-white">Competitor websites, press releases, product launches</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Customer Sentiment Platforms</h3>
                <p className="text-white">Review sites, social media, customer feedback channels</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Industry Trends & News</h3>
                <p className="text-white">Trade publications, news aggregators, analyst reports</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Regulatory Tracking</h3>
                <p className="text-white">Government databases, compliance platforms, policy updates</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Your Internal Data</h3>
                <p className="text-white">CRM, sales data, customer feedback for context</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Implementation <span className="text-secondary">Timeline</span></h2>
              <p className="text-xl text-white">
                Get up and running in 20-30 days with our proven implementation process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">1</div>
                <h3 className="text-white mb-2">Discovery & Setup</h3>
                <p className="text-sm text-white/80 mb-4">Week 1-2</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Identify key competitors</li>
                  <li>• Define market segments</li>
                  <li>• Set strategic priorities</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">2</div>
                <h3 className="text-white mb-2">Data Source Integration</h3>
                <p className="text-sm text-white/80 mb-4">Week 2</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Connect market data feeds</li>
                  <li>• Set up monitoring sources</li>
                  <li>• Configure alert systems</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">3</div>
                <h3 className="text-white mb-2">AI Training & Testing</h3>
                <p className="text-sm text-white/80 mb-4">Week 3</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Train on market patterns</li>
                  <li>• Test competitive insights</li>
                  <li>• Calibrate predictions</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">4</div>
                <h3 className="text-white mb-2">Launch & Training</h3>
                <p className="text-sm text-white/80 mb-4">Week 4</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Deploy to strategy team</li>
                  <li>• Train decision makers</li>
                  <li>• Continuous monitoring</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-white/80 text-center mb-12">Common questions about Market & Competitive Intelligence implementation</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What sources does Market & Competitive Intelligence monitor?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  The AI tracks competitor websites, social media, news articles, industry reports, regulatory filings, job postings, customer reviews, pricing changes, and patent databases. For Indian markets, we monitor sources like Economic Times, Business Standard, industry associations, and regional news. You can also add specific sources relevant to your industry.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  How does it predict market direction?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  The AI analyzes historical patterns, current trends, competitor moves, regulatory changes, and customer sentiment to identify emerging opportunities and threats. It uses machine learning to spot early signals—like increased competitor hiring in a region or rising customer complaints about a specific issue—that indicate market shifts before they become obvious.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Is this just competitor monitoring or something more?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  It's much more than monitoring. While it does track competitors, the real value is in connecting market signals to your business decisions. It answers questions like "Should we enter this new geography?" or "Is this product category growing or declining?" or "What's driving customer churn in our segment?" It's strategic intelligence, not just data collection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  How often is the data updated?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Real-time for critical sources (competitor pricing, news, social media), daily for most sources (websites, reviews, industry reports), and weekly for slower-moving data (regulatory filings, patents). You'll receive alerts for significant changes—like a competitor launching a new product or a major industry shift—within hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Can it help with new market entry decisions?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Yes. Market & Competitive Intelligence analyzes market size, growth trends, competitive intensity, customer needs, regulatory barriers, and success factors for new markets. It shows you which competitors are already there, what strategies work, where gaps exist, and what risks to watch. This prevents expensive market entry mistakes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Do I need a market research team to use this?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  No. The system is designed for business leaders, strategy teams, and founders—not market researchers. You ask strategic questions in plain language, and the AI provides analysis with supporting data. It replaces expensive market research reports with on-demand intelligence. Training takes 2-3 hours, and ongoing support is included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What if my competitors are not online or hard to track?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Even offline competitors leave digital footprints—job postings, supplier relationships, customer reviews, regulatory filings, industry association memberships. We also integrate your sales team's field intelligence, distributor feedback, and customer conversations. The AI connects these scattered signals to give you a complete competitive picture.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Gain Strategic Advantage?</h2>
            <p className="text-xl text-white mb-8">
              Book a free consultation to see how Market & Competitive Intelligence can help you stay ahead of competition and find new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-started">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                <Link href="/how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-6">
              20-30 day implementation • No disruption to existing systems • Built for ₹10-200 Cr companies
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
