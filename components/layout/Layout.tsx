import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, Container } from '@material-ui/core';
import { Drawer } from '@components/drawer/Drawer';
import { menuItems } from '../../constants';
import { Navbar } from '@components/navbar/Navbar';
import { theme } from '../../theme/theme';
import { useLayoutStyles } from './Layout.styles';
export interface IProps {
  children: any;
  subTitle: string;
  title: string;
}

export const Layout = (props: IProps) => {
  const classes = useLayoutStyles();

  return (
    <div>
      <Head>
        <meta name={'viewport'} content={'width=device-width'} initial-scale={'1'} />
        <title>
          {props.subTitle} - {props.title}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <Navbar menuItems={menuItems} subTitle={props.subTitle} />
          <Drawer menuItems={menuItems} />
          <div className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth={'md'}>{props.children}</Container>
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
