import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { wrapper } from "../../../app/store";
import API_CONFIG from "../../../common/constant";
import { getData } from "../../../common/helpers";
import { getCategory } from "../../../features/book/book-actions";

export default function CategoryPage() {
  const { query } = useRouter();
  const { category } = useSelector((state) => state.book);

  return (
    <div className="w-full pt-14 text-slate-700 dark:text-slate-400">
      <p>WOY</p>
      {category.map((book) => (
        <div key={book.id}>
          <Link href={`/books/${query.category}/${book.id}`}>
            <a>{book.info.title}</a>
          </Link>
        </div>
      ))}
    </div>
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
