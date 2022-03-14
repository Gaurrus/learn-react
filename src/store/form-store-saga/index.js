/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialFromSagaState } from './initial-form-state';

const formSagaSlice = createSlice({
  name: 'formSagaReducer',
  initialState: initialFromSagaState,
  reducers: {
    postFormRequest: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.data = action.payload;
    },
    postFormSuccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      console.log('успешно');
    },
    postFormError: (state) => {
      state.isError = true;
    },
  },
});

export const { postFormRequest, postFormSuccess, postFormError } = formSagaSlice.actions;
export default formSagaSlice.reducer;
