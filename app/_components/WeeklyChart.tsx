"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", cats: 186, dogs: 80, politics: 45 },
  { month: "February", cats: 305, dogs: 200, politics: 100 },
  { month: "March", cats: 237, dogs: 120, politics: 150 },
  { month: "April", cats: 73, dogs: 190, politics: 50 },
  { month: "May", cats: 209, dogs: 130, politics: 100 },
  { month: "June", cats: 214, dogs: 140, politics: 160 },
];

const chartConfig = {
  cats: {
    label: "Котята",
    color: "hsl(60, 70%, 70%)",
  },
  dogs: {
    label: "Собачки",
    color: "hsl(120, 70%, 70%)",
  },
  politics: {
    label: "Политика",
    color: "hsl(180, 70%, 70%)",
  },
} satisfies ChartConfig;

export function ChartExample() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
        }}
        stackOffset="expand"
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        {Object.entries(chartConfig).map(([key, config]) => (
          <Area
            key={key}
            dataKey={key}
            type="natural"
            fill={config.color}
            fillOpacity={0.4}
            stroke={config.color}
            stackId="a"
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
}
