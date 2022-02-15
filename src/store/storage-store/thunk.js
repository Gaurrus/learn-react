import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('storage/getStorage', () =>
  axios
    .get('./storage.json')
    .then((response) => response.data)
    .catch((error) => error),
);
