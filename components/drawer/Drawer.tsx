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

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    title: {
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
        <Typography variant="h5" className={classes.title}>
          {APP_TITLE}
        </Typography>
      </div>

      <List>
        {props.menuItems.map((item) => (
          <ListItem button key={item.text as any}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};

Drawer.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
