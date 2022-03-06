import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { Navbar } from '@/common/components';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import '@/styles/nprogress.css';
import { store } from '@/app/store';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
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
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
