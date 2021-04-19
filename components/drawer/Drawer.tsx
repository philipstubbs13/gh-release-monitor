import PropTypes from 'prop-types';
import {
  Drawer as MUIDrawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@material-ui/core';
import { MenuItem } from './Drawer.types';
import { APP_TITLE } from '../../constants';
import Link from 'next/link';
import { useDrawerStyles } from './Drawer.styles';
import { useRouter } from 'next/router';
import clsx from 'clsx';
export interface IProps {
  menuItems: MenuItem[];
}

export const Drawer = (props: IProps) => {
  const classes = useDrawerStyles();
  const router = useRouter();

  return (
    <MUIDrawer
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant={'permanent'}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography className={classes.appTitle}>{APP_TITLE}</Typography>
      </Box>
      <List>
        {props.menuItems.map((item) => (
          <Link href={item.path} key={item.text}>
            <ListItem
              button
              className={clsx({
                [classes.activePage]: item.path === router.pathname,
              })}>
              <ListItemIcon className={classes.navIcon}>{item.icon}</ListItemIcon>
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
