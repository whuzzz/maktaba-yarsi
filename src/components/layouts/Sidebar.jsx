function Sidebar({ data, callback }) {
  const renderSubTables = (content, html, level) => {
    const indent = level > 1 ? "pl-8" : "pl-4";

    if (content) {
      content.map((item, index) => {
        html.push(
          <li
            key={`sub-${item.page}${index}`}
            className={`${indent} cursor-pointer duration-100 before:mr-1 before:text-green-900 before:content-['>'] hover:text-green-600 before:dark:text-green-500 hover:dark:text-green-500`}
            onClick={() => callback(item.page)}
          >
            {item.text}
          </li>
        );
        renderSubTables(item?.sub, html, level + 1);
      });
    }
  };
  return (
    <aside className="fixed h-full w-3/12 overflow-y-auto py-20 pl-8 pr-4 pt-8 duration-150 dark:bg-slate-900 ">
      <ul className="text-sm leading-6 text-slate-700 dark:text-slate-400">
        {data.map((table, index) => {
          let heading = table.text;
          let elements = [];

          if (!table?.skip) {
            heading = `BAB ${index}. ${table.text}`;
          }
          elements.push(
            <li
              key={table.page}
              className="cursor-pointer font-medium text-slate-900 duration-100 hover:text-green-600 dark:text-slate-200 hover:dark:text-green-500"
              onClick={() => callback(table.page)}
            >
              {heading}
            </li>
          );

          renderSubTables(table.sub, elements, 1);

          return (
            <ul className="mb-8 space-y-2" key={`head-${index}`}>
              {elements}
            </ul>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
