'use client'

import { ExercisesUrl } from '@/components/exercises-url'
import { EXERCISE_URLS, EXERCISE_ROUTES } from '@/constants'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  const redirectSuccess = EXERCISE_ROUTES.redirect_success

  const route = Object.keys(EXERCISE_ROUTES).find(
    key => EXERCISE_ROUTES[key as keyof typeof EXERCISE_ROUTES] === pathName,
  )

  const exerciseUrl = EXERCISE_URLS[route as keyof typeof EXERCISE_URLS]

  if (!exerciseUrl) {
    return null
  }

  return (
    <div>
      {pathName === redirectSuccess ? null : <ExercisesUrl route={exerciseUrl} />}
      {children}
    </div>
  )
}
