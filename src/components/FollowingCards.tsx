// /src/components/FollowingCards.tsx

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MetricCard } from "../types";
import { fetchFollowedKPIs } from "../api/followedKPIs";
import MetricCardList from "./MetricCardList";

type FollowingCardsProps = {
  isGrid?: boolean;
};

const FollowingCards: React.FC<FollowingCardsProps> = ({ isGrid = false }) => {
  const metrics = useSelector((state: RootState) => state.kpi.data);
  const [data, setData] = useState<MetricCard[] | null>(metrics);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchFollowedKPIs();
      setData(result);
    };
    fetch();
  }, []);

  return <MetricCardList data={data} isGrid={isGrid} />;
};

export default FollowingCards;
