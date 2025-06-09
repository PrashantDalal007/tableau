// /src/navigation/AppNavigator.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import HomeScreen from "../../app/index";
import KPIDetailScreen from "../screens/KPIDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import SessionExpiredScreen from "../screens/SessionExpiredScreen";
import SSOCallbackScreen from "../screens/SSOCallbackScreen";

import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { validateToken } from "../redux/slices/tokenSlice";
import BrowseMetricsScreen from "../screens/BrowseMetricsScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isTokenValid, loading } = useAppSelector(
    (state) => state.tokenStatus
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(validateToken()); // ✅ Real backend check
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isTokenValid ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SSOCallback" component={SSOCallbackScreen} />
          <Stack.Screen
            name="SessionExpired"
            component={SessionExpiredScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Home">
            {() => (
              <AuthenticatedLayout>
                <HomeScreen />
              </AuthenticatedLayout>
            )}
          </Stack.Screen>
          <Stack.Screen name="BrowseMetrics">
            {() => (
              <AuthenticatedLayout>
                <BrowseMetricsScreen />
              </AuthenticatedLayout>
            )}
          </Stack.Screen>
          <Stack.Screen name="SearchResults">
            {() => (
              <AuthenticatedLayout>
                <SearchResultsScreen />
              </AuthenticatedLayout>
            )}
          </Stack.Screen>
          <Stack.Screen name="KPIDetailScreen">
            {() => (
              <AuthenticatedLayout>
                <KPIDetailScreen />
              </AuthenticatedLayout>
            )}
          </Stack.Screen>
          <Stack.Screen name="Logout" component={LogoutScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
