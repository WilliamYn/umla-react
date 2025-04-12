import Document, { Head, Html, Main, NextScript } from "next/document";

/**
 * _document.js is a Next.js custom document file that allows you to customize the initial HTML document
 * that gets rendered on the server. This file is only rendered on the server and is used to modify
 * the <html> and <body> tags, as well as add meta tags, favicons, and other static assets.
 * 
 * This implementation:
 * - Sets the document language to English
 * - Adds various favicon formats for different devices
 * - Includes a manifest file for PWA support
 * - Maintains the default Next.js document structure with Main and NextScript components
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/resources/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/resources/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/resources/favicon/favicon-16x16.png"
          />
          <link rel="icon" href="/images/resources/favicon/favicon.ico" />
          <link rel="manifest" href="manifest.json" />
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
