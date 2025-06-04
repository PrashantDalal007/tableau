// /src/components/FollowingCards.tsx

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getFollowedKPIs } from "../redux/slices/kpiSlice";
import MetricCardList from "./MetricCardList";

type FollowingCardsProps = {
  isGrid?: boolean;
};

const FollowingCards: React.FC<FollowingCardsProps> = ({ isGrid = false }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.kpi.followingKPIs);

  useEffect(() => {
    dispatch(getFollowedKPIs());
  }, [dispatch]);

  return <MetricCardList data={data} isGrid={isGrid} />;
};

export default FollowingCards;
