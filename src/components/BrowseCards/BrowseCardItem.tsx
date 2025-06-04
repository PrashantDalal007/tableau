import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Card from '../Card';
import { MetricCard } from '../../types';

interface Props {
  metric: MetricCard;
  onAddToFollowing: (metric: MetricCard) => void;
}

const BrowseCardItem: React.FC<Props> = ({ metric, onAddToFollowing }) => {
  return (
    <View className="relative">
      <TouchableOpacity
        onPress={() => onAddToFollowing(metric)}
        className="absolute right-2 top-2 z-10 bg-white rounded-full p-1"
      >
        <Feather name="plus" size={20} color="#2563eb" />
      </TouchableOpacity>
      <Card {...metric} />
    </View>
  );
};

export default BrowseCardItem;
