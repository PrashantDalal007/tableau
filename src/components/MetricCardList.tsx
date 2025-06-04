// /src/components/MetricCardList.tsx

import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import { MetricCard } from "../types";

type Props = {
  data: MetricCard[] | null;
  isGrid?: boolean;
  onAdd?: (metric: MetricCard) => void;
  showAdd?: boolean;
};

const MetricCardList: React.FC<Props> = ({ data, isGrid = false, onAdd, showAdd = false }) => {
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
          key={index}
          {...metric}
          showAdd={showAdd}
          onAdd={() => onAdd && onAdd(metric)}
        />
      ))}
    </View>
  );
};

export default MetricCardList;
