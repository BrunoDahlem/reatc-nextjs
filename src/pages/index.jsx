import { loadDataPages } from '@/api/loadDataPages';
import { Home } from '@/templates/Home';
import P from 'prop-types';
import { config } from '@/config';

export default function Index({ data = {} }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  try {
    const data = (await loadDataPages(config.homePage, true))[0];
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

Index.propTypes = {
  data: P.oneOfType([P.array, P.object]),
};
