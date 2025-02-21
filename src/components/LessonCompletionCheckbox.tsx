'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useLessonProgressContext } from '@/context/LessonProgressContext'

type LessonCompletionCheckboxProps = {
  lessonId: string
}

export function CompletionCheckbox({ lessonId }: LessonCompletionCheckboxProps) {
  const { isLessonCompleted, toggleLessonCompletion } = useLessonProgressContext()
  const completed = isLessonCompleted(lessonId)

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`lesson-complete-${lessonId}`}
        checked={completed}
        onCheckedChange={() => toggleLessonCompletion(lessonId)}
      />
      <Label htmlFor={`lesson-complete-${lessonId}`} className="text-sm text-muted-foreground">
        Mark lesson as completed
      </Label>
    </div>
  )
}
