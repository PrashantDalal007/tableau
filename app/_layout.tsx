// /app/_layout.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import AppNavigator from "../src/navigation/AppNavigator"; // your custom navigator
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-white">
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}
