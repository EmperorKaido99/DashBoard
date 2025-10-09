import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AlertItemProps {
  message: string;
  severity: "urgent" | "warning" | "info";
  category: string;
}

export function AlertItem({ message, severity, category }: AlertItemProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-muted/30 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-foreground">{message}</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant="secondary"
          className={cn(
            "font-medium",
            severity === "urgent" && "bg-alert-urgent text-white hover:bg-alert-urgent/90",
            severity === "warning" && "bg-alert-warning text-white hover:bg-alert-warning/90",
            severity === "info" && "bg-alert-info text-white hover:bg-alert-info/90"
          )}
        >
          {severity}
        </Badge>
        <span className="text-sm font-medium text-foreground">{category}</span>
      </div>
    </div>
  );
}
