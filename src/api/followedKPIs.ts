// /src/api/followedKPIs.ts
import { MetricCard } from "../types";
import { metricsData } from "../mock/mockFollowedKPIs";

let followedList: MetricCard[] = [...metricsData];

export const fetchFollowedKPIs = async (): Promise<MetricCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(followedList);
    }, 400);
  });
};

export const addKPIToFollowed = async (metric: MetricCard): Promise<void> => {
  followedList.push(metric);
};
