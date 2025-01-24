'use client'

import { CheckCircle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { categories, statuses } from '@/constants'
import Link from 'next/link'
import { Category, getLessonsByCategory, Lesson } from '@/data/lessons'
import { getLessonPath } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type LessonStatus = 'completed' | 'upcoming'

type LessonWithStatus = Lesson & {
  status?: LessonStatus
}

type LessonItem = {
  title: string
  description: string
  status: LessonStatus
  href: string
}

type TopicSection = {
  title: string
  lessons: LessonItem[]
  isCompleted: boolean
}

// Transform the lessons data into the roadmap format
const transformLessonsToRoadmap = (): TopicSection[] => {
  return Object.entries(categories).map(([key, title]) => {
    const categoryLessons = getLessonsByCategory(key as Category) as LessonWithStatus[]

    const lessons = categoryLessons.map(lesson => ({
      title: lesson.title,
      description: lesson.description,
      status: lesson.status || statuses.upcoming,
      href: getLessonPath(lesson),
    }))

    const isCompleted =
      lessons.length > 0 && lessons.every(lesson => lesson.status === statuses.completed)

    return {
      title,
      lessons,
      isCompleted,
    }
  })
}

export default function Roadmap() {
  const workshopData = transformLessonsToRoadmap()

  const totalLessons = workshopData.reduce((sum, section) => sum + section.lessons.length, 0)
  const completedLessons = workshopData.reduce(
    (sum, section) =>
      sum + section.lessons.filter(lesson => lesson.status === statuses.completed).length,
    0,
  )
  const progressPercentage = (completedLessons / totalLessons) * 100

  // Get all section titles to set as default open values
  const defaultOpenValues = workshopData.map((_, index) => `item-${index}`)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 transition-colors duration-300 bg-white dark:bg-black">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Next.js Workshop Roadmap
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
            Overall Progress
          </h2>
          <Progress value={progressPercentage} className="w-full" />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>

        <Accordion type="multiple" defaultValue={defaultOpenValues} className="space-y-4">
          {workshopData.map((section, sectionIndex) => (
            <AccordionItem
              key={sectionIndex}
              value={`item-${sectionIndex}`}
              className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
                section.isCompleted
                  ? 'border-green-500 dark:border-green-700'
                  : 'dark:border-gray-700'
              }`}>
              <AccordionTrigger
                className={`px-4 transition-colors duration-300 ${
                  section.isCompleted
                    ? 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {section.title}
                  </h2>
                  {section.isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 space-y-2">
                {section.lessons.map((lesson, lessonIndex) => (
                  <Link
                    key={lessonIndex}
                    href={lesson.href}
                    className={`block p-3 rounded-md transition-all duration-300 ${
                      lesson.status === statuses.completed
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'bg-white dark:bg-gray-800'
                    } hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600`}>
                    <div className="flex items-center">
                      <CheckCircle
                        className={`w-5 h-5 mr-3 ${
                          lesson.status === statuses.completed
                            ? 'text-green-500'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">{lesson.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
