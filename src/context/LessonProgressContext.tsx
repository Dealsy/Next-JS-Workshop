'use client'

import { createContext, useContext, ReactNode, useState, useCallback } from 'react'
import { lessons } from '@/constants'

const STORAGE_KEY = 'completed-lessons'

export type LessonProgress = {
  completedLessons: string[]
  isLessonCompleted: (lessonId: string) => boolean
  toggleLessonCompletion: (lessonId: string) => void
  getCompletionPercentage: () => number
}

const LessonProgressContext = createContext<LessonProgress | null>(null)

function getStoredLessons(): string[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function LessonProgressProvider({ children }: { children: ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>(getStoredLessons)

  const isLessonCompleted = useCallback(
    (lessonId: string) => completedLessons.includes(lessonId),
    [completedLessons],
  )

  const toggleLessonCompletion = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newCompletedLessons = prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCompletedLessons))
      }
      return newCompletedLessons
    })
  }, [])

  const getCompletionPercentage = useCallback(() => {
    const displayedLessons = lessons.filter(lesson => lesson.isDisplayed)
    const totalLessons = displayedLessons.length
    if (totalLessons === 0) return 0

    const completedDisplayedLessons = completedLessons.filter(id =>
      displayedLessons.some(lesson => lesson.id === id),
    ).length

    return Math.round((completedDisplayedLessons / totalLessons) * 100)
  }, [completedLessons])

  return (
    <LessonProgressContext.Provider
      value={{
        completedLessons,
        isLessonCompleted,
        toggleLessonCompletion,
        getCompletionPercentage,
      }}>
      {children}
    </LessonProgressContext.Provider>
  )
}

export function useLessonProgressContext() {
  const context = useContext(LessonProgressContext)
  if (!context) {
    throw new Error('useLessonProgressContext must be used within a LessonProgressProvider')
  }
  return context
}
