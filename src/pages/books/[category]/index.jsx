import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { wrapper } from '../../../app/store';
import { Breadcrumb, PageWrapper } from '../../../common/components';
import API_CONFIG from '../../../common/constant';
import { formatCategory, getData } from '../../../common/helpers';
import { getCategory } from '../../../features/book/book-actions';
import ListBooks from '../../../features/book/list-books';

export default function ListOfBookPage() {
  const router = useRouter();
  const { query } = router;
  const { category } = useSelector((state) => state.book);
  const categoryTitle = formatCategory(query.category);
  const routes = [{ title: 'categories', link: '/books/categories' }, { title: categoryTitle }];

  return (
    <>
      <Head>
        <title>Daftar Buku {categoryTitle} | YASLAB</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <Breadcrumb routes={routes} />
        <h1 className="mt-10 mb-14 pt-14 text-center text-5xl font-bold capitalize dark:text-slate-200">
          Daftar Buku {categoryTitle}
        </h1>
        <div className="space-y-5 px-20">
          {category.map(({ id, info }) => (
            <ListBooks key={id} id={id} info={info} router={router} />
          ))}
        </div>
      </PageWrapper>
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
