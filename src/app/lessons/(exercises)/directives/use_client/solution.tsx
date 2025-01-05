"use client";

import { useState, useEffect } from "react";

/*
 * 💡 Solution: Understanding the 'use client' Directive
 *
 * Key Points:
 * 1. The 'use client' directive is required because we're using:
 *    - React hooks (useState, useEffect)
 *    - Browser APIs (localStorage)
 *    - Event handlers (onClick)
 *
 * 2. Without 'use client', you'll get errors because these features
 *    require client-side JavaScript execution
 *
 * 3. The 'use client' directive tells React that this component needs to
 *    access the client side environment
 */

function Counter() {
  // 💡 Basic counter state
  const [count, setCount] = useState(() => {
    // 💯 Extra Credit 3: localStorage persistence
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("counter");
      return saved ? Number(saved) : 0;
    }
    return 0;
  });

  // 💯 Extra Credit 2: Custom increment
  const [incrementBy, setIncrementBy] = useState(1);

  // 💡 Persist count to localStorage
  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Counter Example</h2>

      <div className="text-2xl font-bold mb-4">Count: {count}</div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setCount((c) => c + incrementBy)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>

        {/* 💯 Extra Credit 1: Reset button */}
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {/* 💯 Extra Credit 2: Custom increment amount */}
      <div className="flex items-center gap-2">
        <label className="text-sm">Increment by:</label>
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20"
        />
      </div>
    </div>
  );
}

export default function UseClientExercise() {
  return (
    <div className="max-w-xl mx-auto my-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Understanding use client</h1>
        <p className="text-gray-600">
          Solution: This example demonstrates why we need the &apos;use
          client&apos; directive when using React features that require
          client-side JavaScript.
        </p>
      </div>

      <Counter />
    </div>
  );
}
