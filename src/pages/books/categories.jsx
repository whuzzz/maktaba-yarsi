import Head from 'next/head';
import { useSelector } from 'react-redux';
import { wrapper } from '../../app/store';
import { BackgroundImage, Breadcrumb, PageWrapper } from '../../common/components';
import { ListCategories } from '../../features/book';
import { getCategories } from '../../features/book/book-actions';

export default function CategoriyBooksPage() {
  const { categories } = useSelector((state) => state.book);

  return (
    <>
      <Head>
        <title>Kategori Buku | YASLAB</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <Breadcrumb routes={[{ title: 'categories' }]} />
        <h1 className="mb-10 text-center text-5xl font-bold dark:text-slate-200">
          Kategori Buku Islam
        </h1>
        <div className="mx-auto grid w-max grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ category }) => (
            <ListCategories key={category} category={category} />
          ))}
        </div>
      </PageWrapper>
      <BackgroundImage />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getCategories());
});
