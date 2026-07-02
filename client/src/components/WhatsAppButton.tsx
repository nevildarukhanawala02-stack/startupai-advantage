import { useLocation } from "wouter";

const WHATSAPP_NUMBER = "917400249562";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in learning more about StartupAI Advantage's intelligence systems for my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Hide the WhatsApp button on demo pages since they have their own CTAs
const HIDDEN_PATHS = ["/demo", "/operations-demo"];

export default function WhatsAppButton() {
  const [location] = useLocation();

  if (HIDDEN_PATHS.includes(location)) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.45)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.12)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 6px 28px rgba(37, 211, 102, 0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 4px 20px rgba(37, 211, 102, 0.45)";
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#ffffff"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.83 1.8 6.86L2 30l7.34-1.78A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.6l-.42-.25-4.35 1.06 1.1-4.24-.28-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59H9.9c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83s1.22 3.28 1.39 3.51c.17.23 2.4 3.67 5.82 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.32-.23-.66-.4z" />
      </svg>

      {/* Tooltip label */}
      <span
        style={{
          position: "absolute",
          right: "66px",
          background: "rgba(0,0,0,0.75)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 500,
          padding: "5px 10px",
          borderRadius: "6px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s ease",
        }}
        className="whatsapp-tooltip"
      >
        Chat on WhatsApp
      </span>

      <style>{`
        .whatsapp-fab:hover .whatsapp-tooltip {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .whatsapp-fab {
            bottom: 20px !important;
            right: 16px !important;
            width: 50px !important;
            height: 50px !important;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </a>
  );
}
