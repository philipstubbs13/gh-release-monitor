import { makeStyles, Theme } from '@material-ui/core';
import { drawerWidth } from '../../constants';

export const useNavbarStyles = makeStyles((theme: Theme) => {
  return {
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      width: `calc(100% - ${drawerWidth}px)`,

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    apptitle: {
      flexGrow: 1,
    },
    navItem: {
      marginLeft: theme.spacing(3),
      color: theme.palette.primary.light,
    },
  };
});
