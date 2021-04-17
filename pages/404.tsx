import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from '@components/layout/Layout';
import { Box, makeStyles, Typography, Button, Container } from '@material-ui/core';
import { PageRoutes, PageTitles } from '../constants';
import { IPageProps } from '../types';

const useStyles = makeStyles((theme) => {
  return {
    text: {
      marginTop: theme.spacing(3),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  };
});

const FourOFour = (props: IPageProps) => {
  const classes = useStyles();

  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      <Container maxWidth={'md'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={5}>
          <Typography variant={'h5'}>404 - Page Not Found</Typography>
          <Typography className={classes.text}>
            Oops! The page you are looking for was either deleted, moved, or does not exist.
          </Typography>
          <Typography className={classes.text}>
            Double check that the url is correct or try heading back to the home page.
          </Typography>
          <Link href={PageRoutes.Home}>
            <Button className={classes.button} variant={'outlined'}>
              Go back home
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default FourOFour;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      subTitle: PageTitles.FourOFour,
    },
  };
}

FourOFour.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequred,
  title: PropTypes.string.isRequired,
};
