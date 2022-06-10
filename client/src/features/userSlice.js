import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from '../API_FROZEN_OBJ';
import axios from 'axios';

export const fetchUserLogin = createAsyncThunk(
  'user/fetchUserLogin',
  async (loginData) => {
    const { username, password } = loginData;
    let { data } = await axios
      .post(`${API_URL}/login`, {
        username,
        password,
      })
      .then((response) => {
        return response;
      });
    return data;
  }
);

const initialState = {
  loading: null,
  auth: null,
  loginStatus: false,
  userDetails: {},
  userTickets: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserLogin.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchUserLogin.fulfilled](state, { payload }) {
      if (!payload.auth) {
        state.loading = HTTP_STATUS.REJECTED;
        state.loginStatus = false;
        state.auth = false;
      } else {
        state.loading = HTTP_STATUS.FULFILLED;
        state.loginStatus = true;
        state.auth = true;
        state.userDetails = payload.result.details;
        state.userTickets = payload.result.tickets;
        localStorage.setItem('token', payload.token);
      }
    },
    [fetchUserLogin.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
      state.loginStatus = false;
      state.auth = false;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
