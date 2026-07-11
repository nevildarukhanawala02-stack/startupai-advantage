import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { ShieldAlert, Users, FileText, Mail, Percent, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const METRIC_CARDS: Array<{
  key: "visits" | "pagesPerVisit" | "blogViewers" | "contactSubmissions" | "conversionRate";
  label: string;
  icon: typeof Users;
  format: (v: number) => string;
}> = [
  { key: "visits", label: "Visits", icon: Users, format: v => v.toLocaleString() },
  { key: "pagesPerVisit", label: "Pages / Visit", icon: FileText, format: v => v.toFixed(1) },
  { key: "blogViewers", label: "Read a Blog Post", icon: BookOpen, format: v => v.toLocaleString() },
  { key: "contactSubmissions", label: "Contact Submissions", icon: Mail, format: v => v.toLocaleString() },
  { key: "conversionRate", label: "Conversion Rate", icon: Percent, format: v => `${v}%` },
];

export default function AdminKpiDashboard() {
  const { data: user, isLoading: authLoading } = trpc.auth.me.useQuery();
  const [, setLocation] = useLocation();
  const [period, setPeriod] = useState<"week" | "month">("week");

  const { data: dashboard, isLoading } = trpc.analytics.dashboard.useQuery(
    { period },
    { enabled: user?.role === "admin" }
  );

  useEffect(() => {
    if (!authLoading && user?.role !== "admin") {
      toast.error("Unauthorized: Admin access required");
      setLocation("/admin/login");
    }
  }, [user, authLoading, setLocation]);

  if (authLoading) {
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

  const maxFunnelCount = dashboard?.funnel[0]?.count || 1;

  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">KPI Dashboard</h1>
          <p className="text-muted-foreground">
            Visits, funnel, and the blog posts driving contact form leads
          </p>
        </div>
        <Tabs value={period} onValueChange={v => setPeriod(v as "week" | "month")}>
          <TabsList>
            <TabsTrigger value="week">This week</TabsTrigger>
            <TabsTrigger value="month">This month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {isLoading || !dashboard ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-500" />
        </div>
      ) : (
        <div className="space-y-8">
          {/* Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {METRIC_CARDS.map(({ key, label, icon: Icon, format }) => (
              <Card key={key}>
                <CardContent className="pt-6">
                  <Icon className="h-5 w-5 text-cyan-500 mb-2" />
                  <div className="text-2xl font-bold">{format(dashboard[key] as number)}</div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Funnel</CardTitle>
              <CardDescription>How visitors move from arriving to becoming a lead</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {dashboard.funnel.map((stage, i) => (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span className={i === dashboard.funnel.length - 1 ? "font-semibold text-cyan-500" : ""}>
                      {stage.stage}
                    </span>
                    <span className="text-muted-foreground">{stage.count.toLocaleString()}</span>
                  </div>
                  <Progress
                    value={maxFunnelCount > 0 ? (stage.count / maxFunnelCount) * 100 : 0}
                    className={i === dashboard.funnel.length - 1 ? "[&>div]:bg-cyan-500" : ""}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top blog posts */}
          <Card>
            <CardHeader>
              <CardTitle>Top Blog Posts</CardTitle>
              <CardDescription>Most-read posts by unique visitors, this {period}</CardDescription>
            </CardHeader>
            <CardContent>
              {dashboard.topBlogPosts.length === 0 ? (
                <p className="text-sm text-muted-foreground py-6 text-center">
                  No blog reads in this period yet
                </p>
              ) : (
                <div className="space-y-3">
                  {dashboard.topBlogPosts.map((post, i) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-sm font-semibold text-muted-foreground w-5">{i + 1}</span>
                        <span className="truncate">{post.title}</span>
                      </div>
                      <span className="text-sm font-medium text-cyan-500 shrink-0 ml-4">
                        {post.views.toLocaleString()} views
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
