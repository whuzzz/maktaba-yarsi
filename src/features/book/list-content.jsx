import { useDispatch } from 'react-redux';
import { totalSkip } from '@/common/helpers';
import { navigateTo } from './book-actions';

function ListContent({ data, item, indent, on }) {
  let { text } = item;
  const dispatch = useDispatch();
  const listStyle = `${indent} ${on(item.page)} ${
    indent >= 0
      ? 'font-medium text-slate-900 dark:text-slate-200'
      : ' text-slate-700 dark:text-slate-400'
  } flex cursor-pointer hover:text-green-600 hover:dark:text-green-500`;

  const navigateHandler = (event) => {
    if (event.key === 'Enter' || event?.type === 'click') {
      dispatch(navigateTo(item.page));
    }
  };

  if (indent >= 0) {
    const substractTOC = totalSkip(data);
    if (!item?.head && !item?.tail) {
      text = `BAB ${indent + 1 - substractTOC}. ${text}`;
    }
  }

  if (item?.sub) {
    const elements = [];
    item.sub.forEach((content) => {
      const key = `sub-${content.page}-${content.text}`;
      elements.push(<ListContent key={key} data={data} item={content} indent={-1} on={on} />);
    });

    return (
      <details className={`${listStyle} -ml-3.5 space-y-2 marker:text-green-500`} open>
        <summary>
          <a
            role="button"
            tabIndex="0"
            href="#!"
            onClick={navigateHandler}
            onKeyDown={navigateHandler}
            className={indent >= 0 && 'font-medium'}
          >
            {text}
          </a>
        </summary>
        <ul className="ml-8 space-y-2">{elements}</ul>
      </details>
    );
  }

  return (
    <li className={`${listStyle}`}>
      <button
        type="button"
        onClick={() => dispatch(navigateTo(item.page))}
        className={`${indent >= 0 && '!font-medium'} text-left`}
      >
        {text}
      </button>
    </li>
  );
}

export default ListContent;
