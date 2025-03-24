("use client");
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import React from "react";

const PieChartComponent = () => {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#00c92e",
    },
    safari: {
      label: "Safari",
      color: "red",
    },
    firefox: {
      label: "Firefox",
      color: "#fe8f01",
    },
    edge: {
      label: "Edge",
      color: "#09c8f1",
    },
    other: {
      label: "Other",
      color: "#f90450",
    },
  };

  return (
    <Card className="flex flex-col h-full dark:bg-gray-900 dark:text-text-dark">
      <CardHeader className="items-center pb-2 border-2 border-custom-white border-b-greyish-blue-dark dark:border-gray-900 dark:border-b-border-dark dark:text-text-dark">
        <CardTitle>Pie Chart - Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart className="flex ">
            <Pie data={chartData} dataKey="visitors" />

            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
