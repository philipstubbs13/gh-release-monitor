import { makeStyles, Theme } from '@material-ui/core';

export const useSearchOrganizationFormStyles = makeStyles((theme: Theme) => {
  return {
    searchBtn: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      borderRadius: 0,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.background.default,

      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: '#000',
      },
    },
    searchBtnContainer: {
      marginTop: 6,
    },
    inputRoot: {
      borderRadius: 0,
      paddingTop: '1px !important',
      paddingBottom: '1px !important',
    },
    searchError: {
      fontSize: 12,
      color: theme.palette.error.main,
    },
    clearSearchHistoryBtn: {
      marginLeft: 20,
    },
  };
});
