/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { BiBookOpen, BiCategory, BiSearch } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { closeModal } from '@/features/search/search-slice';
import Select, { MultiValue } from 'react-select';
import { useTheme } from 'next-themes';
import { formatCategory, getData } from '../helpers';
import API_CONFIG, { selectStyles } from '../constant';
import { Book, Categories } from '../types/index.model';

const SearchModal = () => {
  const dispatch = useAppDispatch();
  const { resolvedTheme } = useTheme();
  const [category, setCategory] = React.useState<MultiValue<Categories>>([]);
  const [listOfBooks, setlistOfBooks] = React.useState<Book[]>([]);
  const { showModal } = useAppSelector((state) => state.search);
  const { categories } = useAppSelector((state) => state.books);
  const searchInput = React.useRef<HTMLInputElement>(null);

  const getBooks = React.useCallback(() => {
    const specificBooks = category.map((value) => {
      return new Promise<Book>((resolve, reject) => {
        try {
          const books = getData(API_CONFIG.GET_CATEGORY(value.category));
          resolve(books);
        } catch (error) {
          reject(error);
        }
      });
    });

    Promise.all(specificBooks).then((books) => setlistOfBooks(books.flat() as Book[]));
  }, [category]);

  React.useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [showModal]);

  React.useEffect(getBooks, [getBooks]);

  const categoryInputHandler = (value: MultiValue<Categories>) => {
    setCategory(value);
    if (value) {
      setlistOfBooks([]);
    }
  };

  return (
    <>
      {showModal && (
        <form
          className="absolute left-1/2 top-0 z-50 mx-auto mt-28 flex w-7/12 -translate-x-1/2 flex-col space-y-5 rounded-xl bg-light-200 p-5 dark:bg-dark-200 lg:min-h-[30rem]"
          spellCheck={false}
        >
          <div className="flex items-center justify-between">
            <div className="relative flex-grow">
              <BiSearch className="absolute top-2 left-3 text-2xl" />
              <input
                className="w-full appearance-none rounded-md bg-light-300 py-2 pr-5 pl-12 text-lg leading-6 text-dark-100 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-dark-300 dark:text-light-400 dark:placeholder:text-light-400/60 dark:focus:ring-primary-dark"
                type="search"
                aria-label="Cari topik"
                placeholder="Cari topik permasalahan seperti iman, ikhlas, jodoh dan lain-lain..."
                ref={searchInput}
              />
            </div>
            <IoClose
              className="ml-3 cursor-pointer text-xl text-red-600 dark:text-red-500"
              onClick={() => dispatch(closeModal())}
            />
          </div>
          <div className="relative">
            <BiCategory className="absolute top-2 left-3 z-10 text-2xl" />
            <Select
              name="category"
              placeholder="Pilih kategori"
              aria-label="Pilih kategori"
              getOptionLabel={(option) => formatCategory(option.category)}
              getOptionValue={(option) => option.category}
              options={categories.categories}
              onChange={categoryInputHandler}
              styles={selectStyles(resolvedTheme === 'dark')}
              isMulti
            />
          </div>

          <div className="relative">
            <BiBookOpen className="absolute top-2 left-3 z-10 text-2xl" />
            <Select
              name="bookId"
              className={listOfBooks.length === 0 ? 'cursor-not-allowed' : ''}
              placeholder="Pilih buku"
              aria-label="Pilih buku"
              getOptionLabel={(option) => option.info.title}
              getOptionValue={(option) => option.id}
              options={listOfBooks}
              styles={selectStyles(resolvedTheme === 'dark')}
              isDisabled={listOfBooks.length === 0}
            />
          </div>
          <button
            className="!mt-auto block w-full rounded-md bg-primary-light py-2 text-center text-xl font-bold leading-6 text-light-200 dark:bg-primary-dark dark:text-dark-200"
            type="submit"
          >
            Cari Kata
          </button>
        </form>
      )}
      {showModal && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black opacity-20"
          onClick={() => dispatch(closeModal())}
          role="button"
          tabIndex={-1}
        />
      )}
    </>
  );
};

export default SearchModal;
