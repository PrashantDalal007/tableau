// /src/screens/BrowseMetricsScreen.tsx

import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { MetricCard } from "../types";
import { fetchAllAvailableKPIs } from "../api/browseKPIs";
import MetricCardList from "../components/MetricCardList";

const BrowseMetricsScreen = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const [data, setData] = useState<MetricCard[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchAllAvailableKPIs();
      setData(result);
    };
    fetch();
  }, []);

  return (
    <ScrollView className="bg-white px-4 py-6">
      <View className="container mx-auto">
        <Text className="text-2xl font-semibold mb-3">Browse Metrics</Text>
        <MetricCardList data={data} isGrid={isWide} />
      </View>
    </ScrollView>
  );
};

export default BrowseMetricsScreen;
