import PropTypes from 'prop-types';
import {
  makeStyles,
  Drawer as MUIDrawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { MenuItem } from './Drawer.types';
import { drawerWidth, APP_TITLE } from '../../constants';
import Link from 'next/link';

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.light,
      borderRight: `2px ${theme.palette.primary.dark} solid`,
      color: theme.palette.primary.dark,
      width: drawerWidth,
    },
    apptitle: {
      padding: theme.spacing(2),
    },
  };
});

export interface IProps {
  menuItems: MenuItem[];
}

export const Drawer = (props: IProps) => {
  const classes = useStyles();

  return (
    <MUIDrawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}>
      <div>
        <Typography variant="h5" className={classes.apptitle}>
          {APP_TITLE}
        </Typography>
      </div>

      <List>
        {props.menuItems.map((item) => (
          <Link href={item.path} key={item.text as any}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MUIDrawer>
  );
};

Drawer.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
