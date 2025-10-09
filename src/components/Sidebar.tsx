import { LayoutDashboard, ShoppingCart, Cloud, Users, DollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    subtitle: "Overview & alerts",
    path: "/",
  },
  {
    title: "MSP Orders",
    icon: ShoppingCart,
    subtitle: "Hardware orders",
    path: "/msp-orders",
  },
  {
    title: "CSP Orders",
    icon: Cloud,
    subtitle: "Cloud services",
    path: "/csp-orders",
  },
  {
    title: "Consulting",
    icon: Users,
    subtitle: "Project management",
    path: "/consulting",
  },
  {
    title: "Payments",
    icon: DollarSign,
    subtitle: "Invoice tracking",
    path: "/payments",
  },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">Navigation</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )
              }
            >
              <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium text-sm">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.subtitle}</span>
              </div>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
