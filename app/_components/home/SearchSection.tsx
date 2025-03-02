import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SearchSection() {
  return (
    <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col md:flex-row">
      <div className="w-full md:w-1/2 my-6">
        <h2 className="text-3xl font-semibold mb-4">Умный поиск мемов</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Ищете мем, который видели раньше, но помните только примерное
          описание? Наш поиск поможет найти нужный мем быстро и легко. Умная
          система найдет даже редкие мемы по вашему описанию.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/search">
            Попробовать поиск <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/search.svg"
          alt="Meme"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
