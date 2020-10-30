import {
  buildProductWhere,
  buildCategoryWhere,
  buildOrderWhere
} from './../../src/helpers/search';

describe('[commercetools-api-client] search', () => {
  it('returns undefined when parameters are not supported', () => {
    expect(buildProductWhere(null)).toBe('');
  });

  it('returns undefined string when parameters are not supported', () => {
    expect(buildCategoryWhere(null)).toBe(undefined);
  });

  it('returns undefined string when parameters are not supported', () => {
    expect(buildOrderWhere(null)).toBe(null);
  });

  describe('returns product search query by cat id', () => {
    it('single one', () => {
      expect(buildProductWhere({ catId: 'cat id' })).toBe('masterData(current(categories(id in ("cat id"))))');
    });
    it('multiple', () => {
      expect(buildProductWhere({ catId: ['cat id', 'dog id'] })).toBe('masterData(current(categories(id in ("cat id","dog id"))))');
    });
  });

  it('returns category search query by id', () => {
    expect(buildCategoryWhere({ catId: 'cat id' })).toBe('id="cat id"');
  });

  it('returns category search query by slug', () => {
    expect(buildCategoryWhere({ slug: 'cat slug' })).toBe('slug(en="cat slug" or de="cat slug")');
  });

  it('returns product search query by slug', () => {
    expect(buildProductWhere({ slug: 'product-slug' })).toBe('masterData(current(slug(en="product-slug" or de="product-slug")))');
  });

  it('returns product search query by id', () => {
    expect(buildProductWhere({ id: 'product-id' })).toBe('id="product-id"');
  });

  it('returns order search query by id', () => {
    expect(buildOrderWhere({ id: 'orderid' })).toBe('id="orderid"');
  });
});
