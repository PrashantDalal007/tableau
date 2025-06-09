// src/components/HeaderBar.tsx
import { CircleUserRound } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import GlobalSearchBar from "./common/GlobalSearchBar";

const HeaderBar = () => {
  return (
    <View className="w-full bg-white px-4 py-3 border-b border-gray-200">
      <View className="flex-row items-center justify-between w-full container mx-auto">
        {/* Left: Brand Title */}
        <Text className="text-3xl font-semibold text-black">Canary</Text>

        {/* Right: Search and Avatar */}
        <View className="flex-row items-center gap-6">
          <GlobalSearchBar />
          <Pressable onPress={() => console.log("Open Profile")}>
            {/* Avatar Icon */}
            <Text className="text-white bg-gray-500 rounded-full hover:bg-black transition-colors">
              <CircleUserRound size={32} strokeWidth={1.5} />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
