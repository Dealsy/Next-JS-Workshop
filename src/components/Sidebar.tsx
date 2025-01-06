"use client";

import Link from "next/link";
import { Book, ChevronRight } from "lucide-react";
import { Lesson, lessons } from "@/data/lessons";
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

// Helper to generate the correct lesson path
function getLessonPath(lesson: Lesson) {
  // Convert category to folder-friendly format
  const categoryPath = lesson.category.toLowerCase().replace(/[&\s]+/g, "_");

  return `/lessons/${categoryPath}/${lesson.id}`;
}

function getLessonsBySection() {
  const sections = [
    {
      id: "1_Client_Server",
      title: "Client & Server",
      category: "Client & Server",
      path: "client_server",
    },
    {
      id: "2_Routing",
      title: "Routing",
      category: "Routing",
      path: "routing",
    },
  ];

  return sections.map((section) => ({
    ...section,
    lessons: lessons
      .filter((lesson) => lesson.category === section.category)
      .sort((a, b) => (a.order || 0) - (b.order || 0)),
  }));
}

export default function Sidebar() {
  const lessonSections = getLessonsBySection();

  return (
    <UISidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader className="border-b p-[32px]">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6" />
          <span className="text-lg font-semibold">Next.js Workshop</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {lessonSections.map((section) => (
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
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
}
