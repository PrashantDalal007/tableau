// /src/screens/BrowseMetricsScreen.tsx

import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, useWindowDimensions, Alert } from "react-native";
import { MetricCard } from "../types";
import { fetchAllAvailableKPIs, removeKPIFromBrowse } from "../api/browseKPIs";
import { addKPIToFollowed } from "../api/followedKPIs";
import MetricCardList from "../components/MetricCardList";

const BrowseMetricsScreen = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const [data, setData] = useState<MetricCard[] | null>(null);

  const handleAdd = async (metric: MetricCard) => {
    await addKPIToFollowed(metric);
    await removeKPIFromBrowse(metric.title);
    setData((prev) => prev?.filter((m) => m.title !== metric.title) || null);
    Alert.alert("Card added to your following");
  };

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
        <MetricCardList
          data={data}
          isGrid={isWide}
          showAdd
          onAdd={handleAdd}
        />
      </View>
    </ScrollView>
  );
};

export default BrowseMetricsScreen;
