// src/components/HeaderBar.tsx
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import GlobalSearchBar from "./common/GlobalSearchBar";

const HeaderBar = () => {
  return (
    <View className="w-full bg-white px-4 py-3 border-b border-gray-200">
      <View className="flex-row items-center justify-between w-full container mx-auto">
        {/* Left: Brand Title */}
        <Text className="text-xl font-semibold text-black">Tableau Pulse</Text>

        {/* Right: Search and Avatar */}
        <View className="flex-row items-center space-x-4">
          <GlobalSearchBar />
          <Pressable onPress={() => console.log("Open Profile")}>
            <Image
              source={{
                uri: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff&size=128",
              }}
              className="w-9 h-9 rounded-full"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
