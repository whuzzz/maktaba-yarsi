import { useRouter } from 'next/router';
import { navigateHandler } from '@/common/helpers';
import DetailBook from './detail-book';

export default function ListBooks({ id, info, category }) {
  const router = useRouter();

  return (
    <div
      className="group cursor-pointer bg-light-300 py-5 pl-6 dark:bg-dark-300"
      onClick={(e) => navigateHandler(e, () => router.push(`/books/${category}/${id}`))}
      onKeyDown={(e) => navigateHandler(e, () => router.push(`/books/${category}/${id}`))}
      role="button"
      tabIndex="0"
    >
      <h2 className="text-xl font-medium text-dark-300 duration-150 group-hover:text-primary-light dark:text-light-300 dark:group-hover:text-primary-dark">
        {info.title}
      </h2>
      <DetailBook book={info} />
    </div>
  );
}
