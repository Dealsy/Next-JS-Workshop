

import { getLessonById, lessons } from "@/data/lessons";
import { notFound } from "next/navigation";
import LessonContent from "@/components/LessonContent";
import { Metadata } from "next";
import { BookOpen } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { lessonId: string };
}): Promise<Metadata> {
  const param = await params;
  const lesson = getLessonById(param.lessonId);
  if (!lesson) return {};
  return {
    title: `${lesson.title} | Your Course Name`,
    description: lesson.description,
  };
}

export default async function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  'use cache'
  const param = await params;
  const lesson = getLessonById(param.lessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <header className=" text-black p-8">
            <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                <BookOpen className="w-4 h-4 mr-1" />
                {lesson.difficulty}
              </span>
              <span className="inline-flex items-center bg-black  text-white text-xs px-3 py-1 rounded-full">
                {lesson.category}
              </span>
            </div>
          </header>

          <div className="p-8">
            <LessonContent lessonId={lesson.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
