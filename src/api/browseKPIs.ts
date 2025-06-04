import { browseMetricsData } from "../mock/mockBrowseKPIs";
import { MetricCard } from "../types";

let browseList: MetricCard[] = [...browseMetricsData];

export const fetchAllAvailableKPIs = async (): Promise<MetricCard[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return browseList;
};

export const removeKPIFromBrowse = async (title: string): Promise<void> => {
  browseList = browseList.filter((kpi) => kpi.title !== title);
};
