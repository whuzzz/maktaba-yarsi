import { formatPublish } from '@/common/helpers';
import { BookInfo } from '@/common/types/index.model';
import { FunctionComponent } from 'react';

type DetailBookProps = {
  book: BookInfo;
};

const DetailBook: FunctionComponent<DetailBookProps> = ({ book }) => {
  return (
    <dl>
      <div className="my-1 inline-flex items-center text-center">
        <div className="rounded-xl border border-dark-400  px-2 text-dark-400 dark:border-light-400 dark:text-light-400">
          <dt className="sr-only">Price</dt>
          <dd>{book.price || 'Free'}</dd>
        </div>
        <div className="text-dark-400 dark:text-light-400">
          <dt className="sr-only">Pulish</dt>
          <dd className="before:px-3 before:content-['·'] after:px-3 after:content-['·']">
            {formatPublish(book.publish)}
          </dd>
        </div>
        <div className="text-dark-400 dark:text-light-400">
          <dt className="sr-only">Pages</dt>
          <dd>{book.pages} Pages</dd>
        </div>
      </div>
      <div className="flex items-center text-sm">
        <dt className="sr-only">Author</dt>
        <dd className="group-hover:underline group-hover:decoration-primary-light group-hover:decoration-2 dark:group-hover:decoration-primary-dark">
          {book.author}
        </dd>
        <dd className="before:px-3 before:content-['·']">{book.category}</dd>
      </div>
    </dl>
  );
};

export default DetailBook;
