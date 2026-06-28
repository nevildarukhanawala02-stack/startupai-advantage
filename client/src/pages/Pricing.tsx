import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dataSources = [
  { color: '#0BA5DC', bg: 'rgba(11,165,220,0.12)', name: 'Accounting System', desc: 'Tally, Busy, or equivalent — revenue by customer, payment cycles, outstanding receivables, margin by product line, P&L movement signals' },
  { color: '#F26522', bg: 'rgba(242,101,34,0.12)', name: 'CRM', desc: 'Zoho, Salesforce, or equivalent — pipeline health, customer engagement frequency, deal velocity, last-contact gaps, churn risk signals' },
  { color: '#0BA5DC', bg: 'rgba(11,165,220,0.12)', name: 'ERP / Warehousing', desc: 'SAP, Oracle, Ramco, or custom — inventory levels, reorder triggers, supplier performance, lead times, WIP status, order fulfilment velocity' },
  { color: '#F26522', bg: 'rgba(242,101,34,0.12)', name: 'Ecommerce Platform', desc: 'Shopify, WooCommerce, Amazon, or custom — order velocity, return rates, category performance, demand spikes, customer acquisition signals' },
  { color: '#0BA5DC', bg: 'rgba(11,165,220,0.12)', name: 'Email', desc: 'Gmail or Outlook — last contact dates by customer, response pattern gaps, relationship health indicators, dormant account detection' },
  { color: '#F26522', bg: 'rgba(242,101,34,0.12)', name: 'Google Sheets / Excel', desc: 'Custom KPIs your team manually tracks, sales targets vs actuals, distributor scorecards, any structured data your business runs outside of core systems' },
  { color: '#0BA5DC', bg: 'rgba(11,165,220,0.12)', name: 'WhatsApp Business', desc: 'Customer complaint patterns, distributor communication health, field sales signals, complaint-to-churn early warnings — from the channel where Indian business actually happens' },
];

const syncRows = [
  { source: 'Accounting sync', detail: '₹ movements, receivables aging, margin shifts, payment delays', freq: '4× daily' },
  { source: 'CRM sync', detail: 'Pipeline changes, customer activity, contact gap detection', freq: 'Every 2 hrs' },
  { source: 'ERP / inventory sync', detail: 'Stock levels, reorder triggers, supplier delivery performance', freq: '2× daily' },
  { source: 'Ecommerce sync', detail: 'Order velocity, returns, demand spikes by SKU and geography', freq: 'Hourly' },
  { source: 'Email analysis', detail: 'Last-contact scanning, response gap detection, dormant accounts', freq: 'Every 3 hrs' },
  { source: 'WhatsApp digest', detail: 'Complaint pattern recognition, distributor communication health', freq: 'Daily digest' },
];

const aiLayers = [
  { name: 'Pattern recognition', desc: 'Across all 7 data sources simultaneously — finding what no single system can see' },
  { name: 'Anomaly detection', desc: "Flagging what's changed, what's drifting, what's quietly building — before it costs you" },
  { name: 'Opportunity mapping', desc: 'Revenue hiding in the gaps between your CRM and your ERP — surfaced automatically' },
  { name: 'Threat scoring', desc: 'Risks ranked by proximity and financial impact — so you act on what matters first' },
  { name: 'Natural language answers', desc: 'Raw data converted into CEO-readable intelligence — no analyst, no spreadsheet, no waiting' },
];

const deliveryCards = [
  {
    time: 'Every morning', timeColor: '#0BA5DC', featured: false,
    title: 'Overnight intelligence briefing',
    items: ['What changed across your business since yesterday', 'What needs your attention today vs what can wait', 'Any risk that crossed a threshold overnight', 'Any revenue or growth signal that appeared in the data'],
  },
  {
    time: 'On demand — any time', timeColor: '#F26522', featured: true,
    title: 'Ask any question. Get the answer in 15 seconds.',
    items: ["Ask across all 7 data sources in plain language", 'Live charts generated on request', '"Which customers haven\'t been contacted in 30+ days with declining order value?" — answered instantly', 'No analyst. No 3-day turnaround. No spreadsheet.'],
  },
  {
    time: 'Proactive alerts', timeColor: '#0BA5DC', featured: false,
    title: 'The system that warns you first',
    items: ['Customer churn risk — before revenue drops', 'Stockout warning — days before it becomes a crisis', 'Receivables aging flag — before it hits your cash flow', 'Demand spike signal — before your competitors see it', 'Supplier stress signal — before they call you'],
  },
];

const monthlyCards = [
  {
    time: 'Monthly — with Nevil', timeColor: '#0BA5DC', alt: false,
    title: 'Two CEO intelligence reviews',
    items: ['Review what the intelligence surfaced and what it means for the month ahead', 'New KPIs, alerts, and dashboards added as your business evolves', 'Your system gets smarter every month — not static'],
  },
  {
    time: 'Always included', timeColor: '#0BA5DC', alt: true,
    title: 'Ongoing system evolution',
    items: ['New data source connections as your business grows', 'Custom alert frameworks for your business model', 'Drill-down dashboards built for your KPIs — not generic metrics', 'Intelligence layer deepens with every month of data'],
  },
];

const securityItems = [
  { icon: '🔐', title: 'Your Data Stays Yours', desc: "We never store, sell, or share your business data with third parties. Your CRM, ERP, and financial data is used exclusively to generate your intelligence — and no one else's." },
  { icon: '🔒', title: 'Encrypted in Transit & at Rest', desc: 'All data connections use TLS 1.3 encryption. Data processed and stored by CEO Intel is encrypted at rest using AES-256 — the same standard used by global banks.' },
  { icon: '🏢', title: 'Isolated Client Environments', desc: "Every CEO Intel deployment is a completely isolated environment. Your data is never co-mingled with another client's data — architecturally separated at every layer." },
  { icon: '📋', title: 'Formal Data Processing Agreement', desc: 'Every engagement begins with a signed Data Processing Agreement (DPA) that legally defines what data we access, how it is used, and your rights as the data owner.' },
  { icon: '🔑', title: 'Minimal Access Principle', desc: 'We request only the specific read permissions required to answer your intelligence questions. We do not request write access to any of your source systems.' },
  { icon: '🗑️', title: 'Right to Deletion', desc: 'When your engagement ends, all copies of your data held within the CEO Intel system are permanently deleted within 30 days — with written confirmation provided.' },
];

const pills = ['Go live in 20–30 days', '7 data sources connected', '340+ daily intelligence processes', '3-month minimum commitment'];

export default function Pricing() {
  return (
    <div className="min-h-screen" style={{ background: '#0D1B2A', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #16213E 55%, #0D1B2A 100%)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(72px,10vw,104px) 0 clamp(56px,8vw,88px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-140px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(11,165,220,0.06) 0%, transparent 70%)', pointerEvents: 'none', overflow: 'hidden' }} />
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>CEO Intel — Pricing</span>
          <h1 style={{ fontSize: 'clamp(32px, 7vw, 62px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-1.5px', marginBottom: '26px', color: '#FFFFFF' }}>
            One system.<br />Everything <span style={{ color: '#F26522' }}>connected.</span><br />One price.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', fontWeight: 300, color: '#C5D0DC', maxWidth: '640px', lineHeight: 1.75, marginBottom: '44px' }}>
            No dashboards nobody uses. No IT implementation that takes six months. CEO Intel goes live in 20–30 days — and starts telling you things your business already knows, but you've never been able to hear.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {pills.map((pill) => (
              <span key={pill} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '100px', padding: '8px 16px', fontSize: '12px', color: '#C5D0DC', fontWeight: 400 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F26522', flexShrink: 0, display: 'inline-block' }} />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRICING CARDS ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>Investment</span>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '14px', color: '#FFFFFF' }}>
              Straightforward.<br />Two numbers. That's it.
            </h2>
            <p style={{ fontSize: '15px', color: '#8896A5', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300 }}>
              No tier confusion. No feature gating. Every client gets the complete CEO Intel system — built around their specific data, their specific business, their specific questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Setup Card */}
            <div style={{ borderRadius: '16px', padding: 'clamp(24px,4vw,40px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '22px' }}>Intelligence Architecture Fee — One Time</span>
              <span style={{ fontSize: 'clamp(38px,8vw,54px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', display: 'block', marginBottom: '8px', color: '#FFFFFF' }}>₹1,50,000</span>
              <span style={{ fontSize: '13px', color: '#8896A5', fontWeight: 300, display: 'block', marginBottom: '24px' }}>paid in two equal parts</span>
              <div style={{ fontSize: '14px', color: '#8896A5', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '22px', fontWeight: 300 }}>
                This covers building your custom intelligence layer — mapping your specific data sources, your KPIs, your business language — onto the CEO Intel platform.
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[{ amount: '₹75,000', label: 'On engagement' }, { amount: '₹75,000', label: 'At go-live' }].map((p) => (
                    <div key={p.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', textAlign: 'center' }}>
                      <span style={{ fontSize: '19px', fontWeight: 700, color: '#FFFFFF', display: 'block' }}>{p.amount}</span>
                      <span style={{ fontSize: '11px', color: '#8896A5', display: 'block', marginTop: '4px' }}>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Retainer Card */}
            <div style={{ borderRadius: '16px', padding: 'clamp(24px,4vw,40px)', background: 'linear-gradient(135deg, rgba(242,101,34,0.10) 0%, rgba(242,101,34,0.03) 100%)', border: '1px solid rgba(242,101,34,0.25)' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#F26522', display: 'block', marginBottom: '22px' }}>Monthly Intelligence Retainer — Ongoing</span>
              <span style={{ fontSize: 'clamp(38px,8vw,54px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', display: 'block', marginBottom: '8px', color: '#F26522' }}>₹1,25,000</span>
              <span style={{ fontSize: '13px', color: '#8896A5', fontWeight: 300, display: 'block', marginBottom: '24px' }}>per month · minimum 3 months</span>
              <div style={{ fontSize: '14px', color: '#8896A5', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '22px', fontWeight: 300 }}>
                Not a subscription to software. A commitment to your intelligence — maintained, evolved, and deepened every month. Includes two CEO review sessions, ongoing system enhancements, and everything listed below.
              </div>
            </div>
          </div>

          {/* Commitment Bar */}
          <div style={{ background: 'rgba(11,165,220,0.08)', border: '1px solid rgba(11,165,220,0.20)', borderRadius: '12px', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '38px', height: '38px', minWidth: '38px', background: 'rgba(11,165,220,0.15)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#0BA5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <p style={{ fontSize: '14px', color: '#C5D0DC', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>3-month minimum commitment.</strong> CEO Intel needs time to learn your business patterns and deliver compounding value — not just week-one novelty. Most clients surface their first significant insight within the first 14 days.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* ── SECTION 3: DATA SOURCES ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0', background: 'rgba(255,255,255,0.018)' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>What We Connect</span>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '14px', color: '#FFFFFF' }}>
              Your data is already there.<br />Nobody has connected it.
            </h2>
            <p style={{ fontSize: '15px', color: '#8896A5', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300 }}>
              CEO Intel connects to every system your business already runs — no migration, no new software, no disruption to how your team works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {dataSources.map((src) => (
              <div key={src.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px 20px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: src.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={src.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="8"/></svg>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>{src.name}</div>
                <div style={{ fontSize: '13px', color: '#8896A5', lineHeight: 1.65, fontWeight: 300 }}>{src.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', fontWeight: 700, color: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', fontSize: 'clamp(16px,3vw,21px)', letterSpacing: '-0.3px' }}>
            7 systems. One intelligence layer. <span style={{ color: '#F26522' }}>All connected.</span>
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* ── SECTION 4: INTELLIGENCE ENGINE ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>The Intelligence Engine</span>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '14px', color: '#FFFFFF' }}>
              What CEO Intel does<br />while you lead.
            </h2>
            <p style={{ fontSize: '15px', color: '#8896A5', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300 }}>Every day. Invisibly. Automatically. Whether you ask a question or not.</p>
          </div>

          {/* 340+ block */}
          <div style={{ background: 'linear-gradient(135deg, rgba(11,165,220,0.08) 0%, rgba(11,165,220,0.02) 100%)', border: '1px solid rgba(11,165,220,0.20)', borderRadius: '16px', padding: 'clamp(24px,4vw,36px)', marginBottom: '28px' }}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 'clamp(42px,8vw,58px)', fontWeight: 800, color: '#0BA5DC', lineHeight: 1, display: 'block', letterSpacing: '-2px' }}>340+</span>
                <span style={{ fontSize: '11px', color: '#8896A5', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginTop: '8px' }}>Daily processes</span>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', height: '80px', background: 'rgba(11,165,220,0.18)', flexShrink: 0 }} />
              <div style={{ fontSize: '15px', color: '#C5D0DC', lineHeight: 1.8, fontWeight: 300 }}>
                Every 24 hours, CEO Intel runs <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>340+ automated intelligence processes</strong> across your connected data — syncing, scanning, pattern-matching, and alerting — so that when you open your phone, walk into a meeting, or type a question, the answer is already there.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {syncRows.map((row) => (
              <div key={row.source} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px 18px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F26522', flexShrink: 0, marginTop: '5px' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '3px' }}>{row.source}</div>
                  <div style={{ fontSize: '12px', color: '#8896A5', fontWeight: 300, lineHeight: 1.5 }}>{row.detail}</div>
                </div>
                <div style={{ flexShrink: 0, fontSize: '11px', color: '#0BA5DC', background: 'rgba(11,165,220,0.10)', border: '1px solid rgba(11,165,220,0.18)', borderRadius: '100px', padding: '4px 10px', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>{row.freq}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(242,101,34,0.07) 0%, rgba(242,101,34,0.02) 100%)', border: '1px solid rgba(242,101,34,0.18)', borderRadius: '14px', padding: 'clamp(24px,4vw,34px)' }}>
            <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px', letterSpacing: '-0.3px' }}>The AI intelligence layer</h3>
            <div style={{ fontSize: '13px', color: '#8896A5', fontWeight: 300, marginBottom: '20px' }}>Running continuously across all 7 connected data sources — not only when you ask</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {aiLayers.map((layer) => (
                <div key={layer.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '13px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F26522', flexShrink: 0, marginTop: '4px' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '13px', marginBottom: '2px' }}>{layer.name}</div>
                    <div style={{ fontSize: '13px', color: '#8896A5', fontWeight: 300 }}>{layer.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', fontSize: '13px', color: '#8896A5', fontStyle: 'italic', textAlign: 'center' }}>
              This runs <strong style={{ color: '#F26522', fontStyle: 'normal', fontWeight: 500 }}>24 hours a day</strong> — whether you open the system or not.
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* ── SECTION 5: WHAT YOU GET ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0', background: 'rgba(255,255,255,0.018)' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>What Lands in Your Hands</span>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '14px', color: '#FFFFFF' }}>
              Intelligence delivered.<br />Not data dumped.
            </h2>
            <p style={{ fontSize: '15px', color: '#8896A5', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300 }}>
              CEO Intel doesn't give you more to look at. It gives you exactly what you need to act — at the moment you need to act.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {deliveryCards.map((card) => (
              <div key={card.title} style={{ background: card.featured ? 'linear-gradient(135deg, rgba(242,101,34,0.10) 0%, rgba(242,101,34,0.02) 100%)' : 'rgba(255,255,255,0.04)', border: `1px solid ${card.featured ? 'rgba(242,101,34,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '14px', padding: '26px 22px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 500, color: card.timeColor, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'block', width: '18px', height: '1px', background: card.timeColor }} />
                  {card.time}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.3px', lineHeight: 1.25 }}>{card.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ fontSize: '13px', color: '#B0BEC9', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.55, fontWeight: 300 }}>
                      <span style={{ color: '#F26522', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {monthlyCards.map((card) => (
              <div key={card.title} style={{ background: card.alt ? 'linear-gradient(135deg, rgba(11,165,220,0.08) 0%, rgba(11,165,220,0.02) 100%)' : 'rgba(255,255,255,0.04)', border: `1px solid ${card.alt ? 'rgba(11,165,220,0.20)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '14px', padding: '26px 22px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 500, color: card.timeColor, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'block', width: '18px', height: '1px', background: card.timeColor }} />
                  {card.time}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.3px', lineHeight: 1.25 }}>{card.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ fontSize: '13px', color: '#B0BEC9', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.55, fontWeight: 300 }}>
                      <span style={{ color: '#F26522', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* ── SECTION 6: DATA SECURITY ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0', background: 'linear-gradient(180deg, rgba(11,165,220,0.04) 0%, transparent 100%)' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, color: '#0BA5DC', display: 'block', marginBottom: '16px' }}>Your Data. Protected.</span>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '16px', color: '#FFFFFF' }}>
              Enterprise-grade security.<br />Built in from day one.
            </h2>
            <p style={{ fontSize: '15px', color: '#8896A5', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
              Your business data is your most sensitive asset. CEO Intel is architected with security as a first principle — not an afterthought.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {securityItems.map((item) => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '28px 22px' }}>
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', letterSpacing: '-0.2px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#8896A5', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(11,165,220,0.06) 0%, rgba(242,101,34,0.04) 100%)', border: '1px solid rgba(11,165,220,0.18)', borderRadius: '14px', padding: 'clamp(20px,4vw,32px)', display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '32px', flexShrink: 0 }}>🛡️</div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>Have specific security or compliance requirements?</h4>
              <p style={{ fontSize: '13px', color: '#8896A5', margin: 0, lineHeight: 1.7, fontWeight: 300 }}>
                We work with businesses in regulated industries including manufacturing, FMCG, and financial services. If your organisation has specific data residency, audit, or compliance needs — we will address them directly during your discovery call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ padding: 'clamp(56px,8vw,88px) 0' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div style={{ background: 'linear-gradient(135deg, rgba(242,101,34,0.10) 0%, rgba(11,165,220,0.06) 100%)', border: '1px solid rgba(242,101,34,0.25)', borderRadius: '20px', padding: 'clamp(36px,6vw,64px) clamp(24px,5vw,72px)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 44px)', fontWeight: 800, letterSpacing: '-0.8px', lineHeight: 1.1, marginBottom: '18px', color: '#FFFFFF' }}>
              Walk into every room <span style={{ color: '#F26522' }}>knowing.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px,2.5vw,17px)', color: '#8896A5', maxWidth: '540px', margin: '0 auto 36px', lineHeight: 1.75, fontWeight: 300 }}>
              Book a 45-minute discovery call. We'll show you exactly what CEO Intel would surface in your business — using your data, your questions, your industry. No pitch. No pressure. Just intelligence.
            </p>
            <Link href="/get-started">
              <a style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#F26522', color: '#FFFFFF', fontSize: '15px', fontWeight: 700, padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', letterSpacing: '0.3px' }}>
                Book a Discovery Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </Link>
            <div style={{ marginTop: '18px', fontSize: '13px', color: '#8896A5', fontWeight: 300 }}>
              No commitment required <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.15)' }}>·</span> No generic pitch <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.15)' }}>·</span> Go live in 20–30 days
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
