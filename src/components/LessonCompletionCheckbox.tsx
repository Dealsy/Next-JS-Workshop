'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useLessonProgressContext } from '@/context/LessonProgressContext'
import { useClickConfetti } from '@/hooks/use-click-confetti'

type LessonCompletionCheckboxProps = {
  lessonId: string
}

// This component is used to display the lesson completion checkbox in the lessons
export function CompletionCheckbox({ lessonId }: LessonCompletionCheckboxProps) {
  const { isLessonCompleted, toggleLessonCompletion } = useLessonProgressContext()
  const completed = isLessonCompleted(lessonId)
  // This is a hook that is used to trigger confetti when the lesson is completed
  const [confetti, triggerConfetti] = useClickConfetti({ duration: 7000 })

  const onCompleted = (newCheckedState: boolean) => {
    // Only trigger confetti when checking the box
    if (newCheckedState === true) {
      triggerConfetti()
    }
    toggleLessonCompletion(lessonId)
  }

  return (
    <>
      {confetti}
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`lesson-complete-${lessonId}`}
          checked={completed}
          onCheckedChange={onCompleted}
        />
        <Label htmlFor={`lesson-complete-${lessonId}`} className="text-sm text-muted-foreground">
          Mark lesson as completed
        </Label>
      </div>
    </>
  )
}
