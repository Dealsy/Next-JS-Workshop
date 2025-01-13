import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { features, lessons } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getLessonPath } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <main className="flex flex-col min-h-screen p-8">
        <div className="container mx-auto px-4 py-12 flex-grow">
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-muted-foreground">
              Welcome to Next.js Learning Workshop
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master Next.js 15+ through hands-on, interactive lessons and
              exercises.
            </p>
            <Button asChild size="lg">
              <Link href="/lessons">Start Learning</Link>
            </Button>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
              What&apos;s in this workshop?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16  justify-center flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground prose">
              How to use this workshop?
            </h2>
            <p className="text-muted-foreground mb-6 prose">
              To use this workshop, you can either use the sidebar to navigate
              through the lessons, use the search bar to find a specific lesson,
              or use the table of contents in the lessons page.
            </p>

            <p className="text-muted-foreground mb-6 prose">
              Most lessons contain a excercise to complete, if the lesson has an
              excercise, you will find a link to it at the bottom of that
              lesson.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
              Featured Lessons
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {lessons
                .filter((lesson) => lesson.featured)
                .map((lesson) => (
                  <Card key={lesson.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-bold">
                        {lesson.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {lesson.description}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="link" className="p-0">
                        <Link
                          href={getLessonPath(lesson)}
                          className="inline-flex items-center"
                        >
                          Start Lesson{" "}
                          <ArrowRightIcon className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </section>
        </div>
      </main>
    </AuroraBackground>
  );
}
