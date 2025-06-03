// /src/utils/api.ts

import axios from "axios";
import { Platform } from "react-native";

const instance = axios.create({
  baseURL: "https://cv3e.bosler.io/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: Platform.OS === "web", // ✅ true only on web
});

export default instance;
