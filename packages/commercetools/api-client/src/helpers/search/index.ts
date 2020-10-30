import {
  CategoryWhereSearch,
  ProductWhereSearch,
  OrderWhereSearch
} from './../../types/Api';
import { getSettings } from './../../index';

const buildProductWhere = (search: ProductWhereSearch) => {
  const { acceptLanguage } = getSettings();

  const predicates: string[] = [];

  if (search?.catId) {
    const catIds = (Array.isArray(search.catId) ? search.catId : [search.catId]).join('","');
    predicates.push(`masterData(current(categories(id in ("${catIds}"))))`);
  }

  if (search?.slug) {
    const predicate = acceptLanguage.map(locale => `${locale}="${search.slug}"`).join(' or ');
    predicates.push(`masterData(current(slug(${predicate})))`);
  }

  if (search?.id) {
    predicates.push(`id="${search.id}"`);
  }

  return predicates.join(' and ');
};

const buildCategoryWhere = (search: CategoryWhereSearch) => {
  const { acceptLanguage } = getSettings();

  if (search?.catId) {
    return `id="${search.catId}"`;
  }

  if (search?.slug) {
    const predicate = acceptLanguage.map(locale => `${locale}="${search.slug}"`).join(' or ');
    return `slug(${predicate})`;
  }

  return undefined;
};

const buildOrderWhere = (search: OrderWhereSearch): string => {
  if (search?.id) {
    return `id="${search.id}"`;
  }

  return null;
};

export {
  buildProductWhere,
  buildCategoryWhere,
  buildOrderWhere
};
