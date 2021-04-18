import { Layout } from '@components/layout/Layout';
import { PageTitles } from '../constants';
import PropTypes from 'prop-types';
import { IPageProps } from '../types';

const Help = (props: IPageProps) => {
  return (
    <Layout description={props.description} subTitle={props.subTitle} title={props.title}>
      Help
    </Layout>
  );
};

export default Help;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      subTitle: PageTitles.Help,
      title: configData.default.title,
    },
  };
}

Help.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
