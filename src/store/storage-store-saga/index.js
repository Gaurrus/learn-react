/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageSagaState } from './initial-storage-state';

const storageSagaSlice = createSlice({
  name: 'storageSagaReducer',
  initialState: initialStorageSagaState,
  reducers: {
    getStorageRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialStorageSagaState.data;
    },
    getStorageSeccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    getStorageError: (state) => {
      state.isError = true;
    },
  },
});

export const { getStorageRequest, getStorageSeccess, getStorageError } = storageSagaSlice.actions;
export default storageSagaSlice.reducer;
