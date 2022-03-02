import { BiSearch } from 'react-icons/bi';

export default function SearchInput({ className = 'w-96 mx-auto' }) {
  return (
    <div
      className={`${className} relative mt-8 overflow-hidden rounded-md border border-black/20 dark:border-0`}
    >
      <input
        className=" w-full bg-light-300 py-3 px-6 pr-20 outline-none placeholder:font-semibold placeholder:text-dark-300 hover:bg-light-400 dark:bg-dark-200 placeholder:dark:text-light-300 hover:dark:bg-dark-300"
        type="text"
        name="search"
        placeholder="Cari kata..."
        id="search"
      />
      <button
        type="button"
        className="absolute top-0 right-0 h-full bg-primary-light px-3 dark:bg-primary-dark"
      >
        <BiSearch className="text-3xl font-bold text-light-100 hover:text-light-200" />
      </button>
    </div>
  );
}
