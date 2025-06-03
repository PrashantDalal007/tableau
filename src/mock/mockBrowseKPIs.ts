// /src/mock/mockBrowseKPIs.ts

import { MetricCard } from "../types";

export const browseMetricsData: MetricCard[] = [
  {
    title: "Conversion Rate",
    value: "2.84%",
    percentage: "+0.4%",
    percentageColor: "green",
    previousValue: "+0.12%",
    chartData: [2.1, 2.3, 2.5, 2.6, 2.7, 2.84],
    currency: false,
    timeRange: "Last 14 Days",
    trendInsight: "📈 Conversion rates have improved over the last 2 weeks.",
    keyInsight:
      "Landing page optimization and improved load time helped increase conversions.",
    description:
      "This rise in conversion rate is attributed to better mobile experience and targeted email campaigns driving more qualified leads.",
    topBreakdown: [
      { label: "Email Campaign", value: 1.4 },
      { label: "Landing Page A/B Test", value: 0.9 },
      { label: "SEO Traffic", value: 0.54 },
    ],
  },
  {
    title: "Refund Rate",
    value: "1.7%",
    percentage: "-0.6%",
    percentageColor: "green",
    previousValue: "-0.2%",
    chartData: [2.4, 2.2, 2.0, 1.9, 1.8, 1.7],
    currency: false,
    timeRange: "Month to Date",
    trendInsight: "📉 Refunds have decreased significantly this month.",
    keyInsight:
      "Policy change and better product descriptions reduced refund volume.",
    description:
      "Lower refund rates indicate better customer satisfaction and improved clarity in product expectations. Electronics and Apparel were major contributors.",
    topBreakdown: [
      { label: "Electronics", value: 0.8 },
      { label: "Apparel", value: 0.5 },
      { label: "Accessories", value: 0.4 },
    ],
  },
  {
    title: "Active Users",
    value: "22.5k",
    percentage: "+3.9%",
    percentageColor: "green",
    previousValue: "+850",
    chartData: [20000, 20500, 21000, 21500, 22000, 22500],
    currency: false,
    timeRange: "Last 7 Days",
    trendInsight: "📈 Daily active usage rose due to a new loyalty feature.",
    keyInsight:
      "The cashback rewards program helped improve engagement and daily visits.",
    description:
      "Active users increased after gamification and reward systems were rolled out. The usage trend is healthy across all age groups.",
    topBreakdown: [
      { label: "Age 25–34", value: 9500 },
      { label: "Age 35–44", value: 7300 },
      { label: "Age 18–24", value: 5700 },
    ],
  },
];
