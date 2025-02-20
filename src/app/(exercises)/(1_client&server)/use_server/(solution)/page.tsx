'use client'

import { ExercisesContainer } from '@/components/exerciseContainer'
import { createTodo, deleteTodo, getTodos } from './actions'
import { useEffect, useState } from 'react'

type Todo = {
  id: number
  title: string
  completed: boolean
}

function TodoForm({ onSuccess }: { onSuccess: () => void }) {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          const result = await createTodo(formData)
          if (result.error) {
            console.error(result.error)
          } else {
            onSuccess()
          }
        }}
        className="flex gap-2">
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

function DeleteButton({ id, onSuccess }: { id: number; onSuccess: () => void }) {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          const result = await deleteTodo(formData)
          if (result.error) {
            console.error(result.error)
          } else {
            onSuccess()
          }
        }}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </form>
    </div>
  )
}

export default function UseServerSolution() {
  const [todos, setTodos] = useState<Todo[]>([])

  const refreshTodos = async () => {
    const updatedTodos = await getTodos()
    setTodos(updatedTodos)
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
