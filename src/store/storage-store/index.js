/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageState } from './initial-storage-state';
import { getData } from './thunk';

const storageSlice = createSlice({
  name: 'storageReducer',
  initialState: initialStorageState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = initialStorageState.data;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default storageSlice.reducer;
