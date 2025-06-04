import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetricCard } from '../../types';
import { browseMetricsData } from '../../mock/mockBrowseKPIs';

interface BrowseState {
  data: MetricCard[];
}

const initialState: BrowseState = {
  data: browseMetricsData,
};

const browseSlice = createSlice({
  name: 'browse',
  initialState,
  reducers: {
    removeCardFromBrowse: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((card) => card.title !== action.payload);
    },
  },
});

export const { removeCardFromBrowse } = browseSlice.actions;
export default browseSlice.reducer;
