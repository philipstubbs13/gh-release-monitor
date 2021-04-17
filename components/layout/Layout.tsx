import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { Drawer } from '@components/drawer/Drawer';
import { menuItems, drawerWidth } from '../../constants';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { theme } from '../../theme/theme';
import { GlobalProvider } from '../../context/GlobalState';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: 0,
    },
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: '1 0 auto',
      padding: '1.5em 0 2em 0',
      width: '100%',
      '&:after': {
        content: '00a0',
        display: 'block',
        marginTop: '1.5em',
        height: 0,
        visibility: 'hidden',
      },
    },
    toolbar: theme.mixins.toolbar,
  };
});

export interface IProps {
  children: any;
  subTitle: String;
  title: String;
}

export const Layout = (props: IProps) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {props.subTitle} - {props.title}
        </title>
      </Head>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <div className={classes.app}>
            <Navbar menuItems={menuItems} subTitle={props.subTitle} />
            <Drawer menuItems={menuItems} drawerWidth={drawerWidth} />
            <div className={classes.content}>
              <div className={classes.toolbar}></div>
              {props.children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </GlobalProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
