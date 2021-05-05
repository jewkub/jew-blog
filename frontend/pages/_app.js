import App from "next/app";
import Head from "next/head";
// import PropTypes from 'prop-types';
import "../assets/css/style.css";
import React, { createContext } from "react";
import { getStrapiMedia } from "../src/media";
import { fetchAPI } from "../src/api";
import NoSsr from '@material-ui/core/NoSsr';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import Layout from "../components/layout";
// import theme from '../src/theme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  /* React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); */

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
        */ }
      </Head>
      <NoSsr>
        <GlobalContext.Provider value={global}>
          <StyledEngineProvider injectFirst>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StyledEngineProvider>
        </GlobalContext.Provider>
      </NoSsr>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

/* MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}; */

export default MyApp;
