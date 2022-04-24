import App from "next/app";
import Head from "next/head";
// import PropTypes from 'prop-types';
import "../assets/css/style.css";
import React, { createContext } from "react";
// import { getStrapiMedia } from "../src/media";
import { fetchAPI } from "../src/api";
// import NoSsr from '@mui/material/NoSsr';
// import Button from '@mui/material/Button';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Layout from "../components/layout";
// import theme from '../src/theme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }) {
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
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <React.StrictMode>
        <GlobalContext.Provider value={global}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalContext.Provider>
      </React.StrictMode>
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
