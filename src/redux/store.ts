// /src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import kpiReducer from "./slices/kpiSlice";
import authReducer from "./slices/authSlice";
import tokenReducer from "./slices/tokenSlice";
import questionsReducer from "./slices/questionsSlice";

const store = configureStore({
  reducer: {
    kpis: kpiReducer,
    auth: authReducer,
    tokenStatus: tokenReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
