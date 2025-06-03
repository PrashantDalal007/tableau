// /src/types/index.ts

export type MetricCard = {
  title: string;
  value: string;
  percentage: string;
  percentageColor: "green" | "red";
  description: string;
  chartData: number[];
  currency: boolean;
  timeRange?: string;
  trendInsight?: string;
  keyInsight?: string;
  topBreakdown?: { label: string; value: number }[];
  previousValue?: string; // ✅ ADD THIS
};
