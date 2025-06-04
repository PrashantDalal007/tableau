// /src/components/FollowingCards.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MetricCardList from "./MetricCardList";

type FollowingCardsProps = {
  isGrid?: boolean;
};

const FollowingCards: React.FC<FollowingCardsProps> = ({ isGrid = false }) => {
  const data = useSelector((state: RootState) => state.following.data);

  return <MetricCardList data={data} isGrid={isGrid} />;
};

export default FollowingCards;
