import { FavoriteOutlined, HelpOutlined, InfoOutlined, HomeOutlined } from '@material-ui/icons';

/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export const APP_TITLE = 'GitHub Release Monitor';
export const APP_DESCRIPTION = 'Never miss a release for your favorite GitHub repos ever again!';

export enum PageTitles {
  About = 'About',
  Favorites = 'Favorites',
  Help = 'Help',
  Home = 'Home',
  FourOFour = '404',
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
    text: 'Home',
    icon: <HomeOutlined color="primary" />,
    path: '/',
  },
  {
    text: 'Favorites',
    icon: <FavoriteOutlined color="primary" />,
    path: '/favorites',
  },
  {
    text: 'About',
    icon: <InfoOutlined color="primary" />,
    path: '/about',
  },
  {
    text: 'Help',
    icon: <HelpOutlined color="primary" />,
    path: '/help',
  },
];
