import Link from 'next/link';
import { Fragment } from 'react';
import { FORMAT_BREADCRUMB } from './constant';

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

export const previousPage = (route, index) => (
  <Fragment key={index}>
    <li className="cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-green-500">
      <Link href={`/${route.link}`} passHref>
        <p type="button">{route.title}</p>
      </Link>
    </li>
    {FORMAT_BREADCRUMB}
  </Fragment>
);

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
