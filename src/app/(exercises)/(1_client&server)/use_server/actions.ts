'use server'

import { z } from 'zod'

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
  // Implement todo creation logic:
  // 1. Get the title from formData
  // 2. Create a new todo with a unique ID
  // 3. Add it to the todos array
  // 4. Return the new todo
}

export async function deleteTodo(formData: FormData): Promise<Result> {
  // Implement todo deletion logic:
  // 1. Get the todo ID from formData
  // 2. Remove the todo from the array
  // 3. Return success status
}

export async function getTodos() {
  return todos
}
