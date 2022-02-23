import {
  GET_BOOK,
  GET_BOOKS,
  GET_CATEGORIES,
  GET_CATEGORY,
  SET_PAGE,
} from '../../app/action-types';
import API_CONFIG from '../../common/constant';
import { getData } from '../../common/helpers';

export const getBooks = (category) => async (dispatch) => {
  const categoryBook = await getData(API_CONFIG.GET_CATEGORY(category));

  dispatch({
    type: GET_BOOKS,
    payload: categoryBook,
  });
};

export const getCategories = () => async (dispatch) => {
  const categoriesBook = await getData(API_CONFIG.GET_CATEGORIES);

  dispatch({
    type: GET_CATEGORIES,
    payload: categoriesBook,
  });
};

export const getCategory = (category) => async (dispatch) => {
  const categoryBook = await getData(API_CONFIG.GET_CATEGORY(category));

  dispatch({
    type: GET_CATEGORY,
    payload: categoryBook,
  });
};

export const getBook = (id, category) => async (dispatch) => {
  const specificBook = await getData(API_CONFIG.GET_BOOK(id, category));

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
