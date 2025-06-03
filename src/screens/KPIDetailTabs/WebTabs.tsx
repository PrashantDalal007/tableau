// /src/screens/KPIDetailTabs/WebTabs.tsx

import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import OverviewTab from "./OverviewTab";
import BreakdownTab from "./BreakdownTab";

type WebTabsProps = {
  kpi: any;
};

const WebTabs: React.FC<WebTabsProps> = ({ kpi }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-center mt-4">
        <View className="flex-row bg-gray-200 rounded-full p-1 w-[90%] max-w-md">
          {["Overview", "Breakdown"].map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center px-4 py-2 rounded-full ${
                activeTab === tab ? "bg-white shadow" : ""
              }`}
            >
              <Text
                className={`font-medium ${
                  activeTab === tab ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView className="p-4">
        {activeTab === "Overview" ? (
          <OverviewTab kpi={kpi} />
        ) : (
          <BreakdownTab kpi={kpi} />
        )}
      </ScrollView>
    </View>
  );
};

export default WebTabs;
