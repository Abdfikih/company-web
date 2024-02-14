import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        {/* smallLogos */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/smallLogos/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/smallLogos/smallLogo-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/smallLogos/smallLogo-16x16.png"
        />
        <link rel="shortcut icon" href="/smallLogos/smallLogo.ico" />
        <link
          rel="mask-icon"
          href="/smallLogos/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="theme-color" content="#1d2a35" />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-bglight dark:bg-bgdark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
