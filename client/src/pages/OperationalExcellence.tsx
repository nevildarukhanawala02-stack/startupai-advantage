import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Settings, Zap, TrendingDown, BarChart3, AlertTriangle, Gauge, Activity, Package, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OperationalExcellence() {
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
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NE21l5gZWsPdyVmkGUiUbb/sandbox/qnJwpHgnIvG1BZ1uHhJC9F-img-2_1771016956000_na1fn_b3BlcmF0aW9uYWwtZXhjZWxsZW5jZS1icmFpbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTkUyMWw1Z1pXc1BkeVZta0dVaVViYi9zYW5kYm94L3FuSndwSGduSXZHMUJaMXVIaEpDOUYtaW1nLTJfMTc3MTAxNjk1NjAwMF9uYTFmbl9iM0JsY21GMGFXOXVZV3d0WlhoalpXeHNaVzVqWlMxaWNtRnBiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZYwG0E2al65FkYTHyAjm1kQvSWBh1ZMJVhj4uCSsP9XvPo1UVdghlzVo2uI--s-PYJInC4OzvA3sE1RQUq-xJ6aU3897POPHh1AXmdnqDwKy~fQEU1-FGFnI3PNoitK00~gaL35-tFcHG6Y6evL9dzDCbZMiQ1GUs~SqXlL1KQ8u1qjgEhOY0oSB-21gh2yWRUuA8DuLh8r1~Ysc9WmUIAwgw2xJySEr60F3l4-4A85~~UsUhQ4gP0poiEorvI3EijFHnI1fTV2VDcZhubcfUy1l0BGBVFa24uR8vzt5A-IneTZ588CqcpmAKGFLmTwYDfNNrLdl4ZJSTR31ygu~nA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">Intelligence Systems</span>
            <h1 className="mb-6 text-white">Operational Excellence System</h1>
            <p className="text-xl text-white mb-4 leading-relaxed italic">
              "Where are you bleeding money and how do you scale efficiently?"
            </p>
            <Button size="lg" asChild className="mb-8">
              <Link href="/get-started">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="inline-block border-2 border-secondary bg-secondary/10 rounded-lg px-6 py-4">
              <p className="text-secondary font-bold text-lg mb-1">Operational Excellence Intelligence</p>
              <p className="text-white text-sm">EBITDA improvement • Scalability readiness • Higher valuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Operational Excellence Actually Does */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">What Operational Excellence <span className="text-secondary">Actually Does</span></h2>
              <p className="text-xl text-white">
                Stop guessing where costs are hidden. Get instant answers to your most critical operational questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Where are we losing money in our operations?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Which processes are bottlenecks slowing us down?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "How can we scale operations without proportional cost increase?"
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <p className="text-white italic text-lg">
                  "Which suppliers are underperforming and costing us money?"
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
                    <TrendingDown className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Money Leak Identification</h3>
                </div>
                <p className="text-white mb-4">
                  Discover hidden costs and inefficiencies draining your profitability. Get precise identification of where money is being wasted across operations.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Cost anomaly detection</li>
                  <li>• Waste identification by category</li>
                  <li>• ROI analysis for initiatives</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Process Bottleneck Detection</h3>
                </div>
                <p className="text-white mb-4">
                  Identify exactly where your operations are slowing down. Pinpoint bottlenecks before they impact delivery and customer satisfaction.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Real-time process flow analysis</li>
                  <li>• Bottleneck severity scoring</li>
                  <li>• Optimization recommendations</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Scaling Opportunity Mapping</h3>
                </div>
                <p className="text-white mb-4">
                  Understand how to grow revenue without proportionally increasing costs. Identify which processes can scale and which need redesign.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Scalability assessment by process</li>
                  <li>• Capacity constraint identification</li>
                  <li>• Growth scenario modeling</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Supplier Performance Analysis</h3>
                </div>
                <p className="text-white mb-4">
                  Track supplier reliability, quality, and cost-effectiveness. Make data-driven decisions about vendor relationships and procurement strategy.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Supplier scorecards and ranking</li>
                  <li>• Delivery and quality tracking</li>
                  <li>• Cost comparison analysis</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Margin Improvement Areas</h3>
                </div>
                <p className="text-white mb-4">
                  Identify specific opportunities to improve margins across products, services, and customer segments. Prioritize actions by impact.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Margin analysis by segment</li>
                  <li>• Cost reduction opportunities</li>
                  <li>• Pricing optimization insights</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Resource Optimization</h3>
                </div>
                <p className="text-white mb-4">
                  Maximize utilization of people, equipment, and inventory. Reduce idle time and over-allocation while maintaining service levels.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Resource utilization tracking</li>
                  <li>• Capacity planning</li>
                  <li>• Allocation optimization</li>
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
                Operational Excellence integrates with your existing systems to provide a complete view of your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Production Systems</h3>
                <p className="text-white">MES, ERP production modules, manufacturing execution systems</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Supply Chain & Inventory</h3>
                <p className="text-white">WMS, inventory management, logistics platforms</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Quality Control</h3>
                <p className="text-white">QMS, inspection systems, defect tracking</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">HR & Workforce Management</h3>
                <p className="text-white">HRMS, time tracking, workforce planning tools</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Procurement & Vendors</h3>
                <p className="text-white">Purchase orders, supplier databases, procurement systems</p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700/50 p-6">
                <h3 className="text-white mb-3">Financial Systems</h3>
                <p className="text-white">Cost accounting, budgeting, expense tracking</p>
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
                  <li>• Map operational processes</li>
                  <li>• Identify cost centers</li>
                  <li>• Define efficiency metrics</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">2</div>
                <h3 className="text-white mb-2">Data Integration</h3>
                <p className="text-sm text-white/80 mb-4">Week 2-3</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Connect operational systems</li>
                  <li>• Integrate cost data</li>
                  <li>• Validate data flows</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">3</div>
                <h3 className="text-white mb-2">AI Training & Testing</h3>
                <p className="text-sm text-white/80 mb-4">Week 2-3</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Train on operational patterns</li>
                  <li>• Test efficiency insights</li>
                  <li>• Calibrate recommendations</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <div className="text-secondary text-4xl font-bold mb-2">4</div>
                <h3 className="text-white mb-2">Launch & Training</h3>
                <p className="text-sm text-white/80 mb-4">Week 4</p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Deploy to operations team</li>
                  <li>• Train process owners</li>
                  <li>• Continuous optimization</li>
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
            <p className="text-white/80 text-center mb-12">Common questions about Operational Excellence implementation</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  How does Operational Excellence identify money leaks in my business?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  The AI analyzes your operational data—inventory levels, production logs, supplier invoices, quality reports—to spot patterns humans miss. It identifies excess inventory sitting idle, supplier pricing inconsistencies, production bottlenecks causing overtime, quality issues driving rework costs, and process inefficiencies. Many businesses discover significant revenue leaking through these hidden operational gaps — the exact amount varies by industry and how long inefficiencies have been accumulating.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What systems need to be integrated?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Typically your ERP (SAP, Oracle, Tally), inventory management system, production/manufacturing software, supplier/procurement system, and quality management tools. We also integrate with Excel/Google Sheets if that's where you track operations. The more systems connected, the deeper the insights—but we can start with just 2-3 core systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Will this require changes to our current processes?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  No process changes are required initially. Operational Excellence observes your current operations and provides insights. Once you see where improvements can be made, you decide which recommendations to implement. The system adapts to your processes—you don't adapt to the system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  How quickly will I see cost savings?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Most clients identify their first cost-saving opportunities within 2-3 weeks of data integration. Quick wins like supplier renegotiation or inventory optimization can deliver savings within 30-60 days. Larger improvements like process redesign take 3-6 months. The timeline and scale of savings depend on your specific operations, data quality, and which recommendations you choose to act on — we'll give you an honest assessment during your discovery call.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Can it help with scaling operations?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Absolutely. Operational Excellence identifies which processes can handle 2x volume, which need investment, and where bottlenecks will emerge. It shows you exactly where to add capacity, which suppliers can scale with you, and which processes to automate first. This prevents expensive scaling mistakes and ensures smooth growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  Do I need a dedicated operations team to use this?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  No. The system is designed for operations managers, plant heads, and business owners—not data scientists. You ask questions like "Why is Line 3 slower than Line 2?" or "Which supplier has the best quality-to-cost ratio?" and get clear answers. Training takes 2-3 hours, and ongoing support is included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-secondary">
                  What if my operations data is messy or incomplete?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  That's normal—most Indian businesses have fragmented operational data across multiple systems and spreadsheets. Our team handles data cleaning, standardization, and gap-filling during implementation. We work with whatever data you have and help you improve data collection practices over time.
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
            <h2 className="text-white mb-6">Ready to Achieve Operational Excellence?</h2>
            <p className="text-xl text-white mb-8">
              Book a free consultation to see how Operational Excellence can help you identify hidden cost leaks and build a more scalable, efficient operation.
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
