import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaRegSadTear } from 'react-icons/fa';
import { PageWrapper } from '../common/components';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Error Page 404</title>
      </Head>
      <PageWrapper>
        <FaRegSadTear className="mx-auto mt-20 mb-5 text-center text-9xl dark:text-red-500" />
        <p className="text-center text-xl">
          Maaf, sepertinya halaman yang anda ingin telusuri{' '}
          <span className="font-medium dark:text-red-500">belum tersedia.</span>
        </p>
        <button
          className="mx-auto mt-5 block border border-green-600 px-4 py-2 font-medium duration-150 dark:border-green-500 dark:hover:bg-green-500 dark:hover:text-slate-900"
          onClick={router.back}
          type="button"
        >
          Kembali ke halaman sebelumnya
        </button>
      </PageWrapper>
    </>
  );
}
