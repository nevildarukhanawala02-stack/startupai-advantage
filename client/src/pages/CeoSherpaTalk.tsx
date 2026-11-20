import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { attributionLine } from "@/lib/attribution";
import { trackInquirySubmit } from "@/lib/analytics";
import { CEO_SHERPA_PATH } from "@shared/ceoSherpa";

/**
 * Short inquiry form for visitors who come from the CEO Sherpa page.
 * Same backend as the Get Started form (consultation.submit). The ad source and the brand's
 * website travel in the message, so no database change is needed.
 */

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@600;700&display=swap";

const CSS = `
.sherpa-talk{--ink:#14281D;--forest:#3A6B4F;--paper:#FAF8F3;--mint:#DCE8DF;--sage:#CFE3D6;--orange:#E36B3F;--stone:#56665C;
  background:var(--paper);color:var(--ink);font-family:'Source Sans 3',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:1.0625rem;line-height:1.65}
.sherpa-talk h1,.sherpa-talk h2{font-family:'Source Serif 4',Georgia,serif;color:var(--ink);font-weight:700;line-height:1.2;letter-spacing:-0.01em;margin:0}
.sherpa-talk h1{font-size:clamp(2rem,5vw,3rem)}
.sherpa-talk h2{font-size:1.4rem}
.sherpa-talk p{margin:0;color:var(--ink)}
.sherpa-talk .wrap{max-width:40rem;margin:0 auto;padding:4rem 1.25rem}
.sherpa-talk .lead{font-size:1.2rem;color:var(--stone);margin-top:1rem}
.sherpa-talk form{margin-top:2rem;display:grid;gap:1.1rem}
.sherpa-talk label{display:block;font-weight:600;margin-bottom:.3rem}
.sherpa-talk .hint{font-weight:400;color:var(--stone);font-size:.92rem}
.sherpa-talk input,.sherpa-talk textarea{width:100%;box-sizing:border-box;font:inherit;color:var(--ink);background:#fff;border:1px solid var(--stone);border-radius:.5rem;padding:.75rem .9rem}
.sherpa-talk input:focus-visible,.sherpa-talk textarea:focus-visible,.sherpa-talk button:focus-visible,.sherpa-talk a:focus-visible{outline:3px solid var(--orange);outline-offset:2px}
.sherpa-talk textarea{min-height:6.5rem;resize:vertical}
.sherpa-talk .btn{display:inline-block;background:var(--forest);color:var(--paper);font:inherit;font-weight:700;padding:.9rem 1.6rem;border-radius:.5rem;border:2px solid var(--forest);cursor:pointer}
.sherpa-talk .btn:hover:not(:disabled){background:var(--ink);border-color:var(--ink)}
.sherpa-talk .btn:disabled{opacity:.6;cursor:default}
.sherpa-talk .small{font-size:.92rem;color:var(--stone)}
.sherpa-talk .small a{color:var(--forest)}
.sherpa-talk .error{color:#9B2C1B;font-weight:600}
.sherpa-talk .done{margin-top:2rem;background:var(--mint);border-left:5px solid var(--forest);border-radius:.25rem;padding:1.25rem 1.5rem}
.sherpa-talk .done ul{margin:.75rem 0 0;padding-left:1.2rem}
.sherpa-talk .back{display:inline-block;margin-top:1.5rem;color:var(--forest);font-weight:600}
`;

export default function CeoSherpaTalk() {
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", phone: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Talk to us about your numbers - CEO Sherpa";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href = FONTS_HREF;
    document.head.appendChild(fonts);
    return () => {
      document.title = prevTitle;
      robots.remove();
      fonts.remove();
    };
  }, []);

  const submit = trpc.consultation.submit.useMutation({
    onSuccess: () => {
      trackInquirySubmit();
      setSent(true);
    },
    onError: (e) => setError(e.message || "Something went wrong. Please try again."),
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const lines = [
      "Enquiry from the CEO Sherpa page",
      attributionLine(),
      form.website.trim() ? `Brand website: ${form.website.trim()}` : "",
      form.message.trim() ? `\nThe one decision on their mind:\n${form.message.trim()}` : "",
    ].filter(Boolean);
    submit.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      phone: form.phone.trim() || undefined,
      industry: "D2C",
      message: lines.join("\n"),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header minimal={{ ctaHref: CEO_SHERPA_PATH, ctaLabel: "Back to CEO Sherpa" }} />
      <style>{CSS}</style>
      <main className="sherpa-talk flex-1">
        <div className="wrap">
          <h1>Let&rsquo;s look at your numbers.</h1>
          <p className="lead">
            Tell us a little about your brand. We will reply within 24 hours to set up a free
            conversation, and then a walkthrough on your own numbers.
          </p>

          {sent ? (
            <div className="done" role="status">
              <h2>Thank you. We have it.</h2>
              <p style={{ marginTop: ".5rem" }}>
                We will be in touch within 24 hours. Before we talk, it helps to have a list of
                where your numbers live:
              </p>
              <ul>
                <li>your store, ad accounts and marketplaces</li>
                <li>couriers, payments, and your CRM or WhatsApp tools</li>
                <li>the one decision you are weighing next</li>
              </ul>
              <Link href={CEO_SHERPA_PATH} className="back">
                Back to CEO Sherpa
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false}>
              <div>
                <label htmlFor="st-name">Your name</label>
                <input id="st-name" required autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div>
                <label htmlFor="st-email">Work email</label>
                <input id="st-email" type="email" required autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </div>
              <div>
                <label htmlFor="st-company">Brand or company</label>
                <input id="st-company" required autoComplete="organization" value={form.company} onChange={(e) => set("company", e.target.value)} />
              </div>
              <div>
                <label htmlFor="st-site">
                  Website <span className="hint">(optional)</span>
                </label>
                <input id="st-site" inputMode="url" autoComplete="url" placeholder="yourbrand.com" value={form.website} onChange={(e) => set("website", e.target.value)} />
              </div>
              <div>
                <label htmlFor="st-phone">
                  WhatsApp or phone <span className="hint">(optional)</span>
                </label>
                <input id="st-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
              <div>
                <label htmlFor="st-msg">
                  The one decision on your mind <span className="hint">(optional)</span>
                </label>
                <textarea id="st-msg" value={form.message} onChange={(e) => set("message", e.target.value)} />
              </div>
              {error && (
                <p className="error" role="alert">
                  {error}
                </p>
              )}
              <div>
                <button type="submit" className="btn" disabled={submit.isPending}>
                  {submit.isPending ? "Sending..." : "Send"}
                </button>
              </div>
              <p className="small">
                We use these details only to reply to you. See our <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer minimal />
    </div>
  );
}
