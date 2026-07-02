import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    industry: "",
    message: "",
  });

  const submitMutation = trpc.consultation.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        companySize: "",
        industry: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            <h1 className="mb-6 text-white">Let's find out what your<br /><span className="text-[#00D9FF]">data already knows.</span></h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Book a 45-minute discovery call. We'll use your own data, your own questions, and your own industry to show you exactly what CEO Intel would surface in your business.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Consultation Request</CardTitle>
                  <CardDescription className="text-white">
                    Fill out the form below and we'll be in touch within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your name"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="you@company.com"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        required
                        placeholder="Your company"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-white">Company Size</Label>
                      <Select value={formData.companySize} onValueChange={(value) => handleChange("companySize", value)}>
                        <SelectTrigger id="companySize" className="bg-gray-900/50 border-gray-600 text-white focus:border-secondary">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="₹10-30 Cr" className="text-white hover:bg-gray-700">₹10-30 Cr</SelectItem>
                          <SelectItem value="₹30-50 Cr" className="text-white hover:bg-gray-700">₹30-50 Cr</SelectItem>
                          <SelectItem value="₹50-100 Cr" className="text-white hover:bg-gray-700">₹50-100 Cr</SelectItem>
                          <SelectItem value="₹100-200 Cr" className="text-white hover:bg-gray-700">₹100-200 Cr</SelectItem>
                          <SelectItem value="₹200+ Cr" className="text-white hover:bg-gray-700">₹200+ Cr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-white">Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                        <SelectTrigger id="industry" className="bg-gray-900/50 border-gray-600 text-white focus:border-secondary">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="Manufacturing" className="text-white hover:bg-gray-700">Manufacturing</SelectItem>
                          <SelectItem value="FMCG & Consumer Brands" className="text-white hover:bg-gray-700">FMCG & Consumer Brands</SelectItem>
                          <SelectItem value="Retail & QSR" className="text-white hover:bg-gray-700">Retail & QSR</SelectItem>
                          <SelectItem value="B2B Services" className="text-white hover:bg-gray-700">B2B Services</SelectItem>
                          <SelectItem value="Other" className="text-white hover:bg-gray-700">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Tell Us About Your Goals</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="What are your biggest growth challenges? What would you like to unlock with AI intelligence?"
                        rows={4}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-white/70 focus:border-secondary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Consultation"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">What Happens in 45 Minutes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-secondary">1</span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-white">We map your intelligence gaps</h4>
                      <p className="text-sm text-white">
                        What decisions are you making on incomplete information? Where are you losing money you don't know about? We identify your three highest-value unanswered questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-secondary">2</span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-white">We show you the answers</h4>
                      <p className="text-sm text-white">
                        Using a live demo configured for your industry, we show you exactly what CEO Intel would surface — with your type of data, your type of questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-secondary">3</span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-white">You decide if it's right for you</h4>
                      <p className="text-sm text-white">
                        No pitch. No pressure. You leave with a clear picture of what's possible — and a specific proposal if you want to move forward.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "A clear map of your three highest-value intelligence gaps",
                    "A live demo configured for your industry",
                    "A specific proposal with transparent pricing and timeline",
                    "Honest assessment of whether CEO Intel is right for you",
                    "No obligation, no pressure, no follow-up spam",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-white">{benefit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
                <CardContent className="p-6">
                  <p className="text-sm text-white/90 italic mb-3">
                    "The best discovery calls end with the founder saying: I never thought about it that way. That's when we know we've found something worth building."
                  </p>
                  <p className="text-sm font-medium text-white">— Nevil Darukhanawala, Founder</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
