import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

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

export function SearchLogic() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery] = useDebounce(query, 500);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const lastFetchTimeRef = useRef<number>(0);
  const isLoadingRef = useRef<boolean>(false);

  const PAGE_SIZE = 6;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const fetchResults = useCallback(
    async (searchQuery: string, pageNum: number, reset = false) => {
      if (!searchQuery.trim()) {
        if (reset) setResults([]);
        return;
      }

      const now = Date.now();
      if (now - lastFetchTimeRef.current < 300) {
        return;
      }

      if (isLoadingRef.current) {
        return;
      }

      try {
        setLoading(true);
        isLoadingRef.current = true;
        lastFetchTimeRef.current = now;
        setError("");

        const response = await fetch(
          `/api/search?query=${encodeURIComponent(
            searchQuery
          )}&page=${pageNum}&page_size=${PAGE_SIZE}`
        );

        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }

        const data = await response.json();

        if (data.length < PAGE_SIZE) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        if (reset) {
          setResults(data);
        } else {
          setResults((prev) => [...prev, ...data]);
        }
      } catch (err) {
        setError("Произошла ошибка при загрузке результатов");
        console.error(err);
      } finally {
        setLoading(false);
        isLoadingRef.current = false;
      }
    },
    []
  );

  useEffect(() => {
    setCurrentPage(1);
    fetchResults(debouncedQuery, 1, true);

    if (debouncedQuery) {
      router.push(`/search?q=${encodeURIComponent(debouncedQuery)}`, {
        scroll: false,
      });
    } else {
      router.push("/search", { scroll: false });
    }
  }, [debouncedQuery, fetchResults, router]);

  useEffect(() => {
    if (
      inView &&
      hasMore &&
      !loading &&
      debouncedQuery &&
      !isLoadingRef.current
    ) {
      const now = Date.now();
      if (now - lastFetchTimeRef.current >= 1000) {
        setCurrentPage((prevPage) => {
          const nextPage = prevPage + 1;
          fetchResults(debouncedQuery, nextPage);
          return nextPage;
        });
      }
    }
  }, [inView, hasMore, loading, debouncedQuery, fetchResults, currentPage]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Поиск мемов
      </h1>

      <div className="mb-8">
        <SearchInput query={query} setQuery={setQuery} />
      </div>

      <SearchResults
        results={results}
        loading={loading}
        error={error}
        hasMore={hasMore}
        debouncedQuery={debouncedQuery}
        loadingRef={ref}
      />
    </div>
  );
}
