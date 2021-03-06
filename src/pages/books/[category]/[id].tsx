import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Breadcrumb, Footer, Loading, NavigationsButton, PageWrapper } from '@/common/components';
import { DisplayContent, HeaderInfo, TableOfContents } from '@/features/book';
import { getData, unFormatCategory } from '@/common/helpers';
import { Book, Content } from '@/common/types/index.model';
import { ParsedUrlQuery } from 'querystring';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setBook } from '@/features/book/books-slice';
import API_CONFIG from '@/common/constant';
import SearchInput from '@/common/components/search-input';

const DetailBookPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  specificBook,
}: Props) => {
  const [loading, setLoading] = useState(true);

  // Data Fetching...
  const dispatch = useAppDispatch();
  const { book, page } = useAppSelector((state) => state.books);
  useEffect(() => {
    dispatch(setBook(specificBook));
    setLoading(false);
  }, [dispatch, specificBook]);

  if (loading) {
    return <Loading />;
  }

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
          {book.info.title} - {book.info.category}
        </title>
        <meta name="author" content={book.info.author} />
        <meta name="description" content={book.info.desc} />
      </Head>
      <PageWrapper style="flex">
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
      </PageWrapper>
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
  const { data } = await getData(API_CONFIG.GET_BOOKS);
  const paths = data.map(({ id, category }: { id: string; category: string }) => ({
    params: { id, category },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const specificBook: Book = await getData(API_CONFIG.GET_BOOK(params!.id, params!.category));

  return { props: { specificBook }, revalidate: 60 };
};

export default DetailBookPage;
