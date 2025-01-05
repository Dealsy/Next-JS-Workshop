import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getLessonContent } from "@/lib/lessons";
import CodeBlock from "./CodeBlock";
import Demo from "./Demo";
import { Skeleton } from "./ui/skeleton";
import Alert from "./alert";

const components = {
  pre: CodeBlock,
  Demo: Demo,
  Alert: Alert,
};

export default async function LessonContent({
  lessonId,
}: {
  lessonId: string;
}) {
  const { source } = await getLessonContent(lessonId);

  return (
    <div className="prose prose-slate max-w-none">
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
