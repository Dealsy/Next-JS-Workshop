"use client";

import { Code, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExercisesUrl({ url }: { url: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <Accordion type="single" defaultValue="instructions" collapsible>
        <AccordionItem value="instructions">
          <AccordionTrigger>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>Exercise Instructions</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                It's time to open your code editor and start coding!
              </p>
              <div>
                <p className="text-muted-foreground mb-2">Head to:</p>
                <code className="block w-full bg-muted text-foreground rounded-md p-3 font-mono text-sm">
                  {url}
                </code>
              </div>
              <div className="bg-muted rounded-md p-4">
                <p className="text-muted-foreground text-sm flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Read the instructions in the file and complete the exercise.
                    The updates will appear here as you work.
                  </span>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
