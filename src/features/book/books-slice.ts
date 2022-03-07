import type { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, Categories } from '@/common/types/index.model';

interface BooksSliceState {
  books: Book[];
  categories: Categories[];
  category: object[];
  book: Book;
  page: number;
}

const initialState = {
  books: [],
  categories: [],
  category: [],
  book: {},
  page: 0,
} as unknown as BooksSliceState;

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<Book>) => {
      const book = action.payload;
      const firstPage = book.content[0].page;

      if (state.page !== firstPage) {
        state.page = firstPage;
        state.book = book;
      }
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      const books = action.payload;

      state.books = books;
    },
    setCategories: (state, action: PayloadAction<Categories[]>) => {
      const categories = action.payload;

      state.categories = categories;
    },
    setPage: (state, action: PayloadAction<number>) => {
      const book = state.book.content;
      let page = action.payload;

      if (page > book[book.length - 1].page) {
        page = book[book.length - 1].page;
      } else if (page < book[0].page || Number.isNaN(page)) {
        page = book[0].page;
      }

      state.page = page;
    },
  },
});

export const { setBook, setBooks, setCategories, setPage } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;
export const selectBook = (state: RootState) => state.books.book;
export const selectCategories = (state: RootState) => state.books.categories;
export const selectCategory = (state: RootState) => state.books.category;
export const selectPage = (state: RootState) => state.books.page;

export default booksSlice.reducer;
