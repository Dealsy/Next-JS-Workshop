"use client";

import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/40">
      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
        Interactive Demo
      </h3>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Count: {count}
      </button>
    </div>
  );
}
