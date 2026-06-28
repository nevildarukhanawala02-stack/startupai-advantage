import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
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
            <h1 className="mb-6 text-white">Cookie Policy</h1>
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
                <h2 className="text-white text-2xl font-semibold mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">How We Use Cookies</h2>
                <p>StartupAI Advantage uses cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly, including authentication and security features</li>
                  <li><strong className="text-white">Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information</li>
                  <li><strong className="text-white">Functionality Cookies:</strong> Remember your preferences and choices to provide enhanced features</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Allow us to analyze website traffic and improve our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                
                <div className="mt-6 space-y-6">
                  <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-3">Session Cookies</h3>
                    <p>
                      These temporary cookies are deleted when you close your browser. They help us maintain your session as you navigate through our website.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-3">Persistent Cookies</h3>
                    <p>
                      These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-3">First-Party Cookies</h3>
                    <p>
                      Set by StartupAI Advantage directly, these cookies enable core website functionality and help us improve your experience.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-3">Third-Party Cookies</h3>
                    <p>
                      Set by our trusted partners for analytics and marketing purposes. These help us understand user behavior and improve our services.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Adjusting your browser settings to refuse all or some cookies</li>
                  <li>Deleting cookies that have already been set on your device</li>
                  <li>Using browser plugins that manage cookies</li>
                </ul>
                <p className="mt-4">
                  Please note that if you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Browser-Specific Cookie Controls</h2>
                <p>Most web browsers allow you to manage cookies through their settings. Here are links to cookie management guides for popular browsers:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Microsoft Edge</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Analytics and Tracking</h2>
                <p>
                  We use analytics services to help us understand how users interact with our website. These services may use cookies to collect information about your visit, including pages viewed, time spent on the site, and navigation patterns. This information is used in aggregate form and does not identify individual users.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Updates to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We encourage you to review this policy periodically. The "Last updated" date at the top of this page indicates when the policy was last revised.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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
