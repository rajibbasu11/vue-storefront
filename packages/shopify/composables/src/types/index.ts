import { UseCategory, UseProduct } from '@vue-storefront/core';
import { ComputedProperty } from '@vue-storefront/core';

// TODO: replace with real types
type Product = {}

type Category = {}

type User = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  displayName?: string;
  token?: string;
  error?: string;
}
type UserAddress = {}

// TODO: replace with real Cart types
type Cart = {
  id?: string;
}
type CartItem = {}
type Coupon = {}

type Order = {
  id: string;
  createdAt: string;
  orderState: string;
  lineItems: [];
  totalPrice: {
    centAmount: number;
  };
}
type OrderItem = {}
enum OrderState {
  Confirmed = 'Confirmed',
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Open = 'Open'
}
type OrderSearchParams = {}

type ShippingMethod = {}

type WishlistProduct = {}
type Wishlist = {}

type LineItem = {
  productId: string;
  name: string;
  id: string;
  quantity: number;
}

export interface UseSearch<SEARCH_RESULTS, SEARCH_PARAMS> {
  search: (searchParams: SEARCH_PARAMS) => Promise<void>;
  searchResults: ComputedProperty<SEARCH_RESULTS>;
  loading: ComputedProperty<boolean>;
}

export interface SearchResults {
  brands: {
    id: number;
    label: string;
    value: string;
  }[];
  categories: Category[];
  products: Product[];
  suggestions: AgnosticSuggestion[];
}

export type AgnosticSuggestion = {
  value: string;
  [x: string]: any;
}

export {
  Cart,
  CartItem,
  Category,
  Coupon,
  Order,
  OrderItem,
  OrderState,
  LineItem,
  OrderSearchParams,
  Product,
  ShippingMethod,
  User,
  UserAddress,
  Wishlist,
  WishlistProduct,
  UseCategory,
  UseProduct
};
