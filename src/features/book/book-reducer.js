import {
  GET_BOOK,
  GET_BOOKS,
  GET_CATEGORIES,
  GET_CATEGORY,
  SET_PAGE,
  SET_ROUTES,
} from '../../app/action-types';

const initialState = {
  books: [],
  categories: [],
  category: [],
  book: {},
  page: null,
  routes: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK: {
      const book = action.payload;
      const firstPage = book.content[0].page;

      return { ...state, page: firstPage, book };
    }
    case GET_BOOKS: {
      const books = action.payload;

      return { ...state, books };
    }
    case GET_CATEGORIES: {
      const categories = action.payload;

      return { ...state, categories };
    }
    case GET_CATEGORY: {
      const category = action.payload;

      return { ...state, category };
    }
    case SET_ROUTES: {
      const routes = action.payload;

      return { ...state, routes };
    }
    case SET_PAGE: {
      const book = state.book.content;
      let page = action.payload;

      if (page > book[book.length - 1].page) {
        page = book[book.length - 1].page;
      } else if (page < book[0].page || isNaN(page)) {
        page = book[0].page;
      }

      return { ...state, page };
    }
    default:
      return state;
  }
};
