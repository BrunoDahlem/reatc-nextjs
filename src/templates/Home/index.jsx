import P from 'prop-types';

import { Default } from '../Default';

import Head from 'next/head';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import { PageNotFound } from '../PageNotFound';
import { config } from '@/config';

export function Home({ data = {} }) {
  if (!data) {
    return <PageNotFound />;
  }
  const { menu, sections, footerHtml, title } = data;
  const { links, text, link, src } = menu;

  return (
    <Default
      links={links}
      logoData={{ text, link, src }}
      footerHtml={footerHtml}
    >
      <Head>
        <title>{`${config.siteName} ${title}`}</title>
      </Head>
      {sections.map((section, index) => {
        if (section.component == 'section.section-two-columns') {
          return <GridTwoColumn key={index} {...section} />;
        }
        if (section.component == 'section.section-content') {
          return <GridContent key={index} {...section} />;
        }
        if (section.component == 'section.section-grid' && section.hasText) {
          return <GridSection key={index} {...section} />;
        }
        if (section.component == 'section.section-grid' && section.hasImage) {
          return <GridImage key={index} {...section} />;
        }
      })}
    </Default>
  );
}
Home.propTypes = {
  data: P.oneOfType([P.array, P.object]),
};
