import * as TYPES from "../actions/action-types";

const initialState = {
  books: [],
  book: {},
  page: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_BOOK: {
      const book = action.payload;
      const firstPage = book.content[0].page;

      return { ...state, page: firstPage, book };
    }
    case TYPES.SET_PAGE: {
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
