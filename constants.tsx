import { FavoriteOutlined, InfoOutlined, HomeOutlined } from '@material-ui/icons';

/* eslint-disable no-unused-vars */
export const APP_TITLE = 'GitHub Release Monitor';
export const APP_DESCRIPTION = 'Never miss a release for your favorite GitHub repos ever again!';
export const GITHUB_API_BASE_URL = 'https://api.github.com';
export const DATE_FORMAT = 'MMM dd, Y';

export enum PageTitles {
  About = 'About',
  Favorites = 'Favorites',
  Home = 'Home',
  FourOFour = '404',
  ReleaseDetails = 'Release Details',
}

export enum PageRoutes {
  About = '/about',
  Favorites = '/favorites',
  Home = '/',
}

export const drawerWidth = 240;

export const menuItems = [
  {
    text: 'Home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    text: 'Favorites',
    icon: <FavoriteOutlined />,
    path: '/favorites',
  },
  {
    text: 'About',
    icon: <InfoOutlined />,
    path: '/about',
  },
];
