import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Package, TrendingUp, Store } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Retail() {
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
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310419663029826184/kgWftKFZOkHJjjBi.png?Expires=1802557732&Signature=HqFpVoKech8joNwKSgimFUICEZGKAG5XjSOfLUCMUaC0hibDGtai0aBoqZ7MuEHBeV1q1wP765WJbOcfL4NoY0hY~J-JWj27th7uz79TdpO6XVh-mc9USuDCFCHHcj95L7jLWNlusYeSmjgbV9KlHDVFI1YARtkJVRHgq0DDAWNFBJq-OYV6vOOA7P2TVt6nSRCSWJqKMJCfeCakeyzRNaN2nDG4~heovHCj8zQNTCjmL46sXYCccX62PF6fOjqFdG1nG2aK9P4NqeccHW7Y-ozP7Mb-EBjJuArlxjOOIUiU6~MMUMMn9BglfyepD~-b85GXTdYCGb7Mq7zjmw56zQ__&Key-Pair-Id=K2HSFNDJXOU9YS')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 py-20">
            <div className="max-w-3xl">
              <span className="text-secondary font-semibold mb-4 block uppercase tracking-wider">Industry Solutions</span>
              <h1 className="mb-6 text-white">Retail & QSR Intelligence</h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Understand customer behavior, optimize inventory, and maximize sales with AI intelligence built for retail and quick-service restaurants.
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
              <h2 className="text-white mb-4">Retail Challenges We Solve</h2>
              <p className="text-xl text-white">
                From customer insights to inventory management, we help you drive sales and improve margins
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Customer Behavior Analytics</h3>
                </div>
                <p className="text-white mb-4">
                  Track customer journeys, identify purchase patterns, and personalize experiences to increase loyalty and lifetime value.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Customer segmentation and profiling</li>
                  <li>• Purchase pattern analysis</li>
                  <li>• Churn prediction and retention strategies</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Inventory Optimization</h3>
                </div>
                <p className="text-white mb-4">
                  Maintain optimal stock levels, reduce carrying costs, and ensure product availability across all locations.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Store-level inventory forecasting</li>
                  <li>• Automated reorder point calculation</li>
                  <li>• Slow-moving inventory identification</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Sales Intelligence</h3>
                </div>
                <p className="text-white mb-4">
                  Identify top-performing products, optimize pricing, and discover cross-sell opportunities to maximize revenue.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Product performance tracking</li>
                  <li>• Dynamic pricing recommendations</li>
                  <li>• Cross-sell and upsell opportunity detection</li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-white">Store Performance</h3>
                </div>
                <p className="text-white mb-4">
                  Compare store performance, identify best practices, and replicate success across your retail network.
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Store-wise sales and margin analysis</li>
                  <li>• Footfall and conversion tracking</li>
                  <li>• Staff productivity monitoring</li>
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
            <h2 className="text-white mb-6">Ready to Optimize Your Retail Operations?</h2>
            <p className="text-xl text-white mb-8">
              Let's discuss how AI intelligence can help you understand customers better, optimize inventory, and increase sales.
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
