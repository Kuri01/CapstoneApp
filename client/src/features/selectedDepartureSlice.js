import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: null };

export const selectedDepartureSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectDeparture: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selectDeparture } = selectedDepartureSlice.actions;
export default selectedDepartureSlice.reducer;
