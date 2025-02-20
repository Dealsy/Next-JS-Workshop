'use client'

import { ExercisesContainer } from '@/components/exerciseContainer'
import { createTodo, deleteTodo, getTodos } from './actions'
import { useEffect, useState } from 'react'

/*
 * 🚀 Exercise: Understanding the 'use server' Directive
 *
 * 🎯 Goal: Create a todo list application using Server Actions
 *
 * 🏋️‍♂️ Tasks:
 * 1. Open actions.ts and implement the createTodo server action
 *    - Extract the title from formData
 *    - Create a new todo with a unique ID
 *    - Add proper error handling and validation with Zod
 *
 * 2. Implement the deleteTodo server action
 *    - Extract the todo ID from formData
 *    - Remove the todo from the array
 *    - Add error handling
 *
 * 3. Update this component to:
 *    - Use the server actions in the forms
 *    - Display the current todos
 *    - Show loading and error states
 *
 *  🧩 Extra Credit:
 *   - Add revalidatePath to the server actions so the UI updates when a todo is created or deleted
 *
 * 💡 Tips:
 * - Check the Result type in actions.ts for proper error handling
 * - Use formData.get('title') to get form input values
 * - Remember to handle both success and error cases
 *
 *
 *
 */

type Todo = {
  id: number
  title: string
  completed: boolean
}

// TODO: Implement this component to handle form submissions
// Hint: Use the form action prop to call the createTodo server action
function TodoForm({ onSuccess }: { onSuccess: () => void }) {
  // onSuccess is a function that will be called when the form is submitted

  return (
    <div>
      <form className="flex gap-2">
        <input
          type="text"
          name="title"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo..."
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// TODO: Implement this component to handle todo deletion
// Hint: Use a hidden input to pass the todo ID to the server action
function DeleteButton({ id, onSuccess }: { id: number; onSuccess: () => void }) {
  return (
    <div>
      <form>
        <button
          type="submit"
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </form>
    </div>
  )
}

export default function UseServerExercise() {
  const [todos, setTodos] = useState<Todo[]>([])

  const refreshTodos = async () => {
    // TODO: Fetch todos using the getTodos server action
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  return (
    <ExercisesContainer>
      <div className="space-y-4">
        <TodoForm onSuccess={refreshTodos} />

        {todos.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No todos yet. Add one above!</p>
        ) : (
          <ul className="divide-y">
            {todos.map(todo => (
              <li key={todo.id} className="py-2 flex items-center justify-between">
                <span>{todo.title}</span>
                <DeleteButton id={todo.id} onSuccess={refreshTodos} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </ExercisesContainer>
  )
}
