import React, { useEffect } from "react";
import { Alert, Platform, ToastAndroid } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchFollowedKPIs, unfollowKPI } from "../redux/thunks/kpiThunks";
import MetricCardList from "./MetricCardList";

type FollowingCardsProps = {
  isGrid?: boolean;
};

const FollowingCards: React.FC<FollowingCardsProps> = ({ isGrid = false }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.kpis.followed);
  const loading = useAppSelector((state) => state.kpis.loading);

  useEffect(() => {
    dispatch(fetchFollowedKPIs());
  }, [dispatch]);

  const handleUnfollow = async (id: string) => {
    await dispatch(unfollowKPI(id));
    if (Platform.OS === "android") {
      ToastAndroid.show("Card removed from your following", ToastAndroid.SHORT);
    } else {
      Alert.alert("Card removed from your following");
    }
  };

  return (
    <MetricCardList
      data={loading ? null : data}
      isGrid={isGrid}
      onUnfollow={handleUnfollow}
    />
  );
};

export default FollowingCards;
