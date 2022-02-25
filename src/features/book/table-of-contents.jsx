import ListContent from './list-content';

export default function TableOfContents({ data, page }) {
  const currentPage = (idx) =>
    page === idx ? 'text-green-600 dark:text-green-500' : 'text-current';

  return (
    <aside className="fixed h-full w-3/12 overflow-y-auto py-20 pl-8 pr-4 pt-8 dark:bg-slate-900">
      <ul className="space-y-8 text-sm leading-6 text-slate-700 dark:text-slate-400">
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
}
