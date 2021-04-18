import { makeStyles, Theme } from '@material-ui/core';

export const useReleaseTimelineStyles = makeStyles((theme: Theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.dark,
  },
  bold: {
    fontWeight: 'bold',
  },
}));
