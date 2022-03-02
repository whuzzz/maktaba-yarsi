export const totalSkip = (data) => data.filter((table) => table?.head).length;

export const truncate = (word, length = 10) => word.substring(0, length).concat('...');

export const addDarkColorScheme = () => {
  const rootElement = document.querySelector('html.dark');

  if (rootElement) {
    rootElement.style.colorScheme = 'dark';
  } else {
    document.querySelector('html').style.colorScheme = 'light';
  }
};

export const formatCategory = (string) => {
  return string.replace(/-/g, ' ').replace('dan', '&');
};

export const unFormatCategory = (string) => {
  return string.replace(/ /g, '-').replace('&', 'dan').toLowerCase();
};

export const formatPublish = (string) => {
  return string.split(' ')[3];
};

export const navigateHandler = (event, callback) => {
  if (event.key === 'Enter' || event?.type === 'click') {
    callback();
  }
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
