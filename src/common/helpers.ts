export const totalSkip = (data: []) => data.filter((table) => table?.head).length;

export const truncate = (word: string, length: number = 10) =>
  word.substring(0, length).concat('...');

export const addDarkColorScheme = () => {
  const rootElement = document.querySelector('html.dark');

  if (rootElement) {
    (rootElement as HTMLDivElement).style.colorScheme = 'dark';
  } else {
    (document.querySelector('html') as HTMLElement).style.colorScheme = 'light';
  }
};

export const formatCategory = (text: string) => {
  return text.replace(/-/g, ' ').replace('dan', '&');
};

export const unFormatCategory = (text: string) => {
  return text.replace(/ /g, '-').replace('&', 'dan').toLowerCase();
};

export const formatPublish = (text: string) => {
  return text.split(' ')[3];
};

export const navigateHandler = (event: KeyboardEvent, callback: () => void) => {
  if (event.key === 'Enter' || event.type === 'click') {
    callback();
  }
};

export const getData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
