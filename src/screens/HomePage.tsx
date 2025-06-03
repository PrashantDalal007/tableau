import React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import FollowingCards from "../components/FollowingCards";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const navigation = useNavigation<any>();

  return (
    <ScrollView className="bg-white px-4 py-6">
      <View className="container mx-auto">
        {/* Today's Pulse block */}
        <View className={isWide ? "w-full md:w-1/2 pr-4 mb-6" : "mb-6"}>
          <Text className="text-2xl font-semibold mb-1">Today's Pulse</Text>
          <Text className="text-xs text-gray-500 mb-3">
            Last updated about 3 hours ago
          </Text>

          <Text className="text-sm">
            ✨ This month{" "}
            <Text className="font-semibold text-blue-600">Returns</Text>{" "}
            decreased by 15.6% compared to last month. Yesterday, there was a
            slight increase in
            <Text className="font-semibold text-blue-600"> Units Sold </Text> to
            3.7k. Similarly,{" "}
            <Text className="font-semibold text-blue-600">Total Sales</Text> had
            a small increase yesterday, reaching $494.2k. Overall, 4 of 4
            metrics changed: 3 favorably, 1 unfavorably.
          </Text>
        </View>
        <View className="flex-row justify-start gap-4 items-center mb-3">
          <Text className="text-lg font-semibold">Following</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrowseMetrics")}
            className="bg-blue-600 rounded-full py-1.5 px-3"
          >
            <Text className="text-white text-sm font-medium">
              + Browse Metrics
            </Text>
          </TouchableOpacity>
        </View>

        <FollowingCards isGrid={isWide} />
      </View>
    </ScrollView>
  );
};

export default HomePage;
