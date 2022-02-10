import ListContent from "../features/book/list-content";

export const totalSkip = (data) => data.filter((table) => table?.head).length;

export const addDarkColorScheme = () => {
  const rootElement = document.querySelector("html.dark");

  if (rootElement) {
    rootElement.style.colorScheme = "dark";
  } else {
    document.querySelector("html").style.colorScheme = "light";
  }
};

export const renderSubTables = (content, html, level, currentPage) => {
  const indent = level > 1 ? "pl-8" : "pl-4";

  if (content) {
    content.map((item) => {
      const key = `sub-${item.page}-${item.text}-${level}`;
      html.push(
        <ListContent key={key} item={item} indent={indent} on={currentPage} />
      );
      renderSubTables(item?.sub, html, level + 1, currentPage);
    });
  }
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
