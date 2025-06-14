// /src/components/common/GlobalSearchBar.tsx

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

const GlobalSearchBar = () => {
  const [query, setQuery] = useState("");
  const navigation = useNavigation<any>();

  const handleSubmit = () => {
    if (!query.trim()) return;
    navigation.navigate("SearchResults", { query });
  };
  return (
    <View className="flex-row items-center rounded-full border border-gray-500 bg-white px-4 py-2 w-[240px]">
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
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
        style={Platform.select({
          web: { outlineStyle: "none" } as any, // Remove browser outline on web
        })}
      />
    </View>
  );
};

export default GlobalSearchBar;
