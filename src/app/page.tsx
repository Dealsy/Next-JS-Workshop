import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { lessons } from "@/constants";
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
import { MorphingText } from "@/components/ui/morphing-text";

export default function Home() {
  return (
    <AuroraBackground>
      <main className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-12 flex-grow">
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-muted-foreground">
              <MorphingText texts={["Welcome to Next.js Learning Workshop"]} />
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master Next.js 15+ through hands-on, interactive lessons
            </p>
            <Button asChild size="lg">
              <Link href="/lessons">Start Learning</Link>
            </Button>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
              Why This Workshop?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hands-on Learning",
                  description:
                    "Practice real-world Next.js concepts through interactive exercises.",
                },
                {
                  title: "Latest Features",
                  description:
                    "Stay up-to-date with the newest Next.js 15+ features and best practices.",
                },
                {
                  title: "Expert Guidance",
                  description:
                    "Learn from carefully crafted lessons and compare with reference solutions.",
                },
              ].map((item, index) => (
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

          <section>
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
              Featured Lessons
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {lessons.slice(0, 4).map((lesson) => (
                <Card key={lesson.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-bold">{lesson.title}</CardTitle>
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
                        Start Lesson <ArrowRightIcon className="ml-2 w-4 h-4" />
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
