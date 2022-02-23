import DetailBook from './detail-book';

export default function HeaderInfo({ book }) {
  return (
    <header className="my-5 bg-slate-800 p-5">
      <h2 className="truncate text-3xl font-extrabold dark:text-slate-300">{book.info.title}</h2>
      <DetailBook book={book.info} />
    </header>
  );
}
