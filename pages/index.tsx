import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles, APP_DESCRIPTION } from '../constants';
import { IPageProps } from '../types';
import { Typography, makeStyles, Grid, Theme, Box } from '@material-ui/core';
import { useAppContext } from '../context/state';
import { useEffect } from 'react';
import { RepoCard } from '@components/repo-card/RepoCard';
import { SearchOrganizationForm } from '@components/search-organization-form/SearchOrganizationForm';

const useStyles = makeStyles((theme: Theme) => {
  return {
    reposContainer: {
      marginTop: theme.spacing(2),
    },
  };
});

const Home = (props: IPageProps) => {
  let {
    state,
    getReposByOrg,
    setSearchTerm,
    getRecentSearches,
    clearSearchHistory,
  } = useAppContext();
  const classes = useStyles();

  useEffect(async () => {
    await getRecentSearches();
  }, []);

  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      <Box marginBottom={2}>
        <Typography>{APP_DESCRIPTION}</Typography>
      </Box>
      <SearchOrganizationForm
        clearSearchHistory={clearSearchHistory}
        getReposByOrg={getReposByOrg}
        recentSearches={state.recentSearches}
        searchError={state.searchError}
        searchTerm={state.searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {Boolean(state.getReposForOrganizationError) && (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={5}>
          <Typography variant={'h6'}>No repositories found for specified organization.</Typography>
          <Typography>Double check that the organization is spelled correctly.</Typography>
          <Typography>and matches the organization name displayed in GitHub.</Typography>
        </Box>
      )}
      {Boolean(state.errorFetchingRepos) && (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={5}>
          <Typography variant={'h6'}>
            Unable to get repositories for the specified organization.
          </Typography>
          <Typography>Double check that the organization is spelled correctly.</Typography>
          <Typography>and matches the organization name displayed in GitHub.</Typography>
          <Typography>If that does not work, try checking the Internet connection.</Typography>
        </Box>
      )}
      {!state.getReposForOrganizationError && !state.searchError && Boolean(state.repos.length) && (
        <Grid container={true} spacing={3} alignItems={'center'} className={classes.reposContainer}>
          <Grid item xs={12}>
            <Typography variant={'h6'}>{state.repos.length} repositories found.</Typography>
          </Grid>
          {state.repos.map((repo) => (
            <Grid item={true} xs={12} sm={6} md={4} key={repo.id}>
              <RepoCard repo={repo} />
            </Grid>
          ))}
        </Grid>
      )}
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
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
