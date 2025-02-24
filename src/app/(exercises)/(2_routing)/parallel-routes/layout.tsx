// Task 4: Update this layout to handle parallel routes

import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  analytics: ReactNode
  team: ReactNode
}

export default function Layout({ children, analytics, team }: LayoutProps) {
  return (
    <div>
      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add the parallel route slots here */}
      </div>
    </div>
  )
}
