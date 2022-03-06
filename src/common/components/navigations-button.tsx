import { FunctionComponent } from 'react';
import { MdNavigateNext, MdLastPage } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setPage } from '@/features/book/books-slice';

const NavigationsButton: FunctionComponent<{ style?: string }> = ({ style }) => {
  const dispatch = useAppDispatch();
  const { book, page } = useAppSelector((state) => state.books);

  return (
    <div className={`${style} flex items-center justify-center`}>
      <MdLastPage
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(setPage(book.content[0].page))}
      />
      <MdNavigateNext
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(setPage(page - 1))}
      />
      <input
        className="w-10 text-center text-lg dark:bg-slate-900 dark:text-slate-200"
        type="number"
        name="page"
        id="page"
        value={page}
        onChange={(e) => dispatch(setPage(+e.target.value))}
      />
      <MdNavigateNext
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(setPage(page + 1))}
      />
      <MdLastPage
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(setPage(book.content[book.content.length - 1].page))}
      />
    </div>
  );
};

export default NavigationsButton;
