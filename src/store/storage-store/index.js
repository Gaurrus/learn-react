/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageState } from './initial-storage-state';

const marketSlice = createSlice({
  name: 'marketReducer',
  initialState: initialStorageState,
  reducers: {
    buyProducts: (state, action) => {
      const { name, value, cost, image } = action.payload;
      state[name].cost += cost;
      state[name].value += value;
      state.summ += cost;
    },
    cleanMarket: () => initialStorageState,
  },
});

export const { buyProducts, cleanMarket } = marketSlice.actions;
export default marketSlice.reducer;
