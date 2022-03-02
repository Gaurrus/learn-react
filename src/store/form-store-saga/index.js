/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialFromSagaState } from './initial-form-state';

const fromSagaSlice = createSlice({
  name: 'fromSagaReducer',
  initialState: initialFromSagaState,
  reducers: {
    postFormRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialFromSagaState.data;
    },
    postFormSeccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
      console.log('успешно');
    },
    postFormError: (state) => {
      state.isError = true;
    },
  },
});

export const { postFormRequest, postFormSeccess, postFormError } = fromSagaSlice.actions;
export default fromSagaSlice.reducer;
