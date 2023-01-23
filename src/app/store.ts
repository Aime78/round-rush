import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/Auth/authSlice';
import usersReducer from './features/Users/usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
