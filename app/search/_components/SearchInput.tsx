import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchInput({ query, setQuery }: SearchInputProps) {
  return (
    <Input
      type="text"
      value={query}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      placeholder="Опишите мем..."
      className="w-full p-4 text-base"
    />
  );
}
