import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  user: {
    email: string;
    password: string;
    authenticated?: boolean;
  };
}

const initialState: InitialState = {
  user: {
    email: '',
    password: '',
    authenticated: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.user = action.payload;
      state.user.authenticated = true;
    },
  },
});

export const { authUser } = userSlice.actions;
export default userSlice.reducer;
