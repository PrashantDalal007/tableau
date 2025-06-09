// src/api/kpiApi.ts

import { MetricCard } from "../types";
import { allKpisMock } from "../mock/allKpisMock"; // adjust to your actual mock file
import { followedKpisMock as initialFollowedKpisMock } from "../mock/followedKpisMock";

let followedKpisMock = [...initialFollowedKpisMock];

export const followKPIApi = async (id: string): Promise<string> => {
  await new Promise((res) => setTimeout(res, 150));
  // Find in allKpisMock, add to followedKpisMock if not already present
  const found = allKpisMock.find((kpi) => kpi.id === id);
  if (found && !followedKpisMock.some((kpi) => kpi.id === id)) {
    followedKpisMock.push(found);
  }
  return id;
};

export const unfollowKPIApi = async (id: string): Promise<string> => {
  await new Promise((res) => setTimeout(res, 150));
  followedKpisMock = followedKpisMock.filter((kpi) => kpi.id !== id);
  return id;
};

export const fetchAllKPIsApi = async (): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 250));
  return allKpisMock;
};

export const fetchFollowedKPIsApi = async (): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 250));
  return followedKpisMock;
};

export const searchKPIsApi = async (query: string): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 200));
  if (!query.trim()) return allKpisMock;
  // Simple search by title, feel free to enhance
  return allKpisMock.filter(
    (kpi) =>
      kpi.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      (kpi.description &&
        kpi.description.toLowerCase().includes(query.trim().toLowerCase()))
  );
};
