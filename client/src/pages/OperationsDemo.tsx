import { useEffect } from "react";

export default function OperationsDemo() {
  useEffect(() => {
    document.title = "Operations Intelligence Demo — StartupAI Advantage";
    return () => {
      document.title = "StartupAI Advantage";
    };
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#0d0d1a]" style={{ minHeight: "100dvh" }}>
      {/* Header bar — responsive */}
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3 shrink-0 flex-wrap gap-2"
        style={{
          background: "linear-gradient(135deg, #0d1b2a 0%, #0d0d1a 100%)",
          borderBottom: "1px solid rgba(11,165,220,0.2)",
        }}
      >
        <a
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="hidden sm:inline">Back to StartupAI Advantage</span>
          <span className="sm:hidden">Back</span>
        </a>

        <span
          className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium"
          style={{
            background: "rgba(11,165,220,0.15)",
            border: "1px solid rgba(11,165,220,0.4)",
            color: "#0BA5DC",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#0BA5DC" }}
          />
          Operations Intelligence System
        </span>

        <a
          href="/get-started"
          className="text-xs font-bold px-3 py-2 sm:px-4 rounded-full transition-all shrink-0 whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #F26522, #e05510)",
            color: "#fff",
            boxShadow: "0 4px 15px rgba(242,101,34,0.3)",
          }}
        >
          Book Free Consultation →
        </a>
      </div>

      {/* Iframe — fills remaining viewport height */}
      <iframe
        src="/operations-demo.html"
        title="Operations Intelligence System Demo"
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100dvh - 52px)" }}
        allow="autoplay"
      />
    </div>
  );
}
