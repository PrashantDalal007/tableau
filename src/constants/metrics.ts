// /src/constants/metrics.ts

import { MetricCard } from "../types";

export const metricsData: MetricCard[] = [
  {
    title: "Units Sold",
    value: "3.8k",
    percentage: "+5.5%",
    percentageColor: "green",
    description:
      "Compared to the last month, Units Sold increased by 196. Men, Women, and Gear increased the most.",
    chartData: [2300, 2800, 3400, 3800],
    currency: false,
  },
  {
    title: "Returns",
    value: "$24.6k",
    percentage: "-15.6%",
    percentageColor: "green",
    description:
      "The trend for Returns changed 5 days ago and is now increasing at a faster rate.",
    chartData: [114.3, 6000, 18000, 24600],
    currency: true,
  },
  {
    title: "Total Sales",
    value: "$502.4k",
    percentage: "-11.1%",
    percentageColor: "red",
    description:
      "Total Sales changed 8 days ago and is now increasing at a slower rate.",
    chartData: [210000, 350000, 450000, 502400],
    currency: true,
  },
  {
    title: "Delivery Days",
    value: "4.2",
    percentage: "-2.3%",
    percentageColor: "green",
    description:
      "Delivery days improved this month, indicating better fulfillment times.",
    chartData: [6.1, 5.2, 4.8, 4.2],
    currency: false,
  },
  {
    title: "Customer Satisfaction",
    value: "92%",
    percentage: "+1.8%",
    percentageColor: "green",
    description:
      "Customer satisfaction increased slightly due to faster service and improved quality.",
    chartData: [85, 88, 90, 92],
    currency: false,
  },
  {
    title: "Active Users",
    value: "12.3k",
    percentage: "+3.1%",
    percentageColor: "green",
    description:
      "The number of active users grew steadily this month across mobile and web.",
    chartData: [9000, 10000, 11200, 12300],
    currency: false,
  },
  {
    title: "New Signups",
    value: "1.2k",
    percentage: "+8.6%",
    percentageColor: "green",
    description:
      "Marketing campaigns led to a boost in new user registrations.",
    chartData: [600, 850, 1000, 1200],
    currency: false,
  },
  {
    title: "Average Order Value",
    value: "$617.00",
    percentage: "+2.1%",
    percentageColor: "green",
    description:
      "The average order value increased slightly compared to last month.",
    chartData: [590, 605, 612, 617],
    currency: true,
  },
];
