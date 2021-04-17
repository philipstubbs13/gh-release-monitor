import { makeStyles, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { APP_TITLE, drawerWidth } from '../../constants';
import PropTypes from 'prop-types';
import { MenuItem } from '../drawer/Drawer.types';
import Link from 'next/link';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    apptitle: {
      flexGrow: 1,
    },
    navItem: {
      marginLeft: theme.spacing(3),
    },
  };
});

export interface IProps {
  menuItems: MenuItem[];
  subTitle: String;
}

export const Navbar = (props: IProps) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography className={classes.apptitle}>
          {APP_TITLE} - {props.subTitle}
        </Typography>
        {props.menuItems.map((item) => (
          <Link href={item.path} key={item.text as any}>
            <IconButton className={classes.navItem} key={item.text as any} c>
              {item.icon}
            </IconButton>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  subTitle: PropTypes.string.isRequired,
};
