'use client'

import { Code, ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function ExercisesUrl({ route }: { route: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <Accordion type="single" defaultValue="instructions" collapsible>
        <AccordionItem value="instructions">
          <AccordionTrigger>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <h1 className="text-xl font-bold">Ready to Code? 🚀</h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">Open your code editor and head to:</p>
              <div>
                <code className="block w-full bg-muted text-foreground rounded-md p-3 font-mono text-sm">
                  {route}
                </code>
              </div>
              <div className="bg-muted rounded-md p-4">
                <p className="text-muted-foreground text-sm flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 shrink-0" />
                  <span>
                    Instructions to this exercise are in the file, use this page to see your
                    changes.
                  </span>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
