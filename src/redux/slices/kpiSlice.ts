// src/redux/slices/kpiSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { MetricCard } from "../../types";
import {
  fetchAllKPIs,
  fetchFollowedKPIs,
  followKPI,
  unfollowKPI,
} from "../thunks/kpiThunks";

type KPIState = {
  all: MetricCard[];
  followed: MetricCard[];
  loading: boolean;
  error: string | null;
};

const initialState: KPIState = {
  all: [],
  followed: [],
  loading: false,
  error: null,
};

const kpiSlice = createSlice({
  name: "kpis",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllKPIs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllKPIs.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
      })
      .addCase(fetchAllKPIs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch all KPIs";
      })
      .addCase(fetchFollowedKPIs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFollowedKPIs.fulfilled, (state, action) => {
        state.loading = false;
        state.followed = action.payload;
      })
      .addCase(fetchFollowedKPIs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch followed KPIs";
      })
      .addCase(unfollowKPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unfollowKPI.fulfilled, (state, action) => {
        state.loading = false;
        state.followed = state.followed.filter(
          (kpi) => kpi.id !== action.payload
        );
      })
      .addCase(unfollowKPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to unfollow KPI";
      })
      .addCase(followKPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(followKPI.fulfilled, (state, action) => {
        state.loading = false;
        // Add KPI to followed if not already there
        const kpiToAdd = state.all.find((kpi) => kpi.id === action.payload);
        if (kpiToAdd && !state.followed.some((kpi) => kpi.id === kpiToAdd.id)) {
          state.followed.push(kpiToAdd);
        }
      })
      .addCase(followKPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to follow KPI";
      });
  },
});

export default kpiSlice.reducer;
