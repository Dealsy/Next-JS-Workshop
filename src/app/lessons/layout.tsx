"use client";
import { Home, Slash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { getLessonById } from "@/data/lessons";

function isNavigableSegment(segment: string): boolean {
  // Don't show segments that:
  // 1. Start with parentheses (like (config))
  // 2. Are numbered category folders (like 1_Client_Server)
  // 3. Are internal routing folders
  if (segment.startsWith("(")) return false;
  if (segment.match(/^\d+_/)) return false;
  if (segment === "lessons") return true;
  if (segment.includes("(")) return false;

  return true;
}

function formatSegment(segment: string): string {
  // Convert kebab-case to Title Case and handle special cases
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getBreadcrumbHref(segments: string[], index: number): string {
  const currentSegment = segments[index];

  // If it's a lesson ID, we need to include its category
  const lesson = getLessonById(currentSegment);
  if (lesson) {
    const categoryPath = lesson.category.toLowerCase().replace(/[&\s]+/g, "_");
    return `/lessons/${categoryPath}/${currentSegment}`;
  }

  // Otherwise, just join the path segments
  return `/${segments.slice(0, index + 1).join("/")}`;
}

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Filter out non-navigable segments
  const navigableSegments = pathSegments.filter(isNavigableSegment);

  return (
    <div className="min-h-screen">
      <nav className="bg-gray-100 dark:bg-gray-800/40 p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {navigableSegments.map((segment, index) => {
              const href = getBreadcrumbHref(navigableSegments, index);
              const isLast = index === navigableSegments.length - 1;

              return (
                <React.Fragment key={href}>
                  <BreadcrumbSeparator className="text-gray-500 dark:text-gray-400">
                    <Slash className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="capitalize text-gray-900 dark:text-gray-100">
                        {formatSegment(segment)}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link
                          href={href}
                          className="capitalize text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                        >
                          {formatSegment(segment)}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      {children}
    </div>
  );
}
