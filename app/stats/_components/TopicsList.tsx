import { ChartConfig } from "@/components/ui/chart";

interface TopicsListProps {
  topicsData: { name: string; description: string }[];
  chartConfig: ChartConfig;
  visibleTopics: Record<string, boolean>;
  topicTotals: Record<string, number>;
  toggleTopicVisibility: (topicName: string) => void;
  showAllTopics: () => void;
  hideAllTopics: () => void;
}

export function TopicsList({
  topicsData,
  chartConfig,
  visibleTopics,
  topicTotals,
  toggleTopicVisibility,
  showAllTopics,
  hideAllTopics,
}: TopicsListProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Темы мемов</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={showAllTopics}
            className="px-3 py-1 text-xs rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            Показать все
          </button>
          <button
            onClick={hideAllTopics}
            className="px-3 py-1 text-xs rounded-md bg-muted hover:bg-muted/80 transition-colors"
          >
            Скрыть все
          </button>
          <p className="text-sm text-muted-foreground ml-2">
            Нажмите на тему, чтобы включить/выключить её на графике
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topicsData.map((topic) => {
          const config = chartConfig[topic.name];
          if (!config) return null;

          return (
            <div
              key={topic.name}
              className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                visibleTopics[topic.name]
                  ? "border-primary bg-primary/5"
                  : "border-muted bg-card opacity-60"
              }`}
              onClick={() => toggleTopicVisibility(topic.name)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: config.color }}
                />
                <h3 className="font-medium">{topic.name}</h3>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                    {topicTotals[topic.name] || 0} мемов
                  </span>
                  {visibleTopics[topic.name] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {topic.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
