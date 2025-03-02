import ExampleChart from "@/app/_components/home/ExampleChart";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function VisualizationSection() {
  return (
    <div className="my-12 flex items-center justify-between gap-8 mx-10 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 my-6">
        <ExampleChart />
      </div>
      <div className="w-full md:w-1/2 my-6">
        <h2 className="text-3xl font-semibold mb-4">Визуализация данных</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Наши интерактивные графики помогут вам увидеть полную картину
          распространения мемов. Отслеживайте тренды, анализируйте пики
          популярности и выявляйте закономерности в вирусном контенте.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/stats">
            Исследовать тренды <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
