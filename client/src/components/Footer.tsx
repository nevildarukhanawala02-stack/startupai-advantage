import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary/20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <span className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/logo-light_a4146e64.png"
                  alt="StartupAI Advantage Logo"
                  className="h-11 w-11 object-contain flex-shrink-0"
                />
                <span className="text-lg text-white leading-tight">
                  <span className="font-light tracking-wide">StartupAI</span><span className="font-extrabold tracking-tight"> Advantage</span>
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Unlock Your Business Intelligence.<br />Make Smarter Decisions, Faster.
            </p>
            <p className="text-xs text-white/50">Built for Indian Businesses ₹10–200 Cr</p>
          </div>

          {/* Intelligence Systems */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Intelligence Systems</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/intelligence-systems/revenue-growth" className="text-sm text-white/70 hover:text-white transition-colors">
                  Revenue Growth
                </Link>
              </li>
              <li>
                <Link href="/intelligence-systems/operational-excellence" className="text-sm text-white/70 hover:text-white transition-colors">
                  Operational Excellence
                </Link>
              </li>
              <li>
                <Link href="/intelligence-systems/market-competitive" className="text-sm text-white/70 hover:text-white transition-colors">
                  Market &amp; Competitive
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/manufacturing" className="text-sm text-white/70 hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/solutions/fmcg" className="text-sm text-white/70 hover:text-white transition-colors">
                  FMCG &amp; Consumer Brands
                </Link>
              </li>
              <li>
                <Link href="/solutions/retail" className="text-sm text-white/70 hover:text-white transition-colors">
                  Retail &amp; QSR
                </Link>
              </li>
              <li>
                <Link href="/solutions/b2b-services" className="text-sm text-white/70 hover:text-white transition-colors">
                  B2B Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-sm text-white/70 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-white/70 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-white/70 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm font-semibold transition-colors" style={{ color: '#F26522' }}>
                  ▶ Watch Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {currentYear} StartupAI Advantage. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm text-white/70 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
