// /src/screens/KPIDetailScreen.tsx

import React from "react";
import { View, Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import OverviewTab from "./KPIDetailTabs/OverviewTab";
import BreakdownTab from "./KPIDetailTabs/BreakdownTab";
import WebTabs from "./KPIDetailTabs/WebTabs";

const Tab = createMaterialTopTabNavigator();

const KPIDetailScreen = () => {
  const route = useRoute();
  const { kpi } = route.params as { kpi: any };

  if (Platform.OS === "web") {
    return <WebTabs kpi={kpi} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Overview">
          {() => <OverviewTab kpi={kpi} />}
        </Tab.Screen>
        <Tab.Screen name="Breakdown">
          {() => <BreakdownTab kpi={kpi} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default KPIDetailScreen;
