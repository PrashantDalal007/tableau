// /src/screens/SSOCallbackScreen.tsx

import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { useNavigation } from "@react-navigation/native";

const SSOCallbackScreen = () => {
  const { isTokenValid, loading } = useAppSelector(
    (state) => state.tokenStatus
  );
  const navigation = useNavigation<any>(); // Prevent TS warning

  useEffect(() => {
    if (!loading) {
      if (isTokenValid) {
        navigation.replace("Home");
      } else {
        navigation.replace("Login");
      }
    }
  }, [loading, isTokenValid]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-lg font-medium">Signing in with SSO...</Text>
    </View>
  );
};

export default SSOCallbackScreen;
