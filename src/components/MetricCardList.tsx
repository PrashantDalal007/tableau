// /src/components/MetricCardList.tsx

import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import { MetricCard } from "../types";

type Props = {
  data: MetricCard[] | null;
  isGrid?: boolean;
  onAdd?: (title: string) => void;
};

const MetricCardList: React.FC<Props> = ({ data, isGrid = false, onAdd }) => {
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
        <Card key={index} {...metric} onAdd={onAdd ? () => onAdd(metric.title) : undefined} />
      ))}
    </View>
  );
};

export default MetricCardList;
