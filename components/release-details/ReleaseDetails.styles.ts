import { Theme, makeStyles } from '@material-ui/core';

export const useReleaseDetailsStyles = makeStyles((theme: Theme) => {
  return {
    releaseDetails: {
      marginBottom: 20,
      fontWeight: theme.typography.fontWeightBold,
    },
  };
});
