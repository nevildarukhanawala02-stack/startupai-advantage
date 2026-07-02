import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, DollarSign, Target, TrendingUp, Users, AlertCircle, PieChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RevenueGrowth() {
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
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NE21l5gZWsPdyVmkGUiUbb/sandbox/qnJwpHgnIvG1BZ1uHhJC9F-img-1_1771016960000_na1fn_cmV2ZW51ZS1ncm93dGgtYnJhaW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTkUyMWw1Z1pXc1BkeVZta0dVaVViYi9zYW5kYm94L3FuSndwSGduSXZHMUJaMXVIaEpDOUYtaW1nLTFfMTc3MTAxNjk2MDAwMF9uYTFmbl9jbVYyWlc1MVpTMW5jbTkzZEdndFluSmhhVzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vmmbc7Y-QC~0ZBnzj4siJ3RN6nThjQ7pR4KpE4708a~8gtN856UpBXstv8FDDtwFgzn1A91ynwnkHgrvUVX6jbDtQxgZ8x4t3ZMpnxO3wugLSDvCTQtuSt6Ky9RqPEOCNwlo2xqzwkB~QByqW5g8xzP0CVyT0C0~RKf68d0aBQPxWKrYrgrAb9gIs0~QDDAldemsUZbYSOekMHF8rfV0Dli59yajgK1LH1db6bo~kJ3pLPOepLz4peAhJ-R2MYLMqGZoGJE2j0xqYwG4Bebcc5CkoO7Xxkt8yNPuvc8cmzUQVnoswhOHhNajnSTor9tm7J-Gr20o1HkXf-QeaLrBOw__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">Intelligence Systems</span>
            <h1 className="mb-6 text-white">Revenue Intelligence System</h1>
            <p className="text-xl text-white mb-4 leading-relaxed italic">
              "Where is your revenue really coming from and where should you focus?"
            </p>
            <Button size="lg" asChild className="mb-8">
              <Link href="/get-started">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="inline-block border-2 border-secondary bg-secondary/10 rounded-lg px-6 py-4">
              <p className="text-secondary font-bold text-lg mb-1">Revenue Growth Intelligence</p>
              <p className="text-white text-sm">Better allocation • Reduced churn • Faster decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Revenue Intelligence Actually Does */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">What Revenue Intelligence <span className="text-secondary">Actually Does</span></h2>
              <p className="text-xl text-white">
                Stop guessing where your revenue comes from. Get instant answers to your most critical revenue questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Which customers are at risk of churning this quarter?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "What products drive the most profitable revenue?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Where should my sales team focus this month for maximum ROI?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Which customer segments have the highest lifetime value?"
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
                    <AlertCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Customer Churn Prediction</h3>
                </div>
                <p className="text-white mb-4">
                  Identify at-risk customers before they leave. Get early warning signals based on behavior patterns, engagement metrics, and payment history.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Risk scoring for every customer</li>
                  <li>• Recommended retention actions</li>
                  <li>• Proactive alerts and notifications</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Sales Focus Optimization</h3>
                </div>
                <p className="text-white mb-4">
                  Know exactly where your sales team should spend their time for maximum revenue impact. Prioritize opportunities based on conversion probability and deal value.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Opportunity scoring and ranking</li>
                  <li>• Territory and account prioritization</li>
                  <li>• Win probability predictions</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Product/SKU Prioritization</h3>
                </div>
                <p className="text-white mb-4">
                  Understand which products and SKUs drive real profit. Identify winners, losers, and hidden opportunities in your product portfolio.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Profitability analysis by product</li>
                  <li>• Cross-sell and upsell insights</li>
                  <li>• Product mix optimization</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Revenue Driver Analysis</h3>
                </div>
                <p className="text-white mb-4">
                  Discover what actually drives revenue growth in your business. Separate correlation from causation with AI-powered analysis.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Key revenue factor identification</li>
                  <li>• Impact quantification</li>
                  <li>• Growth opportunity mapping</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Team Performance Insights</h3>
                </div>
                <p className="text-white mb-4">
                  Understand what top performers do differently. Identify coaching opportunities and replicate success patterns across your team.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Individual and team benchmarking</li>
                  <li>• Best practice identification</li>
                  <li>• Performance trend analysis</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Customer Segmentation</h3>
                </div>
                <p className="text-white mb-4">
                  Go beyond basic demographics. Understand customer behavior, needs, and value to create targeted strategies for each segment.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• AI-powered segment discovery</li>
                  <li>• Lifetime value prediction</li>
                  <li>• Segment-specific strategies</li>
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
                Revenue Intelligence integrates with your existing systems to provide a complete view of your revenue operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">CRM & Sales Pipelines</h3>
                <p className="text-white">Salesforce, HubSpot, Zoho, custom CRMs</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Customer Databases</h3>
                <p className="text-white">MySQL, PostgreSQL, MongoDB, data warehouses</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Financial Systems</h3>
                <p className="text-white">Tally, QuickBooks, SAP, Oracle Financials</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Sales Reports & History</h3>
                <p className="text-white">Excel sheets, Google Sheets, historical data</p>
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
                  <li>• Understand your business</li>
                  <li>• Map data sources</li>
                  <li>• Define key questions</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">2</div>
                <h3 className="text-white mb-2">Data Integration</h3>
                <p className="text-sm text-white/80 mb-4">Week 2-3</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Connect your systems</li>
                  <li>• Clean and structure data</li>
                  <li>• Validate accuracy</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">3</div>
                <h3 className="text-white mb-2">AI Training & Testing</h3>
                <p className="text-sm text-white/80 mb-4">Week 2-3</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Train AI on your data</li>
                  <li>• Test with real questions</li>
                  <li>• Refine and optimize</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">4</div>
                <h3 className="text-white mb-2">Launch & Training</h3>
                <p className="text-sm text-white/80 mb-4">Week 4</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Go live with your team</li>
                  <li>• Train key users</li>
                  <li>• Ongoing support</li>
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
            <p className="text-white/80 text-center mb-12">Common questions about Revenue Intelligence implementation</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What data do I need to get started with Revenue Intelligence?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  You'll need access to your CRM (customer data), sales records, invoicing system, and optionally your marketing platform. Most Indian businesses already have this data in systems like Zoho, Tally, or Excel. We can work with whatever format you have—our team handles the data integration and cleaning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  How long does implementation take?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Typically 20-30 days from kickoff to launch. Week 1-2: Discovery and data integration. Week 2-3: AI training and testing. Week 3-4: Launch and team training. You'll start seeing initial insights within the first 2 weeks, with full system capabilities by week 4.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Will this disrupt my current operations?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  No. Revenue Intelligence works alongside your existing systems—it doesn't replace them. We integrate with your current CRM, ERP, and accounting software without requiring changes to your workflows. Your team continues working as usual while gaining AI-powered insights.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What kind of value can I expect?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  The value you get depends on the size and complexity of your business. Clients typically find hidden revenue opportunities, reduce customer churn, and make faster, more confident decisions. During your free discovery call, we'll assess your specific situation and give you an honest picture of what's possible for your business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Is my data secure?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Absolutely. Your data is encrypted in transit and at rest, hosted on secure Indian servers, and never shared with third parties. We're compliant with Indian data protection regulations. You maintain full ownership and control of your data at all times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Do I need technical expertise to use this?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Not at all. The system is designed for business users, not technical teams. You ask questions in plain English (or Hindi), and the AI provides answers with visualizations. We provide full training for your team, and ongoing support is included. If you can use WhatsApp, you can use Revenue Intelligence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Can it integrate with my existing software?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Yes. We integrate with popular Indian business software including Zoho CRM, Tally ERP, SAP, Oracle, Microsoft Dynamics, Salesforce, and custom systems. We also work with Excel/Google Sheets, SQL databases, and cloud storage. If you have data, we can connect to it.
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
            <h2 className="text-white mb-6">Ready to Unlock Your Revenue Potential?</h2>
            <p className="text-xl text-white mb-8">
              Book a free consultation to see how Revenue Intelligence can give you the clarity to make faster, more confident growth decisions.
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
