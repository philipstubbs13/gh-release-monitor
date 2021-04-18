import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../../../constants';
import { IPageProps } from '../../../types';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useAppContext } from '../../../context/state';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ReleaseTimeline } from '@components/release-timeline/ReleaseTimeline';
import { ReleaseDetailsItem } from '@components/release-details-item/ReleaseDetailsItem';
import { formatDate } from '../../../utils/date.utils';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

const useStyles = makeStyles((theme) => {
  return {
    releaseDetails: {
      marginTop: 34,
      marginBottom: 20,
      fontWeight: theme.typography.fontWeightBold,
    },
  };
});

const Repo = (props: IPageProps) => {
  let { state, getReleases } = useAppContext();
  const classes = useStyles();
  const router = useRouter();
  const { organization, repo } = router.query;
  const [selectedRelease, setSelectedRelease] = useState(null);

  useEffect(async () => {
    const { organization, repo } = router.query;

    await getReleases(organization, repo);
  }, []);

  const getReleaseById = (id: String) => {
    const selectedRelease = state.releases.find((releaseItem) => releaseItem.id === id);

    setSelectedRelease(selectedRelease);
  };
  const isDraft = selectedRelease?.draft ? 'Yes' : 'No';
  const isPrerelease = selectedRelease?.prerelease ? 'Yes' : 'No';

  return (
    <Layout description={props.description} title={props.title} subTitle={props.subTitle}>
      <Typography variant={'h6'}>
        {state.releases.length} releases found for {organization}/{repo}
      </Typography>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={6}>
          <ReleaseTimeline releaseItems={state.releases} getReleaseById={getReleaseById} />
        </Grid>
        <Grid item={true} xs={6}>
          {selectedRelease && (
            <React.Fragment>
              <Typography variant={'subtitle1'} className={classes.releaseDetails}>
                {selectedRelease.name}
              </Typography>
              <a
                href={selectedRelease.author.html_url}
                target={'_blank'}
                rel={'noopener noreferrer'}>
                <ReleaseDetailsItem
                  label="Author"
                  info={selectedRelease.author.login}
                  isLink={true}
                />
              </a>
              <ReleaseDetailsItem label={'Description'} info={selectedRelease.body} />
              <ReleaseDetailsItem
                label={'Created At'}
                info={formatDate(selectedRelease.created_at)}
              />
              <ReleaseDetailsItem
                label={'Published At'}
                info={formatDate(selectedRelease.published_at)}
              />
              <ReleaseDetailsItem label={'Tag'} info={selectedRelease.tag_name} />
              <ReleaseDetailsItem label="Is Prerelease?" info={isPrerelease} />
              <ReleaseDetailsItem label="Is Draft?" info={isDraft} />
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Repo;

export async function getStaticProps() {
  const configData = await import(`../../../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.Home,
      title: configData.default.title,
    },
  };
}

Repo.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequred,
  title: PropTypes.string.isRequired,
};
