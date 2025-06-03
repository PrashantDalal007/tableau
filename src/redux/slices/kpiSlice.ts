// /src/redux/slices/kpiSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { metricsData } from "../../constants/metrics";

const kpiSlice = createSlice({
  name: "kpi",
  initialState: {
    data: metricsData,
  },
  reducers: {
    // Placeholder for future logic (e.g., refresh data, add new metric)
  },
});

export default kpiSlice.reducer;
