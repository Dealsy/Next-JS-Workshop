"use client";

import Link from "next/link";
import { Book, ChevronRight } from "lucide-react";
import { categories, lessons } from "@/constants";
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { getLessonPath } from "@/lib/utils";

function getLessonsBySection() {
  // Create sections from categories
  return Object.entries(categories).map(([key, value]) => ({
    id: key.toLowerCase().replace(/[&\s]+/g, "_"),
    title: value,
    category: value,
    lessons: lessons
      .filter((lesson) => lesson.category === value)
      .sort((a, b) => (a.order || 0) - (b.order || 0)),
  }));
}

export default function Sidebar() {
  const lessonSections = getLessonsBySection();

  return (
    <UISidebar variant="sidebar" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {lessonSections.map(
                (section) =>
                  // Only show sections that have lessons
                  section.lessons.length > 0 && (
                    <SidebarMenuItem key={section.id}>
                      <SidebarGroupLabel className="py-2">
                        {section.title}
                      </SidebarGroupLabel>
                      <SidebarMenu>
                        {section.lessons.map((lesson) => (
                          <SidebarMenuItem key={lesson.id} className="pl-2">
                            <Link
                              href={getLessonPath(lesson)}
                              passHref
                              legacyBehavior
                            >
                              <SidebarMenuButton
                                className="w-full justify-between"
                                size="sm"
                              >
                                <span className="truncate">{lesson.title}</span>
                                <ChevronRight className="h-4 w-4 opacity-50" />
                              </SidebarMenuButton>
                            </Link>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarMenuItem>
                  )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
}
