import { makeStyles, Theme } from '@material-ui/core';

export const useReleaseDetailsItemStyles = makeStyles((theme: Theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  openInNewIcon: {
    width: 12,
    height: 12,
  },
  link: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
