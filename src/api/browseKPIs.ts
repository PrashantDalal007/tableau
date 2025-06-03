import { browseMetricsData } from "../mock/mockBrowseKPIs";
import { MetricCard } from "../types";

export const fetchAllAvailableKPIs = async (): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return browseMetricsData;
};
