import Link from 'next/link';
import { formatCategory } from '../../common/helpers';

export default function ListCategories({ category }) {
  return (
    <Link href={`/books/${category}`}>
      <a className="w-60 rounded-xl border border-green-600 py-3 text-center text-2xl font-medium capitalize duration-300 hover:bg-green-600 hover:text-white dark:border-green-500 hover:dark:bg-green-500 hover:dark:text-slate-900">
        {formatCategory(category)}
      </a>
    </Link>
  );
}
