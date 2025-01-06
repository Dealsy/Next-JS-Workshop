export function ExercisesUrl({ url }: { url: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-full mb-10">
      <p className="text-gray-600 dark:text-gray-400">
        The exercise is located at:
      </p>
      <code className="text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md p-2">
        {url}
      </code>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Read the instructions in the file and complete the exercise, the updates
        will appear here as you work.
      </p>
    </div>
  );
}
