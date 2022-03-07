import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-light-100 antialiased dark:bg-dark-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
