import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Navbar } from '@/common/components';
import wrapper from '@/app/store';
import '@/styles/globals.css';
import '@/styles/nprogress.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    NProgress.configure({ showSpinner: false });
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
