import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FOUNDER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/nevil-founder-professional_aff52c05.png";
const ROHINTON_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/rj_darukhanawala_professional_c33f27fc.png";
const RAJESH_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029826184/CgvvmT3FZx4wCtzFFPC889/rajesh_sharma_professional_467339ed.png";

const timeline = [
  { year: "1998", company: "WebWork India Pvt Ltd", desc: "Web development company founded at the dawn of India's internet era. VC-funded by Edelweiss Capital. Built and scaled digital presence for startups across India." },
  { year: "2000s", company: "India Port Dot Pvt Ltd", desc: "One of India's first platforms for online container tracking and shipping schedules. Brought digital intelligence to the logistics sector before anyone called it that." },
  { year: "2010s", company: "Spott One / SEO Expert India", desc: "20-person digital agency. 100+ clients. Large corporates, national consumer brands, global businesses. Over a decade of data-driven digital marketing — and a front-row seat to how Indian businesses make decisions without connected intelligence." },
  { year: "2024", company: "Sooper Dooper Kids", desc: "Children's clothing brand. One Purchased = One Donated. International funding from Sheikha Arwa Al Qassimi. National media coverage. Proof that purpose and profit share the same P&L." },
  { year: "2024–25", company: "StartupAI Advantage / CEO Intel", desc: "18 months of building AI systems. 100+ conversations with Indian CEOs. One problem that kept surfacing. One system built by someone who spent 26 years close enough to see it — and finally had the tools to solve it." },
];

const rohintonCredentials = [
  { label: "IAF Wing Commander", org: "Indian Air Force", desc: "Decorated career as a military aviator. Flew complex missions demanding precision, situational awareness, and operational discipline under pressure." },
  { label: "AIC Captain", org: "Air India", desc: "Commercial aviation at the highest level. Cross-fleet command, crew leadership, and passenger safety across international routes." },
  { label: "LFA Flight Instructor", org: "FlightSafety International", desc: "Transferred a career's worth of operational discipline into the next generation of aviators. Teaching precision, systems thinking, and composure." },
  { label: "SAA CFO & Operations", org: "StartupAI Advantage", desc: "Bringing military-grade rigour to financial oversight and operational delivery. Every CEO Intel engagement reflects his standard: no approximation, no shortcuts." },
];

const rohintonTraits = [
  { title: "Discipline", body: "Systems, standards, and the understanding that process is not bureaucracy — it is the difference between a good outcome and a great one. Every time." },
  { title: "Attention to Detail", body: "In aviation, what you miss matters more than what you catch. Rohinton brings the same discipline of exhaustive verification, pre-flight rigour, and zero-tolerance for approximation to every operational and financial decision he makes." },
  { title: "Calm Under Pressure", body: "A career in military aviation and commercial flying teaches you that composure is not the absence of pressure — it is the ability to think clearly when the pressure is highest. That quality is exactly what financial leadership and operations management demand." },
];

const rohintonValues = [
  { title: "Pre-Flight Rigour", body: "Every CEO Intel implementation follows a structured pre-delivery checklist. No client goes live until every data source is verified, every connection is tested, and every alert threshold is validated." },
  { title: "Zero Tolerance for Approximation", body: "In aviation, \"close enough\" is not a category. Rohinton applies the same standard to financial reporting, operational metrics, and delivery timelines." },
  { title: "Systems Thinking", body: "A cockpit is a complex system where every component affects every other. Rohinton brings the same systems perspective to how CEO Intel integrates across your CRM, ERP, accounting, and operations data." },
  { title: "Calm in the Crisis", body: "When a client's data surfaces an unexpected risk or a delivery timeline tightens, Rohinton is the steadying presence. Experienced leaders do not panic — they execute the checklist." },
];

const values = [
  { title: "The data should come to you.", body: "Not the other way around. A CEO shouldn't have to pull reports, chase analysts, or wait for the Monday review to find out what happened last Tuesday. Intelligence should arrive — pre-interpreted, pre-prioritised, ready to act on." },
  { title: "Proactive beats reactive. Every time.", body: "A system that tells you about a problem after it's happened is just an expensive newspaper. CEO Intel finds the problem 20–30 days before it costs you money. That's the only intelligence worth paying for." },
  { title: "Indian business, Indian language.", body: "Lakhs and crores. Tally and Zoho. Distributors and trade promotions. WhatsApp and ERPs. We speak the language of Indian mid-market business — not Silicon Valley abstractions built for a different world." },
  { title: "Founder accountability.", body: "Nevil meets every client. Every month. This is not software you buy and figure out alone. We are invested in your outcome — because your outcome is our story, our credibility, and the reason the next CEO calls us." },
];

const bioParagraphs = [
  { text: "I started my first company in 1998 — WebWork India — at the very beginning of the internet in India. We built websites for startups, secured venture funding from Edelweiss Capital, grew a team, and helped businesses find their first digital footing.", highlight: false },
  { text: "From there, I built India Port — one of India's first platforms for online container tracking and shipping schedules. Then Spott One and SEO Expert India — a digital marketing agency that grew to a 20-person team and worked with 100+ clients across India's largest corporates and consumer brands over more than a decade.", highlight: false },
  { text: "In between, I founded Sooper Dooper Kids — a children's clothing brand built on a simple belief: every purchase should give back. One purchased, one donated. The brand secured international funding and was featured across national media.", highlight: false },
  { text: "Five businesses. 26 years. Mumbai.", highlight: true },
  { text: "And across all of it — I worked closely with 100+ brands and their leadership teams. Running their digital marketing, their performance campaigns, their SEO strategies. And what I kept seeing — consistently, across every engagement — was the same structural problem.", highlight: false },
  { text: "Their data was everywhere. CRM here. ERP there. Agency reports in one folder. Sales numbers in another spreadsheet. WhatsApp threads carrying information that never made it into any system. And the CEOs I worked with — smart, experienced, ambitious people — were making critical decisions without a connected picture of their own business.", highlight: false },
  { text: "It wasn't a management failure. It was a visibility failure. And nobody was solving it for the Indian mid-market.", highlight: false },
  { text: "In 2024, I was recognised on World Entrepreneurs Day as one of India's visionary founders — featured in YourStory, The Daily Guardian, Times Now, and ET Now (Celebrating Iconic Brands & Leaders of the Year 2024). That same year, I began my AI journey deliberately — talking to CEOs, identifying what was missing, and building the system that answered it.", highlight: false },
];

const media = [
  { name: "ET Now", url: "https://www.etnownews.com/markets/celebrating-iconic-brands/leaders-of-the-year-2024-article-116431565", label: "Celebrating Iconic Brands & Leaders of the Year 2024" },
  { name: "Times Now", url: "https://www.timesnownews.com/business-economy/meet-12-noteworthy-indian-personalities-of-2024-article-115339220", label: "12 Noteworthy Indian Personalities 2024" },
  { name: "YourStory", url: "https://yourstory.com/2024/08/innovative-founders-aim-change-status-quo", label: "World Entrepreneurs Day 2024" },
  { name: "Indian Television", url: "https://indiantelevision.com/mam/sooper-dooper-kids-believes-in-quality-over-quantity-nevil-darukhanawala/", label: "Sooper Dooper Kids Feature" },
  { name: "The Daily Guardian", url: "https://thedailyguardian.com", label: "Featured Entrepreneur" },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#0D1B2A", color: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0D1B2A 0%, #16213E 55%, #0D1B2A 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "clamp(72px,10vw,104px) 0 clamp(56px,8vw,88px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-140px", right: "-60px", width: "560px", height: "560px", background: "radial-gradient(circle, rgba(11,165,220,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12" style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#0BA5DC", display: "block", marginBottom: "16px" }}>About the Founder</span>
          <h1 style={{ fontSize: "clamp(30px, 6vw, 62px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-1.5px", marginBottom: "26px", color: "#FFFFFF" }}>
            26 years of building businesses.<br />
            <span style={{ color: "#F26522" }}>One pain point I kept seeing.</span>
          </h1>
          <p style={{ fontSize: "clamp(15px,2.5vw,18px)", fontWeight: 300, color: "#C5D0DC", maxWidth: "680px", lineHeight: 1.75 }}>
            CEO Intel wasn't built because I ran a ₹100 crore company. It was built because across 26 years and 100+ client engagements — I kept seeing the same problem in every boardroom, every business review, every campaign debrief. And nobody had solved it.
          </p>
        </div>
      </section>

      {/* FOUNDER BIO — NEVIL */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Photo + name card */}
            <div className="w-full lg:w-auto lg:max-w-[340px] flex-shrink-0">
              <img
                src={FOUNDER_PHOTO}
                alt="Nevil Darukhanawala — Founder, CEO Intel"
                className="w-full rounded-2xl block"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
              />
              <div style={{ marginTop: "18px", padding: "18px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
                <p style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>Nevil Darukhanawala</p>
                <p style={{ fontSize: "13px", color: "#0BA5DC", margin: "0 0 10px", fontWeight: 500 }}>Founder & CEO — StartupAI Advantage</p>
                <p style={{ fontSize: "12px", color: "#8896A5", margin: "0 0 14px", lineHeight: 1.6 }}>Mumbai · 26 years building businesses · 100+ client engagements</p>
                <a
                  href="https://in.linkedin.com/in/nevildarukhanawala"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 14px",
                    background: "rgba(10, 102, 194, 0.15)",
                    border: "1px solid rgba(10, 102, 194, 0.4)",
                    borderRadius: "8px",
                    color: "#5BA3D9",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(10, 102, 194, 0.28)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(10, 102, 194, 0.7)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(10, 102, 194, 0.15)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(10, 102, 194, 0.4)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1 min-w-0">
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#0BA5DC", display: "block", marginBottom: "12px" }}>About the Founder</span>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "28px", color: "#FFFFFF" }}>Nevil Darukhanawala</h2>

              {bioParagraphs.map((para, i) => (
                <p key={i} style={{ fontSize: para.highlight ? "clamp(17px,2.5vw,20px)" : "15px", fontWeight: para.highlight ? 700 : 300, color: para.highlight ? "#FFFFFF" : "#C5D0DC", lineHeight: 1.8, marginBottom: "18px", letterSpacing: para.highlight ? "-0.3px" : "normal" }}>
                  {para.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA STRIP */}
      <section style={{ padding: "28px 0", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "2.5px", textTransform: "uppercase", color: "#8896A5", flexShrink: 0 }}>As featured in</span>
            <div className="flex flex-wrap gap-4 items-center">
              {media.map((pub) => (
                <a
                  key={pub.name}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={pub.label}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#C5D0DC",
                    letterSpacing: "0.3px",
                    opacity: 0.85,
                    textDecoration: "none",
                    padding: "6px 14px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(11,165,220,0.5)"; (e.currentTarget as HTMLAnchorElement).style.color = "#0BA5DC"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLAnchorElement).style.color = "#C5D0DC"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                >
                  {pub.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "16px" }}>The Journey Behind CEO Intel</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, color: "#FFFFFF" }}>
              Five businesses. 26 years.<br /><span style={{ color: "#F26522" }}>One pattern.</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-0" style={{ alignItems: "stretch" }}>
                {/* Year label */}
                <div className="hidden sm:block" style={{ width: "80px", paddingTop: "28px", paddingRight: "20px", textAlign: "right", flexShrink: 0 }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0BA5DC", letterSpacing: "0.5px" }}>{item.year}</span>
                </div>
                {/* Dot + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F26522", flexShrink: 0, marginTop: "32px", zIndex: 1 }} />
                  {i < timeline.length - 1 && <div style={{ width: "2px", flex: 1, background: "rgba(242,101,34,0.25)", marginTop: "4px" }} />}
                </div>
                {/* Card */}
                <div style={{ flex: 1, paddingLeft: "20px", paddingBottom: i < timeline.length - 1 ? "16px" : "0" }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #F26522", borderRadius: "12px", padding: "20px 22px" }}>
                    {/* Year shown on mobile inside card */}
                    <span className="block sm:hidden" style={{ fontSize: "11px", fontWeight: 700, color: "#0BA5DC", letterSpacing: "0.5px", marginBottom: "6px" }}>{item.year}</span>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px", letterSpacing: "-0.2px" }}>{item.company}</h4>
                    <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTABLE CLIENTS */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "linear-gradient(180deg, #0D1B2A 0%, #111827 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "14px" }}>26 Years · 100+ Engagements</span>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.15, color: "#FFFFFF", marginBottom: "14px" }}>Brands We've Worked With</h2>
            <p style={{ fontSize: "15px", color: "#8896A5", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75, fontWeight: 300 }}>From India's largest consumer brands to international businesses — a track record built across industries, geographies, and decades.</p>
          </div>

          {/* India Brands */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#F26522", marginBottom: "16px" }}>India</p>
            <div className="flex flex-wrap gap-3">
              {[
                "PharmEasy", "Pretty Secrets", "Johnson & Johnson", "Wadhwa Builders",
                "Parinee Builders", "Nirmal Lifestyle", "HDFC Red", "K11 Fitness",
                "Talwalkars", "Steinmetz Diamonds", "Sooper Dooper Kids"
              ].map((brand) => (
                <span key={brand} style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#C5D0DC", letterSpacing: "0.2px", whiteSpace: "nowrap" }}>{brand}</span>
              ))}
            </div>
          </div>

          {/* International Brands */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#0BA5DC", marginBottom: "16px" }}>International</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Royal Sun Alliance (UAE)", "New York Diamond Traders (USA)",
                "JustMensRings (USA)", "London Theatre Direct (UK)"
              ].map((brand) => (
                <span key={brand} style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", background: "rgba(11,165,220,0.05)", border: "1px solid rgba(11,165,220,0.15)", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#C5D0DC", letterSpacing: "0.2px", whiteSpace: "nowrap" }}>{brand}</span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontStyle: "italic", textAlign: "center" }}>…and many more across manufacturing, FMCG, retail, and B2B services.</p>
        </div>
      </section>

      {/* ── ROHINTON DARUKHANAWALA SECTION ── */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "linear-gradient(180deg, #0D1B2A 0%, #0a1525 100%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section eyebrow */}
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#0BA5DC", display: "block", marginBottom: "40px" }}>CFO &amp; Operations</span>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Photo + name card — same treatment as Nevil */}
            <div className="w-full lg:w-auto lg:max-w-[340px] flex-shrink-0">
              <img
                src={ROHINTON_PHOTO}
                alt="Wing Commander Rohinton J. Darukhanawala — CFO & Operations, StartupAI Advantage"
                className="w-full rounded-2xl block"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
              />
              <div style={{ marginTop: "18px", padding: "18px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
                <p style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>Wing Commander Rohinton J. Darukhanawala (Retd.)</p>
                <p style={{ fontSize: "13px", color: "#F26522", margin: "0 0 10px", fontWeight: 500 }}>CFO &amp; Operations — StartupAI Advantage</p>
                <p style={{ fontSize: "12px", color: "#8896A5", margin: 0, lineHeight: 1.6 }}>Indian Air Force Veteran · Air India Captain · FlightSafety International</p>
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1 min-w-0">
              <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "8px", color: "#FFFFFF" }}>Wing Commander Rohinton J. Darukhanawala (Retd.)</h2>
              <p style={{ fontSize: "14px", color: "#F26522", fontWeight: 500, marginBottom: "28px", letterSpacing: "0.2px" }}>
                Indian Air Force Veteran · Air India Captain · FlightSafety International · CFO &amp; Operations, StartupAI Advantage
              </p>

              {/* Opening line */}
              <p style={{ fontSize: "clamp(17px,2.5vw,20px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.8, marginBottom: "18px", letterSpacing: "-0.3px" }}>
                Some careers are built. Others are forged.
              </p>

              <p style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.8, marginBottom: "18px" }}>
                Rohinton Darukhanawala spent decades at altitudes where the margin for error is measured in seconds and the cost of inattention is absolute. As a Wing Commander in the Indian Air Force, he flew missions that demanded the kind of precision, composure, and situational awareness that no classroom can teach. It is only earned — through repetition, discipline, and the understanding that every decision has consequences.
              </p>

              <p style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.8, marginBottom: "18px" }}>
                After his distinguished service, he took to the skies commercially — as a Captain with Air India, operating at the intersection of complex systems, crew coordination, and passenger responsibility. And then, as an instructor at the FlightSafety International, he spent years distilling a career's worth of hard-won operational discipline into the next generation of aviators.
              </p>

              <p style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.8, marginBottom: "28px" }}>
                He joins StartupAI Advantage not as a technologist — but as something rarer. A leader whose entire career has been defined by three things that most businesses desperately need and rarely find together:
              </p>

              {/* Three trait cards */}
              <div className="flex flex-col gap-4 mb-8">
                {rohintonTraits.map((trait) => (
                  <div key={trait.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #F26522", borderRadius: "12px", padding: "18px 20px" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px", letterSpacing: "-0.2px" }}>{trait.title}</h4>
                    <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{trait.body}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.8, marginBottom: "28px" }}>
                At StartupAI Advantage, Rohinton oversees the financial integrity and operational rigour that every client engagement depends on. The same standards that made him a Wing Commander — the checklists, the pre-flight planning, the disciplined review — now ensure that every CEO Intel implementation is delivered with the precision our clients deserve.
              </p>

              {/* Pull quote */}
              <div style={{ margin: "0 0 8px", padding: "clamp(20px,4vw,36px) clamp(18px,4vw,40px)", background: "rgba(11,165,220,0.06)", border: "1px solid rgba(11,165,220,0.22)", borderRadius: "14px" }}>
                <p style={{ fontSize: "clamp(15px,2.5vw,20px)", fontStyle: "italic", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.6, margin: 0, letterSpacing: "-0.2px" }}>
                  "In the cockpit, there is no room for approximation. The same standard applies here."
                </p>
              </div>
            </div>
          </div>

          {/* Credentials Timeline */}
          <div style={{ marginTop: "clamp(48px,7vw,72px)" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "16px" }}>Career Credentials</span>
            <h3 style={{ fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, color: "#FFFFFF", marginBottom: "36px" }}>
              A career forged at altitude.
            </h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {rohintonCredentials.map((item, i) => (
                <div key={item.label} className="flex gap-0" style={{ alignItems: "stretch" }}>
                  {/* Label */}
                  <div className="hidden sm:block" style={{ width: "160px", paddingTop: "28px", paddingRight: "20px", textAlign: "right", flexShrink: 0 }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#F26522", letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.label}</span>
                  </div>
                  {/* Dot + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F26522", flexShrink: 0, marginTop: "32px", zIndex: 1 }} />
                    {i < rohintonCredentials.length - 1 && <div style={{ width: "2px", flex: 1, background: "rgba(242,101,34,0.25)", marginTop: "4px" }} />}
                  </div>
                  {/* Card */}
                  <div style={{ flex: 1, paddingLeft: "20px", paddingBottom: i < rohintonCredentials.length - 1 ? "16px" : "0" }}>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #F26522", borderRadius: "12px", padding: "20px 22px" }}>
                      <span className="block sm:hidden" style={{ fontSize: "11px", fontWeight: 700, color: "#F26522", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</span>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px", letterSpacing: "-0.2px" }}>{item.org}</h4>
                      <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Cards 2×2 */}
          <div style={{ marginTop: "clamp(48px,7vw,72px)" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "16px" }}>The Standard He Brings</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rohintonValues.map((v) => (
                <div key={v.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderTop: "3px solid #0BA5DC", borderRadius: "12px", padding: "28px 24px" }}>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3, letterSpacing: "-0.2px" }}>{v.title}</h4>
                  <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* ── END ROHINTON SECTION ── */}

      {/* ── RAJESH KAUSHAL SECTION ── */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "linear-gradient(180deg, #0D1B2A 0%, #111827 100%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section label */}
          <div style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "12px" }}>Technology Partner</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, color: "#FFFFFF" }}>
              The engineer who makes it <span style={{ color: "#F26522" }}>work.</span>
            </h2>
          </div>

          {/* Two-column: photo + bio */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Photo + name card */}
            <div className="w-full lg:w-auto lg:max-w-[340px] flex-shrink-0">
              <img
                src={RAJESH_PHOTO}
                alt="Rajesh Kaushal — Technology Partner, StartupAI Advantage"
                className="w-full rounded-2xl block"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
              />
              <div style={{ marginTop: "18px", padding: "18px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
                <p style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>Rajesh Kaushal</p>
                <p style={{ fontSize: "13px", color: "#0BA5DC", margin: "0 0 10px", fontWeight: 500 }}>Technology Partner & Enterprise Systems Architect</p>
                <p style={{ fontSize: "12px", color: "#8896A5", margin: 0, lineHeight: 1.6 }}>30+ years · 100+ B2B companies · Enterprise digital solutions</p>
              </div>
            </div>

            {/* Bio content */}
            <div className="flex-1 min-w-0">

              {/* Opening */}
              <p style={{ fontSize: "clamp(17px,2.5vw,22px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, marginBottom: "28px", letterSpacing: "-0.3px" }}>
                30+ years building enterprise digital solutions and leading technology teams across diverse industries.
              </p>

              {/* Bio paragraphs */}
              {[
                "Rajesh brings three decades of hands-on enterprise technology experience to CEO Intel. He has spent his career designing and delivering custom digital solutions for B2B companies across manufacturing, retail, and services — the exact sectors where CEO Intel operates.",
                "His deep expertise in CRM, ERP, and enterprise system integration means he understands the real-world complexity of connecting disparate business data. When CEO Intel integrates with a client's existing systems, it is Rajesh's architecture that ensures the connection is clean, reliable, and built to last.",
                "This is not theoretical knowledge. Rajesh has led successful digital transformation projects for over 100 B2B companies — navigating legacy systems, inconsistent data structures, and the operational realities that make enterprise integration genuinely hard. That experience is what makes CEO Intel's implementation process different from every other AI platform that assumes clean data and cooperative systems.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.85, marginBottom: "22px" }}>{para}</p>
              ))}

              {/* Achievement stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ margin: "36px 0" }}>
                {[
                  { stat: "30+", label: "Years Experience" },
                  { stat: "100+", label: "B2B Companies" },
                  { stat: "20+", label: "Years Custom Dev" },
                  { stat: "3", label: "Sectors: Mfg, Retail, Services" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderTop: "3px solid #F26522", borderRadius: "12px", padding: "20px 16px", textAlign: "center" }}>
                    <p style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, color: "#F26522", margin: "0 0 6px", letterSpacing: "-1px" }}>{item.stat}</p>
                    <p style={{ fontSize: "11px", color: "#8896A5", margin: 0, fontWeight: 500, lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Proof point pull quote */}
              <div style={{ margin: "36px 0", padding: "clamp(20px,3vw,32px) clamp(18px,4vw,40px)", background: "rgba(11,165,220,0.06)", border: "1px solid rgba(11,165,220,0.20)", borderLeft: "4px solid #0BA5DC", borderRadius: "12px" }}>
                <p style={{ fontSize: "clamp(14px,2vw,16px)", fontStyle: "italic", fontWeight: 400, color: "#C5D0DC", lineHeight: 1.75, margin: 0 }}>
                  "Expertise in connecting disparate systems and extracting intelligence from complex data environments. This operational experience ensures our intelligence systems integrate seamlessly with real-world business operations."
                </p>
              </div>

              {/* Credentials timeline */}
              <div style={{ marginTop: "clamp(36px,5vw,56px)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "20px" }}>Career & Credentials</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "Enterprise Solutions Architect", org: "30+ years", desc: "End-to-end custom development for B2B companies across manufacturing, retail, and services. Delivered 20+ years of complex, production-grade digital systems." },
                    { label: "CRM & ERP Specialist", org: "Enterprise Integration", desc: "Deep expertise in CRM, ERP, and enterprise system integration. Connects disparate data environments and extracts actionable intelligence from complex operational data." },
                    { label: "Digital Transformation Lead", org: "100+ B2B Companies", desc: "Led successful digital transformation projects across India's manufacturing, retail, and services sectors. Proven track record navigating legacy systems and inconsistent data structures." },
                    { label: "Technology Partner", org: "StartupAI Advantage", desc: "Leads all technical architecture and enterprise integration for CEO Intel. Ensures every client implementation connects cleanly with existing CRM, ERP, accounting, and operations systems." },
                  ].map((cred) => (
                    <div key={cred.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #0BA5DC", borderRadius: "12px", padding: "18px 20px" }}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3" style={{ marginBottom: "8px" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>{cred.label}</span>
                        <span style={{ fontSize: "11px", fontWeight: 600, color: "#0BA5DC", background: "rgba(11,165,220,0.12)", padding: "2px 10px", borderRadius: "100px", whiteSpace: "nowrap", alignSelf: "flex-start" }}>{cred.org}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{cred.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable clients — categorised */}
              <div style={{ marginTop: "clamp(36px,5vw,48px)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "20px" }}>Notable Clients</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { category: "Railway", color: "#F26522", clients: ["Konkan Railway Corporation Ltd."] },
                    { category: "Ship Builders", color: "#F26522", clients: ["Managing Docks"] },
                    { category: "Corporate", color: "#F26522", clients: ["Finolex Group", "Capco Water Solutions"] },
                    { category: "MS Think Tank", color: "#F26522", clients: ["MEDC"] },
                    { category: "Apex Body", color: "#F26522", clients: ["IOPEPC", "APEX Council"] },
                  ].map((group) => (
                    <div key={group.category}>
                      <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: group.color, marginBottom: "10px", margin: "0 0 10px" }}>{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.clients.map((client) => (
                          <span key={client} style={{ display: "inline-flex", alignItems: "center", padding: "7px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#C5D0DC", letterSpacing: "0.2px", whiteSpace: "nowrap" }}>{client}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontStyle: "italic", marginTop: "16px" }}>…and 100+ B2B companies across India</p>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* ── END RAJESH KAUSHAL SECTION ── */}

      {/* WHY THIS, WHY NOW */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "linear-gradient(180deg, #16213E 0%, #0D1B2A 100%)" }}>
        <div className="w-full max-w-[860px] mx-auto px-4 sm:px-6 lg:px-12">
          <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "16px" }}>The Problem I Couldn't Stop Thinking About</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "36px", color: "#FFFFFF" }}>
            One problem. Every boardroom.<br /><span style={{ color: "#F26522" }}>26 years.</span>
          </h2>
          {[
            "Across 100+ client engagements over 26 years, I sat across from some of India's sharpest business leaders. And the pattern was always the same.",
            "Brilliant people. Real businesses. Significant revenue. And critical decisions being made on fragmented, delayed, disconnected data — because nobody had the time, the tools, or the architecture to bring it all together before the meeting started.",
            "When I began my AI journey in 2024, I went back to that problem deliberately. I spent months talking to CEOs across manufacturing, FMCG, retail, and B2B services — asking one question: what is the one thing missing that would make you a more confident, more informed leader?",
            "The answer was always the same. Not more data. Not more reports. Connected intelligence — delivered before the question was even asked.",
          ].map((para, i) => (
            <p key={i} style={{ fontSize: "15px", fontWeight: 300, color: "#C5D0DC", lineHeight: 1.85, marginBottom: "22px" }}>{para}</p>
          ))}
          <div style={{ margin: "40px 0", padding: "clamp(24px,4vw,40px) clamp(20px,5vw,48px)", background: "rgba(242,101,34,0.06)", border: "1px solid rgba(242,101,34,0.20)", borderRadius: "16px", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(16px,3vw,24px)", fontStyle: "italic", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.6, margin: 0, letterSpacing: "-0.3px" }}>
              "It wasn't a management failure. It was a visibility failure. And nobody was solving it for the Indian mid-market."
            </p>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#C5D0DC", lineHeight: 1.85 }}>That's what CEO Intel is built to deliver.</p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#0BA5DC", display: "block", marginBottom: "16px" }}>Our Values</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, color: "#FFFFFF" }}>What guides every decision we make</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderTop: "3px solid #F26522", borderRadius: "12px", padding: "28px 24px" }}>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3, letterSpacing: "-0.2px" }}>{v.title}</h4>
                <p style={{ fontSize: "13px", color: "#8896A5", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ background: "linear-gradient(135deg, rgba(242,101,34,0.10) 0%, rgba(11,165,220,0.06) 100%)", border: "1px solid rgba(242,101,34,0.25)", borderRadius: "20px", padding: "clamp(36px,6vw,64px) clamp(24px,5vw,72px)", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(24px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: "18px", color: "#FFFFFF" }}>
              Walk into every room <span style={{ color: "#F26522" }}>knowing.</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,2.5vw,17px)", color: "#8896A5", maxWidth: "540px", margin: "0 auto 36px", lineHeight: 1.75, fontWeight: 300 }}>
              Book a 45-minute discovery call. We'll show you exactly what CEO Intel would surface in your business — using your data, your questions, your industry.
            </p>
            <Link href="/get-started">
              <a style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#F26522", color: "#FFFFFF", fontSize: "15px", fontWeight: 700, padding: "16px 36px", borderRadius: "100px", textDecoration: "none", letterSpacing: "0.3px" }}>
                Book a Discovery Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </Link>
            <div style={{ marginTop: "18px", fontSize: "13px", color: "#8896A5", fontWeight: 300 }}>
              No commitment required <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.15)" }}>·</span> No generic pitch <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.15)" }}>·</span> Just intelligence
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
