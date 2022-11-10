import React, { lazy, Suspense, useEffect } from 'react';
import { Container, CircularProgress } from '@mui/material';
import Seo from '../components/seo';
import Cover from '../components/cover';
import About from '../components/about';
// import Image from '../components/image';
// import Link from '../src/link';
import { fetchAPI } from '../src/api';

const articlesPromise = import('../components/articles');
const Articles = lazy(() => articlesPromise);

const Home = ({ articles, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Cover/>
      <About/>
      <Container>
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
    fetchAPI('/articles?status=published&_sort=publishedAt:desc&populate[1]=writer.avatar&populate[0]=cover'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: { articles, homepage },
    revalidate: 5,
  };
}

export default Home;
