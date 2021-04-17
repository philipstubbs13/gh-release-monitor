import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../constants';
import { IPageProps } from '../types';
import { Typography, TextField, makeStyles, Grid, Theme } from '@material-ui/core';
import { useAppContext } from '../context/state';
import { useEffect } from 'react';
import { RepoCard } from '@components/repo-card/RepoCard';

const useStyles = makeStyles((theme: Theme) => {
  return {
    reposContainer: {
      marginTop: theme.spacing(2),
    },
  };
});

const Home = (props: IPageProps) => {
  let { state, getReposByOrg } = useAppContext();
  const classes = useStyles();

  useEffect(() => {
    getReposByOrg();
  }, []);

  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      <Typography variant={'subtitle1'}>
        Enter name of org you would like to track releases for.
      </Typography>
      <TextField
        id={'outlined-search'}
        label={'Search field'}
        type={'search'}
        variant={'outlined'}
      />
      <Grid container={true} spacing={3} className={classes.reposContainer}>
        {state.repos.map((repo) => (
          <Grid item={true} xs={4} key={repo.id}>
            <RepoCard repo={repo} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.Home,
      title: configData.default.title,
    },
  };
}

Home.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequred,
  title: PropTypes.string.isRequired,
};
