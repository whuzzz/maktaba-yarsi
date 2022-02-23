import { getBook, getBooks, navigateTo } from "./book-actions";
import { bookReducer } from "./book-reducer";
import DisplayContent from "./display-content";
import HeaderInfo from "./header-info";
import ListCategories from "./list-categories";
import TableOfContents from "./table-of-contents";

export {
  DisplayContent,
  TableOfContents,
  navigateTo,
  getBooks,
  getBook,
  HeaderInfo,
  ListCategories,
};

export default bookReducer;
