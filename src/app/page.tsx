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
import { NumberCircle } from "@/components/number-circle";
import { StarBorder } from "@/components/ui/star-border";

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
            <Link href="/lessons">
              <StarBorder>Start Learning</StarBorder>
            </Link>
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

          <section className="mb-16 justify-center flex flex-col items-center max-w-3xl mx-auto bg-card/50 rounded-lg p-8 backdrop-blur-sm border">
            <h2 className="text-3xl font-bold mb-8 text-muted-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
              How to use this workshop?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <NumberCircle number={1} />
                <p className="text-muted-foreground">
                  Navigate through lessons using the sidebar, search bar, or
                  table of contents in the lessons page.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <NumberCircle number={2} />
                <p className="text-muted-foreground">
                  Complete exercises found at the bottom of applicable lessons
                  to practice what you&apos;ve learned.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <NumberCircle number={3} />
                <p className="text-muted-foreground">
                  Excercises are done with a combination of your editor and this
                  browser, As you work through the excercises you will be able
                  to see the changes you make in the browser in real time.
                </p>
              </div>
            </div>
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
