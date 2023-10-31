import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      state.items.push({ product, quantity });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
