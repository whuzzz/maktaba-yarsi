import { useAppDispatch } from '@/app/hooks';
import { openModal } from '@/features/search/search-slice';
import { FunctionComponent } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchInput: FunctionComponent<{ className?: string }> = ({
  className = 'max-w-lg mx-auto',
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${className} relative mt-8 overflow-hidden rounded-md border border-black/20 dark:border-0`}
      onClick={() => dispatch(openModal())}
      onKeyDown={() => dispatch(openModal())}
    >
      <input
        className="w-full cursor-pointer bg-light-200 py-3 px-6 pr-20 text-left font-semibold text-dark-300 outline-none hover:bg-light-300 dark:bg-dark-200 dark:text-light-300 hover:dark:bg-dark-300"
        type="button"
        name="search"
        value="Cari kata..."
        id="search"
      />
      <button type="button" className="absolute top-0 right-0 h-full  px-3">
        <BiSearch className="text-3xl font-bold text-primary-light dark:text-primary-dark" />
      </button>
    </div>
  );
};

export default SearchInput;
