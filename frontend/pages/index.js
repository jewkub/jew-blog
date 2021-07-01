import React from "react";
import Articles from "../components/articles";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Seo from "../components/seo";
import Image from "../components/image";
// import Link from '../src/link';
import { fetchAPI } from "../src/api";
import { Typography } from "@material-ui/core";

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
        <Articles articles={articles} />
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
