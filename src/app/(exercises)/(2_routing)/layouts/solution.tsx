import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

type HeaderProps = {
  username: string;
};

type SidebarProps = {
  links: Array<{
    href: string;
    label: string;
  }>;
};

function Header({ username }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b flex items-center justify-between px-6 z-10">
      <div className="flex items-center space-x-4">
        <span className="font-semibold">Welcome, {username}</span>
      </div>
      <Button variant="outline">Logout</Button>
    </header>
  );
}

function Sidebar({ links }: SidebarProps) {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-muted/50 p-4 overflow-y-auto">
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigationLinks = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header username="John Doe" />
      <Sidebar links={navigationLinks} />
      <main className="pt-16 pl-64">
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  );
}

// Example page content for testing the layout
export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <p>No recent activity</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold">Statistics</h2>
          <p>No statistics available</p>
        </Card>
      </div>
    </div>
  );
}
