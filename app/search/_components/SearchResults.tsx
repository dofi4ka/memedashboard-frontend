import { PostCardMini } from "@/app/_components/PostCards";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "./LoadingSpinner";

interface SearchResult {
  id: string;
  text: string;
  description: string;
  photos: string[];
  likes: number;
  views: number;
  date: number;
  url: string;
  topic: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  error: string;
  hasMore: boolean;
  debouncedQuery: string;
  loadingRef: (node?: Element | null) => void;
}

export function SearchResults({
  results,
  loading,
  error,
  hasMore,
  debouncedQuery,
  loadingRef,
}: SearchResultsProps) {
  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results.length === 0 && !loading && debouncedQuery && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Ничего не найдено</p>
        </div>
      )}

      {results.length === 0 && !debouncedQuery && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Введите запрос для поиска мемов
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <PostCardMini key={result.id} postData={result} />
        ))}
      </div>

      {hasMore && (
        <div ref={loadingRef} className="h-10 w-full my-4">
          {loading && <LoadingSpinner />}
        </div>
      )}
    </>
  );
}
