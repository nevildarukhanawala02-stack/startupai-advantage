import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 backdrop-blur-md" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f4c75 50%, #1e293b 75%, #0f172a 100%)' }}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/logo-light_a4146e64.png"
              alt="StartupAI Advantage Logo"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <span className="text-xl md:text-2xl text-white leading-tight">
              <span className="font-light tracking-wide">StartupAI</span><span className="font-extrabold tracking-tight"> Advantage</span>
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Intelligence Systems Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-secondary">
                  Intelligence Systems
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/30 shadow-2xl">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/intelligence-systems/revenue-growth">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">Revenue Growth Intelligence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Unlock hidden revenue opportunities and accelerate growth
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/intelligence-systems/operational-excellence">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">Operational Excellence Intelligence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Scale efficiently with data-driven operational insights
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/intelligence-systems/market-competitive">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">Market & Competitive Intelligence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Stay ahead with market trends and competitive insights
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-secondary">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/30 shadow-2xl">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/manufacturing">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">Manufacturing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Optimize production and supply chain intelligence
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/fmcg">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">FMCG & Consumer Brands</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Consumer insights and market intelligence
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/retail">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">Retail & QSR</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Customer behavior and sales intelligence
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/b2b-services">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">B2B Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Client intelligence and service optimization
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-secondary">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/30 shadow-2xl">
                  <ul className="grid w-[320px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/resources">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">CEO Intel Corporate Deck</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              View or download our full product presentation
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/resources">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/20 hover:border-l-4 hover:border-secondary focus:bg-secondary/20">
                            <div className="text-sm font-medium leading-none text-white">CEO Intel Alerts Guide</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              eBook: How to act on early-warning alerts
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/how-it-works" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            How It Works
          </Link>

          <Link href="/about" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            About
          </Link>

          <Link href="/our-story" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            Our Story
          </Link>

          <Link href="/contact" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            Contact
          </Link>

          <Link href="/pricing" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            Pricing
          </Link>

          <Link href="/blog" className="text-sm font-medium text-white hover:text-secondary transition-colors">
            Blog
          </Link>

          {/* Demos Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-sm font-bold px-4 py-2 rounded-full transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #F26522, #e05510)',
                    color: '#fff',
                    boxShadow: '0 4px 15px rgba(242,101,34,0.3)',
                  }}
                >
                  ▶ Demos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-orange-500/30 shadow-2xl">
                  <ul className="grid w-[320px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/demo">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-500/20 hover:border-l-4 hover:border-orange-400 focus:bg-orange-500/20">
                            <div className="flex items-center gap-2 text-sm font-medium leading-none text-white">📈 Revenue Intelligence Demo</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              See how AI uncovers hidden revenue opportunities
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/operations-demo">
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-cyan-500/20 hover:border-l-4 hover:border-cyan-400 focus:bg-cyan-500/20">
                            <div className="flex items-center gap-2 text-sm font-medium leading-none text-white">⚙️ Operations Intelligence Demo</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                              Discover how AI eliminates operational bottlenecks
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-secondary transition-colors flex-shrink-0 relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7 stroke-[2.5]" /> : <Menu className="h-7 w-7 stroke-[2.5]" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950 max-h-[80vh] overflow-y-auto">
          <nav className="container py-3 space-y-1">

            {/* Intelligence Systems - collapsible */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={() => toggleSection('intelligence')}
              >
                <span>Intelligence Systems</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'intelligence' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'intelligence' && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link href="/intelligence-systems/revenue-growth">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">📈</span> Revenue Growth Intelligence
                    </a>
                  </Link>
                  <Link href="/intelligence-systems/operational-excellence">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">⚙️</span> Operational Excellence
                    </a>
                  </Link>
                  <Link href="/intelligence-systems/market-competitive">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">📊</span> Market & Competitive
                    </a>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions - collapsible */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={() => toggleSection('solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'solutions' && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link href="/solutions/manufacturing">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">🏭</span> Manufacturing
                    </a>
                  </Link>
                  <Link href="/solutions/fmcg">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">🛒</span> FMCG & Consumer Brands
                    </a>
                  </Link>
                  <Link href="/solutions/retail">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">🏪</span> Retail & QSR
                    </a>
                  </Link>
                  <Link href="/solutions/b2b-services">
                    <a className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-cyan-400">🤝</span> B2B Services
                    </a>
                  </Link>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700/50 my-1" />

            {/* Direct links with larger touch targets */}
            <Link href="/how-it-works">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </Link>
            <Link href="/our-story">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </a>
            </Link>
            <Link href="/resources">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </Link>
            <Link href="/pricing">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
            </Link>
            <Link href="/blog">
              <a className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </a>
            </Link>

            {/* Divider */}
            <div className="border-t border-slate-700/50 my-1" />

            {/* Demos section */}
            <div className="px-4 pb-1 pt-1">
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">▶ Demos</div>
              <Link href="/demo">
                <a
                  className="flex items-center gap-3 px-3 py-3.5 text-sm font-medium text-white bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 rounded-lg transition-colors mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>📈</span>
                  <div>
                    <div className="font-semibold">Revenue Intelligence Demo</div>
                    <div className="text-xs text-gray-400">AI-powered revenue insights</div>
                  </div>
                </a>
              </Link>
              <Link href="/operations-demo">
                <a
                  className="flex items-center gap-3 px-3 py-3.5 text-sm font-medium text-white bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>⚙️</span>
                  <div>
                    <div className="font-semibold">Operations Intelligence Demo</div>
                    <div className="text-xs text-gray-400">AI-powered ops excellence</div>
                  </div>
                </a>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="px-4 pt-2 pb-4">
              <Link href="/get-started">
                <a
                  className="flex items-center justify-center w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all"
                  style={{ background: 'linear-gradient(135deg, #F26522, #e05510)', boxShadow: '0 4px 15px rgba(242,101,34,0.3)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started Today →
                </a>
              </Link>
            </div>

          </nav>
        </div>
      )}


    </header>
  );
}
