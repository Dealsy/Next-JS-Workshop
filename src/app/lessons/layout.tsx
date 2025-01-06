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
  // Only show:
  // 1. The "lessons" segment
  // 2. The actual lesson ID
  // Skip:
  // 1. Group folders (client_server, routing, etc.)
  // 2. Config folders that start with (
  if (segment.startsWith("(")) return false;
  if (segment === "lessons") return true;

  // Check if this segment is a lesson ID
  const lesson = getLessonById(segment);
  if (lesson) return true;

  return false;
}

function formatSegment(segment: string): string {
  // If it's a lesson ID, show the lesson title
  const lesson = getLessonById(segment);
  if (lesson) {
    return lesson.title;
  }

  // Otherwise, capitalize the segment
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getBreadcrumbHref(segments: string[], index: number): string {
  const currentSegment = segments[index];

  // If it's a lesson ID, construct the full path with category
  const lesson = getLessonById(currentSegment);
  if (lesson) {
    const categoryPath = lesson.category.toLowerCase().replace(/[&\s]+/g, "_");
    return `/lessons/${categoryPath}/${currentSegment}`;
  }

  // For the lessons index
  if (currentSegment === "lessons") {
    return "/lessons";
  }

  return "#";
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
