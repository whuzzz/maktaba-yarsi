/* eslint-disable react/prop-types */
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Breadcrumb, Footer, NavigationsButton } from '@/common/components';
import { DisplayContent, HeaderInfo, TableOfContents } from '@/features/book';
import { getData, unFormatCategory } from '@/common/helpers';
import { getBook } from '@/features/book/book-actions';
import { Book, Content } from '@/common/types/index.model';
import { ParsedUrlQuery } from 'querystring';
import API_CONFIG from '@/common/constant';
import SearchInput from '@/common/components/search-input';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setBook } from '@/features/book/books-slice';

const DetailBookPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  specificBook,
}) => {
  // Data Fetching...
  const dispatch = useAppDispatch();
  dispatch(setBook(specificBook));

  const { book, page } = useAppSelector((state) => state.books);
  const { text } = book.content.find((item) => item.page === page) as Content;
  const routes = [
    { title: 'categories', link: 'books/categories' },
    {
      title: book.info.category,
      link: `books/${unFormatCategory(book.info.category)}`,
    },
    { title: book.info.title },
  ];

  return (
    <>
      <Head>
        <title>
          {book.info.title} | {book.info.category}
        </title>
        <meta name="author" content={book.info.author} />
        <meta name="description" content={book.info.desc} />
      </Head>
      <main className="flex w-full pt-14 text-slate-700 dark:text-slate-400">
        <TableOfContents data={book.tableOfContents} page={page} />
        <div className="ml-auto w-9/12 px-20 pb-20 dark:bg-slate-900">
          <Breadcrumb style="mt-6 ml-0" routes={routes} />
          <HeaderInfo book={book} />
          <div className="relative mt-10">
            <SearchInput className="!absolute left-0 bottom-0 w-48" />
            <NavigationsButton />
          </div>
          <DisplayContent content={text} />
          <NavigationsButton />
          <Footer className="mt-20" />
        </div>
      </main>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
  category: string;
}

type Props = {
  specificBook: Book;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const booksId: { id: string; category: string }[] = await getData(API_CONFIG.GET_BOOKS);
  const paths = booksId.map(({ id, category }) => ({
    params: { id, category },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const specificBook = await getBook(params!.id, params!.category);

  return { props: { specificBook }, revalidate: 60 };
};

export default DetailBookPage;
