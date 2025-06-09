// src/components/MetricCardList.tsx

import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import { MetricCard } from "../types";

type Props = {
  data: MetricCard[] | null;
  isGrid?: boolean;
  onAdd?: (id: string) => void;
  onUnfollow?: (id: string) => void;
};

const MetricCardList: React.FC<Props> = ({
  data,
  isGrid = false,
  onAdd,
  onUnfollow,
}) => {
  if (!data) return <Text>Loading...</Text>;

  return (
    <View
      className={
        isGrid
          ? "flex flex-row flex-wrap gap-4"
          : "w-full flex flex-col gap-y-6"
      }
    >
      {data.map((metric, index) => (
        <Card
          key={metric.id || index}
          {...metric}
          onAdd={onAdd ? () => onAdd(metric.id) : undefined}
          onUnfollow={onUnfollow ? () => onUnfollow(metric.id) : undefined}
        />
      ))}
    </View>
  );
};

export default MetricCardList;
