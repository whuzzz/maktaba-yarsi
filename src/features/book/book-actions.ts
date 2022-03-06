import API_CONFIG from '@/common/constant';
import { getData } from '@/common/helpers';
import { Book, Categories } from '@/common/types/index.model';

export const getCategories = async () => {
  const categoriesBook: Categories[] = await getData(API_CONFIG.GET_CATEGORIES);

  return categoriesBook;
};

export const getCategory = async (category: string) => {
  const categoryBook: Book[] = await getData(API_CONFIG.GET_CATEGORY(category));

  return categoryBook;
};

export const getBook = async (id: string, category: string) => {
  const specificBook: Book = await getData(API_CONFIG.GET_BOOK(id, category));

  return specificBook;
};
