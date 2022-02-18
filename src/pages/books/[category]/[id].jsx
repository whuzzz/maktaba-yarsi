import Head from "next/head";
import { useSelector } from "react-redux";
import { Footer, NavigationsButton } from "../../../common/components";
import { getData } from "../../../common/helpers";
import {
  DisplayContent,
  getBook,
  TableOfContents,
} from "../../../features/book";
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
        <div className="ml-auto w-9/12 p-20 dark:bg-slate-900">
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
