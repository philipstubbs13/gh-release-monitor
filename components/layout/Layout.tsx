import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@components/drawer/Drawer';
import { menuItems, drawerWidth } from '../../constants';
import { Navbar } from '@components/navbar/Navbar';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
  };
});

export interface IProps {
  children: any;
  pageTitle: String;
}

export const Layout = (props: IProps) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.pageTitle}</title>
      </Head>
      <div className={classes.root}>
        <Navbar />
        <Drawer menuItems={menuItems} drawerWidth={drawerWidth} />
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
};
