import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="dark">
      <Head>
        <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v6.3.0/css/pro.min.css" />
      </Head>
      <body className="bg-background">
        <div className="window-drag block h-9 w-full"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
