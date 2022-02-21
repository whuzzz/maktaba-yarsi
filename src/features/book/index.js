import { getBook, getBooks, navigateTo } from "./book-actions";
import { bookReducer } from "./book-reducer";
import DetailBook from "./detail-book";
import DisplayContent from "./display-content";
import TableOfContents from "./table-of-contents";

export {
  DisplayContent,
  TableOfContents,
  navigateTo,
  getBooks,
  getBook,
  DetailBook,
};

export default bookReducer;
