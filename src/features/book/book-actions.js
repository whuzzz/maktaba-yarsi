import { GET_BOOK, SET_PAGE } from "../../app/action-types";
import API_CONFIG from "../../common/constant";
import { getData } from "../../common/helpers";

export const getBooks = () => async (dispatch) => {
  const books = await getData(API_CONFIG.GET_BOOKS);

  dispatch({
    type: GET_BOOK,
    payload: books,
  });
};

export const getBook = (id) => async (dispatch) => {
  const specificBook = await getData(API_CONFIG.GET_BOOK(id));

  dispatch({
    type: GET_BOOK,
    payload: specificBook,
  });
};

export const navigateTo = (page) => async (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page,
  });
};
