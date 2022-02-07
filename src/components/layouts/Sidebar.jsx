function Sidebar({ data }) {
  const renderSubTables = (content, html, level) => {
    const indent = level > 1 ? "pl-8" : "pl-4";

    if (content) {
      content.map((item, index) => {
        html.push(
          <li
            className={`${indent} cursor-pointer before:mr-1 before:text-green-900 before:content-['>'] before:dark:text-green-500`}
            key={`sub-${item.page}${index}`}
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
              className="cursor-pointer font-medium text-slate-900 dark:text-slate-200"
              key={table.page}
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
