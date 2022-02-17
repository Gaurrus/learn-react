import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStorage = createAsyncThunk('storage/getStorage', () =>
  axios
    .get('./storage.json')
    .then((response) => response.data)
    .catch((error) => error),
);
