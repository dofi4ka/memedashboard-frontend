import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface TopicsChartProps {
  chartData: Record<string, string | number>[];
  chartConfig: ChartConfig;
  visibleTopics: Record<string, boolean>;
  yAxisDomain: [number, number];
}

export function TopicsChart({
  chartData,
  chartConfig,
  visibleTopics,
  yAxisDomain,
}: TopicsChartProps) {
  if (chartData.length === 0 || Object.keys(chartConfig).length === 0) {
    return <p className="text-muted-foreground">Нет данных для отображения</p>;
  }

  return (
    <div className="m-4">
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="week"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            domain={yAxisDomain}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          {Object.entries(chartConfig)
            .filter(([key]) => visibleTopics[key])
            .map(([key, config]) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={config.color}
                fillOpacity={0.4}
                stroke={config.color}
              />
            ))}
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
