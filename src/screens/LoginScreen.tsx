import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert, Platform } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LoginForm from "../components/LoginForm";
import { setTokenValid } from "../redux/slices/tokenSlice";
import { useNavigation } from "@react-navigation/native";
import api from "../utils/api";
import { Image } from "expo-image";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { loading, error, userInfo } = useAppSelector((state) => state.auth);

  const [logoDetails, setLogoDetails] = useState({
    logo: `https://picsum.photos/200`,
    logoSizes: {
      small: {
        height: 25, // ✅ number, no "px"
        width: 25,
      },
      large: {
        height: 100,
        width: 100,
      },
    },
    platformName: "Platform",
    fontSize: 12, // ✅ number, no "px"
    fontColor: "black",
  });

  const getLogo = async () => {
    try {
      const { data } = await api.get("/platform/platformDetails");

      const fallback = {
        logo: logoDetails.logo,
        platformName: logoDetails.platformName,
        logoSizes: logoDetails.logoSizes,
        fontSize: logoDetails.fontSize,
        fontColor: logoDetails.fontColor,
      };

      const validData = {
        ...fallback,
        ...data,
        logoSizes: {
          ...fallback.logoSizes,
          ...(data.logoSizes || {}),
          // Convert all sizes to numbers if strings like "100px" are returned
          large: {
            width: parseInt(data?.logoSizes?.large?.width || 100, 10),
            height: parseInt(data?.logoSizes?.large?.height || 100, 10),
          },
        },
        logo: data.logo || `https://picsum.photos/200`,
        fontSize: parseInt(data.fontSize || 12, 10),
      };

      setLogoDetails(validData);
    } catch (err) {
      console.warn("⚠️ Failed to fetch platform logo:", err);
    }
  };

  useEffect(() => {
    getLogo();
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(setTokenValid());
      navigation.navigate("Home");
    }
  }, [userInfo]);

  useEffect(() => {
    if (error && error !== "MFA_REQUIRED") {
      Alert.alert("Login Failed", error);
    }
  }, [error]);

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="my-10 flex-col gap-2 items-center">
        {Platform.OS === "web" ? (
          <img
            src={logoDetails.logo}
            width={`${logoDetails.logoSizes.large.width}px`}
            height={`${logoDetails.logoSizes.large.height}px`}
          />
        ) : (
          <Image
            source={{ uri: logoDetails.logo }}
            style={{
              width: logoDetails.logoSizes.large.width,
              height: logoDetails.logoSizes.large.height,
            }}
            contentFit="contain"
          />
        )}

        <Text
          style={{
            fontSize: logoDetails.fontSize,
            color: logoDetails.fontColor,
          }}
        >
          {logoDetails.platformName}
        </Text>
      </View>

      <View className="w-full max-w-md bg-gray-50 rounded-2xl shadow p-6">
        {loading ? <ActivityIndicator size="large" /> : <LoginForm />}
      </View>
    </View>
  );
};

export default LoginScreen;
