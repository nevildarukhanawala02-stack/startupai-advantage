import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, User, Calendar, ShieldAlert, Building2, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { useEffect } from "react";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  contacted: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  qualified: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  converted: "bg-green-500/10 text-green-600 border-green-500/20",
  closed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

export default function AdminConsultations() {
  const { data: user, isLoading: authLoading } = trpc.auth.me.useQuery();
  const [, setLocation] = useLocation();
  const { data: requests, isLoading } = trpc.consultation.list.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  useEffect(() => {
    if (!authLoading && user?.role !== "admin") {
      toast.error("Unauthorized: Admin access required");
      setLocation("/admin/login");
    }
  }, [user, authLoading, setLocation]);

  if (authLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Checking permissions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <ShieldAlert className="mx-auto h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground">You don't have permission to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  const exportToCSV = () => {
    if (!requests || requests.length === 0) {
      toast.error("No consultation requests to export");
      return;
    }

    const headers = ["Name", "Email", "Company", "Phone", "Company Size", "Industry", "Message", "Status", "Date"];
    const rows = requests.map((r) => [
      r.name || "",
      r.email,
      r.company || "",
      r.phone || "",
      r.companySize || "",
      r.industry || "",
      (r.message || "").replace(/\n/g, " "),
      r.status || "",
      r.createdAt ? new Date(r.createdAt).toLocaleString() : "",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `consultation_requests_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Consultation requests exported successfully");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading consultation requests...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Consultation Requests</h1>
            <p className="text-muted-foreground">
              Submitted via the Get Started form
            </p>
          </div>
          <Button onClick={exportToCSV} disabled={!requests || requests.length === 0}>
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Requests ({requests?.length || 0})</CardTitle>
          <CardDescription>Consultation requests submitted from /get-started</CardDescription>
        </CardHeader>
        <CardContent>
          {!requests || requests.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No consultation requests yet</h3>
              <p className="text-muted-foreground">
                Requests will appear here when visitors submit the Get Started form
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Contact</th>
                    <th className="text-left py-3 px-4 font-semibold">Company</th>
                    <th className="text-left py-3 px-4 font-semibold">Message</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((r) => (
                    <tr key={r.id} className="border-b hover:bg-muted/50 transition-colors align-top">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground shrink-0" />
                          <span>{r.name || "N/A"}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                          <a href={`mailto:${r.email}`} className="text-cyan-500 hover:underline">
                            {r.email}
                          </a>
                        </div>
                        {r.phone && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3.5 w-3.5 shrink-0" />
                            <span>{r.phone}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                          <span>{r.company || "N/A"}</span>
                        </div>
                        {(r.companySize || r.industry) && (
                          <div className="text-xs text-muted-foreground">
                            {[r.companySize, r.industry].filter(Boolean).join(" · ")}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground max-w-xs">
                        <p className="line-clamp-3">{r.message || "—"}</p>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={STATUS_STYLES[r.status] || ""}>
                          {r.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                          <Calendar className="h-4 w-4 shrink-0" />
                          <span>
                            {r.createdAt
                              ? new Date(r.createdAt).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : "N/A"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
