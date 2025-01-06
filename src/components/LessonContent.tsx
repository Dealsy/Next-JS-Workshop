import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getLessonById } from "@/data/lessons";
import CodeBlock from "./CodeBlock";
import Demo from "./Demo";
import { Skeleton } from "./ui/skeleton";
import Alert from "./alert";
import { InteractiveExercises } from "./interactive-exercises";
import path from "path";
import fs from "fs/promises";

const components = {
  pre: CodeBlock,
  Demo: Demo,
  Alert: Alert,
  InteractiveExercises: InteractiveExercises,
};

export default async function LessonContent({
  lessonId,
}: {
  lessonId: string;
}) {
  const lesson = getLessonById(lessonId);
  if (!lesson) {
    return null;
  }

  // Get all folders in the lessons directory
  const lessonsDir = path.join(process.cwd(), "src/content/lessons");
  const folders = await fs.readdir(lessonsDir);

  // Find the matching category folder (with number prefix and lowercase)
  const categoryFolder = folders.find((folder) =>
    folder
      .toLowerCase()
      .includes(lesson.category.toLowerCase().replace(/[&\s]+/g, "_"))
  );

  if (!categoryFolder) {
    console.error(`Category folder not found for ${lesson.category}`);
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold mb-2">
          Lesson Under Construction
        </h2>
        <p className="text-muted-foreground">
          The content for this lesson is currently being developed. Please check
          back later.
        </p>
      </div>
    );
  }

  // Read the MDX content
  let source;
  try {
    source = await fs.readFile(
      path.join(lessonsDir, categoryFolder, lessonId, "index.mdx"),
      "utf-8"
    );
  } catch (error) {
    console.error("Error loading lesson content:", error);
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold mb-2">
          Lesson Under Construction
        </h2>
        <p className="text-muted-foreground">
          The content for this lesson is currently being developed. Please check
          back later.
        </p>
      </div>
    );
  }

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <Suspense
        fallback={
          <div className="max-w-none">
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-64 w-full mb-4" />
            <Skeleton className="h-20 w-full mb-4" />
            <Skeleton className="h-52 w-full mb-4" />
          </div>
        }
      >
        <MDXRemote source={source} components={components} />
      </Suspense>
    </div>
  );
}
