// /src/screens/KPIDetailTabs/OverviewTab.tsx

import React from "react";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

type OverviewTabProps = {
  kpi: {
    value: string;
    percentage: string;
    percentageColor: "green" | "red";
    previousValue?: string;
    timeRange?: string;
    trendInsight?: string;
    keyInsight?: string;
    description: string;
    chartData: number[];
  };
};

const OverviewTab: React.FC<OverviewTabProps> = ({ kpi }) => {
  const { width } = useWindowDimensions();
  const containerWidth = Math.min(width - 32, 800);

  const percentageStyle =
    kpi.percentageColor === "green" ? "text-green-600" : "text-red-600";

  return (
    <ScrollView className="px-4 py-6 bg-white">
      <View className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* ✅ KPI Summary Card */}
        <View className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center">
          <Text className="text-3xl font-semibold text-gray-900">
            {kpi.value}
          </Text>
          <Text className="text-sm text-gray-500">Jan 1–Jan 29, 2024</Text>
          <Text className={`text-sm font-medium ${percentageStyle}`}>
            {kpi.percentage}
            {kpi.previousValue ? ` (${kpi.previousValue})` : ""} vs. prior
            period (Dec 1–Dec 29, 2023)
          </Text>
        </View>

        {/* ⚠️ Trend Insight Alert */}
        {kpi.trendInsight && (
          <View className="w-full max-w-lg bg-yellow-50 border border-yellow-300 rounded-lg p-3 shadow-sm">
            <Text className="text-sm text-yellow-800 text-center">
              {kpi.trendInsight}
            </Text>
          </View>
        )}

        {/* 📈 Chart Box */}
        <View className="w-full bg-white rounded-xl shadow border border-gray-100 p-4">
          <LineChart
            data={{
              labels: ["Jan 1", "Jan 31"],
              datasets: [{ data: kpi.chartData }],
            }}
            width={containerWidth}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2,
              color: () => "#2563eb",
              labelColor: () => "#6b7280",
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "#2563eb",
              },
              propsForBackgroundLines: {
                stroke: "#e5e7eb",
              },
            }}
            bezier
            style={{ borderRadius: 12 }}
          />
        </View>

        {/* 🧠 Key Insight */}
        {kpi.keyInsight && (
          <Text className="text-lg font-semibold text-center text-gray-800 max-w-2xl">
            {kpi.keyInsight}
          </Text>
        )}

        {/* 💬 Description */}
        <Text className="text-sm text-gray-600 text-center max-w-2xl leading-relaxed">
          {kpi.description}
        </Text>

        {/* 🔗 Suggested Follow-ups */}
        <View className="flex flex-row flex-wrap gap-3 justify-center pt-2">
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Product Name increased the most?
          </Text>
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Product Name decreased the most?
          </Text>
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Product Type increased the most?
          </Text>
        </View>

        {/* ❓ Bottom Insight Prompt */}
        <View className="border-t border-gray-200 pt-4 mt-4 text-center">
          <Text className="text-sm font-medium text-gray-500">
            Top insight about this change |
          </Text>
          <Text className="text-sm text-gray-500">
            Does Average Order Value (AOV) have a new trend?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OverviewTab;
