'use client'

import Link from 'next/link'
import { ChevronRight, CheckCircle } from 'lucide-react'
import { categories, lessons } from '@/constants'
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { getLessonPath } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useLessonProgressContext } from '@/context/LessonProgressContext'
import { Progress } from '@/components/ui/progress'

function getLessonsBySection() {
  // Create sections from categories
  return Object.entries(categories).map(([key, value]) => ({
    id: key.toLowerCase().replace(/[&\s]+/g, '_'),
    title: value,
    category: value,
    lessons: lessons
      .filter(lesson => lesson.category === value && lesson.isDisplayed)
      .sort((a, b) => (a.order || 0) - (b.order || 0)),
  }))
}

export default function Sidebar() {
  const lessonSections = getLessonsBySection()
  const pathname = usePathname()
  const { isLessonCompleted, getCompletionPercentage } = useLessonProgressContext()
  const completionPercentage = getCompletionPercentage()

  return (
    <UISidebar variant="sidebar" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="px-4 py-2">
              <div className="text-sm text-muted-foreground mb-2">Overall Progress</div>
              <Progress value={completionPercentage} className="w-full" />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {completionPercentage}%
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {lessonSections.map(
                section =>
                  // Only show sections that have lessons
                  section.lessons.length > 0 && (
                    <SidebarMenuItem key={section.id}>
                      <SidebarGroupLabel className="py-2">{section.title}</SidebarGroupLabel>
                      <SidebarMenu>
                        {section.lessons.map(lesson => {
                          const isCompleted = isLessonCompleted(lesson.id)
                          return (
                            <SidebarMenuItem key={`${lesson.id}-${isCompleted}`} className="pl-2">
                              <Link href={getLessonPath(lesson)}>
                                <SidebarMenuButton
                                  className={`w-full justify-between ${
                                    pathname === getLessonPath(lesson)
                                      ? 'bg-accent text-accent-foreground'
                                      : ''
                                  }`}
                                  size="sm">
                                  <span className="truncate">{lesson.title}</span>
                                  <div className="flex items-center space-x-2">
                                    {isCompleted && (
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                    )}
                                    <ChevronRight className="h-4 w-4 opacity-50" />
                                  </div>
                                </SidebarMenuButton>
                              </Link>
                            </SidebarMenuItem>
                          )
                        })}
                      </SidebarMenu>
                    </SidebarMenuItem>
                  ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  )
}
