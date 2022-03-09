export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://buku-islam-api.vercel.app/';

const API_CONFIG = {
  GET_BOOKS: `${BASE_URL}books`,
  GET_BOOK: (id: string, c: string) => `${BASE_URL}books?bookId=${id}&category=${c}`,
  GET_CATEGORIES: `${BASE_URL}books/categories`,
  GET_CATEGORY: (category: string) => `${BASE_URL}books/category/${category}`,
};

export const FORMAT_BREADCRUMB = '\xa0\xa0/\xa0\xa0';

export const INDENT_LEVEL = {
  1: 'pl-4',
  2: 'pl-8',
  3: 'pl-12',
  4: 'pl-16',
};

export const NAV_LIST = [
  { list: 'search', route: '/' },
  { list: 'books', route: '/books/categories' },
];

export const THEME_LIST = ['light', 'dark', 'system'];

export default API_CONFIG;
