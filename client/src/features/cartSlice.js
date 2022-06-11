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
      console.log(state);
    },
    removeFromCart: (state, action) => {
      const newData = state.data.filter((obj) => obj.cartId !== action.payload);
      state.data = newData;
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
