import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      alert("Message sent! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      alert(error.message || "Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Circuit Background */}
      <section 
        className="relative min-h-[50vh] flex items-center overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1419 100%)',
        }}
      >
        {/* Circuit pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230BA5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Ready to unlock your business intelligence? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="bg-gray-800/50 border-gray-700 p-8">
                  <h2 className="text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary resize-none"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-white mb-6">Get in Touch</h2>
                  <p className="text-white mb-8">
                    Whether you're ready to get started or just have questions, we're here to help. Reach out and we'll respond within 24 hours.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-white mb-2">Email Us</h3>
                        <p className="text-white mb-2">
                          For general inquiries and support
                        </p>
                        <a 
                          href="mailto:nevildarukhanawala02@gmail.com" 
                          className="text-secondary hover:text-secondary/80 transition-colors"
                        >
                          nevildarukhanawala02@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-white mb-2">Call Us</h3>
                        <p className="text-white mb-2">
                          Monday to Friday, 9 AM - 6 PM IST
                        </p>
                        <a 
                          href="tel:+917400249562" 
                          className="text-secondary hover:text-secondary/80 transition-colors"
                        >
                          +91 7400249562
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-white mb-2">Visit Us</h3>
                        <p className="text-white">
                          302 Misquitta House, Juhu<br />
                          Mumbai, India
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Prefer a Consultation? */}
                <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30 p-6">
                  <h3 className="text-white mb-3">Prefer a Free Consultation?</h3>
                  <p className="text-white mb-4">
                    Book a 45-minute discovery call to discuss your specific needs and see how we can help.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/get-started">
                      Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
