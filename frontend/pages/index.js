import React, { lazy, Suspense } from "react";
// import Articles from "../components/articles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Seo from "../components/seo";
import Image from "../components/image";
// import Link from '../src/link';
import { fetchAPI } from "../src/api";
import { Typography } from "@mui/material";

const Articles = lazy(() => import('../components/articles'));

const Home = ({ articles, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Container>
        <Box height={'calc(100vh - 6rem)'} maxHeight={'100vw'} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/cover.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Typography variant={'h1'} color={'rgba(0, 0, 0, 0.87)'}>Jew</Typography>
        </Box>
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
    fetchAPI("/articles?status=published&_sort=publishedAt:desc"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, homepage },
    revalidate: 5,
  };
}

export default Home;
