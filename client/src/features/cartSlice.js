import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = { data: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartId = uuid();
      const newObj = {
        cartId,
        communicationId: action.payload.id,
        details: action.payload.details,
      };
      state.data = [...state.data, newObj];
    },
    removeFromCart: (state, action) => {
      let newData = state.data;
      newData.filter((obj) => obj.id !== action.payload.id);
      state.data = newData;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
