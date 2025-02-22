'use client'

import { useLessonProgressContext } from '@/context/LessonProgressContext'

type LessonContentWrapperProps = {
  children: React.ReactNode
  lessonId: string
}

export function LessonContentWrapper({ children, lessonId }: LessonContentWrapperProps) {
  const { isLessonCompleted } = useLessonProgressContext()
  const completed = isLessonCompleted(lessonId)

  return (
    <div
      className={`space-y-8 rounded-lg p-6 border-2 transition-colors duration-300 ${
        completed ? 'border-green-500/50 shadow-xl shadow-green-500/50' : 'border-transparent'
      }`}>
      {children}
    </div>
  )
}
