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
 *
 * 🧩 Extra Credit:
 * 1. Add todo completion toggle
 * 2. Add todo deletion
 * 3. Add optimistic updates
 *
 * 💡 Tips:
 * - Server Actions must be async functions
 * - Use formData to get form values
 * - Remember to revalidate the path after mutations
 */

// This simulates a database
let todos: { id: number; title: string; completed: boolean }[] = [];
let nextId = 1;

// Add 'use server' directive here and implement the createTodo action
async function createTodo(formData: FormData) {
  // Implement todo creation
}

export default function UseServerExercise() {
  return (
    <div className="max-w-xl mx-auto my-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Understanding use server</h1>
        <p className="text-gray-600">
          In this exercise, you&apos;ll learn how to use Server Actions to
          handle form submissions and data mutations.
        </p>
      </div>

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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </form>

        <ul className="divide-y">
          {todos.map((todo) => (
            <li key={todo.id} className="py-2">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
