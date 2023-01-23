import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiURLThirdParty } from '../../../constants/apiURLs';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
};

export const getUsers = createAsyncThunk('getUsers', async () => {
  const response = await axios.get(apiURLThirdParty);
  const users = response.data;
  return users;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'refresh page';
    });
  },
});

export default usersSlice.reducer;
