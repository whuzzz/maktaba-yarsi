import { FunctionComponent } from 'react';
import { MdNavigateNext, MdLastPage } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setPage } from '@/features/book/books-slice';

type NavigationsButtonProps = {
  style?: string;
  defaultPage?: number[];
  value?: number;
  onNavigate?: (page: number) => void;
};

const NavigationsButton: FunctionComponent<NavigationsButtonProps> = ({
  style,
  defaultPage,
  value,
  onNavigate,
}) => {
  const dispatch = useAppDispatch();
  const { book, page } = useAppSelector((state) => state.books);

  const navigateHanlder = (actions: number, index: number) => {
    if (onNavigate && defaultPage) {
      if (index === -1) {
        onNavigate(actions);
      } else {
        onNavigate(defaultPage[index]);
      }
    } else {
      dispatch(setPage(actions));
    }
  };

  return (
    <div className={`${style} flex items-center justify-center`}>
      <MdLastPage
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => navigateHanlder(book.content?.[0].page, 0)}
      />
      <MdNavigateNext
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => navigateHanlder(page - 1, 1)}
      />
      <input
        className="w-10 text-center text-lg dark:bg-slate-900 dark:text-slate-200"
        type="number"
        name="page"
        id="page"
        value={value || page}
        onChange={(e) => navigateHanlder(+e.target.value, -1)}
      />
      <MdNavigateNext
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => navigateHanlder(page + 1, 2)}
      />
      <MdLastPage
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => navigateHanlder(book.content?.[book.content.length - 1].page, 3)}
      />
    </div>
  );
};

export default NavigationsButton;
