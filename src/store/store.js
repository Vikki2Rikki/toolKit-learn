import { configureStore } from '@reduxjs/toolkit';
import postSlice from 'features/post/postSlice';
import todoSlice from 'features/todo/todoSlice';
import userSlice from 'features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
});
