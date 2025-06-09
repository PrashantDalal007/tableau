import { ArrowDownRight, ArrowUpRight } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { MetricCard } from "../types";

type Props = {
  kpi: MetricCard;
  isFollowed: boolean;
  onFollow: (id: string) => void;
  onUnfollow: (id: string) => void;
};

const KPITableRow: React.FC<Props> = ({
  kpi,
  isFollowed,
  onFollow,
  onUnfollow,
}) => {
  const isPositive = kpi.percentageColor === "green";

  return (
    <Pressable
      className={`
    flex-row items-center px-2 md:px-6 py-5 group
    border-b border-gray-100 bg-white
    hover:bg-blue-50/40 web:cursor-pointer transition-all duration-150
    gap-x-6
  `}
      android_ripple={{ color: "#e0e7ef" }}
      style={{ minHeight: 70 }}
    >
      <View className="flex-[1] min-w-0 flex-col">
        <Text className="font-bold text-gray-900 text-[16px] truncate">
          {kpi.title}
        </Text>
        {kpi.timeRange && (
          <Text className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-[10px] mt-1 w-fit">
            {kpi.timeRange}
          </Text>
        )}
      </View>
      <View className="flex-[1] min-w-0">
        <Text className="text-right font-semibold text-gray-900 text-base truncate">
          {kpi.value}
        </Text>
      </View>
      <View className="flex-[1] flex-row items-center justify-end min-w-0">
        {isPositive ? (
          <ArrowUpRight size={18} color="#22c55e" strokeWidth={3} />
        ) : (
          <ArrowDownRight size={18} color="#ef4444" strokeWidth={3} />
        )}
        <Text
          className={`ml-1 font-semibold truncate ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {kpi.percentage}
        </Text>
      </View>
      <View className="flex-[3] min-w-0 ">
        <Text className="text-xs text-gray-500 leading-snug truncate">
          {kpi.description}
        </Text>
      </View>
      <View className="flex-[1] min-w-0 flex-row justify-end">
        {isFollowed ? (
          <Pressable
            className="bg-red-500/90 hover:bg-red-600 px-5 py-2 rounded-full shadow-sm focus:ring-2 focus:ring-red-300"
            onPress={() => onUnfollow(kpi.id)}
          >
            <Text className="text-white font-semibold text-sm">Unfollow</Text>
          </Pressable>
        ) : (
          <Pressable
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full shadow-sm focus:ring-2 focus:ring-blue-300"
            onPress={() => onFollow(kpi.id)}
          >
            <Text className="text-white font-semibold text-sm">Follow</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export default KPITableRow;
