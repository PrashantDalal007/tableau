// /src/screens/LogoutScreen.tsx

import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/slices/authSlice";
import { setTokenInvalid } from "../redux/slices/tokenSlice";
import { useNavigation } from "@react-navigation/native";

const LogoutScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>(); // For `.replace()` safety

  useEffect(() => {
    const performLogout = async () => {
      await dispatch(logoutUser());
      dispatch(setTokenInvalid());
      navigation.replace("Login");
    };

    performLogout();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LogoutScreen;
