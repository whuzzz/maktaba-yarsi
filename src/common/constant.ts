/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const THEME_LIST = ['light', 'dark'];

export const selectStyles = (isDark: boolean) => ({
  menu: (base: any) => ({
    ...base,
    zIndex: 999,
  }),
  option: (base: any, state: any) => ({
    ...base,
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    textTransform: 'capitalize',
  }),
  control: (base: any) => ({
    ...base,
    paddingLeft: '2.2rem',
    textTransform: 'capitalize',
    width: '100%',
    border: 0,
    boxShadow: 'none',
    '&:focus-within': {
      borderColor: '#10b981',
      boxShadow: '0px 0px 0px 2px rgba(16,185,129,1)',
    },
    backgroundColor: isDark ? '#334155' : '#e2e8f0',
  }),
  input: (base: object) => ({
    ...base,
    color: isDark ? 'rgb(203 213 225)' : 'rgb(15 23 42)',
  }),
  singleValue: (base: object) => ({
    ...base,
    color: isDark ? 'rgb(203 213 225)' : 'rgb(15 23 42)',
  }),
  placeholder: (base: object) => ({
    ...base,
    color: isDark ? 'rgb(203 213 225 / 0.6)' : 'rgb(71 85 105)',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  }),
});

export default API_CONFIG;
