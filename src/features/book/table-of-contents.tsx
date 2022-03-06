import { Outline } from '@/common/types/index.model';
import { FunctionComponent } from 'react';
import ListContent from './list-content';

type TableOfContentsProps = {
  data: Outline[];
  page: number;
};

const TableOfContents: FunctionComponent<TableOfContentsProps> = ({ data, page }) => {
  const currentPage = (idx: number) =>
    page === idx ? 'text-primary-light dark:text-primary-dark' : '';

  return (
    <aside className="fixed h-full w-3/12 overflow-y-auto border-r border-black/10 bg-light-100 py-20 pl-8 pr-4 pt-8 dark:border-gray-800 dark:bg-dark-100">
      <ul className="space-y-8 text-sm leading-6 text-dark-300 dark:text-light-300">
        {data.map((table, index) => {
          const elements = [];

          elements.push(
            <ListContent
              key={`head-${table.page}-${table.text}`}
              data={data}
              item={table}
              indent={index}
              on={currentPage}
            />
          );

          return elements;
        })}
      </ul>
    </aside>
  );
};

export default TableOfContents;
