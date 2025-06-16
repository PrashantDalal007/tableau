// /src/screens/KPIDetailTabs/OverviewTab.tsx

import QuestionPills from "@/src/components/QuestionPills";
import { fetchQuestions } from "@/src/redux/slices/questionsSlice";
import { RootState } from "@/src/redux/store";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import AlertBox from "../../components/AlertBox";
import KPIDescription from "../../components/KPIDescription";

type OverviewTabProps = {
  kpi: {
    id: string; // <-- REQUIRED for fetching questions
    title: string;
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
  const containerWidth = Math.min(width - 32, 700);

  const dispatch = useDispatch();
  const { questionsByKpiId, loading, error } = useSelector(
    (state: RootState) => state.questions
  );
  const questions = questionsByKpiId[kpi.id] || [];

  useEffect(() => {
    if (kpi.id && !questions.length) {
      dispatch(fetchQuestions(kpi.id));
    }
  }, [kpi.id, dispatch]);

  return (
    <ScrollView className="bg-gray-50 px-2 py-8 min-h-screen">
      <View className="container mx-auto flex flex-col items-start gap-8">
        <View className="flex flex-row-reverse items-center justify-between w-full mb-4">
          {/* Trend/Key Insight Alert */}
          {kpi.trendInsight && (
            <AlertBox
              type="info"
              message={kpi.trendInsight}
              title="Trend Alert"
            />
          )}
          {/* HERO CARD */}
          <View
            className="
              w-full max-w-2xl 
              bg-white
              rounded-2xl
              border border-gray-200
              px-10 py-7
              flex flex-row items-center
              gap-x-8
              mb-8
              ring-1 ring-gray-100
            "
          >
            {/* Value on the left */}
            <View className="flex-shrink-0 pr-6 border-r-2 border-gray-300">
              <Text className="text-5xl font-extrabold text-blue-800 tracking-tight leading-none">
                {kpi.value}
              </Text>
            </View>
            {/* Meta on the right */}
            <View className="flex flex-col flex-1 pl-6">
              <Text className="uppercase text-xs font-extrabold tracking-widest text-blue-400 mb-1">
                {kpi.title}
              </Text>
              <Text className="text-sm font-bold text-gray-600 mb-1">
                {kpi.timeRange || "This Month"}
              </Text>
              <View className="flex-row items-center gap-x-2 mb-0.5">
                <Text
                  className={`
                    text-base font-bold rounded-full px-3 py-1 shadow
                    ${
                      kpi.percentageColor === "green"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {kpi.percentage}
                  {kpi.previousValue ? ` (${kpi.previousValue})` : ""}
                </Text>
                <Text className="text-xs text-gray-600 font-medium">
                  vs prior period
                </Text>
              </View>
              {kpi.previousValue && (
                <Text className="text-xs text-gray-600">
                  ({kpi.previousValue} last period)
                </Text>
              )}
              {/* Any additional subtext/trend */}
            </View>
          </View>
        </View>
        {/* Description */}
        <KPIDescription kpi={kpi} />

        {/* Chart Box */}
        <View className="mx-auto bg-white rounded-xl shadow border border-gray-100 p-6 mb-3">
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
            style={{ borderRadius: 16 }}
          />
        </View>

        {/* Dynamic Questions Section */}
        <View className="max-w-screen-xl mx-auto min-h-[60px]">
          {loading ? (
            <View className="items-center justify-center py-4">
              {/* NativeWind ActivityIndicator looks good! */}
              <ActivityIndicator size="small" color="#2563eb" />
              <Text className="mt-2 text-blue-700 font-semibold">
                Loading questions...
              </Text>
            </View>
          ) : error ? (
            <View className="items-center justify-center py-4">
              <Text className="text-red-600 font-semibold">Error: {error}</Text>
            </View>
          ) : (
            <QuestionPills questions={questions} />
          )}
        </View>

        {/* Key Insight */}
        {kpi.keyInsight && (
          <View className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 mb-2 shadow-sm">
            <Text className="text-base font-semibold text-center text-gray-800">
              {kpi.keyInsight}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default OverviewTab;
