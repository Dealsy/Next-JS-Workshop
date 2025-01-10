import { ExercisesContainer } from "@/components/exerciseContainer";
import { ExercisesUrl } from "@/components/exercises-url";

/*
 * Exercise: Dynamic Routing in Next.js
 *
 * 🎯 Goal: Create a blog post system using dynamic routes
 *
 * 📝 File Structure:
 * First, create this folder structure in the current directory:
 * /[slug]/
 *    └── page.tsx    <- This is where you'll implement the dynamic route
 *
 * 📝 Tasks:
 * 1. Create the [slug] folder and page.tsx file inside it
 * 2. Import the posts data and types from "../data"
 * 3. Implement the BlogPost component with proper type-safe params
 * 4. Add validation for the slug parameter using notFound()
 * 5. Implement generateStaticParams for static generation
 *
 * 💡 Tips:
 * - The [slug] in the folder name is what makes it a dynamic route
 * - Import { posts, type PostSlug } from "../data" in your page.tsx
 * - Use posts.find() to get the post matching the slug
 * - Use notFound() from "next/navigation" for invalid slugs
 * - Use generateStaticParams to pre-render all posts
 */

// This is the main page that will display the blog posts
// It will link to the [slug] page for each post
export default function DynamicRoutingExercise() {
  return (
    <ExercisesContainer>
      <ExercisesUrl url="/src/app/lessons/(exercises)/(2_routing)/dynamic_routing/page.tsx" />
      <div>
        <h1>TODO: Show blog post here</h1>
      </div>
    </ExercisesContainer>
  );
}

export function generateStaticParams() {
  // 🔧 TODO: Implement static params generation
  // Return an array of params for static generation
  return [];
}
