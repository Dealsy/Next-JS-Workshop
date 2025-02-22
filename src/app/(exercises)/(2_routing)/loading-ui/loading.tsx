import { Skeleton } from '@/components/ui/skeleton'

/**
 * 🏋️‍♂️ Loading UI Exercise
 *
 * In Next.js, loading.tsx is a special file that creates instant loading states using React Suspense.
 * It is automatically wrapped in a Suspense boundary and shown while the page content is loading.
 *
 * 🎯 Tasks:
 * 1. Create a loading UI that shows a skeleton layout while content is loading
 * 2. Match the layout of the page.tsx file
 *
 *
 * 📝 Resources:
 * - Next.js Loading UI: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 * - React Suspense: https://react.dev/reference/react/Suspense
 */

// Note: You can use the Skeleton component imported above for the actualy skeleton UI
// Even know there is a solutions file, I recommend just trying to build your own skeleton UI
// You can refrence the solution file if you need to see how to use the Skeleton component

// TODO: Implement the loading UI
export default function Loading() {
  return (
    <div className="space-y-4 p-10">
      {/* Header skeleton */}
      <div className="h-6 w-32">loading...</div>

      {/* 💡 Add content skeletons */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* TODO: Create a grid of skeleton cards */}
        {/* Tip: Use Array.from() to create multiple skeleton items */}
      </div>
    </div>
  )
}
