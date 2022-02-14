import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStorage = createAsyncThunk('storage/getStorage', () => (
  axios
    .get()
    .then((response) => response.data)
    .catch((error) => console.log(error))
);
