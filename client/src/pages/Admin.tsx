import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { toast } from "sonner";
import { Users, Mail, FileText, ShieldAlert, BarChart3, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const { data: user, isLoading } = trpc.auth.me.useQuery();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && user?.role !== "admin") {
      toast.error("Unauthorized: Admin access required");
      setLocation("/admin/login");
    }
  }, [user, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-500" />
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="container mx-auto py-12 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <ShieldAlert className="mx-auto h-14 w-14 text-destructive mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: "KPI Dashboard",
      description: "Visits, funnel, and top blog posts driving contact form leads",
      icon: TrendingUp,
      href: "/admin/analytics",
      color: "text-blue-500",
    },
    {
      title: "Leads",
      description: "View and export all email leads captured from the site",
      icon: Users,
      href: "/admin/leads",
      color: "text-cyan-500",
    },
    {
      title: "Consultation Requests",
      description: "Review consultation requests submitted by visitors",
      icon: BarChart3,
      href: "/admin/consultations",
      color: "text-purple-500",
    },
    {
      title: "Contact Submissions",
      description: "View messages submitted via the contact form",
      icon: Mail,
      href: "/admin/contacts",
      color: "text-green-500",
    },
    {
      title: "Blog Posts",
      description: "Manage and review published blog content",
      icon: FileText,
      href: "/blog",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user.name || user.email}.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((s) => (
          <Card
            key={s.href}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setLocation(s.href)}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <s.icon className={`h-8 w-8 ${s.color}`} />
              <div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{s.description}</CardDescription>
              <Button variant="link" className="px-0 mt-2 text-sm">
                Go to {s.title} →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
