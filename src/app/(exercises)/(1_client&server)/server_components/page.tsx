'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

/*
 *  🚀 Exercise: Understanding Server Components
 *
 *  🎯 Goal: Convert this client component to a server component
 *
 *  🏋️‍♂️ Tasks:
 *  1. Move the client side code into a seprate file.
 *  2. Remove the use client directive from this file.
 *  3. Make the file an async function.
 *  4. Import the client component into the server component and render it.
 *
 *
 *  🧩 Extra Credit:
 *  1. Break the JSX out into separate components ( i.e Nav / Counter / Footer )
 *  2. Fetch and display data coming from @/data/data.ts - you'll need to import { getData } function from "@/data/data";
 *
 *  💡 Tips:
 *  - Server components cannot use client-specific APIs
 *  - Server components cannot use hooks like useState, useEffect, etc.
 */

export default function Page() {
  // 💡 Basic counter state - You'll need to move this state and logic to
  // a client component
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* This component is to tell you where the exercise is located. you may remove it for the exercise. */}

      {/* This is static conent, so it could be rednered on the server  */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Page Title</h1>
      </nav>

      {/* This is interactive content, so it must be rendered on the client */}
      <main className="grow flex flex-col items-center justify-center">
        <div className="flex flex-row gap-2 items-center justify-center">
          <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleDecrement}>
            <MinusIcon className="w-4 h-4" />
          </button>
          <p className="text-2xl font-bold">Count: {count}</p>
          <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleIncrement}>
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </main>
      {/* This is static content, so it could be rendered on the server */}
      <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <p>Footer</p>
      </footer>
    </div>
  )
}
