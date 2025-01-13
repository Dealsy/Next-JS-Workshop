import { revalidatePath } from "next/cache";

/*
 * 💡 Solution: Understanding the 'use server' Directive
 *
 * Key Points:
 * 1. Server Actions must be marked with 'use server'
 * 2. They run exclusively on the server
 * 3. They can access server-only resources
 * 4. They need proper error handling
 * 5. UI needs to be revalidated after mutations
 */

// Simulated database
let todos: { id: number; title: string; completed: boolean }[] = [];
let todoIdCounter = 1;

// Define server actions at the module level
async function createTodo(formData: FormData) {
  "use server";

  const title = formData.get("title");

  // Validate input
  if (!title || typeof title !== "string") {
    throw new Error("Title is required");
  }

  // Create todo
  const todo = {
    id: todoIdCounter++,
    title,
    completed: false,
  };

  todos.push(todo);
  revalidatePath("/lessons/(exercises)/directives/use_server");
}

async function toggleTodo(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    revalidatePath("/lessons/(exercises)/directives/use_server");
  }
}

async function deleteTodo(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));
  todos = todos.filter((t) => t.id !== id);
  revalidatePath("/lessons/(exercises)/directives/use_server");
}

export default async function UseServerExercise() {
  return (
    <div className="max-w-xl mx-auto my-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Understanding use server</h1>
        <p className="text-gray-600">
          Solution: This example demonstrates how to use Server Actions for data
          mutations with proper error handling and UI updates.
        </p>
      </div>

      <div className="space-y-4">
        <form action={createTodo} className="flex gap-2">
          <input
            type="text"
            name="title"
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Add a new todo..."
            minLength={2}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </form>

        <ul className="divide-y">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="py-2 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <form action={toggleTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <button
                    type="submit"
                    className={`p-2 rounded ${
                      todo.completed ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    {todo.completed ? "✓" : "○"}
                  </button>
                </form>
                <span
                  className={todo.completed ? "line-through text-gray-500" : ""}
                >
                  {todo.title}
                </span>
              </div>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
