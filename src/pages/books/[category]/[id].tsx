import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Breadcrumb, Footer, NavigationsButton } from '@/common/components';
import { DisplayContent, HeaderInfo, TableOfContents } from '@/features/book';
import { getData, unFormatCategory } from '@/common/helpers';
import wrapper from '@/app/store';
import API_CONFIG from '@/common/constant';
import { getBook } from '@/features/book/book-actions';
import SearchInput from '@/common/components/search-input';

const DetailBookPage = () => {
  const { page, book } = useSelector((state) => state.book);
  const { text } = book.content.find((item) => item.page === page);
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

export async function getStaticPaths() {
  const booksId = await getData(API_CONFIG.GET_BOOKS);
  const paths = booksId.map(({ id, category }) => ({
    params: { id, category },
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params: { id, category } }) => {
      await store.dispatch(getBook(id, category));

      return { revalidate: 60 };
    }
);

export default DetailBookPage;
