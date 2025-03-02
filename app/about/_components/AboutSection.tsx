import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Meme Dashboard
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary/80 mb-6">
              Meme Dashboard — это инновационная платформа для анализа и
              отслеживания трендов в мире мемов. Наш проект предоставляет
              уникальные инструменты для визуализации данных о популярности и
              распространении мемов в социальных сетях.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-primary/80 mb-6">
              Мы собираем и анализируем информацию о мемах из различных
              источников, чтобы предоставить вам наиболее полную картину
              мемологического ландшафта интернета.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
