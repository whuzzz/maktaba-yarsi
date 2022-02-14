import { MdNavigateNext } from "react-icons/md";
import { useDispatch } from "react-redux";
import { totalSkip } from "../../common/helpers";
import { navigateTo } from "./book-actions";

function ListContent({ data, item, indent, on, heading }) {
  let text = item.text;
  const dispatch = useDispatch();
  const listStyle = `${indent} ${on(item.page)} ${
    heading
      ? "font-medium text-slate-900 dark:text-slate-200"
      : "flex before:dark:text-green-500"
  } cursor-pointer hover:text-green-600 hover:dark:text-green-500`;

  if (heading) {
    const substractTOC = totalSkip(data);
    if (!item?.head && !item?.tail) {
      text = `BAB ${indent + 1 - substractTOC}. ${item.text}`;
    }
  }

  return (
    <li className={listStyle} onClick={() => dispatch(navigateTo(item.page))}>
      {!heading && (
        <MdNavigateNext className="shrink-0 text-xl text-green-600" />
      )}
      {text}
    </li>
  );
}

export default ListContent;
