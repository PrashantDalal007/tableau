// /src/screens/SearchResultsScreen.tsx

import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MetricCard } from "../types";
import MetricCardList from "../components/MetricCardList";
import { searchKPIs } from "../api/searchKPIs";

const SearchResultsScreen = () => {
  const route = useRoute();
  const { query } = route.params as { query: string };
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const [data, setData] = useState<MetricCard[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const result = await searchKPIs(query);
      setData(result);
    };
    fetch();
  }, [query]);

  return (
    <ScrollView className="bg-white px-4 py-6">
      <View className="container mx-auto">
        <Text className="text-2xl font-semibold mb-3">
          Results for &apos;{query}&apos;
        </Text>
        {data && data.length === 0 ? (
          <Text>No results found.</Text>
        ) : (
          <MetricCardList data={data} isGrid={isWide} />
        )}
      </View>
    </ScrollView>
  );
};

export default SearchResultsScreen;
