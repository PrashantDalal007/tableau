// /src/screens/SessionExpiredScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SessionExpiredScreen = () => {
  const navigation = useNavigation<any>(); // Use proper type if using RootStackParamList

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      <Text className="text-lg font-semibold mb-4">Session Expired</Text>
      <TouchableOpacity
        className="bg-blue-600 px-6 py-2 rounded"
        onPress={() => navigation.replace("Login")}
      >
        <Text className="text-white font-medium">Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SessionExpiredScreen;
