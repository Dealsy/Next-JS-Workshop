import { getLessonById } from '@/data/lessons'
import { notFound } from 'next/navigation'
import LessonContent from '@/components/LessonContent'
import { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { difficulties, lessons } from '@/constants'

/*
 * DO NOT EDIT
 *
 * This page is used to create the lesson pages
 */

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const param = await params

  const [lessonId] = param.slug
  const lesson = getLessonById(lessonId)
  if (!lesson) return {}
  return {
    title: `${lesson.title} | Your Course Name`,
    description: lesson.description,
  }
}

export default async function LessonPage({ params }: { params: { slug: string[] } }) {
  const param = await params

  const [category, lessonId] = param.slug
  const lesson = getLessonById(lessonId)

  if (!lesson) {
    notFound()
  }

  // Verify that the category matches the lesson
  const expectedCategory = lesson.category.toLowerCase().replace(/[&\s]+/g, '_')
  if (category !== expectedCategory) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-full md:max-w-2xl lg:max-w-3xl 2xl:max-w-7xl mx-auto">
          <CardHeader className="space-y-4">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            <p className="text-muted-foreground">{lesson.description}</p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {difficulties[lesson.difficulty]}
              </Badge>
              <Badge variant="outline">{lesson.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <LessonContent lessonId={lesson.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return lessons.map(lesson => ({
    slug: [lesson.category.toLowerCase().replace(/[&\s]+/g, '_'), lesson.id],
  }))
}
