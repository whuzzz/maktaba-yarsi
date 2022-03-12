import React from 'react';
import { Outline } from './types/index.model';

export const totalSkip = (data: Outline[]) => data.filter((table) => table?.head).length;

export const truncate = (word: string, length = 10) => word.substring(0, length).concat('...');

export const showModal = () => {
  const appRoot = document.getElementById('__next');
  (appRoot as HTMLDivElement).classList.add('blur-sm');
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

export const extractParams = <T extends object[], U extends keyof object>(data: T, key: U) => {
  return data.reduce((prev, curr) => `${prev},${curr[key]}`, '').substring(1);
};

export const isDarkTheme = (theme: string) => (theme === 'dark' ? 'light' : 'dark');

export const navigateHandler = (
  event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  callback: () => void
) => {
  if ((event instanceof KeyboardEvent && event.key === 'Enter') || event.type === 'click') {
    callback();
  }
};

export const getData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
