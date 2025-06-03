// /src/api/followedKPIs.ts
import { MetricCard } from "../types";
import { metricsData } from "../mock/mockFollowedKPIs";

export const fetchFollowedKPIs = async (): Promise<MetricCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(metricsData);
    }, 400);
  });
};
