import { Layout } from '@components/layout/Layout';
import PropTypes from 'prop-types';
import { PageTitles } from '../constants';
import { IPageProps } from '../types';

const Favorites = (props: IPageProps) => {
  return (
    <Layout title={props.title} subTitle={props.subTitle} description={props.description}>
      Favorites
    </Layout>
  );
};

export default Favorites;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      subTitle: PageTitles.Favorites,
    },
  };
}

Favorites.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequred,
  title: PropTypes.string.isRequired,
};
