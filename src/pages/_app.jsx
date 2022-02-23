import NextNProgress from 'nextjs-progressbar';
import { wrapper } from '../app/store';
import { Navbar } from '../common/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#22C55E" showOnShallow />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
