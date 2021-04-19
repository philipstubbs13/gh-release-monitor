import { makeStyles, Theme } from '@material-ui/core';
import { drawerWidth } from '../../constants';

export const useDrawerStyles = makeStyles((theme: Theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      backgroundColor: theme.palette.background.default,
      borderRight: `2px ${theme.palette.primary.dark} solid`,
      color: theme.palette.primary.dark,
      width: drawerWidth,
    },
    appTitle: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold,
    },
    navIcon: {
      color: theme.palette.primary.dark,
    },
    activePage: {
      backgroundColor: theme.palette.primary.light,
    },
  };
});
