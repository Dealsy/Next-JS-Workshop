import { ExercisesContainer } from "@/components/exerciseContainer";
import Link from "next/link";
import { posts } from "../data";

// The base URL for our dynamic routes
const href = `/lessons/(exercises)/(routing)/dynamic_routing/solution`;

/*
 * This is the main page that lists all blog posts.
 * It demonstrates:
 * 1. How to import and use shared data
 * 2. How to link to dynamic routes
 * 3. How to structure a list of content that links to individual pages
 */
export default function DynamicRoutingExercise() {
  return (
    <ExercisesContainer>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            // Each Link creates a client-side navigation to the dynamic route
            <Link
              key={post.slug}
              href={`${href}/${post.slug}`}
              className="block p-4 rounded-lg border hover:border-foreground/50 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground">{post.content}</p>
            </Link>
          ))}
        </div>
      </div>
    </ExercisesContainer>
  );
}
