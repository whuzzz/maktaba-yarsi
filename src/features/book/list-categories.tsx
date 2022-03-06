import Link from 'next/link';
import { formatCategory } from '@/common/helpers';
import { FunctionComponent } from 'react';

const ListCategories: FunctionComponent<{ category: string }> = ({ category }) => {
  return (
    <Link href={`/books/${category}`} passHref>
      <p className="w-60 cursor-pointer rounded-xl border border-primary-light py-3 text-center text-2xl font-medium capitalize duration-300 hover:bg-primary-light hover:text-light-100 dark:border-primary-dark hover:dark:bg-primary-dark hover:dark:text-dark-100">
        {formatCategory(category)}
      </p>
    </Link>
  );
};

export default ListCategories;
