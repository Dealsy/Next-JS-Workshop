"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function UseRouterSolution() {
  const router = useRouter();
  const link = "linking-and-navigation/redirect";

  const handleNavigation = () => {
    setTimeout(() => {
      router.push(link);
    }, 2000);
  };

  const handleBack = () => {
    router.back();
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
          Go to Destination (2s delay)
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
