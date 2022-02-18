import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { wrapper } from "../../../app/store";
import API_CONFIG from "../../../common/constant";
import {
  formatCategory,
  formatPublish,
  getData,
} from "../../../common/helpers";
import { getCategory } from "../../../features/book/book-actions";

export default function CategoryPage() {
  const router = useRouter();
  const { query } = router;
  const { category } = useSelector((state) => state.book);

  return (
    <>
      <Head>
        <title>Daftar Buku {formatCategory(query.category)} | YASLAB</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1 className="mt-10 mb-14 pt-14 text-center text-5xl font-bold capitalize dark:text-slate-200">
        Daftar Buku {formatCategory(query.category)}
      </h1>
      <div className="px-20">
        {category.map(({ id, info }) => (
          <article
            key={id}
            onClick={() => router.push(`/books/${query.category}/${id}`)}
            className="group cursor-pointer py-5 pl-6 dark:bg-slate-800"
          >
            <h2 className="text-xl font-medium duration-150 dark:text-slate-200 dark:group-hover:text-green-500">
              {info.title}
            </h2>
            <dl>
              <div className="my-1 inline-flex items-center text-center">
                <div className="rounded-xl border px-2 dark:border-slate-300 dark:text-slate-300">
                  <dt className="sr-only">Price</dt>
                  <dd>{info.price || "Free"}</dd>
                </div>
                <div className="dark:text-slate-300">
                  <dt className="sr-only">Pulish</dt>
                  <dd className="before:px-3 before:content-['·'] after:px-3 after:content-['·']">
                    {formatPublish(info.publish)}
                  </dd>
                </div>
                <div className="dark:text-slate-300">
                  <dt className="sr-only">Pages</dt>
                  <dd>{info.pages} Pages</dd>
                </div>
              </div>
              <div className="text-sm">
                <dt className="sr-only">Author</dt>
                <dd className="group-hover:underline group-hover:decoration-2 dark:group-hover:decoration-green-500">
                  {info.author}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const categories = await getData(API_CONFIG.GET_CATEGORIES);
  const paths = categories.map(({ category }) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params: { category } }) => {
      await store.dispatch(getCategory(category));
    }
);
