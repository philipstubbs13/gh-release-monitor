import { FavoriteOutlined, HelpOutlined, InfoOutlined } from '@material-ui/icons';

/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export const APP_TITLE = 'GitHub Release Monitor';

export enum PageTitles {
  About = 'About',
  Favorites = 'Favorites',
  Help = 'Help',
  Home = 'Home',
}

export enum PageRoutes {
  About = '/about',
  Favorites = '/favorites',
  Help = '/help',
  Home = '/',
}

export const drawerWidth = 240;

export const menuItems = [
  {
    text: 'Favorites',
    icon: <FavoriteOutlined color="secondary" />,
    path: '/favorites',
  },
  {
    text: 'About',
    icon: <InfoOutlined color="secondary" />,
    path: '/about',
  },
  {
    text: 'Help',
    icon: <HelpOutlined color="secondary" />,
    path: '/help',
  },
];
