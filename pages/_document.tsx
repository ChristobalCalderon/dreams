import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/dreams.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <meta property="og:title" content="Dreams" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dreams.christobalc.vercel.app"
          />
          <meta property="og:description" content="Where dreams come to die" />
          <meta
            property="og:image"
            content="https://dreams.christobalc.vercel.app/dreams.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
