import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)',
        }}
      >
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl text-white">
              Last updated: February 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-invert prose-cyan">
            <div className="text-white space-y-8">
              
              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Introduction</h2>
                <p>
                  StartupAI Advantage ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name, email address, phone number, and company information</li>
                  <li>Business details and consultation requests</li>
                  <li>Communication preferences and feedback</li>
                  <li>Technical data such as IP address, browser type, and device information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and consultation requests</li>
                  <li>Send you updates, marketing communications, and promotional materials</li>
                  <li>Analyze usage patterns and optimize our website</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Law enforcement or regulatory authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. For more details, please see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="mb-2">
                    <strong className="text-white">Email:</strong>{" "}
                    <a href="mailto:nevildarukhanawala02@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                      nevildarukhanawala02@gmail.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Phone:</strong>{" "}
                    <a href="tel:+917400249562" className="text-cyan-400 hover:text-cyan-300">
                      +91 7400249562
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">Address:</strong> 302 Misquitta House, Juhu, Mumbai, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
