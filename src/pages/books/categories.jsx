import Link from "next/link";
import { useSelector } from "react-redux";
import { wrapper } from "../../app/store";
import { getCategories } from "../../features/book/book-actions";

export default function CategoriyBooksPage() {
  const { categories } = useSelector((state) => state.book);
  return (
    <>
      <div className="pt-14">Category</div>
      <div>
        {categories.map(({ category }) => (
          <Link key={category} href={`/books/${category}`}>
            <a className="block">{category}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getCategories());
});
