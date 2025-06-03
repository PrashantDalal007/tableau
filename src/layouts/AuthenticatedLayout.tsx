// src/layouts/AuthenticatedLayout.tsx
import React from "react";
import { View, ScrollView } from "react-native";
import HeaderBar from "../components/HeaderBar";

type Props = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <View className="flex-1 bg-white">
      <HeaderBar />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default AuthenticatedLayout;
