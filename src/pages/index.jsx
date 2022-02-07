import Head from "next/head";
import { useState } from "react";
import Sidebar from "../components/layouts/Sidebar";

export default function Home({ data }) {
  const [book, setBook] = useState(data);
  const [pages, setPages] = useState(0);
  const { page, text } = book.content[pages];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pt-14 text-slate-700 duration-150 dark:text-slate-400">
        <Sidebar data={book.tableOfContents} />
        <div
          className="book-page ml-auto w-9/12 p-20 dark:bg-slate-900"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://localhost:5000/books/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b`
  );
  const books = await res.json();

  return {
    props: { data: books },
  };
}
