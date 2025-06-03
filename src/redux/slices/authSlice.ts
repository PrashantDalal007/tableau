// /src/redux/slices/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api"; // ✅ Use axios instance with baseURL
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  userInfo: any;
  loginMethod: string;
  loading: boolean;
  error: any;
}

const initialState: AuthState = {
  userInfo: null,
  loginMethod: "",
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const payload = {
        username,
        password,
        loginType: "plain",
      };

      const { data } = await api.post("/passport/login", payload); // ✅ backend call

      if (data.accessToken) {
        await AsyncStorage.setItem("USERNAME", username);
        return data;
      } else if (data.mfaEnabled) {
        return rejectWithValue("MFA_REQUIRED");
      }

      return rejectWithValue("Invalid credentials");
    } catch (err: any) {
      // ✅ Detailed logging to debug Android error
      if (err.response) {
        console.warn("❌ Server responded with error:", err.response.data);
      } else if (err.request) {
        console.warn("❌ No response received:", err.request);
      } else {
        console.warn("❌ Request setup error:", err.message);
      }

      return rejectWithValue(err.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await AsyncStorage.removeItem("USERNAME");
  await api.post("/passport/logout"); // ✅ fixed
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginMethod: (state, action) => {
      state.loginMethod = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.loginMethod = "Credentials";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.userInfo = null;
        state.loginMethod = "";
      });
  },
});

export const { setLoginMethod } = authSlice.actions;
export default authSlice.reducer;
