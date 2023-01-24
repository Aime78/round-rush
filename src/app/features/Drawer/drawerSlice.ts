import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  open: boolean;
}

const initialState: InitialState = {
  open: false,
};

const draweSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { openDrawer } = draweSlice.actions;
export default draweSlice.reducer;
