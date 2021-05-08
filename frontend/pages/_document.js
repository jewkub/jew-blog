import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  /* static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } */

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script>0 /* https://stackoverflow.com/a/57888310/4468834 */</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
