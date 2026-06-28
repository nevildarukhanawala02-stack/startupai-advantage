import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, TrendingUp, Zap, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Manufacturing() {
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
        {/* Background Illustration */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310419663029826184/VAIPxDlLzWlZSbyt.png?Expires=1802557732&Signature=JqaW273Bd8rUw76oKn8ZB~CNANliyGDLP~krP8AbqHbglV-LBrXypmNaWkAKfGlBuY1uLHFgFRcTTLJe7mBLUhZIFu-7XdnchH5jtRa63mTFpv0C2Zs4TBO7ofNxRvpjSBUaQ~HEqEuhMk8ZYjDc1Fq-g73kIQHjdJ0VGZ8a2NanrFCypcMe9d-PRYD4fhCrRYsvE9kf8yNhkid2lpWvhaGpNe629C-ZvMLbdK9iucJjSlSj33wV6iDxFC-jkvLSOXi6135xEiQI50M5inXM5fzXz0O55mtk-z-eisJjaJb7tbRbGxpY8ognEasJHPAnlAkyeo75kfnriL1FlaSpig__&Key-Pair-Id=K2HSFNDJXOU9YS')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 py-20">
            <div className="max-w-3xl">
              <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">Industry Solutions</span>
              <h1 className="mb-6 text-white">B2B Services Intelligence</h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Optimize production, streamline supply chains, and unlock operational excellence with AI intelligence built for B2B services.
              </p>
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">Manufacturing Challenges We Solve</h2>
              <p className="text-xl text-white">
                From production bottlenecks to supply chain disruptions, we help you see and solve problems faster
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Production Optimization</h3>
                </div>
                <p className="text-white mb-4">
                  Identify bottlenecks, predict machine failures, and optimize production schedules to maximize output without increasing costs.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Real-time production monitoring and alerts</li>
                  <li>• Predictive maintenance to prevent downtime</li>
                  <li>• Capacity planning and resource allocation</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Supply Chain Intelligence</h3>
                </div>
                <p className="text-white mb-4">
                  Get visibility into your entire supply chain—from raw materials to finished goods—and make smarter inventory and procurement decisions.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Demand forecasting and inventory optimization</li>
                  <li>• Supplier performance tracking</li>
                  <li>• Lead time prediction and risk alerts</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Quality Control</h3>
                </div>
                <p className="text-white mb-4">
                  Detect quality issues early, trace defects to root causes, and maintain consistent product quality across all production runs.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Automated defect detection and classification</li>
                  <li>• Root cause analysis for quality issues</li>
                  <li>• Compliance tracking and reporting</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Cost Optimization</h3>
                </div>
                <p className="text-white mb-4">
                  Identify hidden costs, optimize material usage, and reduce waste across your entire B2B services operation.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Material waste analysis and reduction</li>
                  <li>• Energy consumption optimization</li>
                  <li>• Labor efficiency tracking</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Optimize Your Manufacturing Operations?</h2>
            <p className="text-xl text-white mb-8">
              Let's discuss how AI intelligence can help you reduce costs, improve quality, and increase production efficiency.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
