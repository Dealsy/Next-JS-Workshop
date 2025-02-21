import { getLessonById } from '@/data/lessons'
import path from 'path'
import fs from 'fs/promises'
import { CompletionCheckbox } from './LessonCompletionCheckbox'

export default async function LessonContent({ lessonId }: { lessonId: string }) {
  const lesson = getLessonById(lessonId)
  if (!lesson) {
    return null
  }

  // Get all folders in the lessons directory
  const lessonsDir = path.join(process.cwd(), 'src/content/lessons')

  let folders
  try {
    folders = await fs.readdir(lessonsDir)
  } catch (error) {
    // Only log error if it's not a "directory not found" error
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error('Error reading lessons directory:', error)
    }
    return <LessonUnderConstruction />
  }

  // Find the matching category folder (with number prefix and lowercase)
  const categoryFolder = folders.find(folder =>
    folder.toLowerCase().includes(lesson.category.toLowerCase().replace(/[&\s]+/g, '_')),
  )

  if (!categoryFolder) {
    // Don't log an error - this is an expected state for lessons under development
    return <LessonUnderConstruction />
  }

  const mdxPath = path.join(lessonsDir, categoryFolder, lessonId, 'index.mdx')

  // Check if file exists first
  try {
    await fs.access(mdxPath)
  } catch {
    return <LessonUnderConstruction />
  }

  const Content = (await import(`@/content/lessons/${categoryFolder}/${lessonId}/index.mdx`))
    .default

  return (
    <div className="space-y-8">
      <div className="prose prose-slate max-w-none dark:prose-invert prose-code:text-purple-600 dark:prose-code:text-[#80cbc4] prose-code:before:content-none prose-code:after:content-none">
        <Content />
      </div>
      <div className="border-t pt-8">
        <CompletionCheckbox lessonId={lessonId} />
      </div>
    </div>
  )
}

// Extract the "under construction" message into a reusable component
function LessonUnderConstruction() {
  return (
    <div className="text-center py-8 ">
      <h2 className="text-xl font-semibold mb-2">Lesson Under Construction</h2>
      <p className="text-muted-foreground">
        The content for this lesson is currently being developed. Please check back later.
      </p>
    </div>
  )
}
