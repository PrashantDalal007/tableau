// /src/screens/BrowseMetricsScreen.tsx

import React from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addCardToFollowing } from "../redux/slices/followingSlice";
import { removeCardFromBrowse } from "../redux/slices/browseSlice";
import MetricCardList from "../components/MetricCardList";
import { MetricCard } from "../types";
import { showToast } from "../utils/notifications";

const BrowseMetricsScreen = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.browse.data);

  const handleAdd = (metric: MetricCard) => {
    dispatch(addCardToFollowing(metric));
    dispatch(removeCardFromBrowse(metric.title));
    showToast("Card added to your following");
  };

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
