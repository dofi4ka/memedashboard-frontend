import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AnalyticsSection() {
  return (
    <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col md:flex-row">
      <div className="w-full md:w-1/2 my-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          Аналитика мемов в реальном времени
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6">
          Отслеживайте популярность, распространение и влияние мемов с помощью
          наших инструментов аналитики. Получайте еженедельные отчеты по трендам
          в социальных сетях.
        </p>
        <Button variant="default" asChild>
          <Link href="/stats">
            Начать анализировать <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/meme1.png"
          alt="Meme"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
