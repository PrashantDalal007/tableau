// /src/mock/mockFollowedKPIs.ts

import { MetricCard } from "../types";

export const followedKpisMock: MetricCard[] = [
  {
    id: "aov",
    title: "Average Order Value (AOV)",
    value: "$619.89",
    percentage: "+4.1%",
    percentageColor: "green",
    previousValue: "$595.41",
    chartData: [620, 625, 630, 640, 635, 660, 991],
    timeRange: "Jan 1 – Jan 29, 2024",
    currency: true,
    summaryDate: "January 28, 2024",
    summaryValue: "$654.67",
    rangeLow: "$154.45",
    rangeHigh: "$1.2k",
    trendInsight:
      "An unfavorable trend has been detected for Average Order Value (AOV) that steepened 5 days ago.",
    description:
      "Average Order Value reflects buyer behavior post campaign. Spikes were seen around Jan 25 promotions, with high-ticket electronics and bundled orders driving the change.",
  },
  {
    id: "css",
    title: "Customer Satisfaction Score",
    value: "84.6%",
    percentage: "+2.3%",
    percentageColor: "green",
    previousValue: "82.3%",
    chartData: [80, 81, 84, 82, 84.6, 83.5, 84.2],
    timeRange: "Month to Date",
    currency: false,
    summaryDate: "January 28, 2024",
    summaryValue: "84.6%",
    rangeLow: "80%",
    rangeHigh: "90%",
    trendInsight:
      "Customer satisfaction has increased this period due to improved resolution times.",
    description:
      "Satisfaction scores rose sharply due to improved resolution times, automated follow-ups, and a new delivery partner achieving 96% punctuality.",
  },
  {
    id: "units-sold",
    title: "Units Sold",
    value: "3.1k",
    percentage: "-6.2%",
    percentageColor: "red",
    previousValue: "3.3k",
    chartData: [3200, 3300, 3100, 2950, 3100, 3080, 3000],
    timeRange: "Last 30 Days",
    currency: false,
    summaryDate: "January 28, 2024",
    summaryValue: "3.1k",
    rangeLow: "2.5k",
    rangeHigh: "3.5k",
    trendInsight:
      "A seasonal dip in units sold was detected, attributed to stock-outs and demand changes.",
    description:
      "Sales volume dropped notably in categories such as Fashion and Sports due to stock-outs and reduced seasonal demand. Marketing campaigns were paused mid-month.",
  },
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$1.27M",
    percentage: "+8.6%",
    percentageColor: "green",
    previousValue: "$1.17M",
    chartData: [1.1, 1.13, 1.17, 1.21, 1.25, 1.27, 1.23],
    timeRange: "Jan 1 – Jan 29, 2024",
    currency: true,
    summaryDate: "January 28, 2024",
    summaryValue: "$1.27M",
    rangeLow: "$1.0M",
    rangeHigh: "$1.4M",
    trendInsight:
      "Total revenue exceeded forecast, mainly due to upsell offers in Electronics.",
    description:
      "Total Revenue shows strong performance, with boosts from paid campaigns and bundled upsell offers in Electronics, Furniture, and Appliances.",
  },
  {
    id: "cart-abandon",
    title: "Cart Abandonment Rate",
    value: "19.3%",
    percentage: "+3.2%",
    percentageColor: "red",
    previousValue: "16.1%",
    chartData: [15.9, 16.1, 17.8, 18.5, 17.9, 19.3, 18.1],
    timeRange: "Month to Date",
    currency: false,
    summaryDate: "January 28, 2024",
    summaryValue: "19.3%",
    rangeLow: "15%",
    rangeHigh: "20%",
    trendInsight:
      "Cart abandonment spiked, possibly due to checkout bugs and payment issues.",
    description:
      "The cart abandonment spike is linked to unexpected shipping fees and recent payment gateway bugs during checkout. Mobile users were more impacted.",
  },
  {
    id: "new-customers",
    title: "New Customers",
    value: "2.4k",
    percentage: "-5.4%",
    percentageColor: "red",
    previousValue: "2.54k",
    chartData: [2600, 2500, 2450, 2430, 2440, 2410, 2400],
    timeRange: "Last 30 Days",
    currency: false,
    summaryDate: "January 28, 2024",
    summaryValue: "2.4k",
    rangeLow: "2.2k",
    rangeHigh: "2.7k",
    trendInsight:
      "New customer acquisition has decreased, especially via paid channels.",
    description:
      "While retention is stable, fewer new users are signing up due to reduced ad spend and search discoverability. Referral traffic also declined slightly.",
  },
];
