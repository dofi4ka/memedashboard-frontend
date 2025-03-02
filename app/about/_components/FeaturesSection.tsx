import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-primary/80">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Аналитика трендов",
      description:
        "Отслеживайте популярность различных тем мемов и их изменение во времени.",
    },
    {
      title: "Умный поиск",
      description:
        "Используйте наш продвинутый поисковый инструмент для нахождения мемов по описанию.",
    },
    {
      title: "Визуализация данных",
      description:
        "Наглядное представление статистики по темам мемов с возможностью фильтрации.",
    },
  ];

  return (
    <Card className="mb-8">
      <CardHeader className="pb-0">
        <CardTitle className="text-xl sm:text-2xl font-semibold">
          Наши возможности
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
