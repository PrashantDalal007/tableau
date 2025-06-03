// /src/types/metric.ts

export interface BreakdownDataItem {
  name: string;
  value: number;
  change: number;
}

export interface MetricDetail {
  metricName: string;
  change: number;
  currentValue: number;
  previousValue: number;
  breakdown: {
    Category: BreakdownDataItem[];
    Subcategory: BreakdownDataItem[];
    ProductName: BreakdownDataItem[];
    ProductType: BreakdownDataItem[];
  };
}
