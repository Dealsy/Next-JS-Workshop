import { ExercisesUrl } from "@/components/exercises-url";
import { EXERCISE_URLS } from "@/constants";
import Link from "next/link";

export default function LinkingAndNavigationSolution() {
  const link = "linking-and-navigation/useRouter";

  return (
    <div className="space-y-8 p-20">
      <ExercisesUrl url={EXERCISE_URLS.linking_and_navigation} />

      <h1 className="text-2xl font-bold">Exercise 1: Link Component</h1>

      <div className="space-y-4">
        <Link
          href={link}
          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Go to Exercise 2
        </Link>
      </div>
    </div>
  );
}
