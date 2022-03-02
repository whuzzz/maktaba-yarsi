import { useDispatch } from 'react-redux';
import { navigateHandler, totalSkip } from '@/common/helpers';
import { navigateTo } from './book-actions';
import NestedContent from './nested-content';

function ListContent({ data, item, indent, on }) {
  let { text } = item;
  const dispatch = useDispatch();
  const listStyle = `${indent} ${on(item.page)} ${
    indent >= 0
      ? 'font-medium text-dark-100 dark:text-light-300'
      : ' text-dark-300 dark:text-slate-400'
  } flex cursor-pointer hover:text-primary-light hover:dark:text-primary-dark`;

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
      <NestedContent
        listStyle={listStyle}
        eventHandler={(e) => navigateHandler(e, () => dispatch(navigateTo(item.page)))}
        elements={elements}
        text={text}
      />
    );
  }

  return (
    <li className={listStyle}>
      <button
        type="button"
        onClick={() => dispatch(navigateTo(item.page))}
        className={`${indent >= 0 ? '!font-medium' : ''} text-left`}
      >
        {text}
      </button>
    </li>
  );
}

export default ListContent;
