/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { closeModal } from '@/features/search/search-slice';
import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const SearchModal = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [showModal]);

  return (
    <>
      <form
        className={`${
          showModal ? 'block' : 'hidden'
        } absolute left-1/2 top-0 z-50 mx-auto mt-28 w-7/12 -translate-x-1/2 rounded-xl bg-light-200 p-5 dark:bg-dark-200 lg:min-h-[30rem]`}
        spellCheck={false}
      >
        <div className="flex items-center justify-between">
          <div className="relative flex-grow">
            <BiSearch className="absolute top-2 left-3 text-2xl" />
            <input
              className="w-full appearance-none rounded-md bg-light-300 py-2 pr-5 pl-10 text-lg leading-6 text-dark-100 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-dark-300 dark:text-light-400 dark:placeholder:text-light-400/60 dark:focus:ring-primary-dark"
              type="search"
              aria-label="Cari kata"
              placeholder="Cari kata..."
              ref={searchInput}
            />
          </div>
          <IoClose
            className="ml-3 cursor-pointer text-xl text-red-600 dark:text-red-500"
            onClick={() => dispatch(closeModal())}
          />
        </div>
      </form>
      <div
        className={`${
          showModal ? 'block' : 'hidden'
        } fixed top-0 left-0 h-full w-full bg-black opacity-20`}
        onClick={() => dispatch(closeModal())}
        role="button"
        tabIndex={-1}
      />
    </>
  );
};

export default SearchModal;
