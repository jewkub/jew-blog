import React from "react";
import Articles from "../components/articles";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProTip from '../components/protip';
import Link from '../src/link';
import Copyright from '../components/copyright';
import { fetchAPI } from "../src/api";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Home = ({ articles, homepage }) => {
  const classes = useStyles();
  /*
  return (<Layout>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>)
   */
  return (
    <>
      <Seo seo={homepage.seo} />
      <Container pt={4}>
        <Articles articles={articles} />
      </Container>
      <Copyright/>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, homepage },
  };
}

export default Home;
