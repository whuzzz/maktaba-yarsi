import Head from 'next/head';
import { NextPage } from 'next';
import SearchInput from '@/common/components/search-input';
import { BackgroundImage, PageWrapper } from '@/common/components';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YASLAB - Yarsi Digital Islamic Library</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <h1 className="mt-20 text-center font-extrabold text-dark-100 dark:text-light-100 lg:text-7xl">
          Yarsi Digital Islamic Library
        </h1>
        <p className="mx-auto mt-8 text-center text-lg lg:w-8/12">
          Sebuah perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk
          mencari topik atau permasalah berdasarkan kata kunci seperti{' '}
          <span className="highlight">iman</span>, <span className="highlight">sabar</span>,{' '}
          <span className="highlight">shalat</span> dan <span className="highlight">riba</span>.
        </p>
        <SearchInput />
      </PageWrapper>
      <BackgroundImage />
    </>
  );
};
export default HomePage;