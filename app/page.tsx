import { ChartExample } from "@/app/_components/WeeklyChart";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-primary text-white p-6 w-[100dvw] flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-2">
          Meme Dashboard{" "}
          <Image
            src="/pepe.png"
            alt="Pepe"
            width={52}
            height={28}
            className="w-[26px] h-[14px] md:w-[52px] md:h-[28px]"
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Добро пожаловать в мир где каждый мем имеет свой вклад в историю!
        </p>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 my-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Аналитика мемов в реальном времени
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6">
              Отслеживайте популярность, распространение и влияние мемов с
              помощью продвинутых инструментов аналитики. Получайте детальные
              еженедельные отчеты по трендам в социальных сетях.
            </p>
            <Button variant="default">
              Начать анализировать <LucideArrowRight className="w-4 h-4 ml-2" />
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
            <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
              * Самый популярный мем за последнюю неделю
            </p>
          </div>
        </div>

        <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 my-6">
            <ChartExample />
          </div>
          <div className="w-full md:w-1/2 my-6">
            <h2 className="text-3xl font-semibold mb-4">Визуализация данных</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Наши интерактивные графики помогут вам увидеть полную картину
              распространения мемов. Отслеживайте тренды, анализируйте пики
              популярности и выявляйте закономерности в вирусном контенте.
            </p>
            <Button variant="secondary">
              Исследовать тренды <LucideArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 my-6">
            <h2 className="text-3xl font-semibold mb-4">Умный поиск мемов</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Хочешь найти мем который когда-то давно увидел в интернете и лишь
              примерно знаешь его описание? Используйте наш продвинутый
              поисковый инструмент для нахождения любых мемов. Система машинного
              обучения поможет найти даже самые редкие мемы по описанию или
              похожему изображению.
            </p>
            <Button variant="secondary">
              Попробовать поиск <LucideArrowRight className="w-4 h-4 ml-2" />
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
      </div>
    </main>
  );
}
