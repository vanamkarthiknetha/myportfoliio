import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/avatars/avatar.svg" />
      </Head>
      <body className=" text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
