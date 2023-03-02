import { loadDataPages } from '@/api/loadDataPages';
import { Home } from '@/templates/Home';
import P from 'prop-types';

export default function Page({ data }) {
  return <Home data={data} />;
}

export const getStaticPaths = async () => {
  const paths = (await loadDataPages('')).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  try {
    const data = (await loadDataPages(context.params.slug))[0];
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

Page.propTypes = {
  data: P.oneOfType([P.array, P.object]),
};
