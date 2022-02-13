/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialProductState } from './initial-state';

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: initialProductState,
  reducers: {
    addProduct: (state, action) => {
      const { name, value, cost, image } = action.payload;
      state[name].value = value;
      state[name].cost = cost;
      state[name].image = image;
    },
    clearProduct: () => initialProductState,
  },
});

export const { addProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
