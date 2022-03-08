import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '@/features/book';
import searchReducer from '@/features/search';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
