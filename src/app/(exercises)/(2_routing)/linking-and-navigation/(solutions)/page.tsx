import { EXERCISE_ROUTES } from '@/constants'
import Link from 'next/link'

export default function LinkingAndNavigation() {
  const link = EXERCISE_ROUTES.use_router

  return (
    <div className="space-y-8 p-20">
      <h1 className="text-2xl font-bold">Exercise 1: Link Component</h1>

      <div className="space-y-4">
        <Link href={link} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Go to useRouter
        </Link>
      </div>
    </div>
  )
}
