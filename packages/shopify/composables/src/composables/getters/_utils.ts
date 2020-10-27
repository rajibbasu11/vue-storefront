import { settings } from '@vue-storefront/shopify-api';

export const createFormatPrice = (price: number) => {
  if (!price) return null;
  const { locale, currency } = settings();
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);
};
