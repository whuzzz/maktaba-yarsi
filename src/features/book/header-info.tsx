import DetailBook from './detail-book';

export default function HeaderInfo({ book }) {
  return (
    <header className="my-5 bg-light-200 p-5 dark:bg-dark-200">
      <h1 className="truncate text-3xl font-extrabold text-dark-200 dark:text-light-200">
        {book.info.title}
      </h1>
      <DetailBook book={book.info} />
    </header>
  );
}
