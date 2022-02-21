import Head from "next/head";
import { useSelector } from "react-redux";
import {
  Breadcrumb,
  Footer,
  NavigationsButton,
} from "../../../common/components";
import {
  DetailBook,
  DisplayContent,
  getBook,
  TableOfContents,
} from "../../../features/book";
import { getData, unFormatCategory } from "../../../common/helpers";
import { wrapper } from "../../../app/store";
import API_CONFIG from "../../../common/constant";

export default function DetailBookPage() {
  const { page, book } = useSelector((state) => state.book);
  const { text } = book.content.find((item) => item.page === page);

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
          <Breadcrumb
            style="mt-6 ml-0"
            routes={[
              { title: "categories", link: "/books/categories" },
              {
                title: book.info.category,
                link: `/books/${unFormatCategory(book.info.category)}`,
              },
              { title: book.info.title },
            ]}
          />
          <header className="my-5 bg-slate-800 p-5">
            <h2 className="truncate text-3xl font-extrabold dark:text-slate-300">
              {book.info.title}
            </h2>
            <DetailBook book={book.info} />
          </header>
          <NavigationsButton />
          <DisplayContent content={text} />
          <NavigationsButton />
          <Footer className="mt-20" />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const booksId = await getData(API_CONFIG.GET_BOOKS);
  const paths = booksId.map(({ id, category }) => ({
    params: { id, category },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params: { id, category } }) => {
      await store.dispatch(getBook(id, category));
    }
);
