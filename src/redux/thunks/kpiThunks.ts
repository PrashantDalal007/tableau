// src/redux/thunks/kpiThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllKPIsApi,
  fetchFollowedKPIsApi,
  unfollowKPIApi,
  followKPIApi,
} from "../../api/kpiApi";
import { MetricCard } from "../../types";

export const fetchAllKPIs = createAsyncThunk<MetricCard[]>(
  "kpis/fetchAll",
  async () => {
    return await fetchAllKPIsApi();
  }
);

export const fetchFollowedKPIs = createAsyncThunk<MetricCard[]>(
  "kpis/fetchFollowed",
  async () => {
    return await fetchFollowedKPIsApi();
  }
);

export const followKPI = createAsyncThunk<string, string>(
  "kpis/follow",
  async (id) => {
    return await followKPIApi(id);
  }
);

export const unfollowKPI = createAsyncThunk<string, string>(
  "kpis/unfollow",
  async (id) => {
    return await unfollowKPIApi(id);
  }
);
