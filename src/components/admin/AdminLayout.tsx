import { NavLink, Outlet } from "react-router-dom";
import { Package, FolderTree, Settings, ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

const tabs = [
  { to: "/admin", label: "Produse", icon: Package, end: true },
  { to: "/admin/categories", label: "Categorii", icon: FolderTree },
  { to: "/admin/settings", label: "Setări site", icon: Settings },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(340 40% 97%)" }}>
      <header className="border-b bg-card/80 backdrop-blur sticky top-0 z-30" style={{ borderColor: "hsl(340 30% 85%)" }}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden sm:inline-block text-xs font-semibold tracking-widest uppercase text-primary px-3 py-1 rounded-full bg-primary/10">
              Admin
            </span>
          </div>
          <NavLink
            to="/"
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Înapoi la site
          </NavLink>
        </div>
        <nav className="container mx-auto px-4 flex gap-1 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.end}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`
              }
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
