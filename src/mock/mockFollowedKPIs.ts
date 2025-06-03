// /src/mock/mockFollowedKPIs.ts

import { MetricCard } from "../types";

export const metricsData: MetricCard[] = [
  {
    title: "Average Order Value (AOV)",
    value: "$619.89",
    percentage: "+4.1%",
    percentageColor: "green",
    previousValue: "+$24.48",
    chartData: [666, 680, 650, 700, 620, 991],
    currency: true,
    timeRange: "Jan 1 – Jan 29, 2024",
    trendInsight:
      "📉 An unfavorable trend has been detected for AOV that steepened 5 days ago.",
    keyInsight:
      "AOV was $654.67 on January 28, 2024 and was within the expected range of $154.45 to $1.2k.",
    description:
      "Average Order Value reflects buyer behavior post campaign. Spikes were seen around Jan 25 promotions, with high-ticket electronics and bundled orders driving the change.",
    topBreakdown: [
      { label: "Electronics", value: 385.2 },
      { label: "Furniture", value: 310.7 },
      { label: "Home Decor", value: 275.4 },
    ],
  },
  {
    title: "Customer Satisfaction Score",
    value: "84.6%",
    percentage: "+2.3%",
    percentageColor: "green",
    previousValue: "+1.9%",
    chartData: [78, 80, 81.5, 83, 84.2, 84.6],
    currency: false,
    timeRange: "Month to Date",
    trendInsight:
      "📈 Satisfaction improved consistently over the last 10 days.",
    keyInsight:
      "Support quality and on-time delivery contributed to the highest score this quarter.",
    description:
      "Satisfaction scores rose sharply due to improved resolution times, automated follow-ups, and a new delivery partner achieving 96% punctuality.",
    topBreakdown: [
      { label: "Support Interaction", value: 89 },
      { label: "Delivery Timeliness", value: 92 },
      { label: "Product Quality", value: 85 },
    ],
  },
  {
    title: "Units Sold",
    value: "3.1k",
    percentage: "-6.2%",
    percentageColor: "red",
    previousValue: "-205",
    chartData: [3600, 3500, 3400, 3250, 3100, 3050],
    currency: false,
    timeRange: "Last 30 Days",
    trendInsight: "📉 Sales volume has declined for 3 consecutive weeks.",
    keyInsight:
      "Lack of new launches and stock-outs in key categories affected unit sales.",
    description:
      "Sales volume dropped notably in categories such as Fashion and Sports due to stock-outs and reduced seasonal demand. Marketing campaigns were paused mid-month.",
    topBreakdown: [
      { label: "Fashion", value: 1100 },
      { label: "Sports & Outdoors", value: 950 },
      { label: "Books", value: 750 },
    ],
  },
  {
    title: "Total Revenue",
    value: "$1.27M",
    percentage: "+8.6%",
    percentageColor: "green",
    previousValue: "+$101.4k",
    chartData: [970000, 1020000, 1090000, 1170000, 1230000, 1270000],
    currency: true,
    timeRange: "Jan 1 – Jan 29, 2024",
    trendInsight:
      "📈 Revenue is steadily climbing due to year-start campaigns and higher conversion rates.",
    keyInsight:
      "Jan 26–28 contributed nearly 35% of total revenue this month due to the Electronics Flash Sale.",
    description:
      "Total Revenue shows strong performance, with boosts from paid campaigns and bundled upsell offers in Electronics, Furniture, and Appliances.",
    topBreakdown: [
      { label: "Electronics", value: 600000 },
      { label: "Furniture", value: 340000 },
      { label: "Appliances", value: 225000 },
    ],
  },

  {
    title: "Cart Abandonment Rate",
    value: "19.3%",
    percentage: "+3.2%",
    percentageColor: "red",
    previousValue: "+0.6%",
    chartData: [14.2, 15.8, 17.0, 18.5, 19.1, 19.3],
    currency: false,
    timeRange: "Month to Date",
    trendInsight: "⚠️ Abandonment rate increased sharply in the last 5 days.",
    keyInsight:
      "High delivery estimates and payment errors contributed to increased cart drop-offs.",
    description:
      "The cart abandonment spike is linked to unexpected shipping fees and recent payment gateway bugs during checkout. Mobile users were more impacted.",
    topBreakdown: [
      { label: "Mobile Users", value: 12.8 },
      { label: "Credit Card Checkout", value: 3.7 },
      { label: "International Orders", value: 2.8 },
    ],
  },

  {
    title: "New Customers",
    value: "2.4k",
    percentage: "-5.4%",
    percentageColor: "red",
    previousValue: "-136",
    chartData: [2500, 2480, 2450, 2420, 2400, 2375],
    currency: false,
    timeRange: "Last 30 Days",
    trendInsight:
      "📉 New customer growth slowed this month compared to Q4 averages.",
    keyInsight:
      "Organic acquisition fell by 12% as ad campaigns were paused and SEO traffic dipped.",
    description:
      "While retention is stable, fewer new users are signing up due to reduced ad spend and search discoverability. Referral traffic also declined slightly.",
    topBreakdown: [
      { label: "Organic Search", value: 900 },
      { label: "Paid Ads", value: 700 },
      { label: "Referral Invites", value: 500 },
    ],
  },
];
