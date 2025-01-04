import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getLessonContent } from "@/lib/lessons";
import CodeBlock from "./CodeBlock";
import Demo from "./Demo";

const components = {
  pre: CodeBlock,
  Demo: Demo,
};

export default async function LessonContent({
  lessonId,
}: {
  lessonId: string;
}) {
  const { source } = await getLessonContent(lessonId);

  return (
    <div className="prose prose-slate max-w-none">
      <Suspense fallback={<div>Loading...</div>}>
        <MDXRemote source={source} components={components} />
      </Suspense>
    </div>
  );
}
