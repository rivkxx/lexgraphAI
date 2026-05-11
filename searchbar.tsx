"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-4 w-full">
      <input
        className="border p-3 rounded w-full"
        placeholder="Search legal concepts, cases, holdings..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        className="bg-black text-white px-6 rounded"
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
}
