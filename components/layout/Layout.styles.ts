import { makeStyles, Theme } from '@material-ui/core';

export const useLayoutStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      marginTop: 0,
    },
    app: {
      display: 'flex',
      paddingTop: '1.5em',
    },
    content: {
      width: '100%',
    },
    toolbar: theme.mixins.toolbar,
  };
});
