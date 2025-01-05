import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { lessons } from "@/data/lessons";
import Pagination from "@/components/Pagination";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LESSONS_PER_PAGE = 6;

export default async function Lessons({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const startIndex = (currentPage - 1) * LESSONS_PER_PAGE;
  const endIndex = startIndex + LESSONS_PER_PAGE;
  const currentLessons = lessons.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Lessons</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLessons.map((lesson) => (
          <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lesson.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0">
                <Link
                  href={`/lessons/${lesson.id}`}
                  className="inline-flex items-center"
                >
                  Start Lesson <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalItems={lessons.length}
          itemsPerPage={LESSONS_PER_PAGE}
        />
      </div>
    </div>
  );
}
