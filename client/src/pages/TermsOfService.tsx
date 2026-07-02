import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
            <h1 className="mb-6 text-white">Terms of Service</h1>
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
                <h2 className="text-white text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using StartupAI Advantage's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Services Description</h2>
                <p>
                  StartupAI Advantage provides AI-powered business intelligence systems designed to help Indian mid-market businesses (₹10-200 Cr revenue) make data-driven decisions. Our services include Revenue Intelligence, Operational Excellence Intelligence, and Market & Competitive Intelligence systems.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">User Obligations</h2>
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and AI models, are owned by StartupAI Advantage and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Service Availability and Modifications</h2>
                <p>
                  We strive to provide reliable services but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We will not be liable for any modification, suspension, or discontinuation of services.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Payment Terms</h2>
                <p>
                  Service fees and payment terms will be outlined in separate service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to change our pricing with 30 days' notice to existing customers.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Data and Confidentiality</h2>
                <p>
                  We take data security seriously. Your business data will be handled in accordance with our Privacy Policy. We implement industry-standard security measures to protect your information. However, you acknowledge that no system is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, StartupAI Advantage shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless StartupAI Advantage, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
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
