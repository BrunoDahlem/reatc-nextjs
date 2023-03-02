import { mapData } from './map-data';
import { config } from '../config';

export const loadDataPages = async (slug = '', populate = true) => {
  const cleanSlug = slug
    ? `?filters[slug][$eq]=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';
  const populateDeep = cleanSlug
    ? `&${config.populateDeep}`
    : `?${config.populateDeep}`;
  const pageUrl = `${config.urlBase}${config.api}/pages/${cleanSlug}${
    populate ? populateDeep : ''
  }`;
  const data = await fetch(pageUrl);
  const json = await data.json();
  const page = await mapData(json.data);
  return page;
};
