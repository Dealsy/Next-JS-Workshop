import { getLessonById, lessons } from "@/data/lessons";
import { notFound } from "next/navigation";
import LessonContent from "@/components/LessonContent";

export default async function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const param = await params;
  const lesson = getLessonById(param.lessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
          <div className="mt-4 flex gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {lesson.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {lesson.category}
            </span>
          </div>
        </header>

        <LessonContent lessonId={lesson.id} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
