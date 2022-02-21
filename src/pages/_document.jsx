import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Mulish:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Syne+Tactile&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white antialiased dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
