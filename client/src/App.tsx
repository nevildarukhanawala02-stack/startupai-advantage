import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import RevenueGrowth from "./pages/RevenueGrowth";
import OperationalExcellence from "./pages/OperationalExcellence";
import MarketCompetitive from "./pages/MarketCompetitive";
import Manufacturing from "./pages/Manufacturing";
import FMCG from "./pages/FMCG";
import Retail from "./pages/Retail";
import B2BServices from "./pages/B2BServices";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import GetStarted from "./pages/GetStarted";
import AdminLeads from "./pages/AdminLeads";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Demo from "./pages/Demo";
import OperationsDemo from "./pages/OperationsDemo";
import OurStory from "./pages/OurStory";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path={"/"} component={Home} />
      
      {/* Intelligence Systems */}
      <Route path="/intelligence-systems/revenue-growth" component={RevenueGrowth} />
      <Route path="/intelligence-systems/operational-excellence" component={OperationalExcellence} />
      <Route path="/intelligence-systems/market-competitive" component={MarketCompetitive} />
      
      {/* Solutions */}
      <Route path="/solutions/manufacturing" component={Manufacturing} />
      <Route path="/solutions/fmcg" component={FMCG} />
      <Route path="/solutions/retail" component={Retail} />
      <Route path="/solutions/b2b-services" component={B2BServices} />
      
      {/* Other Pages */}
      <Route path="/pricing" component={Pricing} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resources" component={Resources} />
      <Route path="/get-started" component={GetStarted} />
      
      {/* Admin Pages */}
      <Route path="/admin/leads" component={AdminLeads} />
      
      {/* Blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* Demo Pages */}
      <Route path="/demo" component={Demo} />
      <Route path="/operations-demo" component={OperationsDemo} />
      
      {/* Legal Pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
