"use client";

import { ChartConfig } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { StatsOverview } from "./_components/StatsOverview";
import { TopicsChart } from "./_components/TopicsChart";
import { TopicsList } from "./_components/TopicsList";

interface TopicCounts {
  [key: string]: number;
}

interface WeekStats {
  week: string;
  topic_counts: TopicCounts;
}

interface StatsResponse {
  stats: WeekStats[];
}

interface TopicsResponse {
  topics: { name: string; description: string }[];
}

export default function StatsPage() {
  const [stats, setStats] = useState<WeekStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});
  const [topicsData, setTopicsData] = useState<TopicsResponse["topics"]>([]);
  const [visibleTopics, setVisibleTopics] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const statsResponse = await fetch("/api/stats/weeks");
        if (!statsResponse.ok) {
          throw new Error("Не удалось загрузить статистику");
        }
        const statsData: StatsResponse = await statsResponse.json();

        const topicsResponse = await fetch("/api/topics");
        if (!topicsResponse.ok) {
          throw new Error("Не удалось загрузить список тем");
        }
        const topicsData: TopicsResponse = await topicsResponse.json();

        setStats(statsData.stats);
        setTopicsData(topicsData.topics);

        const config: ChartConfig = {};
        const initialVisibility: Record<string, boolean> = {};

        topicsData.topics.forEach((topic, index) => {
          const hue = (index * 137) % 360;
          config[topic.name] = {
            label: topic.name,
            color: `hsl(${hue}, 70%, 70%)`,
          };
          initialVisibility[topic.name] = true;
        });

        setChartConfig(config);
        setVisibleTopics(initialVisibility);
      } catch (err) {
        console.error(err);
        setError("Произошла ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTopicVisibility = (topicName: string) => {
    setVisibleTopics((prev) => ({
      ...prev,
      [topicName]: !prev[topicName],
    }));
  };

  const showAllTopics = () => {
    const allVisible = Object.keys(chartConfig).reduce((acc, topic) => {
      acc[topic] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setVisibleTopics(allVisible);
  };

  const hideAllTopics = () => {
    const allHidden = Object.keys(chartConfig).reduce((acc, topic) => {
      acc[topic] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setVisibleTopics(allHidden);
  };

  const chartData = stats
    .map((weekStat) => {
      const formattedDate = new Date(weekStat.week).toLocaleDateString(
        "ru-RU",
        {
          day: "numeric",
          month: "short",
        }
      );

      const dataPoint: Record<string, string | number> = {
        week: formattedDate,
        originalDate: new Date(weekStat.week).getTime(),
      };

      Object.keys(chartConfig).forEach((topic) => {
        dataPoint[topic] = 0;
      });

      Object.entries(weekStat.topic_counts).forEach(([topic, count]) => {
        dataPoint[topic] = count;
      });

      return dataPoint;
    })
    .sort((a, b) => (a.originalDate as number) - (b.originalDate as number))
    .map((dataPoint) => {
      const newDataPoint = { ...dataPoint };
      delete newDataPoint.originalDate;
      return newDataPoint;
    });

  const topicTotals = topicsData.reduce((acc, topic) => {
    acc[topic.name] = stats.reduce((sum, weekStat) => {
      return sum + (weekStat.topic_counts[topic.name] || 0);
    }, 0);
    return acc;
  }, {} as Record<string, number>);

  const maxWeeklyTotal = chartData.reduce((max, dataPoint) => {
    const weekTotal = Object.entries(dataPoint)
      .filter(([key]) => key !== "week")
      .reduce(
        (sum, [, value]) => sum + (typeof value === "number" ? value : 0),
        0
      );
    return Math.max(max, weekTotal);
  }, 0);

  const yAxisDomain: [number, number] = [0, Math.ceil(maxWeeklyTotal * 0.7)];

  const totalMemes = Object.values(topicTotals).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalTopics = topicsData.length;
  const totalWeeks = stats.length;
  const averageMemesPerWeek =
    totalWeeks > 0 ? Math.round(totalMemes / totalWeeks) : 0;

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 flex justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="bg-destructive/10 text-destructive p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Ошибка</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Статистика по темам
      </h1>

      <div className="mb-8">
        <StatsOverview
          totalMemes={totalMemes}
          totalTopics={totalTopics}
          totalWeeks={totalWeeks}
          averageMemesPerWeek={averageMemesPerWeek}
        />
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        {chartData.length > 0 && Object.keys(chartConfig).length > 0 ? (
          <div className="m-4">
            <TopicsChart
              chartData={chartData}
              chartConfig={chartConfig}
              visibleTopics={visibleTopics}
              yAxisDomain={yAxisDomain}
            />
          </div>
        ) : (
          <p className="text-muted-foreground">Нет данных для отображения</p>
        )}
      </div>

      <TopicsList
        topicsData={topicsData}
        chartConfig={chartConfig}
        visibleTopics={visibleTopics}
        topicTotals={topicTotals}
        toggleTopicVisibility={toggleTopicVisibility}
        showAllTopics={showAllTopics}
        hideAllTopics={hideAllTopics}
      />
    </div>
  );
}
