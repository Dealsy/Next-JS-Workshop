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

  let folders;
  try {
    folders = await fs.readdir(lessonsDir);
  } catch (error) {
    // Only log error if it's not a "directory not found" error
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error("Error reading lessons directory:", error);
    }
    return <LessonUnderConstruction />;
  }

  // Find the matching category folder (with number prefix and lowercase)
  const categoryFolder = folders.find((folder) =>
    folder
      .toLowerCase()
      .includes(lesson.category.toLowerCase().replace(/[&\s]+/g, "_"))
  );

  if (!categoryFolder) {
    // Don't log an error - this is an expected state for lessons under development
    return <LessonUnderConstruction />;
  }

  // Read the MDX content
  let source;
  try {
    const mdxPath = path.join(
      lessonsDir,
      categoryFolder,
      lessonId,
      "index.mdx"
    );

    // Check if file exists first
    try {
      await fs.access(mdxPath);
    } catch {
      return <LessonUnderConstruction />;
    }

    source = await fs.readFile(mdxPath, "utf-8");
  } catch (error) {
    // Only log error if it's not a "file not found" error
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error("Error loading lesson content:", error);
    }
    return <LessonUnderConstruction />;
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

// Extract the "under construction" message into a reusable component
function LessonUnderConstruction() {
  return (
    <div className="text-center py-8">
      <h2 className="text-xl font-semibold mb-2">Lesson Under Construction</h2>
      <p className="text-muted-foreground">
        The content for this lesson is currently being developed. Please check
        back later.
      </p>
    </div>
  );
}
