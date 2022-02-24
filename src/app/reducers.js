import { combineReducers } from 'redux';
import bookReducer from '@/features/book';

export default combineReducers({
  book: bookReducer,
});
