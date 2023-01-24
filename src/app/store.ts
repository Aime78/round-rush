import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/Auth/authSlice';
import usersReducer from './features/Users/usersSlice';
import drawerReducer from './features/Drawer/drawerSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    drawer: drawerReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
