import { booksReducer } from '@/features/book';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
