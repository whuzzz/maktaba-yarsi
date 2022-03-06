import { Book } from '@/common/types/index.model';
import { FunctionComponent } from 'react';
import DetailBook from './detail-book';

type HeaderProps = {
  book: Book;
};

const HeaderInfo: FunctionComponent<HeaderProps> = ({ book }) => {
  return (
    <header className="my-5 bg-light-200 p-5 dark:bg-dark-200">
      <h1 className="truncate text-3xl font-extrabold text-dark-200 dark:text-light-200">
        {book.info.title}
      </h1>
      <DetailBook book={book.info} />
    </header>
  );
};
export default HeaderInfo;
