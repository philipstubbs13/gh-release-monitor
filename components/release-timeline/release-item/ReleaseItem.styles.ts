import { makeStyles, Theme } from '@material-ui/core';

export const useReleaseItemStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '6px 16px',
    border: `2px solid ${theme.palette.secondary.dark}`,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  bold: {
    fontWeight: 'bold',
  },
  muted: {
    opacity: 0.5,
  },
}));
