import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuestionsByKPIId } from "@/src/api/questions";

interface QuestionsState {
  questionsByKpiId: Record<string, string[]>;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questionsByKpiId: {},
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (kpiId: string) => {
    const questions = await fetchQuestionsByKPIId(kpiId);
    return { kpiId, questions };
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    clearQuestions: (state) => {
      state.questionsByKpiId = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questionsByKpiId[action.payload.kpiId] = action.payload.questions;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch questions";
      });
  },
});

export const { clearQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
