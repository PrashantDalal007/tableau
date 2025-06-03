// /src/components/common/GlobalSearchBar.tsx

import React from "react";
import { View, TextInput, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

const GlobalSearchBar = () => {
  return (
    <View className="flex-row items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm w-[240px]">
      <Feather
        name="search"
        size={20}
        color="#6b7280"
        style={{ marginRight: 8 }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#9ca3af"
        className="flex-1 text-sm text-black outline-none"
        autoCapitalize="none"
        autoCorrect={false}
        style={Platform.select({
          web: { outlineStyle: "none" }, // <-- Remove browser outline on web
        })}
      />
    </View>
  );
};

export default GlobalSearchBar;
