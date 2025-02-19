'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

// Define our types
type Todo = {
  id: number
  title: string
  completed: boolean
}

type Result<T = { success: boolean }> = { data: T; error?: never } | { data?: never; error: string }

// Zod schema for todo validation
const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
})

// This simulates a database
const todos: Todo[] = []
let todoIdCounter = 1

export async function createTodo(formData: FormData): Promise<Result<Todo>> {
  // Extract and validate the title from formData
  const result = todoSchema.safeParse({
    title: formData.get('title'),
  })

  if (!result.success) {
    return { error: result.error.errors[0].message }
  }

  // Create new todo
  const todo = {
    id: todoIdCounter++,
    title: result.data.title,
    completed: false,
  }

  // Add to our "database"
  todos.push(todo)

  // Revalidate the page to show the new todo
  revalidatePath('/use_server')

  return { data: todo }
}

export async function deleteTodo(formData: FormData): Promise<Result> {
  const id = Number(formData.get('id'))

  if (isNaN(id)) {
    return { error: 'Invalid todo ID' }
  }

  // Find the todo index
  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex === -1) {
    return { error: 'Todo not found' }
  }

  // Remove from our "database"
  todos.splice(todoIndex, 1)

  // Revalidate the page to show the updated list
  revalidatePath('/use_server')

  return { data: { success: true } }
}

export async function getTodos() {
  return todos
}
