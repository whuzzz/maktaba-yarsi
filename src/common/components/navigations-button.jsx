import { MdNavigateNext, MdLastPage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../features/book";

function NavigationsButton() {
  const dispatch = useDispatch();
  const { book, page } = useSelector((state) => state.book);

  return (
    <div className="flex items-center justify-center">
      <MdLastPage
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(navigateTo(book.content[0].page))}
      />
      <MdNavigateNext
        className="rotate-180 cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(navigateTo(page - 1))}
      />
      <input
        className="w-10 text-center text-lg dark:bg-slate-900 dark:text-slate-200"
        type="number"
        name="page"
        id="page"
        value={page}
        onChange={(e) => dispatch(navigateTo(parseInt(e.target.value)))}
      />
      <MdNavigateNext
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() => dispatch(navigateTo(page + 1))}
      />
      <MdLastPage
        className="cursor-pointer text-3xl hover:text-slate-900 dark:hover:text-slate-100"
        onClick={() =>
          dispatch(navigateTo(book.content[book.content.length - 1].page))
        }
      />
    </div>
  );
}

export default NavigationsButton;
