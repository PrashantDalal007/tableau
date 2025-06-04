import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MetricCard } from "../../types";
import {
  fetchAllAvailableKPIs,
  addKPIToFollowing,
} from "../../api/browseKPIs";
import { fetchFollowedKPIs } from "../../api/followedKPIs";

interface KPIState {
  browseKPIs: MetricCard[];
  followingKPIs: MetricCard[];
  loading: boolean;
  error: string | null;
}

const initialState: KPIState = {
  browseKPIs: [],
  followingKPIs: [],
  loading: false,
  error: null,
};

export const getBrowseKPIs = createAsyncThunk(
  "kpi/getBrowseKPIs",
  async () => {
    const data = await fetchAllAvailableKPIs();
    return data;
  }
);

export const getFollowedKPIs = createAsyncThunk(
  "kpi/getFollowedKPIs",
  async () => {
    const data = await fetchFollowedKPIs();
    return data;
  }
);

export const followKPI = createAsyncThunk(
  "kpi/followKPI",
  async (title: string) => {
    const data = await addKPIToFollowing(title);
    return data;
  }
);

const kpiSlice = createSlice({
  name: "kpi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrowseKPIs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrowseKPIs.fulfilled, (state, action) => {
        state.loading = false;
        state.browseKPIs = action.payload;
      })
      .addCase(getBrowseKPIs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getFollowedKPIs.fulfilled, (state, action) => {
        state.followingKPIs = action.payload;
      })
      .addCase(followKPI.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.browseKPIs = state.browseKPIs.filter(
          (k) => k.title !== action.payload!.title
        );
        state.followingKPIs.push(action.payload);
      });
  },
});

export default kpiSlice.reducer;
