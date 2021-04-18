import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../constants';
import { IPageProps } from '../types';

const Favorites = (props: IPageProps) => {
  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      Favorites
    </Layout>
  );
};

export default Favorites;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.Favorites,
      title: configData.default.title,
    },
  };
}

Favorites.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
