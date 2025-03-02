"use client";

import { Suspense } from "react";
import { SearchLogic } from "./_components/SearchLogic";

export default function SearchPage() {
  return (
    <Suspense
      fallback={<div className="container mx-auto py-8 px-4">Загрузка...</div>}
    >
      <SearchLogic />
    </Suspense>
  );
}
