import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../constants';
import { IPageProps } from '../types';
import { useAppContext } from '../context/state';
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from '@material-ui/core';
import { FavoriteCard } from '@components/favorite-card/FavoriteCard';

const Favorites = (props: IPageProps) => {
  let { getFavoriteReleases, state, removeFromFavorites } = useAppContext();
  const [releaseIdToRemove, setReleaseIdToRemove] = useState(null);

  useEffect(async () => {
    await getFavoriteReleases();
  }, []);

  const onRemoveFromFavorites = (id: number) => {
    removeFromFavorites(id);
    setReleaseIdToRemove(null);
  };

  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      <Box marginBottom={2}>
        <Typography variant={'h6'}>Favorite Releases</Typography>
      </Box>
      {!state.favoriteReleases.length && (
        <Container maxWidth={'sm'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
            marginTop={5}>
            <Typography variant={'h6'}>No Favorites Yet</Typography>
            <Typography variant={'body1'}>
              Keep track of the releases you are interested in by clicking the heart icon when
              searching for and viewing a release.
            </Typography>
          </Box>
        </Container>
      )}
      {Boolean(state.favoriteReleases.length) && (
        <React.Fragment>
          <Grid container={true} spacing={3}>
            {state.favoriteReleases.map((favoriteRelease) => {
              return (
                <Grid item={true} xs={12} sm={6} md={4} key={favoriteRelease.id}>
                  <FavoriteCard
                    author={favoriteRelease.author.login}
                    authorAvatarUrl={favoriteRelease.author.avatar_url}
                    createdAt={favoriteRelease.created_at}
                    isDraft={favoriteRelease.draft}
                    isPrerelease={favoriteRelease.prerelease}
                    name={favoriteRelease.name}
                    publishedAt={favoriteRelease.published_at}
                    releaseUrl={favoriteRelease.html_url}
                    removeFromFavorites={() => setReleaseIdToRemove(favoriteRelease.id)}
                    tagName={favoriteRelease.tag_name}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="confirmation-dialog-title"
            open={Boolean(releaseIdToRemove)}
            onClose={() => setReleaseIdToRemove(null)}>
            <DialogTitle id="confirmation-dialog-title">
              Are you sure you want to remove from your favorites?
            </DialogTitle>
            <DialogContent>
              Click <b>REMOVE</b> to remove this release from this page.
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setReleaseIdToRemove(null)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => onRemoveFromFavorites(releaseIdToRemove)} color="primary">
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Favorites;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.Favorites,
      title: configData.default.title,
    },
  };
}

Favorites.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
