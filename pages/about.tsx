import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../constants';
import { IPageProps } from '../types';
import { Typography, Box, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    link: {
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
  };
});

const About = (props: IPageProps) => {
  const classes = useStyles();

  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      <Box my={3}>
        <Typography variant={'h6'}>About GitHub Release Monitor (GRM)</Typography>
        <Typography component={'p'}>
          Have you ever found it difficult to keep up with the growing number of open source
          libraries and projects on GitHub? Tons of new, interesting projects are being added to
          GitHub daily, and existing projects are constantly being updated at a rapid pace. Keeping
          track of all the releases for all the repositories we might contribute to, use, and/or
          rely on for our own projects is an overwhelming task. That&#39;s why I created this tool,
          GitHub Release Monitor, so you would never have to miss another release for your favorite
          GitHub organizations and repositories again.
        </Typography>
        <Box marginTop={2}>
          <Typography>
            This project is built using a{' '}
            <a
              href={'https://nextjs.org/'}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={classes.link}>
              Next.js
            </a>{' '}
            project bootstrapped with{' '}
            <a
              href={'https://github.com/vercel/next.js/tree/canary/packages/create-next-app'}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={classes.link}>
              create-next-app
            </a>
            .
          </Typography>
        </Box>
      </Box>
      <Box my={3}>
        <Typography variant={'h6'}>GitHub</Typography>
        <Typography>
          The source code for this project with instructions on how to run the app locally in
          development is available on{' '}
          <a
            href={'https://github.com/philipstubbs13/gh-release-monitor'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={classes.link}>
            GitHub
          </a>
        </Typography>
      </Box>
      <Box my={3}>
        <Typography variant={'h6'}>Technologies Used</Typography>
        <Typography component={'p'}>
          The following technologies were used to build this app:
        </Typography>
        <ul>
          <li>Next.js</li>
          <li>Material UI</li>
          <li>React</li>
          <li>IndexedDB</li>
          <li>GitHub API</li>
          <li>TypeScript</li>
        </ul>
      </Box>
      <Box my={3}>
        <Typography variant={'h6'}>Issues</Typography>
        <Typography>
          If you find an issue while using the app or have a request, log the issue or request{' '}
          <a
            href={'https://github.com/philipstubbs13/gh-release-monitor/issues'}
            target={'_blank'}
            className={classes.link}
            rel={'noopener noreferrer'}>
            here
          </a>
          . These issues will be addressed in a future release.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.About,
      title: configData.default.title,
    },
  };
}

About.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
