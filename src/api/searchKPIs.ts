import { MetricCard } from "../types";
import { fetchAllAvailableKPIs } from "./browseKPIs";
import { fetchFollowedKPIs } from "./followedKPIs";

export const searchKPIs = async (query: string): Promise<MetricCard[]> => {
  const [followed, browse] = await Promise.all([
    fetchFollowedKPIs(),
    fetchAllAvailableKPIs(),
  ]);

  const lower = query.toLowerCase().trim();
  const uniqueMap = new Map<string, MetricCard>();
  [...followed, ...browse].forEach((kpi) => {
    if (!uniqueMap.has(kpi.title)) {
      uniqueMap.set(kpi.title, kpi);
    }
  });

  const all = Array.from(uniqueMap.values());
  const results = all.filter((kpi) =>
    kpi.title.toLowerCase().includes(lower)
  );

  results.sort(
    (a, b) =>
      a.title.toLowerCase().indexOf(lower) -
      b.title.toLowerCase().indexOf(lower)
  );

  return results;
};
