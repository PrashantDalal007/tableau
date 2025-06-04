import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetricCard } from '../../types';
import { metricsData } from '../../mock/mockFollowedKPIs';

interface FollowingState {
  data: MetricCard[];
}

const initialState: FollowingState = {
  data: metricsData,
};

const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    addCardToFollowing: (state, action: PayloadAction<MetricCard>) => {
      if (!state.data.some((card) => card.title === action.payload.title)) {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addCardToFollowing } = followingSlice.actions;
export default followingSlice.reducer;
