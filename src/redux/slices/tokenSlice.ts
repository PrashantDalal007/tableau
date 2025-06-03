// /src/redux/slices/tokenSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

interface TokenState {
  isTokenValid: boolean;
  loading: boolean;
}

const initialState: TokenState = {
  isTokenValid: false,
  loading: true,
};

// ✅ Thunk to validate token via backend
export const validateToken = createAsyncThunk(
  "tokenStatus/validateToken",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/passport/token/GetLongLived");
      return data;
    } catch (err: any) {
      return rejectWithValue("INVALID_TOKEN");
    }
  }
);

const tokenSlice = createSlice({
  name: "tokenStatus",
  initialState,
  reducers: {
    setTokenValid: (state) => {
      state.isTokenValid = true;
      state.loading = false;
    },
    setTokenInvalid: (state) => {
      state.isTokenValid = false;
      state.loading = false;
    },
    refreshTokenStatus: (state) => {
      state.isTokenValid = true;
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(validateToken.fulfilled, (state) => {
        state.isTokenValid = true;
        state.loading = false;
      })
      .addCase(validateToken.rejected, (state) => {
        state.isTokenValid = false;
        state.loading = false;
      });
  },
});

export const { setTokenValid, setTokenInvalid, refreshTokenStatus } =
  tokenSlice.actions;

export default tokenSlice.reducer;
