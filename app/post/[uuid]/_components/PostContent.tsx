import { PostCardFull } from "@/app/_components/PostCards";
import { PostData } from "./types";

interface PostContentProps {
  postData: PostData;
}

export function PostContent({ postData }: PostContentProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      <PostCardFull postData={postData} />
    </div>
  );
}
