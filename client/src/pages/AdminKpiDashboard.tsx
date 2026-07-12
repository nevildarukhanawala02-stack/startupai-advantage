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

// Converts an ISO 3166-1 alpha-2 code (e.g. "US") into its flag emoji.
function countryFlag(code: string): string {
  if (code.length !== 2) return "🌐";
  return code
    .toUpperCase()
    .replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

function formatDuration(seconds: number): string {
  if (seconds <= 0) return "—";
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest > 0 ? `${minutes}m ${rest}s` : `${minutes}m`;
}

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
  const totalVisitors = (dashboard?.newVisitors ?? 0) + (dashboard?.returningVisitors ?? 0);
  const newPct = totalVisitors > 0 ? Math.round(((dashboard?.newVisitors ?? 0) / totalVisitors) * 100) : 0;

  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">KPI Dashboard</h1>
          <p className="text-muted-foreground">
            Visits, funnel, traffic sources, and what's driving contact form leads
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
                    <span className={i === dashboard.funnel.length - 1 ? "font-semibold text-cyan-700" : ""}>
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

          {/* New vs returning */}
          <Card>
            <CardHeader>
              <CardTitle>New vs Returning Visitors</CardTitle>
              <CardDescription>
                {totalVisitors === 0
                  ? "No visitors in this period yet"
                  : `${newPct}% new, ${100 - newPct}% returning`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-3 rounded-full overflow-hidden bg-muted">
                <div className="bg-cyan-500" style={{ width: `${newPct}%` }} />
                <div className="bg-orange-400" style={{ width: `${100 - newPct}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 inline-block" />
                  New — {dashboard.newVisitors.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-orange-400 inline-block" />
                  Returning — {dashboard.returningVisitors.toLocaleString()}
                </span>
              </div>
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
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className="text-xs text-muted-foreground">
                          {formatDuration(post.avgSeconds)} avg
                        </span>
                        <span className="text-sm font-semibold text-cyan-700">
                          {post.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Top pages + traffic sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most-visited pages, this {period}</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.topPages.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center">No page views yet</p>
                ) : (
                  <div className="space-y-3">
                    {dashboard.topPages.map((page, i) => (
                      <div key={page.path} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-sm font-semibold text-muted-foreground w-5">{i + 1}</span>
                          <span className="truncate text-sm">{page.path}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span className="text-xs text-muted-foreground">
                            {formatDuration(page.avgSeconds)} avg
                          </span>
                          <span className="text-sm font-semibold text-cyan-700">
                            {page.visitors.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where visitors came from, this {period}</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.trafficSources.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center">No visitors yet</p>
                ) : (
                  <div className="space-y-3">
                    {dashboard.trafficSources.map(({ source, count }) => (
                      <div key={source} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm">{source}</span>
                        <span className="text-sm font-semibold text-cyan-700">{count.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Device breakdown + top countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Type</CardTitle>
                <CardDescription>Desktop vs mobile vs tablet, this {period}</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.deviceBreakdown.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center">No visitors yet</p>
                ) : (
                  <div className="space-y-3">
                    {dashboard.deviceBreakdown.map(({ device, count }) => (
                      <div key={device} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm">{device}</span>
                        <span className="text-sm font-semibold text-cyan-700">{count.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Countries</CardTitle>
                <CardDescription>Visitor locations, this {period}</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.topCountries.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center">No visitors yet</p>
                ) : (
                  <div className="space-y-3">
                    {dashboard.topCountries.map(({ country, count }) => (
                      <div key={country} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm">
                          {countryFlag(country)} {country}
                        </span>
                        <span className="text-sm font-semibold text-cyan-700">{count.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
