// /src/screens/KPIDetailTabs/BreakdownTab.tsx

import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

type BreakdownTabProps = {
  kpi: {
    topBreakdown?: { label: string; value: number }[];
    keyInsight?: string;
  };
};

const BreakdownTab: React.FC<BreakdownTabProps> = ({ kpi }) => {
  const [selectedTab, setSelectedTab] = useState("Category");
  const breakdownData = kpi.topBreakdown || [];

  const { width } = useWindowDimensions();
  const containerWidth = Math.min(width - 32, 800);

  const labels = breakdownData.map((item) =>
    item.label.length > 12 ? item.label.slice(0, 12) + "…" : item.label
  );
  const values = breakdownData.map((item) => item.value);

  return (
    <ScrollView className="px-4 py-6 bg-white">
      <View className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* 🔘 Tab Selector */}
        <View className="flex-row flex-wrap justify-center gap-2">
          {["Category", "Product Name", "Product Type", "Subcategory"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                className={`px-4 py-1.5 rounded-full border font-medium ${
                  selectedTab === tab
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300"
                }`}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  className={`text-sm ${
                    selectedTab === tab ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* 📊 Breakdown List */}
        <View
          style={{ width: containerWidth }}
          className="bg-white rounded-xl shadow border border-gray-100 p-4 space-y-2"
        >
          {breakdownData.map((item, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center border-b border-gray-100 pb-2"
            >
              <Text className="text-sm text-gray-800">{item.label}</Text>
              <Text className="text-sm font-semibold text-blue-700">
                ${item.value.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* 📉 Bar Chart */}
        {breakdownData.length > 0 && (
          <View className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <BarChart
              data={{
                labels,
                datasets: [{ data: values }],
              }}
              width={containerWidth}
              height={280}
              fromZero
              withInnerLines={false}
              withCustomBarColorFromData={false}
              yAxisLabel="$"
              yAxisSuffix=""
              showValuesOnTopOfBars
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                color: () => "#3b82f6", // Tailwind blue-500
                labelColor: () => "#6b7280",
                fillShadowGradient: "#3b82f6",
                fillShadowGradientOpacity: 0.3,
                barPercentage: 0.55, // 🧠 tighter spacing
                decimalPlaces: 0,
                propsForBackgroundLines: {
                  stroke: "#f1f5f9",
                },
              }}
              style={{
                borderRadius: 12,
                marginTop: 8,
              }}
            />
          </View>
        )}

        {/* 🧠 Key Insight */}
        {kpi.keyInsight && (
          <View className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3">
            <Text className="text-sm font-medium text-gray-800 text-center">
              {kpi.keyInsight}
            </Text>
          </View>
        )}

        {/* 🔗 Suggested Follow-ups */}
        <View className="flex flex-row flex-wrap gap-3 justify-center pt-2">
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Product Type decreased the most?
          </Text>
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Subcategory decreased the most?
          </Text>
          <Text className="text-sm text-blue-600 underline hover:text-blue-800">
            Which Category decreased the most?
          </Text>
        </View>

        {/* ❓ Bottom Insight */}
        <View className="border-t border-gray-200 pt-4 mt-4 text-center">
          <Text className="text-sm font-medium text-gray-500">
            Top insight about this change |
          </Text>
          <Text className="text-sm text-gray-500">
            Is there a shift in performance across categories?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BreakdownTab;
