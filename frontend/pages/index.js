import React, { lazy, Suspense, useEffect } from 'react';
import { Typography, Box, Container, CircularProgress } from '@mui/material';
import Seo from '../components/seo';
import Cover from '../components/cover';
// import Image from '../components/image';
// import Link from '../src/link';
import { fetchAPI } from '../src/api';

const articlesPromise = import('../components/articles');
const Articles = lazy(() => articlesPromise);
// import Articles from '../components/articles';

const Home = ({ articles, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Container>
        <Cover/>
        <Suspense fallback={<CircularProgress />}>
          <Articles articles={articles} />
        </Suspense>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, homepage] = await Promise.all([
    fetchAPI('/articles?status=published&_sort=publishedAt:desc'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: { articles, homepage },
    revalidate: 5,
  };
}

export default Home;
