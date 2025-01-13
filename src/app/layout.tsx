import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/code.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Learning Workshop",
  description: "Interactive workshop to learn Next.js 15+ concepts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <Suspense fallback={<div>Loading...</div>}>
              <SidebarProvider defaultOpen>
                <Sidebar />
                <main className="flex-1 flex flex-col">
                  <Header />
                  <div className="flex-1 overflow-auto">
                    <div className="flex bg-background flex-grow flex-col min-h-screen">
                      {children}
                    </div>
                  </div>
                  <Footer />
                </main>
              </SidebarProvider>
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
