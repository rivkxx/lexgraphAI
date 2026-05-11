"use client";

import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CaseCard from "../../components/CaseCard";
import api from "../../lib/api";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const performSearch = async (query: string) => {
    const res = await api.get(`/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div className="p-10">
      <SearchBar onSearch={performSearch} />

      <div className="grid gap-6 mt-10">
        {results.map((r: any) => (
          <CaseCard key={r.id} caseData={r} />
        ))}
      </div>
    </div>
  );
}
