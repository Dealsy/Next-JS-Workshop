"use client";

import { ExercisesUrl } from "@/components/exercises-url";
import { EXERCISE_URLS } from "@/constants";
import { ExercisesContainer } from "@/components/exerciseContainer";

/*
 * 🚀 Exercise: Understanding the 'use client' Directive
 *
 * 🎯 Goal: Create a counter component that demonstrates why we need 'use client'
 *
 * 🏋️‍♂️ Tasks:
 * 1. Update the counter function by creating a counter button and counter display
 * 2. Remove the 'use client' directive from the top of this file and
 *    take notice of the errors
 * 2. Fix the errors by adding the 'use client' directive  the top of this file
 *
 * 🧩 Extra Credit:
 * 1. Add a reset button
 * 2. Add a custom increment amount
 * 3. Add localStorage persistence
 *
 * 💡 Tips:
 * - The 'use client' directive is needed when trying to do things on the client side for things like:
 * - Event handlers
 * - React hooks
 * - Browser APIs
 * - Try to keep client components as small as possible
 */

function Counter() {
  // Implement the counter state here

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Counter Example</h2>

      {/*  Add your counter display and buttons here */}

      {/* 💯 Extra Credit: Add reset button and custom increment */}
    </div>
  );
}

// 🚨 This is what the error will look like without 'use client':
// Error: useState can only be used in Client Components. Add the "use client" directive at the top of the file to use it.

export default function UseClientExercise() {
  return (
    <ExercisesContainer>
      <ExercisesUrl url={EXERCISE_URLS.use_client} />
      <Counter />
    </ExercisesContainer>
  );
}
