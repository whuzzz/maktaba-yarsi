import { wrapper } from '../app/store';
import { Navbar } from '../common/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
