// /src/api/metricApi.ts

import { mockMetricDetail } from "../mock/metricDetailMock";
import { MetricDetail } from "../types/metric";

export const fetchMetricDetail = async (
  metricId: string
): Promise<MetricDetail> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMetricDetail);
    }, 500);
  });
};
