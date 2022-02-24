import { formatPublish } from '@/common/helpers';

export default function DetailBook({ book }) {
  return (
    <dl>
      <div className="my-1 inline-flex items-center text-center">
        <div className="rounded-xl border px-2 dark:border-slate-300 dark:text-slate-300">
          <dt className="sr-only">Price</dt>
          <dd>{book.price || 'Free'}</dd>
        </div>
        <div className="dark:text-slate-300">
          <dt className="sr-only">Pulish</dt>
          <dd className="before:px-3 before:content-['·'] after:px-3 after:content-['·']">
            {formatPublish(book.publish)}
          </dd>
        </div>
        <div className="dark:text-slate-300">
          <dt className="sr-only">Pages</dt>
          <dd>{book.pages} Pages</dd>
        </div>
      </div>
      <div className="flex items-center text-sm">
        <dt className="sr-only">Author</dt>
        <dd className="group-hover:underline group-hover:decoration-2 dark:group-hover:decoration-green-500">
          {book.author}
        </dd>
        <dd className="before:px-3 before:content-['·']">{book.category}</dd>
      </div>
    </dl>
  );
}
