// /src/types/index.ts

export type MetricCard = {
  id: string; // <-- REQUIRED for all KPIs
  title: string;
  value: string;
  percentage: string;
  percentageColor: "green" | "red";
  description: string;
  chartData: number[];
  currency: boolean;
  timeRange?: string;
  trendInsight?: string;
  summaryDate?: string;
  summaryValue?: string;
  rangeLow?: string; // Optional, used for range KPIs
  rangeHigh?: string; // Optional, used for range KPIs
  isFollowed?: boolean; // Optional, used for followed KPIs
  keyInsight?: string;
  topBreakdown?: { label: string; value: number }[];
  previousValue?: string;
};
