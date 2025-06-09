// /src/screens/KPIDetailTabs/WebTabs.tsx

import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import BreakdownTab from "./BreakdownTab";
import OverviewTab from "./OverviewTab";

type WebTabsProps = { kpi: any };

const WebTabs: React.FC<WebTabsProps> = ({ kpi }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <View className="flex-1 bg-gray-50 min-h-screen">
      <View className="flex-row justify-center mt-8 mb-2">
        <View className="flex-row bg-gray-200 rounded-full p-1 max-w-lg w-full">
          {["Overview", "Breakdown"].map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center px-5 py-2 rounded-full transition-colors ${
                activeTab === tab ? "bg-white shadow text-blue-700" : ""
              }`}
            >
              <Text
                className={`font-medium text-base ${
                  activeTab === tab ? "text-blue-700" : "text-gray-600"
                }`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <ScrollView className="p-4 min-h-screen">
        <View className="container max-w-screen-xl mx-auto">
          {activeTab === "Overview" ? (
            <OverviewTab kpi={kpi} />
          ) : (
            <BreakdownTab kpi={kpi} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default WebTabs;
