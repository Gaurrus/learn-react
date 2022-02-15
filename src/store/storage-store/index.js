/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageState } from './initial-storage-state';
import { getStorage } from './thunk';

const storageSlice = createSlice({
  name: 'storageReducer',
  initialState: initialStorageState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStorage.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = initialStorageState.data;
      })
      .addCase(getStorage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getStorage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default storageSlice.reducer;
