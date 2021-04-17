import { makeStyles, Theme } from '@material-ui/core';

export const useRepoCardStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      maxWidth: 345,
      height: '100%',
      overflow: 'hidden',
    },
    repoName: {
      marginBottom: 20,
      fontWeight: theme.typography.fontWeightBold,
    },
    module: {
      width: '250px',
      margin: '0 0 1em 0',
      overflow: 'hidden',
    },
    overflow: {
      position: 'relative',
      maxHeight: 'calc(2.0rem * 3)',
      overflow: 'hidden',
      paddingRight: '1rem',

      '&:before': {
        position: 'absolute',
        content: '...',
        bottom: 0,
        right: 0,
      },

      '&:after': {
        content: '',
        position: 'absolute',
        right: 0,
        width: '1rem',
        height: '1rem',
        background: 'white',
      },
    },
    body: {
      minHeight: 220,
    },
  };
});
