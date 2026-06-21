import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/avatars/avatar.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Geist+Mono:wght@400..500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-ln-bg font-sans text-ln-text antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
