// /src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import kpiReducer from "./slices/kpiSlice";
import authReducer from "./slices/authSlice";
import tokenReducer from "./slices/tokenSlice";

const store = configureStore({
  reducer: {
    kpi: kpiReducer,
    auth: authReducer,
    tokenStatus: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
