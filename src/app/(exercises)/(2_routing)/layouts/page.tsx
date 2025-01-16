/**
 * Exercise: Implementing Layouts in Next.js
 *
 * Your task is to create a dashboard layout with the following requirements:
 * 1. A persistent header with user information
 * 2. A sidebar with navigation links
 * 3. A main content area that changes while preserving layout state
 *
 * Complete the TODOs below to implement the layout.
 */

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

// TODO: Implement the Header component
function Header({ username }: HeaderProps) {
  return (
    // Add your header implementation here
    // It should be a full-width header with:
    // - Username display
    // - Logout button
    <div>Header goes here</div>
  );
}

// TODO: Implement the Sidebar component
function Sidebar({ links }: SidebarProps) {
  return (
    // Add your sidebar implementation here
    // It should contain:
    // - Navigation links
    // - Fixed width of 64
    // - Full height
    <div>Sidebar goes here</div>
  );
}

// TODO: Implement the DashboardLayout component
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigationLinks = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    // Implement the layout structure here
    // Requirements:
    // - Full height layout
    // - Fixed position header
    // - Sidebar that scrolls independently
    // - Main content area that scrolls independently
    <div>Layout implementation goes here</div>
  );
}

// Example page content for testing the layout
export function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
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

/**
 * Reference Solution:
 *
 * Check src/app/lessons/(exercises)/(2_routing)/layouts/solution.tsx
 * after attempting the exercise.
 */
