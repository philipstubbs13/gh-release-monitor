import { Theme, makeStyles } from '@material-ui/core';

export const useReleaseDetailsStyles = makeStyles((theme: Theme) => {
  return {
    releaseDetails: {
      marginBottom: 20,
      fontWeight: theme.typography.fontWeightBold,
    },
    bold: {
      fontWeight: theme.typography.fontWeightBold,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    green: {
      color: theme.palette.success.main,
    },
  };
});
