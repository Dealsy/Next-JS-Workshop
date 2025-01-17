import { ExercisesUrl } from "@/components/exercises-url";
import { EXERCISE_URLS } from "@/constants";
import { Layout, Layers, Zap } from "lucide-react";

/*
 * Exercise: Layouts in Next.js
 *
 * 🎯 Goal: Learn how a nested layouts work
 *
 * 📝 File Structure:
 *  Update the code in the layout.tsx
 *
 * 📝 Info:
 * Go to the layout.tsx file for your instructions
 *
 */

export default function Page() {
  return (
    <>
      {/* Feel free to remove this */}
      <ExercisesUrl url={EXERCISE_URLS.layouts} />
      <div className="flex justify-center p-4 min-h-screen">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Welcome to Next.js Layouts!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            This page is ready for you to add a layout. Explore the power of
            Next.js!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <Layout className="w-8 h-8 text-gray-800 dark:text-white" />
              }
              title="Flexible Layouts"
              description="Create reusable layouts with ease in Next.js."
            />
            <FeatureCard
              icon={
                <Layers className="w-8 h-8 text-gray-800 dark:text-white" />
              }
              title="Nested Structures"
              description="Build complex UIs with nested layouts."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-gray-800 dark:text-white" />}
              title="Fast & Efficient"
              description="Optimized performance with Next.js layouts."
            />
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
