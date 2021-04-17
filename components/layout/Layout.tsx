import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, ThemeProvider, Container } from '@material-ui/core';
import { Drawer } from '@components/drawer/Drawer';
import { menuItems, drawerWidth } from '../../constants';
import { Navbar } from '@components/navbar/Navbar';
import { theme } from '../../theme/theme';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: 0,
    },
    app: {
      display: 'flex',
      paddingTop: '1.5em',
    },
    content: {
      width: '100%',
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
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <Navbar menuItems={menuItems} subTitle={props.subTitle} />
          <Drawer menuItems={menuItems} drawerWidth={drawerWidth} />
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <Container maxWidth="md">{props.children}</Container>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
