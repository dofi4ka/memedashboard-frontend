"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorState } from "./_components/ErrorState";
import { LoadingState } from "./_components/LoadingState";
import { PostContent } from "./_components/PostContent";
import { PostData } from "./_components/types";

export default function PostPage() {
  const params = useParams();
  const uuid = params.uuid as string;

  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/post/${uuid}`);

        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        setError("Произошла ошибка при загрузке мема");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [uuid]);

  if (loading) {
    return <LoadingState />;
  }

  if (error || !post) {
    return <ErrorState error={error || "Мем не найден"} />;
  }

  return <PostContent postData={post} />;
}
