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
              Last updated: 16 November 2026
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
                <p className="mt-4">Startup AI Advantage (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;), based in Mumbai, India, is committed to protecting your privacy. This policy explains how we collect, use, share and protect information when you visit startupaiadvantage.com, use our services, or connect your business accounts to our CEO Sherpa product.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Information we collect from website visitors</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name, email address, phone number and company information</li>
                  <li>Business details and consultation requests</li>
                  <li>Communication preferences and feedback</li>
                  <li>Technical data such as IP address, browser type and device information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Information we access from your business accounts</h2>
                <p className="mt-4">When you are a CEO Sherpa client, you choose which accounts to connect. With your authorization we read, and never change, data from these sources:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Online store: orders, order lines, products, refunds and shipping status</li>
                  <li>Advertising accounts (Google Ads, Meta): campaigns, spend and reported results</li>
                  <li>Website analytics (Google Analytics, Search Console): sessions, traffic sources and search performance</li>
                  <li>Social accounts (Instagram, Facebook Pages): post and page performance metrics</li>
                  <li>Marketplaces (such as Amazon): sales, fees, returns and settlements</li>
                  <li>Spreadsheets and a support inbox that you choose to share or forward to us</li>
                </ul>
                <p className="mt-4">We do not post, edit, delete, spend money or message anyone through your accounts. We do not read private messages or personal profiles. Customer details such as names and email addresses are read only where needed to match orders to repeat customers.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">How we use information</h2>
                <p className="mt-4">Website visitors: we use information to provide and improve our services, respond to enquiries, analyze website usage, comply with legal obligations, and send updates or marketing messages if you asked for them. You can unsubscribe from marketing at any time.</p>
                <p className="mt-4">Business accounts: we use this information only to produce your own reports, priorities and answers inside CEO Sherpa. We do not sell it, use it for advertising, combine it with other clients&#x27; data, or share it with other clients.</p>
                <p className="mt-4">AI providers: we use AI service providers to generate answers to your questions. We send them only the data needed for that answer. Our AI provider&#x27;s commercial terms prohibit it from training its models on the data we send.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Google user data</h2>
                <p className="mt-4">Our use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We use Google data only to provide the features you see in CEO Sherpa. Humans do not read it except with your consent, to investigate abuse, or where the law requires.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Meta platform data</h2>
                <p className="mt-4">We use data received from Meta only to show you your own advertising and page performance. We do not sell it, and we do not use it to build profiles of individual people.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Data security</h2>
                <p className="mt-4">We use appropriate technical and organizational measures, including encrypted connections, encrypted storage of access credentials and a separate hosted environment for each client. No method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Sharing and disclosure</h2>
                <p className="mt-4">We do not sell your personal information. We may share it with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Service providers who help us run the service, such as hosting and AI providers, under confidentiality terms</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Law enforcement or regulatory authorities when the law requires</li>
                </ul>
                <p className="mt-4">Some of these providers may process data outside India. Where they do, we require them to protect it to the standard this policy describes.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">How long we keep information</h2>
                <p className="mt-4">We keep data from your business accounts while you are a client. After you leave, we delete it within 30 days unless the law requires us to keep it. Website enquiries are kept for 24 months.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Disconnecting and deleting your data</h2>
                <p className="mt-4">You can stop our access at any time:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Google: remove our access at myaccount.google.com/permissions, or remove our service account from your Analytics, Search Console or sheet.</li>
                  <li>Meta: open Facebook Settings &gt; Business integrations, remove the app, and remove our business as a partner on your ad account.</li>
                  <li>Shopify and others: uninstall our app or revoke the key you created.</li>
                </ul>
                <p className="mt-4">To have your data deleted, email nevil@startupaiadvantage.com with the subject &quot;Delete my data&quot; and the name of your business. We confirm by email and complete deletion within 30 days. A Meta or Google user who wants their data removed can use the same address.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Your rights</h2>
                <p className="mt-4">You may access and receive a copy of your personal data, correct it, request deletion, object to or restrict processing, and withdraw consent at any time. We handle these requests in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023. If you are not satisfied with our response, you may contact our grievance contact below, and you may also approach the Data Protection Board of India.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Children</h2>
                <p className="mt-4">Our website and services are intended for businesses and are not directed at children. We do not knowingly collect personal data from children.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Cookies</h2>
                <p className="mt-4">We use cookies on our website to improve your experience and understand how it is used. You can control or block cookies in your browser settings; some site features may not work without them.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Changes to this policy</h2>
                <p className="mt-4">We may update this policy. We will post the new version on this page and change the &quot;Last updated&quot; date. If a change affects how we use data from your business accounts, we will email you.</p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold mb-4">Contact Us and Grievances</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="mb-2">
                    <strong className="text-white">Email:</strong>{" "}
                    <a href="mailto:nevil@startupaiadvantage.com" className="text-cyan-400 hover:text-cyan-300">nevil@startupaiadvantage.com</a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Phone:</strong>{" "}
                    <a href="tel:+917400249562" className="text-cyan-400 hover:text-cyan-300">+91 7400249562</a>
                  </p>
                  <p className="mb-2"><strong className="text-white">Address:</strong> 302 Misquitta House, Juhu, Mumbai, India</p>
                  <p><strong className="text-white">Grievance contact:</strong> Nevil Darukhanawala, at the email address above.</p>
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
