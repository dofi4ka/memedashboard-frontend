import Image from "next/image";
import Link from "next/link";

interface PostData {
  id: string;
  text: string;
  description: string;
  photos: string[];
  views: number;
  likes: number;
  date: number;
  url: string;
  topic: string;
}

export function PostCardMini({ postData }: { postData: PostData }) {
  return (
    <Link href={`/post/${postData.id}`} key={postData.id}>
      <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
        {postData.photos.length > 0 && (
          <div className="relative h-64 w-full">
            <Image
              src={postData.photos[0]}
              alt={postData.text}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{postData.text}</h2>
          <p className="text-muted-foreground mb-4 line-clamp-3 overflow-hidden">
            {postData.description}
          </p>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>👁️ {postData.views}</span>
            <span>❤️ {postData.likes}</span>
          </div>
          <div className="mt-2">
            <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
              {postData.topic}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PostCardFull({ postData }: { postData: PostData }) {
  const postDate = new Date(postData.date * 1000);
  const formattedDate = postDate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{postData.text}</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-muted-foreground">
            Опубликован: {formattedDate}
          </div>
          <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded">
            {postData.topic}
          </div>
        </div>

        {postData.photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl h-[500px]">
              <Image
                src={postData.photos[0]}
                alt={postData.text}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        )}

        <div className="prose dark:prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-2">Описание</h2>
          <p>{postData.description}</p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-red-500">❤️</span> {postData.likes}
            </span>
            <span className="flex items-center gap-1">
              <span>👁️</span> {postData.views}
            </span>
          </div>

          <a
            href={postData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Оригинальный источник
          </a>
        </div>
      </div>
    </div>
  );
}
