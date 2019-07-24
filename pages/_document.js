// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Textflix</title>
          <meta property="og:title" content="Textflix" />
          <meta
            property="description"
            content="Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text."
          />
          <meta
            property="og:description"
            content="Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text."
          />
          <meta
            property="og:image"
            content="https://textflix.fastforwardlabs.com/static/images/textflix-screenshot.png"
          />
          <meta
            property="og:url"
            content="https://textflix.fastforwardlabs.com"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <link rel="icon" type="image/png" href="/static/images/textflix.png" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
