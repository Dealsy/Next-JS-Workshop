/*
 * 🚀 Exercise: Understanding the 'use server' Directive
 *
 * 🎯 Goal: Create a todo list application using Server Actions
 *
 * 🏋️‍♂️ Tasks:
 * 1. Implement the createTodo server action you will need to add the
 *    'use server' directive to the function
 * 2. Add proper error handling and validation
 * 3. Update the UI after successful creation
 * 4. Add todo deletion
 *
 * 🧩 Extra Credit:
 * 1. Add todo completion toggle
 * . Add optimistic updates
 *
 * 💡 Tips:
 * - Server Actions must be async functions
 * - Use formData to get form values
 * - Remember to revalidate the path after mutations
 */

import { ExercisesContainer } from '@/components/exerciseContainer'

// This simulates a database
let todos: { id: number; title: string; completed: boolean }[] = []
let todoIdCounter = 1

// Add 'use server' directive here and implement the createTodo action
async function createTodo(formData: FormData) {
  // Implement todo creation
}

async function deleteTodo(formData: FormData) {
  // Implement todo deletion
}

export default function UseServerExercise() {
  return (
    <ExercisesContainer>
      <div className="space-y-4">
        <form className="flex gap-2">
          <input
            type="text"
            name="title"
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Add a new todo..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Todo
          </button>
        </form>

        <ul className="divide-y">
          {todos.map(todo => (
            <li key={todo.id} className="py-2">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </ExercisesContainer>
  )
}
