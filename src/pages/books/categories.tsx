import Head from 'next/head';
import { BackgroundImage, Breadcrumb, PageWrapper } from '@/common/components';
import { ListCategories } from '@/features/book';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Categories } from '@/common/types/index.model';
import { getData } from '@/common/helpers';
import API_CONFIG from '@/common/constant';

const CategoriyBooksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  categories,
}) => {
  return (
    <>
      <Head>
        <title>Kategori Buku - Maktaba YARSI</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <Breadcrumb routes={[{ title: 'categories' }]} />
        <h1 className="mb-10 text-center text-5xl font-bold text-dark-200 dark:text-light-200">
          Kategori Buku Islam
        </h1>
        <div className="mx-auto grid w-max grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categories.categories.map(({ category }: Categories) => (
            <ListCategories key={category} category={category} />
          ))}
        </div>
      </PageWrapper>
      <BackgroundImage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categoriesBook: Categories[] = await getData(API_CONFIG.GET_CATEGORIES);

  return { props: { categories: categoriesBook }, revalidate: 60 };
};

export default CategoriyBooksPage;
