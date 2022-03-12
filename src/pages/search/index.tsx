import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import API_CONFIG from '@/common/constant';
import { getData } from '@/common/helpers';
import { useAppDispatch } from '@/app/hooks';
import { closeModal } from '@/features/search/search-slice';
import { useEffect } from 'react';

const SearchPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>YASLAB</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="pt-14 text-white">F</main>
    </>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getData(API_CONFIG.GET_SEARCH_TOPIC(context.resolvedUrl));

  return { props: { data } };
};
