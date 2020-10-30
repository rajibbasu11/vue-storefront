import { UseProduct, Product } from '../../types';
import { useProductFactory, ProductsSearchResult } from '@vue-storefront/core';

const productsSearch = async (): Promise<ProductsSearchResult<Product>> => {
  const products = [];

  return {
    data: products,
    total: products.length
  };
};

const useProduct: (cacheId: string) => UseProduct<Product> = useProductFactory<Product, any>({
  productsSearch
});

export default useProduct;
