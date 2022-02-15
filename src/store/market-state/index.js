/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialMarketState } from './initial-state';

const marketSlice = createSlice({
  name: 'marketReducer',
  initialState: initialMarketState,
  reducers: {
    buyProducts: (state, action) => {
      const { name, value, cost, image } = action.payload;
      state[name].cost += cost;
      state[name].value += value;
      state[name].image = image;
      state.summ += cost;
    },
    cleanMarket: () => initialMarketState,
  },
});

export const { buyProducts, cleanMarket } = marketSlice.actions;
export default marketSlice.reducer;
