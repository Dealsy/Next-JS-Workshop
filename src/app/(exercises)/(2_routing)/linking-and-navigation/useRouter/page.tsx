"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ExercisesContainer } from "@/components/exerciseContainer";

/*
 * 📚 Exercise 2: Programmatic Navigation with useRouter
 * --------------------------------------------------
 * Now let's learn how to navigate programmatically using the useRouter hook!
 *
 * Tasks:
 * 1. Import useRouter from 'next/navigation'
 * 2. Initialize the router using the useRouter hook
 * 3. Create a button that when clicked:
 *    - Waits 2 seconds (use setTimeout)
 *    - Then navigates to '/redirect'
 * 4. Create a back button that navigates back to the previous page
 *
 * 💡 Tips:
 * - useRouter provides methods like: push(), replace(), back(), forward()
 */

export default function Page() {
  // Initialize the router here

  // use this link as the url to navigate to
  const link = "linking-and-navigation/redirect";

  const handleNavigation = () => {
    // Use the router to navigate to '/redirect'
  };

  const handleBack = () => {
    // Use the router to go back to the previous page
  };

  return (
    <div className="space-y-4 p-20 flex flex-col gap-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Exercise 2: useRouter Hook</h1>
      <p>Complete the tasks below:</p>

      {/* Task 1: Programmatic Navigation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          Task 1: Programmatic Navigation
        </h2>
        <Button onClick={handleNavigation} className="px-4 py-2 rounded">
          Go to Destination
        </Button>
      </div>

      {/* Task 2: Go Back */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Task 2: Go Back</h2>
        <Button
          onClick={handleBack}
          className="px-4 py-2 rounded"
          variant="back"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
