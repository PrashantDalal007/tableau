// /src/components/LoginForm.tsx
import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/slices/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      dispatch(loginUser({ username, password }));
    }
  };

  return (
    <View>
      <TextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 py-2 rounded items-center"
      >
        <Text className="text-white font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
