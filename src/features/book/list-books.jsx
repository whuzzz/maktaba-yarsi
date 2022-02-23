import DetailBook from './detail-book';

export default function ListBooks({ id, info, router }) {
  return (
    <article
      onClick={() => router.push(`/books/${router.query.category}/${id}`)}
      className="group cursor-pointer py-5 pl-6 dark:bg-slate-800"
    >
      <h2 className="text-xl font-medium duration-150 dark:text-slate-200 dark:group-hover:text-green-500">
        {info.title}
      </h2>
      <DetailBook book={info} />
    </article>
  );
}
