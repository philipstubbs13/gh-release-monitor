import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../../../constants';
import { IPageProps } from '../../../types';
import { Typography, Grid, makeStyles, Theme } from '@material-ui/core';
import { useAppContext } from '../../../context/state';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ReleaseTimeline } from '@components/release-timeline/ReleaseTimeline';
import { NoReleasesFound } from '@components/no-releases-found/NoReleasesFound';
import { ReleaseDetails } from '@components/release-details/ReleaseDetails';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    releaseRoot: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  };
});

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

const Repo = (props: IPageProps) => {
  let { state, getReleases, markSeen } = useAppContext();
  const router = useRouter();
  const { organization, repo } = router.query;
  const [selectedRelease, setSelectedRelease] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    const { organization, repo } = router.query;

    await getReleases(organization, repo);
  }, []);

  const getReleaseById = (id: number) => {
    const selectedRelease = state.releases.find((releaseItem) => releaseItem.id === id);
    markSeen(id);

    setSelectedRelease(selectedRelease);
  };

  return (
    <Layout description={props.description} title={props.title} subTitle={props.subTitle}>
      {state.isLoadingReleases && <div>Loading...</div>}
      {!state.isLoadingReleases && !state.releases.length && (
        <NoReleasesFound organization={organization} repo={repo} />
      )}
      {!state.isLoadingReleases && Boolean(state.releases.length) && (
        <React.Fragment>
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <Typography variant={'h6'}>
                {state.releases.length} releases found for {organization}/{repo}
              </Typography>
              <Typography>
                Click a release in the timeline to see more details, which marks that release as
                seen (green border).
              </Typography>
            </Grid>
          </Grid>
          <Grid container={true} className={classes.releaseRoot}>
            <Grid item={true} xs={6}>
              <ReleaseTimeline
                releaseItems={state.releases}
                getReleaseById={getReleaseById}
                releasesMarkedSeen={state.releasesMarkedSeen}
              />
            </Grid>
            <Grid item={true} xs={6}>
              {selectedRelease && (
                <ReleaseDetails
                  author={selectedRelease.author.login}
                  authorUrl={selectedRelease.author.html_url}
                  createdAt={selectedRelease.created_at}
                  description={selectedRelease.description}
                  isDraft={selectedRelease.draft}
                  isPrerelease={selectedRelease.prerelease}
                  name={selectedRelease.name}
                  publishedAt={selectedRelease.published_at}
                  tagName={selectedRelease.tag_name}
                />
              )}
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Repo;

export async function getStaticProps() {
  const configData = await import(`../../../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.ReleaseDetails,
      title: configData.default.title,
    },
  };
}

Repo.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
