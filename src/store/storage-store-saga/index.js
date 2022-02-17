/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageState } from './initial-storage-state';

const storageSlice = createSlice({
  name: 'storageReducer',
  initialState: initialStorageState,
  reducers: {
    getStorageRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialStorageState.data;
    },
  },
});

export default storageSlice.reducer;
