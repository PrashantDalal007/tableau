import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import KPITableRow from "../components/KPITableRow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchAllKPIs,
  fetchFollowedKPIs,
  followKPI,
  unfollowKPI,
} from "../redux/thunks/kpiThunks";

const BrowseMetricsScreen = () => {
  const dispatch = useAppDispatch();
  const allKpis = useAppSelector((state) => state.kpis.all);
  const followedKpis = useAppSelector((state) => state.kpis.followed);
  const loading = useAppSelector((state) => state.kpis.loading);

  useEffect(() => {
    dispatch(fetchAllKPIs());
    dispatch(fetchFollowedKPIs());
  }, [dispatch]);

  const handleFollow = async (id: string) => {
    await dispatch(followKPI(id));
    if (Platform.OS === "android") {
      ToastAndroid.show("Added to following", ToastAndroid.SHORT);
    } else {
      Alert.alert("Added to following");
    }
  };

  const handleUnfollow = async (id: string) => {
    await dispatch(unfollowKPI(id));
    if (Platform.OS === "android") {
      ToastAndroid.show("Removed from following", ToastAndroid.SHORT);
    } else {
      Alert.alert("Removed from following");
    }
  };

  const isFollowed = (id: string) => followedKpis.some((k) => k.id === id);

  return (
    <ScrollView className="bg-white px-2 md:px-8 py-8 min-h-screen container mx-auto">
      <Text className="text-3xl font-bold mb-4 text-center md:text-left">
        Browse All Metrics
      </Text>
      <View
        className="
    w-full
    
    mx-auto
    rounded-2xl
    border
    border-gray-300
    overflow-x-auto
    bg-white
  "
        style={{ minWidth: 600 }}
      >
        <View
          className="
  flex-row items-center border-b-2 border-gray-300 bg-gray-50
  px-2 md:px-6 py-4 gap-x-6
  min-w-full container mx-auto
  sticky top-0 z-10
"
        >
          <Text className="flex-[1] min-w-0 font-bold text-gray-700 text-base tracking-wide">
            KPI
          </Text>
          <Text className="flex-[1] min-w-0 font-bold text-gray-700 text-base text-right tracking-wide">
            Current
          </Text>
          <Text className="flex-[1] min-w-0 font-bold text-gray-700 text-base text-right tracking-wide">
            Change
          </Text>
          <Text className="flex-[3] min-w-0 font-bold text-gray-700 text-base tracking-wide">
            Description
          </Text>
          <Text className="flex-[1] min-w-0 font-bold text-gray-700 text-base tracking-wide text-right pr-4">
            Action
          </Text>
        </View>

        {loading ? (
          <View className="items-center py-10">
            <ActivityIndicator size="large" color="#2563eb" />
            <Text className="text-gray-500 mt-2">Loading metrics...</Text>
          </View>
        ) : (
          allKpis.map((kpi) => (
            <KPITableRow
              key={kpi.id}
              kpi={kpi}
              isFollowed={isFollowed(kpi.id)}
              onFollow={handleFollow}
              onUnfollow={handleUnfollow}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default BrowseMetricsScreen;
