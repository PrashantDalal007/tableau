import { browseMetricsData } from "../mock/mockBrowseKPIs";
import { MetricCard } from "../types";

export const fetchAllAvailableKPIs = async (): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return browseMetricsData;
};

export const addKPIToFollowing = async (
  title: string
): Promise<MetricCard | null> => {
  await new Promise((res) => setTimeout(res, 300));
  const metric = browseMetricsData.find((k) => k.title === title) || null;
  return metric;
};
