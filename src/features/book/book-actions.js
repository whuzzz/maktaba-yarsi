/* eslint-disable no-unused-vars */
import { GET_BOOK, SET_PAGE } from "../../app/action-types";
import { getData } from "../../common/helpers";

export const getBooks = () => async (dispatch) => {
  const localhost = "http://localhost:5000/books";
  const global = "https://buku-islam-api.vercel.app/books";

  const books = await getData(localhost);

  dispatch({
    type: GET_BOOK,
    payload: books,
  });
};

export const getBook = (id) => async (dispatch) => {
  const localhost = `http://localhost:5000/books?bookId=${id}`;
  const global =
    "https://buku-islam-api.vercel.app/books?bookId=6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b";

  const book = await getData(localhost);

  dispatch({
    type: GET_BOOK,
    payload: book,
  });
};

export const navigateTo = (page) => async (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page,
  });
};
