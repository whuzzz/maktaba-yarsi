import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { Navbar, SearchModal } from '@/common/components';
import { store } from '@/app/store';
import '@/styles/globals.css';
import '@/styles/nprogress.css';

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
      <div id="__app">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <SearchModal />
    </Provider>
  );
};

export default MyApp;
