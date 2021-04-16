import { makeStyles, Typography, AppBar, Toolbar, Avatar } from '@material-ui/core';
import { APP_TITLE, drawerWidth } from '../../constants';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography className={classes.title}>{APP_TITLE}</Typography>
        <Typography>Mario</Typography>
        <Avatar src="/mario-av.png" className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
};
