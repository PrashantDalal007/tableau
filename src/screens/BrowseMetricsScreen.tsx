// /src/screens/BrowseMetricsScreen.tsx

import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import MetricCardList from "../components/MetricCardList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getBrowseKPIs, followKPI } from "../redux/slices/kpiSlice";

const BrowseMetricsScreen = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.kpi.browseKPIs);

  useEffect(() => {
    dispatch(getBrowseKPIs());
  }, [dispatch]);

  const handleAdd = async (title: string) => {
    await dispatch(followKPI(title));
    if (Platform.OS === "android") {
      ToastAndroid.show("Card added to your following", ToastAndroid.SHORT);
    } else {
      Alert.alert("Card added to your following");
    }
  };

  return (
    <ScrollView className="bg-white px-4 py-6">
      <View className="container mx-auto">
        <Text className="text-2xl font-semibold mb-3">Browse Metrics</Text>
        <MetricCardList data={data} isGrid={isWide} onAdd={handleAdd} />
      </View>
    </ScrollView>
  );
};

export default BrowseMetricsScreen;
