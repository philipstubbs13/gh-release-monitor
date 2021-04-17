import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { MenuItem } from '../drawer/Drawer.types';
import Link from 'next/link';
import { useNavbarStyles } from './Navbar.styles';

export interface IProps {
  menuItems: MenuItem[];
  subTitle: string;
}

export const Navbar = (props: IProps) => {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography className={classes.apptitle}>{props.subTitle}</Typography>
        {props.menuItems.map((item) => (
          <Link href={item.path} key={item.text}>
            <IconButton className={classes.navItem}>{item.icon}</IconButton>
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
