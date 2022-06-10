import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, HTTP_STATUS } from '../API_FROZEN_OBJ';

export const fetchDeparturesData = createAsyncThunk(
  'departures/fetchDeparturesData',
  async (searchingBarData) => {
    const { valueFrom, valueTo, date } = searchingBarData;
    const { data } = await axios.get(`${API_URL}/departures`, {
      params: { valueFrom, valueTo, date },
    });
    return data;
  }
);

export const departuresSlice = createSlice({
  name: 'departures',
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {
    clearDeparturesData: (state) => {
      state.data = [];
    },
  },
  extraReducers: {
    [fetchDeparturesData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchDeparturesData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchDeparturesData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default departuresSlice.reducer;
export const { clearDeparturesData } = departuresSlice.actions;
