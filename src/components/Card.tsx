import React, { useState } from "react";
import { Text, View, Pressable, LayoutChangeEvent } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CardProps = {
  title: string;
  value: string;
  percentage: string;
  percentageColor: "green" | "red";
  description: string;
  chartData: number[];
  currency: boolean;
  timeRange?: string;
  trendInsight?: string;
  keyInsight?: string;
  topBreakdown?: { label: string; value: number }[];
  previousValue?: string;
  onAdd?: () => void;
};

type RootStackParamList = {
  KPIDetailScreen: { kpi: CardProps };
};

const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    value,
    percentage,
    percentageColor,
    description,
    chartData,
    timeRange,
    trendInsight,
    keyInsight,
    topBreakdown,
    onAdd,
  } = props;

  const [cardWidth, setCardWidth] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLayout = (event: LayoutChangeEvent) => {
    setCardWidth(event.nativeEvent.layout.width);
  };

  const truncate = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <Pressable
      onPress={() => navigation.navigate("KPIDetailScreen", { kpi: props })}
      className="mb-6"
      android_ripple={{ color: "#e5e7eb" }}
    >
      <View
        className="bg-white rounded-xl shadow-sm p-4 max-w-md h-[540px] flex flex-col justify-start"
        onLayout={handleLayout}
      >
        {onAdd && (
          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              onAdd();
            }}
            className="absolute top-2 right-2 z-10"
          >
            <Text className="text-2xl text-blue-600">+</Text>
          </Pressable>
        )}
        {/* Header */}
        <Text className="text-xs text-gray-400 mb-1">
          {timeRange || "This Month"}
        </Text>
        <Text className="text-base font-medium">{title}</Text>
        <Text className="text-xl font-semibold">
          {value}{" "}
          <Text
            className={
              percentageColor === "green" ? "text-green-600" : "text-red-600"
            }
          >
            {percentage}
          </Text>
        </Text>

        {/* Trend insight */}
        {trendInsight && (
          <Text className="text-sm text-gray-600 italic mt-1">
            {truncate(trendInsight, 100)}
          </Text>
        )}

        {/* Chart */}
        {cardWidth > 0 && (
          <LineChart
            data={{
              labels: ["Jan 1", "Jan 31"],
              datasets: [{ data: chartData }],
            }}
            width={cardWidth - 12}
            height={160}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`, // blue
              labelColor: () => "#6b7280",
              propsForDots: { r: "4", strokeWidth: "2", stroke: "#2563eb" },
              propsForBackgroundLines: { stroke: "#e5e7eb" },
            }}
            bezier
            style={{ borderRadius: 12 }}
          />
        )}

        {/* Key Insight */}
        {keyInsight && (
          <Text className="text-sm font-semibold text-gray-800 mt-2">
            {truncate(keyInsight, 100)}
          </Text>
        )}

        {/* Description */}
        <Text className="text-sm mt-1 text-gray-700">
          {truncate(description, 160)}
        </Text>

        {/* Breakdown */}
        {topBreakdown && (
          <View className="mt-2 space-y-1">
            {topBreakdown.map((item) => (
              <Text key={item.label} className="text-xs text-gray-500">
                {item.label}: ${item.value.toLocaleString()}
              </Text>
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Card;
