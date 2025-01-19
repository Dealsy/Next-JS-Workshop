import { ExercisesUrl } from "@/components/exercises-url";
import { EXERCISE_URLS } from "@/constants";
import Link from "next/link";

/*
 * 🎯 Navigation in Next.js - Learning Journey
 *
 * Welcome! In this exercise, you'll learn different ways to navigate between pages in Next.js.
 * We'll cover everything from basic links to advanced server-side redirects.
 *
 * 📚 Exercise 1: Client-side Navigation with Link
 * ------------------------------------------
 * First, let's use the Link component for basic navigation.
 *
 * Tasks:
 * 1. Import the Link component from 'next/link'
 * 2. Create a link below that navigates to '/useRouter'
 * 3. Style it as a nice button using Tailwind
 *
 * 💡 Tip: The Link component accepts all the same props as an <a> tag
 */

export default function LinkingAndNavigation() {
  // use this link as the href in your Link component - href={link}
  const link = "linking-and-navigation/useRouter";

  return (
    <div className="space-y-8 p-20">
      <ExercisesUrl url={EXERCISE_URLS.linking_and_navigation} />

      <h1 className="text-2xl font-bold">Exercise 1: Link Component</h1>

      <div className="space-y-4">{/* Add your Link component here */}</div>
    </div>
  );
}
