import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" className="dark">
      <Head>
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v6.3.0/css/pro.min.css"
        />
      </Head>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
