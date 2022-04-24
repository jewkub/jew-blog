import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
          don't use global here, some shit happened, global become undefined
          maybe MyApp.getInitialProps in pages with getstaticpaths with fallback true will not run at all
          https://github.com/vercel/next.js/discussions/16712#discussioncomment-59580 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <link rel="preconnect" href="https://backend.jewkub.dev"/>
        <link rel="dns-prefetch" href="https://backend.jewkub.dev"/>
      </Head>
      <body>
        <script>0 /* https://stackoverflow.com/a/57888310/4468834 */</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
