import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { AlertItem } from "@/components/AlertItem";
import { AlertTriangle, Calendar } from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "MSP Projects",
      value: 12,
      subtitle: "Active orders",
      indicatorColor: "purple" as const,
    },
    {
      title: "CSP Projects",
      value: 8,
      subtitle: "Active orders",
      indicatorColor: "green" as const,
    },
    {
      title: "Consulting",
      value: 15,
      subtitle: "Active projects",
      indicatorColor: "orange" as const,
    },
  ];

  const alerts = [
    {
      message: "3 MSP orders due in 2 days",
      severity: "urgent" as const,
      category: "MSP",
    },
    {
      message: "Consulting project milestone approaching",
      severity: "warning" as const,
      category: "Consulting",
    },
    {
      message: "2 CSP orders pending supplier delivery",
      severity: "info" as const,
      category: "CSP",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Project Management Dashboard
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Monday, September 29, 2025</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Priority Alerts */}
          <div className="bg-card rounded-xl shadow-sm border border-border">
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-alert-warning" />
                <h2 className="text-xl font-semibold text-foreground">Priority Alerts</h2>
              </div>
            </div>
            <div className="divide-y divide-border">
              {alerts.map((alert, index) => (
                <AlertItem key={index} {...alert} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
