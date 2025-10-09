import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  indicatorColor: "purple" | "green" | "orange" | "blue";
}

export function StatCard({ title, value, subtitle, indicatorColor }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <div
          className={cn(
            "w-3 h-3 rounded-full",
            indicatorColor === "purple" && "bg-status-purple",
            indicatorColor === "green" && "bg-status-green",
            indicatorColor === "orange" && "bg-status-orange",
            indicatorColor === "blue" && "bg-status-blue"
          )}
        />
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
