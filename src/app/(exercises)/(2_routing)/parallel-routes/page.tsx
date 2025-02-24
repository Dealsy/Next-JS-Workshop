/**
 * 🎯 Exercise: Parallel Routes in Next.js
 *
 * In this exercise, you'll learn how to implement parallel routes using Next.js's @folder convention.
 * You'll build a dashboard-like interface where different components load independently and can be
 * displayed simultaneously in the same layout.
 *
 * 🎯 Tasks:
 * 1. Create two parallel routes using the @folder convention:
 *    - @analytics: Shows user analytics with a 2-second loading delay
 *    - @team: Shows team members with a 1-second loading delay
 *
 * 2. Implement functions in each route to fetch mock data:
 *    - Analytics data should include: total users, active users, and growth rate
 *    - Team data should include: a list of team members with names and roles
 *
 * 3. Add loading states for both parallel routes using loading.tsx files
 *
 * 4. Update the layout.tsx file to properly handle both parallel routes
 *
 * 🌟 Extra Credit:
 * 1. Add error handling using error.tsx files in each parallel route
 * 2. Implement a default.tsx for each slot to handle unmatched routes
 * 3. Add a third parallel route @notifications that loads last
 *
 * 📚 Resources:
 * - https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
 * - https://nextjs.org/docs/app/api-reference/file-conventions/loading
 */

export default function ParallelRoutesPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-8">
        This page demonstrates parallel routes in Next.js. Notice how different sections load
        independently.
      </p>

      {/* The parallel routes (@analytics and @team) will be rendered here by the layout */}
    </div>
  )
}
