import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, User, Calendar, ShieldAlert, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { useEffect } from "react";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  read: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  replied: "bg-green-500/10 text-green-600 border-green-500/20",
  closed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

export default function AdminContacts() {
  const { data: user, isLoading: authLoading } = trpc.auth.me.useQuery();
  const [, setLocation] = useLocation();
  const { data: submissions, isLoading } = trpc.contact.list.useQuery(undefined, {
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
    if (!submissions || submissions.length === 0) {
      toast.error("No contact submissions to export");
      return;
    }

    const headers = ["Name", "Email", "Subject", "Message", "Status", "Date"];
    const rows = submissions.map((s) => [
      s.name || "",
      s.email,
      s.subject || "",
      (s.message || "").replace(/\n/g, " "),
      s.status || "",
      s.createdAt ? new Date(s.createdAt).toLocaleString() : "",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `contact_submissions_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Contact submissions exported successfully");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading contact submissions...</p>
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
            <h1 className="text-4xl font-bold mb-2">Contact Submissions</h1>
            <p className="text-muted-foreground">
              Submitted via the Contact form
            </p>
          </div>
          <Button onClick={exportToCSV} disabled={!submissions || submissions.length === 0}>
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Submissions ({submissions?.length || 0})</CardTitle>
          <CardDescription>Messages submitted from /contact</CardDescription>
        </CardHeader>
        <CardContent>
          {!submissions || submissions.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No contact submissions yet</h3>
              <p className="text-muted-foreground">
                Messages will appear here when visitors submit the contact form
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Subject</th>
                    <th className="text-left py-3 px-4 font-semibold">Message</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id} className="border-b hover:bg-muted/50 transition-colors align-top">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground shrink-0" />
                          <span>{s.name || "N/A"}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                          <a href={`mailto:${s.email}`} className="text-cyan-500 hover:underline">
                            {s.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{s.subject || "—"}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground max-w-xs">
                        <p className="line-clamp-3">{s.message}</p>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={STATUS_STYLES[s.status] || ""}>
                          {s.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                          <Calendar className="h-4 w-4 shrink-0" />
                          <span>
                            {s.createdAt
                              ? new Date(s.createdAt).toLocaleDateString("en-US", {
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
