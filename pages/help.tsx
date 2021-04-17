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
      title: configData.default.title,
      description: configData.default.description,
      subTitle: PageTitles.Help,
    },
  };
}

Help.propTypes = {
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequred,
  title: PropTypes.string.isRequired,
};
