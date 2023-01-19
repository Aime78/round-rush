import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  fullName: string;
  password: string;
}

type InitialState = {
  loading: boolean;
  user: User[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  user: [],
  error: '',
};

type dataObj = {
  email: string;
  password: string;
};
export const authUser = createAsyncThunk('Auth/getUser', async (data: dataObj) => {
  const response = await axios.get(`http://localhost:3500/companies?email=${data.email}&password=${data.password}`);
  const user = response.data;
  return user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authUser.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'refresh page';
    });
  },
});

export default userSlice.reducer;
